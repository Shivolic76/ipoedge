import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Rate,
  Breadcrumb,
  Table,
  Tag,
  Input,
  Select
} from 'antd';
import {
  HomeOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useBrokers } from '../hooks';
import { ROUTES } from '../constants';
import { SkeletonCard, EmptyState, ResponsiveImage } from '../components/common';

const { Title, Text } = Typography;
const { Option } = Select;

const BrokersPage: React.FC = () => {
  const { brokers, loading } = useBrokers();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filter and sort brokers
  const filteredBrokers = brokers
    .filter(broker =>
      broker.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'accountOpening': {
          const aOpening = a.accountOpening === 'Free' ? 0 : Number(a.accountOpening);
          const bOpening = b.accountOpening === 'Free' ? 0 : Number(b.accountOpening);
          return aOpening - bOpening;
        }
        default:
          return 0;
      }
    });

  const tableColumns = [
    {
      title: 'Broker',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: typeof brokers[0]) => (
        <div className="flex items-center space-x-3">
          <ResponsiveImage
            src={record.logo}
            alt={record.name}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div>
            <Text strong>{text}</Text>
            <div>
              <Rate disabled defaultValue={record.rating} allowHalf className="text-xs" />
              <Text className="text-gray-500 ml-2">({record.rating})</Text>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Account Opening',
      dataIndex: 'accountOpening',
      key: 'accountOpening',
      render: (value: string | number) => (
        <Tag color={value === 'Free' ? 'green' : 'blue'}>
          {value === 'Free' ? 'Free' : `₹${value}`}
        </Tag>
      ),
    },
    {
      title: 'AMC',
      dataIndex: 'accountMaintenance',
      key: 'accountMaintenance',
      render: (value: string | number) => (
        <Text>{value === 'Free' || value === 0 ? 'Free' : `₹${value}`}</Text>
      ),
    },
    {
      title: 'Equity Delivery',
      dataIndex: 'equityDelivery',
      key: 'equityDelivery',
      render: (value: string | number) => (
        <Text>{value === 'Zero' || value === 0 ? 'Zero' : `₹${value}`}</Text>
      ),
    },
    {
      title: 'Equity Intraday',
      dataIndex: 'equityIntraday',
      key: 'equityIntraday',
      render: (value: string) => <Text>{value}</Text>,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="primary" size="small">
          Open Account
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <Link to={ROUTES.HOME}>
              <HomeOutlined /> Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Brokers</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <Title level={1} className="mb-2">Stock Brokers Comparison</Title>
          <Text className="text-gray-600">
            Compare brokerage charges, features, and services of top stock brokers in India
          </Text>
        </div>

        {/* Filters and Controls */}
        <Card className="mb-6">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12} md={8}>
              <Input
                placeholder="Search brokers..."
                prefix={<SearchOutlined />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                allowClear
              />
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Select
                placeholder="Sort by"
                style={{ width: '100%' }}
                value={sortBy}
                onChange={setSortBy}
              >
                <Option value="rating">Rating</Option>
                <Option value="name">Name</Option>
                <Option value="accountOpening">Account Opening</Option>
              </Select>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Select
                placeholder="View"
                style={{ width: '100%' }}
                value={viewMode}
                onChange={setViewMode}
              >
                <Option value="grid">Grid View</Option>
                <Option value="table">Table View</Option>
              </Select>
            </Col>
          </Row>
        </Card>

        {/* Content */}
        {loading ? (
          <Row gutter={[24, 24]}>
            {Array.from({ length: 8 }, (_, index) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={index}>
                <SkeletonCard loading={true} />
              </Col>
            ))}
          </Row>
        ) : filteredBrokers.length === 0 ? (
          <EmptyState
            title="No brokers found"
            description="Try adjusting your search criteria."
          />
        ) : viewMode === 'grid' ? (
          <Row gutter={[24, 24]}>
            {filteredBrokers.map((broker) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={broker.id}>
                <Card
                  className="card-hover h-full animate-fadeIn shadow-xl"
                  cover={
                    <div className="p-4 bg-gray-50 text-center">
                      <ResponsiveImage
                        src={broker.logo}
                        alt={broker.name}
                        className="w-16 h-16 mx-auto rounded-lg object-cover mb-3"
                      />
                      <Title level={4} className="mb-2">{broker.name}</Title>
                      <div className="flex items-center justify-center">
                        <Rate disabled defaultValue={broker.rating} allowHalf />
                        <Text className="text-gray-500 ml-2">({broker.rating})</Text>
                      </div>
                    </div>
                  }
                  actions={[
                    <Button type="primary" key="open">
                      Open Account
                    </Button>,
                    <Button type="link" key="compare">
                      Compare
                    </Button>
                  ]}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Text strong>Account Opening:</Text>
                      <Tag color={broker.accountOpening === 'Free' ? 'green' : 'blue'}>
                        {broker.accountOpening === 'Free' ? 'Free' : `₹${broker.accountOpening}`}
                      </Tag>
                    </div>

                    <div className="flex justify-between">
                      <Text strong>AMC:</Text>
                      <Text>
                        {broker.accountMaintenance === 'Free' || broker.accountMaintenance === 0
                          ? 'Free'
                          : `₹${broker.accountMaintenance}`}
                      </Text>
                    </div>

                    <div className="flex justify-between">
                      <Text strong>Equity Delivery:</Text>
                      <Text className="font-medium text-green-600">
                        {broker.equityDelivery === 'Zero' || broker.equityDelivery === 0
                          ? 'Zero'
                          : `₹${broker.equityDelivery}`}
                      </Text>
                    </div>

                    <div className="flex justify-between">
                      <Text strong>Equity Intraday:</Text>
                      <Text>{broker.equityIntraday}</Text>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <Text className="text-gray-600 text-sm">
                        Services: {broker.services.slice(0, 3).join(', ')}
                        {broker.services.length > 3 && '...'}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card>
            <Table
              dataSource={filteredBrokers}
              columns={tableColumns}
              rowKey="id"
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} brokers`
              }}
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default BrokersPage;
