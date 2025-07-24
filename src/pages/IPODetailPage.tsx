import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space,
  Tag,
  Descriptions,
  Progress,
  Breadcrumb,
  Alert,
  Statistic
} from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  BankOutlined,
  TrophyOutlined,
  FileTextOutlined,
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons';
import { useIPO } from '../hooks';
import { Loading } from '../components/common';
import { ROUTES } from '../constants';
import { formatDate } from '../utils';
import { favoriteIPOsStorage } from '../services/storage';

const { Title, Text, Paragraph } = Typography;

const IPODetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ipo, loading, error } = useIPO(id || '');
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    if (id) {
      setIsFavorite(favoriteIPOsStorage.isFavorite(id));
    }
  }, [id]);

  const handleFavoriteToggle = () => {
    if (id) {
      const newFavoriteStatus = favoriteIPOsStorage.toggle(id);
      setIsFavorite(newFavoriteStatus);
    }
  };

  if (loading) {
    return <Loading fullScreen text="Loading IPO details..." />;
  }

  if (error || !ipo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Alert
          message="IPO Not Found"
          description={error || "The requested IPO could not be found."}
          type="error"
          showIcon
          action={
            <Link to={ROUTES.IPO}>
              <Button type="primary">Back to IPOs</Button>
            </Link>
          }
        />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'green';
      case 'upcoming': return 'blue';
      case 'listed': return 'purple';
      case 'closed': return 'orange';
      default: return 'default';
    }
  };

  const getOfferPriceText = () => {
    if (typeof ipo.offerPrice === 'number') {
      return `₹${ipo.offerPrice.toLocaleString()}`;
    }
    return `₹${ipo.offerPrice.min.toLocaleString()} - ₹${ipo.offerPrice.max.toLocaleString()}`;
  };

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
          <Breadcrumb.Item>
            <Link to={ROUTES.IPO}>IPO</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{ipo.name}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Header Section */}
        <Card className="mb-6">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={4}>
              <img
                src={ipo.logo}
                alt={ipo.name}
                className="w-20 h-20 rounded-lg object-cover mx-auto md:mx-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/api/placeholder/80/80';
                }}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={2} className="mb-2">{ipo.name}</Title>
              <Space size="middle" wrap>
                <Tag color={getStatusColor(ipo.status)} className="text-sm">
                  {ipo.status.charAt(0).toUpperCase() + ipo.status.slice(1)}
                </Tag>
                <Tag color="blue">{ipo.exchange}</Tag>
                <Tag color="purple">{ipo.category.toUpperCase()}</Tag>
                {ipo.sector && <Tag>{ipo.sector}</Tag>}
              </Space>
              <div className="mt-3">
                <Text className="text-gray-600">
                  <CalendarOutlined className="mr-1" />
                  {formatDate(ipo.offerDate.start)} - {formatDate(ipo.offerDate.end)}
                </Text>
              </div>
            </Col>
            <Col xs={24} md={8} className="text-right">
              <Space direction="vertical" size="middle" className="w-full">
                <div>
                  <Text strong className="text-lg">Offer Price</Text>
                  <div className="text-2xl font-bold text-blue-600">
                    {getOfferPriceText()}
                  </div>
                </div>
                <Space>
                  <Button
                    icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                    onClick={handleFavoriteToggle}
                    type={isFavorite ? "primary" : "default"}
                  >
                    {isFavorite ? 'Favorited' : 'Add to Favorites'}
                  </Button>
                  <Button icon={<ShareAltOutlined />}>Share</Button>
                  {ipo.status === 'current' && (
                    <Button type="primary" size="large">
                      Apply Now
                    </Button>
                  )}
                </Space>
              </Space>
            </Col>
          </Row>
        </Card>

        <Row gutter={[24, 24]}>
          {/* Left Column */}
          <Col xs={24} lg={16}>
            {/* Key Details */}
            <Card title="Key Details" className="mb-6">
              <Descriptions column={{ xs: 1, sm: 2 }} bordered>
                <Descriptions.Item label="Issue Size">{ipo.issueSize}</Descriptions.Item>
                <Descriptions.Item label="Lot Size">{ipo.lotSize.toLocaleString()} shares</Descriptions.Item>
                <Descriptions.Item label="Exchange">{ipo.exchange}</Descriptions.Item>
                <Descriptions.Item label="Category">{ipo.category.toUpperCase()}</Descriptions.Item>
                {ipo.sector && (
                  <Descriptions.Item label="Sector">{ipo.sector}</Descriptions.Item>
                )}
                {ipo.registrar && (
                  <Descriptions.Item label="Registrar">{ipo.registrar}</Descriptions.Item>
                )}
                {ipo.leadManagers && ipo.leadManagers.length > 0 && (
                  <Descriptions.Item label="Lead Managers" span={2}>
                    {ipo.leadManagers.join(', ')}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Card>

            {/* Subscription Status */}
            {ipo.subscription && (
              <Card title="Subscription Status" className="mb-6">
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={6}>
                    <Statistic
                      title="Overall"
                      value={ipo.subscription.times}
                      suffix="x"
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Col>
                  {ipo.subscription.retail && (
                    <Col xs={24} sm={6}>
                      <Statistic
                        title="Retail"
                        value={ipo.subscription.retail}
                        suffix="x"
                        valueStyle={{ color: '#1890ff' }}
                      />
                    </Col>
                  )}
                  {ipo.subscription.hni && (
                    <Col xs={24} sm={6}>
                      <Statistic
                        title="HNI"
                        value={ipo.subscription.hni}
                        suffix="x"
                        valueStyle={{ color: '#722ed1' }}
                      />
                    </Col>
                  )}
                  {ipo.subscription.qib && (
                    <Col xs={24} sm={6}>
                      <Statistic
                        title="QIB"
                        value={ipo.subscription.qib}
                        suffix="x"
                        valueStyle={{ color: '#fa8c16' }}
                      />
                    </Col>
                  )}
                </Row>
              </Card>
            )}

            {/* Company Description */}
            {ipo.companyDescription && (
              <Card title="About the Company" className="mb-6">
                <Paragraph>{ipo.companyDescription}</Paragraph>
              </Card>
            )}
          </Col>

          {/* Right Column */}
          <Col xs={24} lg={8}>
            {/* GMP Card */}
            {ipo.gmp && (
              <Card title="Grey Market Premium (GMP)" className="mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹{ipo.gmp.premium}
                  </div>
                  <div className="text-lg text-green-600 mb-4">
                    {ipo.gmp.percentage}% Premium
                  </div>
                  <Progress
                    percent={Math.min(ipo.gmp.percentage, 100)}
                    strokeColor="#52c41a"
                    showInfo={false}
                  />
                  <Text className="text-gray-500 text-sm mt-2 block">
                    Expected listing gains based on grey market
                  </Text>
                </div>
              </Card>
            )}

            {/* Quick Actions */}
            <Card title="Quick Actions" className="mb-6">
              <Space direction="vertical" className="w-full">
                <Button block icon={<FileTextOutlined />}>
                  Download Prospectus
                </Button>
                <Button block icon={<BankOutlined />}>
                  Check Allotment Status
                </Button>
                <Button block icon={<TrophyOutlined />}>
                  View Similar IPOs
                </Button>
              </Space>
            </Card>

            {/* Important Dates */}
            <Card title="Important Dates">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Text>Issue Opens:</Text>
                  <Text strong>{formatDate(ipo.offerDate.start)}</Text>
                </div>
                <div className="flex justify-between">
                  <Text>Issue Closes:</Text>
                  <Text strong>{formatDate(ipo.offerDate.end)}</Text>
                </div>
                {ipo.listingDate && (
                  <div className="flex justify-between">
                    <Text>Listing Date:</Text>
                    <Text strong>{formatDate(ipo.listingDate)}</Text>
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IPODetailPage;
