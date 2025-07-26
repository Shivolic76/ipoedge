import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Rate,
  Breadcrumb,
  Tag,
  Divider,
  Descriptions,
  Table,
  Tabs,
  List,
  Space,
  Statistic,
  Alert,
  Badge,
  Avatar
} from 'antd';
import {
  HomeOutlined,
  BankOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  StarOutlined,
  UserOutlined,
  TrophyOutlined,
  DesktopOutlined,
  PhoneOutlined,
  CrownOutlined,
  FireOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  LineChartOutlined,
  WalletOutlined,
  PercentageOutlined
} from '@ant-design/icons';
import { ROUTES } from '../constants';
import { getBrokerById } from '../utils/brokerUtils';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const BrokerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const broker = getBrokerById(id || '');

  if (!broker) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Title level={3}>Broker not found</Title>
        <Link to={ROUTES.BROKERS}>
          <Button type="primary">Back to Brokers</Button>
        </Link>
      </div>
    );
  }

  const brokerageColumns = [
    {
      title: 'Segment',
      dataIndex: 'segment',
      key: 'segment',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Charges',
      dataIndex: 'charges',
      key: 'charges',
      render: (text: string) => (
        <Tag color={text === 'Zero' || text === 'Free' ? 'green' : 'blue'}>
          {text}
        </Tag>
      )
    }
  ];

  const brokerageData = [
    { key: '1', segment: 'Equity Delivery', charges: broker.brokerage?.equityDelivery || broker.equityDelivery || 'N/A' },
    { key: '2', segment: 'Equity Intraday', charges: broker.brokerage?.equityIntraday || broker.equityIntraday || 'N/A' },
    { key: '3', segment: 'Equity Futures', charges: broker.brokerage?.equityFutures || 'N/A' },
    { key: '4', segment: 'Equity Options', charges: broker.brokerage?.equityOptions || 'N/A' },
    { key: '5', segment: 'Currency Futures', charges: broker.brokerage?.currencyFutures || 'N/A' },
    { key: '6', segment: 'Currency Options', charges: broker.brokerage?.currencyOptions || 'N/A' },
    { key: '7', segment: 'Commodity Futures', charges: broker.brokerage?.commodityFutures || 'N/A' },
    { key: '8', segment: 'Commodity Options', charges: broker.brokerage?.commodityOptions || 'N/A' }
  ];

  const marginData = broker.margins ? [
    { key: '1', segment: 'Equity Delivery', margin: broker.margins.equityDelivery },
    { key: '2', segment: 'Equity Intraday', margin: broker.margins.equityIntraday },
    { key: '3', segment: 'Equity Futures', margin: broker.margins.equityFutures },
    { key: '4', segment: 'Equity Options', margin: broker.margins.equityOptions },
    { key: '5', segment: 'Currency Futures', margin: broker.margins.currencyFutures },
    { key: '6', segment: 'Currency Options', margin: broker.margins.currencyOptions },
    { key: '7', segment: 'Commodity Futures', margin: broker.margins.commodityFutures },
    { key: '8', segment: 'Commodity Options', margin: broker.margins.commodityOptions }
  ] : [];

  const marginColumns = [
    {
      title: 'Segment',
      dataIndex: 'segment',
      key: 'segment',
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Margin',
      dataIndex: 'margin',
      key: 'margin',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    }
  ];



  return (
    <div style={{ padding: '24px', background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <Breadcrumb style={{ marginBottom: '24px' }}>
        <Breadcrumb.Item>
          <Link to={ROUTES.HOME}>
            <HomeOutlined /> Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={ROUTES.BROKERS}>Brokers</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{broker.name}</Breadcrumb.Item>
      </Breadcrumb>

      {/* Header Section */}
      <Card
        style={{
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '12px'
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} sm={6} md={4}>
            <div style={{ textAlign: 'center' }}>
              <Avatar
                src={broker.logo}
                alt={broker.name}
                size={100}
                style={{
                  backgroundColor: '#fff',
                  padding: '8px',
                  border: '3px solid rgba(255,255,255,0.3)'
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={18} md={14}>
            <Title level={2} style={{ margin: 0, marginBottom: '8px', color: '#fff' }}>
              {broker.name}
              {broker.type === 'Discount Broker' && (
                <Badge
                  count="Discount"
                  style={{
                    backgroundColor: '#52c41a',
                    marginLeft: '12px',
                    fontSize: '12px'
                  }}
                />
              )}
              {broker.type === 'Full Service Broker' && (
                <Badge
                  count="Full Service"
                  style={{
                    backgroundColor: '#1890ff',
                    marginLeft: '12px',
                    fontSize: '12px'
                  }}
                />
              )}
            </Title>
            <Text style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
              {broker.type || 'Stockbroker'}
            </Text>
            {broker.activeClients && (
              <div style={{ marginTop: '12px' }}>
                <UserOutlined style={{ marginRight: '8px', color: '#fff' }} />
                <Text strong style={{ color: '#fff' }}>{broker.activeClients}</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', marginLeft: '4px' }}>Active Clients</Text>
              </div>
            )}
          </Col>
          <Col xs={24} sm={24} md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <Statistic
                  title={<span style={{ color: 'rgba(255,255,255,0.8)' }}>Rating</span>}
                  value={broker.rating}
                  precision={1}
                  valueStyle={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}
                  prefix={<StarOutlined style={{ color: '#ffd700' }} />}
                  suffix={<span style={{ color: 'rgba(255,255,255,0.8)' }}>/ 5</span>}
                />
                <Rate disabled value={broker.rating} style={{ fontSize: '16px', marginTop: '8px' }} />
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Quick Stats */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={12} sm={6}>
          <Card
            hoverable
            style={{
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Statistic
              title={
                <span style={{ color: '#666', fontSize: '14px' }}>
                  <WalletOutlined style={{ marginRight: '6px' }} />
                  Account Opening
                </span>
              }
              value={broker.accountOpening}
              valueStyle={{
                color: broker.accountOpening === 'Free' || broker.accountOpening === 0 ? '#52c41a' : '#1890ff',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card
            hoverable
            style={{
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Statistic
              title={
                <span style={{ color: '#666', fontSize: '14px' }}>
                  <BankOutlined style={{ marginRight: '6px' }} />
                  Annual Maintenance
                </span>
              }
              value={broker.accountMaintenance}
              valueStyle={{
                color: broker.accountMaintenance === 'Free' || broker.accountMaintenance === 0 ? '#52c41a' : '#1890ff',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card
            hoverable
            style={{
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Statistic
              title={
                <span style={{ color: '#666', fontSize: '14px' }}>
                  <PhoneOutlined style={{ marginRight: '6px' }} />
                  Call & Trade
                </span>
              }
              value={broker.callTrade || 'N/A'}
              valueStyle={{
                color: broker.callTrade === 'Free' || broker.callTrade === 0 ? '#52c41a' : '#1890ff',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card
            hoverable
            style={{
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Statistic
              title={
                <span style={{ color: '#666', fontSize: '14px' }}>
                  <TrophyOutlined style={{ marginRight: '6px' }} />
                  Trading Segments
                </span>
              }
              value={broker.services.length}
              valueStyle={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}
              suffix={<span style={{ fontSize: '14px', color: '#666' }}>segments</span>}
            />
          </Card>
        </Col>
      </Row>

      {/* Main Content Tabs */}
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Tabs
          defaultActiveKey="overview"
          size="large"
          style={{ minHeight: '500px' }}
          tabBarStyle={{
            borderBottom: '2px solid #f0f0f0',
            marginBottom: '24px'
          }}
        >
          <TabPane tab="Overview" key="overview">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                {broker.about && (
                  <>
                    <Title level={4}>About {broker.name}</Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {broker.about}
                    </Paragraph>
                    <Divider />
                  </>
                )}
                
                <Title level={4}>
                  <TrophyOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                  Services Offered
                </Title>
                <Space wrap style={{ marginBottom: '24px' }}>
                  {broker.services.map((service, index) => (
                    <Tag
                      key={index}
                      color="blue"
                      style={{
                        padding: '6px 16px',
                        fontSize: '14px',
                        borderRadius: '20px',
                        fontWeight: '500'
                      }}
                    >
                      {service}
                    </Tag>
                  ))}
                </Space>

                <Title level={4}>
                  <StarOutlined style={{ marginRight: '8px', color: '#faad14' }} />
                  Key Features
                </Title>
                <List
                  dataSource={broker.features}
                  renderItem={(feature) => (
                    <List.Item style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                      <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '12px', fontSize: '16px' }} />
                      <Text style={{ fontSize: '15px' }}>{feature}</Text>
                    </List.Item>
                  )}
                />
              </Col>
              
              <Col xs={24} lg={8}>
                <Card title="Quick Info" size="small">
                  <Descriptions column={1} size="small">
                    <Descriptions.Item label="Broker Type">
                      <Tag color={broker.type === 'Discount Broker' ? 'green' : 'blue'}>
                        {broker.type || 'Stockbroker'}
                      </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Account Opening">
                      <Text strong style={{ color: broker.accountOpening === 'Free' ? '#52c41a' : '#1890ff' }}>
                        {broker.accountOpening}
                      </Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="AMC">
                      <Text strong style={{ color: broker.accountMaintenance === 'Free' || broker.accountMaintenance === 0 ? '#52c41a' : '#1890ff' }}>
                        {broker.accountMaintenance}
                      </Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Rating">
                      <Rate disabled value={broker.rating} style={{ fontSize: '14px' }} />
                    </Descriptions.Item>
                  </Descriptions>
                </Card>

                {broker.platforms && broker.platforms.length > 0 && (
                  <Card title="Trading Platforms" size="small" style={{ marginTop: '16px' }}>
                    <List
                      size="small"
                      dataSource={broker.platforms}
                      renderItem={(platform) => (
                        <List.Item>
                          <DesktopOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                          {platform}
                        </List.Item>
                      )}
                    />
                  </Card>
                )}
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Brokerage & Charges" key="charges">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Title level={4}>Brokerage Charges</Title>
                <Table
                  dataSource={brokerageData}
                  columns={brokerageColumns}
                  pagination={false}
                  size="middle"
                />
              </Col>
              {broker.margins && (
                <Col xs={24} lg={12}>
                  <Title level={4}>Margin Information</Title>
                  <Table
                    dataSource={marginData}
                    columns={marginColumns}
                    pagination={false}
                    size="middle"
                  />
                </Col>
              )}
            </Row>
          </TabPane>

          {(broker.pros || broker.cons) && (
            <TabPane tab="Pros & Cons" key="proscons">
              <Row gutter={[24, 24]}>
                {broker.pros && broker.pros.length > 0 && (
                  <Col xs={24} lg={12}>
                    <Card
                      title={
                        <span style={{ color: '#52c41a' }}>
                          <CheckCircleOutlined style={{ marginRight: '8px' }} />
                          Advantages
                        </span>
                      }
                      style={{ height: '100%' }}
                    >
                      <List
                        dataSource={broker.pros}
                        renderItem={(pro) => (
                          <List.Item>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                            <Text>{pro}</Text>
                          </List.Item>
                        )}
                      />
                    </Card>
                  </Col>
                )}

                {broker.cons && broker.cons.length > 0 && (
                  <Col xs={24} lg={12}>
                    <Card
                      title={
                        <span style={{ color: '#f5222d' }}>
                          <CloseCircleOutlined style={{ marginRight: '8px' }} />
                          Disadvantages
                        </span>
                      }
                      style={{ height: '100%' }}
                    >
                      <List
                        dataSource={broker.cons}
                        renderItem={(con) => (
                          <List.Item>
                            <CloseCircleOutlined style={{ color: '#f5222d', marginRight: '8px' }} />
                            <Text>{con}</Text>
                          </List.Item>
                        )}
                      />
                    </Card>
                  </Col>
                )}
              </Row>
            </TabPane>
          )}

          {broker.charges && (
            <TabPane tab="Detailed Charges" key="detailedcharges">
              <Alert
                message="Detailed Charges Breakdown"
                description="Complete breakdown of all charges including transaction charges, GST, STT, and SEBI charges for different trading segments."
                type="info"
                showIcon
                style={{ marginBottom: '24px' }}
              />

              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Card
                    title={
                      <span>
                        <LineChartOutlined style={{ marginRight: '8px', color: '#52c41a' }} />
                        Delivery Trading Charges
                      </span>
                    }
                    size="small"
                  >
                    <Descriptions column={1} size="small" bordered>
                      <Descriptions.Item label="Transaction Charges (BSE)">
                        {broker.charges.delivery.transactionCharges.BSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Transaction Charges (NSE)">
                        {broker.charges.delivery.transactionCharges.NSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="DP Charges">
                        {broker.charges.delivery.dpCharges || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="GST">
                        {broker.charges.delivery.gst}
                      </Descriptions.Item>
                      <Descriptions.Item label="STT">
                        {broker.charges.delivery.stt}
                      </Descriptions.Item>
                      <Descriptions.Item label="SEBI Charges">
                        {broker.charges.delivery.sebiCharges}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card
                    title={
                      <span>
                        <ThunderboltOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                        Intraday Trading Charges
                      </span>
                    }
                    size="small"
                  >
                    <Descriptions column={1} size="small" bordered>
                      <Descriptions.Item label="Transaction Charges (BSE)">
                        {broker.charges.intraday.transactionCharges.BSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Transaction Charges (NSE)">
                        {broker.charges.intraday.transactionCharges.NSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="DP Charges">
                        {broker.charges.intraday.dpCharge || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="GST">
                        {broker.charges.intraday.gst}
                      </Descriptions.Item>
                      <Descriptions.Item label="STT">
                        {broker.charges.intraday.stt}
                      </Descriptions.Item>
                      <Descriptions.Item label="SEBI Charges">
                        {broker.charges.intraday.sebiCharges}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card
                    title={
                      <span>
                        <FireOutlined style={{ marginRight: '8px', color: '#fa8c16' }} />
                        Futures Trading Charges
                      </span>
                    }
                    size="small"
                  >
                    <Descriptions column={1} size="small" bordered>
                      <Descriptions.Item label="Transaction Charges (BSE)">
                        {broker.charges.futures.transactionCharges.BSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Transaction Charges (NSE)">
                        {broker.charges.futures.transactionCharges.NSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Clearing Charges">
                        {typeof broker.charges.futures.clearingCharges === 'object'
                          ? (broker.charges.futures.clearingCharges.NSE || broker.charges.futures.clearingCharges.BSE || 'N/A')
                          : broker.charges.futures.clearingCharges || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="GST">
                        {broker.charges.futures.gst}
                      </Descriptions.Item>
                      <Descriptions.Item label="STT">
                        {broker.charges.futures.stt}
                      </Descriptions.Item>
                      <Descriptions.Item label="SEBI Charges">
                        {broker.charges.futures.sebiCharges}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card
                    title={
                      <span>
                        <PercentageOutlined style={{ marginRight: '8px', color: '#722ed1' }} />
                        Options Trading Charges
                      </span>
                    }
                    size="small"
                  >
                    <Descriptions column={1} size="small" bordered>
                      <Descriptions.Item label="Transaction Charges (BSE)">
                        {broker.charges.options.transactionCharges.BSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Transaction Charges (NSE)">
                        {broker.charges.options.transactionCharges.NSE || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="Clearing Charges">
                        {typeof broker.charges.options.clearingCharges === 'object'
                          ? (broker.charges.options.clearingCharges.NSE || broker.charges.options.clearingCharges.BSE || 'N/A')
                          : broker.charges.options.clearingCharges || 'N/A'}
                      </Descriptions.Item>
                      <Descriptions.Item label="GST">
                        {broker.charges.options.gst}
                      </Descriptions.Item>
                      <Descriptions.Item label="STT">
                        {broker.charges.options.stt}
                      </Descriptions.Item>
                      <Descriptions.Item label="SEBI Charges">
                        {broker.charges.options.sebiCharges}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          )}

          {broker.additionalFeatures && (
            <TabPane tab="Features & Services" key="features">
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Title level={4}>Additional Features</Title>
                  <List
                    dataSource={Object.entries(broker.additionalFeatures)}
                    renderItem={([feature, available]) => (
                      <List.Item>
                        {available ? (
                          <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                        ) : (
                          <CloseCircleOutlined style={{ color: '#f5222d', marginRight: '8px' }} />
                        )}
                        <Text style={{ color: available ? '#000' : '#999' }}>
                          {feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Col>

                {broker.otherInvestments && broker.otherInvestments.length > 0 && (
                  <Col xs={24} lg={12}>
                    <Title level={4}>Other Investment Options</Title>
                    <Space wrap>
                      {broker.otherInvestments.map((investment, index) => (
                        <Tag key={index} color="purple" style={{ padding: '4px 12px', fontSize: '14px' }}>
                          {investment.charAt(0).toUpperCase() + investment.slice(1)}
                        </Tag>
                      ))}
                    </Space>
                  </Col>
                )}
              </Row>
            </TabPane>
          )}
        </Tabs>
      </Card>

      {/* Action Buttons */}
      <Row gutter={[16, 16]} style={{ marginTop: '32px' }}>
        <Col xs={24} sm={12}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <Title level={4} style={{ color: '#fff', margin: '0 0 16px 0' }}>
              Ready to Start Trading?
            </Title>
            <Button
              type="primary"
              size="large"
              style={{
                minWidth: '200px',
                height: '48px',
                fontSize: '16px',
                fontWeight: 'bold',
                background: '#fff',
                color: '#667eea',
                border: 'none',
                borderRadius: '8px'
              }}
              icon={<CrownOutlined />}
            >
              Open Account with {broker.name}
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              border: 'none',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <Title level={4} style={{ color: '#fff', margin: '0 0 16px 0' }}>
              Need More Information?
            </Title>
            <Space>
              <Button
                size="large"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px'
                }}
                icon={<GlobalOutlined />}
              >
                Visit Website
              </Button>
              <Button
                size="large"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px'
                }}
                icon={<PhoneOutlined />}
              >
                Contact Support
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BrokerDetailPage;
