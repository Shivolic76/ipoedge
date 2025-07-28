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
  Divider,
  Badge
} from 'antd';
import {
  HomeOutlined,
  CalendarOutlined,
  BankOutlined,
  TrophyOutlined,
  FileTextOutlined,
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled,
  BuildOutlined,
  RiseOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  SafetyOutlined,
  LineChartOutlined,
  PercentageOutlined,
  ShoppingOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { useIPO } from '../hooks';
import { Loading, ResponsiveImage } from '../components/common';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current': return <CheckCircleOutlined />;
      case 'upcoming': return <ClockCircleOutlined />;
      case 'listed': return <RiseOutlined />;
      case 'closed': return <ExclamationCircleOutlined />;
      default: return <InfoCircleOutlined />;
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
        <Card className="mb-6 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={4}>
              <div className="relative">
                <ResponsiveImage
                  src={ipo.logo || "https://media.ipoji.com/ipo/images/ipo.png"}
                  alt={ipo.name}
                  className="w-24 h-24 rounded-xl object-cover mx-auto md:mx-0 transition-all duration-300 hover:shadow-lg border-2 border-white shadow-md"
                  fallbackSrc="https://media.ipoji.com/ipo/images/ipo.png"
                />
                <Badge
                  count={ipo.category === 'mainboard' ? 'MB' : 'SME'}
                  style={{ backgroundColor: ipo.category === 'mainboard' ? '#52c41a' : '#1890ff' }}
                  className="absolute -top-2 -right-2"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Title level={2} className="mb-3 text-gray-800">{ipo.name}</Title>
              <Space size="middle" wrap className="mb-4">
                <Tag
                  color={getStatusColor(ipo.status)}
                  className="px-3 py-1 rounded-full font-medium text-sm"
                  icon={getStatusIcon(ipo.status)}
                >
                  {ipo.status.charAt(0).toUpperCase() + ipo.status.slice(1)}
                </Tag>
                <Tag color="blue" className="px-3 py-1 rounded-full">
                  <GlobalOutlined className="mr-1" />
                  {ipo.exchange}
                </Tag>
                <Tag color="purple" className="px-3 py-1 rounded-full">
                  {ipo.category.toUpperCase()}
                </Tag>
                {ipo.sector && (
                  <Tag color="cyan" className="px-3 py-1 rounded-full">
                    <BuildOutlined className="mr-1" />
                    {ipo.sector}
                  </Tag>
                )}
              </Space>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                  <DollarOutlined className="mr-2 text-green-600" />
                  <span className="font-semibold text-gray-700">Issue Size: </span>
                  <span className="text-green-600 font-bold ml-1">{ipo.issueSize}</span>
                </div>
                {ipo.listingPrice && (
                  <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <LineChartOutlined className="mr-2 text-blue-600" />
                    <span className="font-semibold text-gray-700">Listed at: </span>
                    <span className="text-blue-600 font-bold ml-1">₹{ipo.listingPrice}</span>
                  </div>
                )}
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                  <CalendarOutlined className="mr-2 text-purple-600" />
                  <span className="font-semibold text-gray-700">
                    {formatDate(ipo.offerDate.start)} - {formatDate(ipo.offerDate.end)}
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8} className="text-right">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="mb-4">
                  <Text strong className="text-lg text-gray-600">Offer Price</Text>
                  <div className="text-3xl font-bold text-blue-600 mt-1">
                    {getOfferPriceText()}
                  </div>
                </div>
                <Space direction="vertical" className="w-full" size="middle">
                  <Button
                    icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
                    onClick={handleFavoriteToggle}
                    type={isFavorite ? "primary" : "default"}
                    size="large"
                    className="w-full rounded-lg"
                  >
                    {isFavorite ? 'Favorited' : 'Add to Favorites'}
                  </Button>
                  <Space className="w-full">
                    <Button icon={<ShareAltOutlined />} className="flex-1 rounded-lg">Share</Button>
                    {ipo.status === 'current' && (
                      <Button type="primary" className="flex-1 rounded-lg">
                        Apply Now
                      </Button>
                    )}
                  </Space>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>

        <Row gutter={[24, 24]}>
          {/* Left Column */}
          <Col xs={24} lg={16}>
            {/* Key Details */}
            <Card
              title={
                <div className="flex items-center">
                  <InfoCircleOutlined className="mr-2 text-blue-600" />
                  <span className="text-lg font-semibold">Key Details</span>
                </div>
              }
              className="mb-6 shadow-md border-0"
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <DollarOutlined className="text-green-600 mr-2" />
                      <Text strong className="text-gray-700">Issue Size</Text>
                    </div>
                    <div className="text-xl font-bold text-green-600">{ipo.issueSize}</div>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-2">
                      <ShoppingOutlined className="text-blue-600 mr-2" />
                      <Text strong className="text-gray-700">Lot Size</Text>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{ipo.lotSize.toLocaleString()} shares</div>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-2">
                      <GlobalOutlined className="text-purple-600 mr-2" />
                      <Text strong className="text-gray-700">Exchange</Text>
                    </div>
                    <div className="text-xl font-bold text-purple-600">{ipo.exchange}</div>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center mb-2">
                      <BuildOutlined className="text-orange-600 mr-2" />
                      <Text strong className="text-gray-700">Category</Text>
                    </div>
                    <div className="text-xl font-bold text-orange-600">{ipo.category.toUpperCase()}</div>
                  </div>
                </Col>
              </Row>

              {(ipo.sector || ipo.registrar || (ipo.leadManagers && ipo.leadManagers.length > 0)) && (
                <>
                  <Divider />
                  <Descriptions column={{ xs: 1, sm: 2 }} bordered size="small">
                    {ipo.sector && (
                      <Descriptions.Item label={<><BuildOutlined className="mr-1" />Sector</>}>
                        {ipo.sector}
                      </Descriptions.Item>
                    )}
                    {ipo.registrar && (
                      <Descriptions.Item label={<><SafetyOutlined className="mr-1" />Registrar</>}>
                        {ipo.registrar}
                      </Descriptions.Item>
                    )}
                    {ipo.leadManagers && ipo.leadManagers.length > 0 && (
                      <Descriptions.Item label={<><TeamOutlined className="mr-1" />Lead Managers</>} span={2}>
                        <div className="flex flex-wrap gap-1">
                          {ipo.leadManagers.map((manager, index) => (
                            <Tag key={index} color="blue" className="mb-1">
                              {manager}
                            </Tag>
                          ))}
                        </div>
                      </Descriptions.Item>
                    )}
                  </Descriptions>
                </>
              )}
            </Card>

            {/* Subscription Status */}
            {ipo.subscription && (
              <Card
                title={
                  <div className="flex items-center">
                    <LineChartOutlined className="mr-2 text-green-600" />
                    <span className="text-lg font-semibold">Subscription Status</span>
                    <Badge
                      count={`${ipo.subscription.times}x`}
                      style={{ backgroundColor: '#52c41a' }}
                      className="ml-3"
                    />
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={6}>
                    <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        {ipo.subscription.times}x
                      </div>
                      <div className="text-sm font-medium text-green-700">Overall</div>
                      <Progress
                        percent={Math.min(ipo.subscription.times * 20, 100)}
                        strokeColor="#52c41a"
                        showInfo={false}
                        size="small"
                        className="mt-2"
                      />
                    </div>
                  </Col>
                  {ipo.subscription.retail !== undefined && (
                    <Col xs={24} sm={6}>
                      <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-xl border border-blue-200">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {ipo.subscription.retail}x
                        </div>
                        <div className="text-sm font-medium text-blue-700">Retail</div>
                        <Progress
                          percent={Math.min(ipo.subscription.retail * 20, 100)}
                          strokeColor="#1890ff"
                          showInfo={false}
                          size="small"
                          className="mt-2"
                        />
                      </div>
                    </Col>
                  )}
                  {ipo.subscription.hni !== undefined && (
                    <Col xs={24} sm={6}>
                      <div className="text-center bg-gradient-to-br from-purple-50 to-violet-100 p-4 rounded-xl border border-purple-200">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          {ipo.subscription.hni}x
                        </div>
                        <div className="text-sm font-medium text-purple-700">HNI</div>
                        <Progress
                          percent={Math.min(ipo.subscription.hni * 20, 100)}
                          strokeColor="#722ed1"
                          showInfo={false}
                          size="small"
                          className="mt-2"
                        />
                      </div>
                    </Col>
                  )}
                  {ipo.subscription.qib !== undefined && (
                    <Col xs={24} sm={6}>
                      <div className="text-center bg-gradient-to-br from-orange-50 to-amber-100 p-4 rounded-xl border border-orange-200">
                        <div className="text-3xl font-bold text-orange-600 mb-1">
                          {ipo.subscription.qib}x
                        </div>
                        <div className="text-sm font-medium text-orange-700">QIB</div>
                        <Progress
                          percent={Math.min(ipo.subscription.qib * 20, 100)}
                          strokeColor="#fa8c16"
                          showInfo={false}
                          size="small"
                          className="mt-2"
                        />
                      </div>
                    </Col>
                  )}
                </Row>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <Text className="text-sm text-gray-600">
                    <InfoCircleOutlined className="mr-1" />
                    Subscription data shows investor demand. Higher numbers indicate stronger interest.
                  </Text>
                </div>
              </Card>
            )}

            {/* Company Description */}
            {ipo.companyDescription && (
              <Card
                title={
                  <div className="flex items-center">
                    <BuildOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">About the Company</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <Paragraph className="text-gray-700 leading-relaxed mb-0">
                    {ipo.companyDescription}
                  </Paragraph>
                </div>
              </Card>
            )}

            {/* Price Analysis */}
            <Card
              title={
                <div className="flex items-center">
                  <PercentageOutlined className="mr-2 text-green-600" />
                  <span className="text-lg font-semibold">Price Analysis</span>
                </div>
              }
              className="mb-6 shadow-md border-0"
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                  <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {getOfferPriceText()}
                    </div>
                    <div className="text-sm font-medium text-blue-700">Offer Price Range</div>
                  </div>
                </Col>
                {ipo.faceValue && (
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-orange-50 to-amber-100 p-4 rounded-xl border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        ₹{ipo.faceValue}
                      </div>
                      <div className="text-sm font-medium text-orange-700">Face Value</div>
                    </div>
                  </Col>
                )}
                {ipo.listingPrice && (
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ₹{ipo.listingPrice.toLocaleString()}
                      </div>
                      <div className="text-sm font-medium text-green-700">Listing Price</div>
                    </div>
                  </Col>
                )}
                {ipo.gmp && (
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-purple-50 to-violet-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        ₹{ipo.gmp.premium}
                      </div>
                      <div className="text-sm font-medium text-purple-700">GMP Premium</div>
                    </div>
                  </Col>
                )}
              </Row>
            </Card>

            {/* Issue Structure */}
            {(ipo.freshIssue || ipo.ofs) && (
              <Card
                title={
                  <div className="flex items-center">
                    <DollarOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">Issue Structure</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Row gutter={[16, 16]}>
                  {ipo.freshIssue && (
                    <Col xs={24} sm={12}>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-2">
                          <RiseOutlined className="text-green-600 mr-2" />
                          <Text strong className="text-gray-700">Fresh Issue</Text>
                        </div>
                        <div className="text-lg font-bold text-green-600">{ipo.freshIssue.amount}</div>
                        <div className="text-sm text-gray-600">{ipo.freshIssue.shares.toLocaleString()} shares</div>
                      </div>
                    </Col>
                  )}
                  {ipo.ofs && (
                    <Col xs={24} sm={12}>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-2">
                          <ShareAltOutlined className="text-blue-600 mr-2" />
                          <Text strong className="text-gray-700">Offer for Sale (OFS)</Text>
                        </div>
                        <div className="text-lg font-bold text-blue-600">{ipo.ofs.amount}</div>
                        <div className="text-sm text-gray-600">{ipo.ofs.shares.toLocaleString()} shares</div>
                      </div>
                    </Col>
                  )}
                </Row>
              </Card>
            )}

            {/* Market Lot Details */}
            {ipo.marketLot && (
              <Card
                title={
                  <div className="flex items-center">
                    <ShoppingOutlined className="mr-2 text-purple-600" />
                    <span className="text-lg font-semibold">Market Lot Details</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200">
                      <div className="text-xl font-bold text-green-600 mb-1">
                        {ipo.marketLot.retail.shares} shares
                      </div>
                      <div className="text-lg font-semibold text-green-600">
                        ₹{ipo.marketLot.retail.amount.toLocaleString()}
                      </div>
                      <div className="text-sm font-medium text-green-700">Retail</div>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-4 rounded-xl border border-blue-200">
                      <div className="text-xl font-bold text-blue-600 mb-1">
                        {ipo.marketLot.sHni.shares} shares
                      </div>
                      <div className="text-lg font-semibold text-blue-600">
                        ₹{ipo.marketLot.sHni.amount.toLocaleString()}
                      </div>
                      <div className="text-sm font-medium text-blue-700">S-HNI</div>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className="text-center bg-gradient-to-br from-purple-50 to-violet-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-xl font-bold text-purple-600 mb-1">
                        {ipo.marketLot.bHni.shares} shares
                      </div>
                      <div className="text-lg font-semibold text-purple-600">
                        ₹{ipo.marketLot.bHni.amount.toLocaleString()}
                      </div>
                      <div className="text-sm font-medium text-purple-700">B-HNI</div>
                    </div>
                  </Col>
                </Row>
              </Card>
            )}
            {/* Financial Data */}
            {ipo.financials && ipo.financials.length > 0 && (
              <Card
                title={
                  <div className="flex items-center">
                    <LineChartOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">Financial Performance</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-semibold">Year</th>
                        <th className="text-right p-3 font-semibold">Revenue (₹Cr)</th>
                        <th className="text-right p-3 font-semibold">Profit (₹Cr)</th>
                        <th className="text-right p-3 font-semibold">Assets (₹Cr)</th>
                        <th className="text-right p-3 font-semibold">Net Worth (₹Cr)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ipo.financials.map((financial, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="p-3 font-medium">{financial.year}</td>
                          <td className="p-3 text-right">{financial.revenue.toFixed(2)}</td>
                          <td className={`p-3 text-right font-medium ${financial.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {financial.profit.toFixed(2)}
                          </td>
                          <td className="p-3 text-right">{financial.assets.toFixed(2)}</td>
                          <td className={`p-3 text-right font-medium ${financial.netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {financial.netWorth.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {/* Valuation Metrics */}
            {ipo.valuations && (
              <Card
                title={
                  <div className="flex items-center">
                    <PercentageOutlined className="mr-2 text-green-600" />
                    <span className="text-lg font-semibold">Valuation Metrics</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Row gutter={[16, 16]}>
                  {ipo.valuations.epsPreIpo && (
                    <Col xs={12} sm={8}>
                      <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-3 rounded-lg border border-blue-200">
                        <div className="text-lg font-bold text-blue-600">₹{ipo.valuations.epsPreIpo}</div>
                        <div className="text-xs font-medium text-blue-700">EPS Pre IPO</div>
                      </div>
                    </Col>
                  )}
                  {ipo.valuations.roe && (
                    <Col xs={12} sm={8}>
                      <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-3 rounded-lg border border-green-200">
                        <div className="text-lg font-bold text-green-600">{ipo.valuations.roe}%</div>
                        <div className="text-xs font-medium text-green-700">ROE</div>
                      </div>
                    </Col>
                  )}
                  {ipo.valuations.roce && (
                    <Col xs={12} sm={8}>
                      <div className="text-center bg-gradient-to-br from-purple-50 to-violet-100 p-3 rounded-lg border border-purple-200">
                        <div className="text-lg font-bold text-purple-600">{ipo.valuations.roce}%</div>
                        <div className="text-xs font-medium text-purple-700">ROCE</div>
                      </div>
                    </Col>
                  )}
                  {ipo.valuations.patMargin && (
                    <Col xs={12} sm={8}>
                      <div className="text-center bg-gradient-to-br from-orange-50 to-amber-100 p-3 rounded-lg border border-orange-200">
                        <div className="text-lg font-bold text-orange-600">{ipo.valuations.patMargin}%</div>
                        <div className="text-xs font-medium text-orange-700">PAT Margin</div>
                      </div>
                    </Col>
                  )}
                </Row>
              </Card>
            )}

            {/* Strengths and Weaknesses */}
            {(ipo.strengths || ipo.weaknesses) && (
              <Card
                title={
                  <div className="flex items-center">
                    <SafetyOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">SWOT Analysis</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Row gutter={[16, 16]}>
                  {ipo.strengths && (
                    <Col xs={24} sm={12}>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center mb-3">
                          <CheckCircleOutlined className="text-green-600 mr-2" />
                          <Text strong className="text-green-700">Strengths</Text>
                        </div>
                        <ul className="space-y-2">
                          {ipo.strengths.map((strength, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  )}
                  {ipo.weaknesses && (
                    <Col xs={24} sm={12}>
                      <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border border-red-200">
                        <div className="flex items-center mb-3">
                          <ExclamationCircleOutlined className="text-red-600 mr-2" />
                          <Text strong className="text-red-700">Weaknesses</Text>
                        </div>
                        <ul className="space-y-2">
                          {ipo.weaknesses.map((weakness, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <span className="text-red-500 mr-2 mt-1">•</span>
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  )}
                </Row>
              </Card>
            )}
          </Col>

          {/* Right Column */}
          <Col xs={24} lg={8}>
            {/* GMP Card */}
            {ipo.gmp && (
              <Card
                title={
                  <div className="flex items-center">
                    <RiseOutlined className="mr-2 text-green-600" />
                    <span className="text-lg font-semibold">Grey Market Premium</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    ₹{ipo.gmp.premium}
                  </div>
                  <div className="text-xl text-green-600 mb-4 font-semibold">
                    {ipo.gmp.percentage}% Premium
                  </div>
                  <Progress
                    percent={Math.min(ipo.gmp.percentage, 100)}
                    strokeColor="#52c41a"
                    showInfo={false}
                    strokeWidth={8}
                    className="mb-3"
                  />
                  <div className="bg-white p-3 rounded-lg">
                    <Text className="text-gray-600 text-sm">
                      <InfoCircleOutlined className="mr-1" />
                      Expected listing gains based on grey market sentiment
                    </Text>
                  </div>
                </div>
              </Card>
            )}

            {/* Quick Actions */}
            <Card
              title={
                <div className="flex items-center">
                  <BankOutlined className="mr-2 text-blue-600" />
                  <span className="text-lg font-semibold">Quick Actions</span>
                </div>
              }
              className="mb-6 shadow-md border-0"
            >
              <Space direction="vertical" className="w-full" size="middle">
                <Button
                  block
                  icon={<FileTextOutlined />}
                  size="large"
                  className="h-12 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 hover:from-blue-100 hover:to-cyan-100"
                >
                  Download Prospectus
                </Button>
                <Button
                  block
                  icon={<BankOutlined />}
                  size="large"
                  className="h-12 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:from-green-100 hover:to-emerald-100"
                >
                  Check Allotment Status
                </Button>
                <Button
                  block
                  icon={<TrophyOutlined />}
                  size="large"
                  className="h-12 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200 hover:from-purple-100 hover:to-violet-100"
                >
                  View Similar IPOs
                </Button>
              </Space>
            </Card>

            {/* Important Dates */}
            <Card
              title={
                <div className="flex items-center">
                  <CalendarOutlined className="mr-2 text-purple-600" />
                  <span className="text-lg font-semibold">Important Dates</span>
                </div>
              }
              className="mb-6 shadow-md border-0"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <CheckCircleOutlined className="text-blue-600 mr-2" />
                    <Text className="font-medium">Issue Opens:</Text>
                  </div>
                  <Text strong className="text-blue-600">{formatDate(ipo.offerDate.start)}</Text>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                  <div className="flex items-center">
                    <ClockCircleOutlined className="text-orange-600 mr-2" />
                    <Text className="font-medium">Issue Closes:</Text>
                  </div>
                  <Text strong className="text-orange-600">{formatDate(ipo.offerDate.end)}</Text>
                </div>
                {ipo.allotmentDate && (
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                    <div className="flex items-center">
                      <BankOutlined className="text-purple-600 mr-2" />
                      <Text className="font-medium">Allotment Date:</Text>
                    </div>
                    <Text strong className="text-purple-600">{formatDate(ipo.allotmentDate)}</Text>
                  </div>
                )}
                {ipo.listingDate && (
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <RiseOutlined className="text-green-600 mr-2" />
                      <Text className="font-medium">Listing Date:</Text>
                    </div>
                    <Text strong className="text-green-600">{formatDate(ipo.listingDate)}</Text>
                  </div>
                )}
              </div>
            </Card>

            {/* Company Information */}
            {ipo.companyDetails && (
              <Card
                title={
                  <div className="flex items-center">
                    <BuildOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">Company Information</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="space-y-3">
                  {ipo.companyDetails.foundedYear && (
                    <div className="flex justify-between items-center">
                      <Text className="text-gray-600">Founded:</Text>
                      <Text strong>{ipo.companyDetails.foundedYear}</Text>
                    </div>
                  )}
                  {ipo.companyDetails.headquarters && (
                    <div className="flex justify-between items-center">
                      <Text className="text-gray-600">Headquarters:</Text>
                      <Text strong className="text-right">{ipo.companyDetails.headquarters}</Text>
                    </div>
                  )}
                  {ipo.companyDetails.employees && (
                    <div className="flex justify-between items-center">
                      <Text className="text-gray-600">Employees:</Text>
                      <Text strong>{ipo.companyDetails.employees.toLocaleString()}</Text>
                    </div>
                  )}
                  {ipo.companyDetails.website && (
                    <div className="flex justify-between items-center">
                      <Text className="text-gray-600">Website:</Text>
                      <a href={ipo.companyDetails.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Promoter Information */}
            {ipo.promoters && (
              <Card
                title={
                  <div className="flex items-center">
                    <TeamOutlined className="mr-2 text-green-600" />
                    <span className="text-lg font-semibold">Promoter Details</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="space-y-4">
                  <Row gutter={[16, 16]}>
                    <Col xs={12}>
                      <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-100 p-3 rounded-lg border border-blue-200">
                        <div className="text-xl font-bold text-blue-600">{ipo.promoters.preIssueHolding}%</div>
                        <div className="text-xs font-medium text-blue-700">Pre-Issue</div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-3 rounded-lg border border-green-200">
                        <div className="text-xl font-bold text-green-600">{ipo.promoters.postIssueHolding}%</div>
                        <div className="text-xs font-medium text-green-700">Post-Issue</div>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <Text strong className="text-gray-700 mb-2 block">Promoters:</Text>
                    <div className="flex flex-wrap gap-1">
                      {ipo.promoters.names.map((name, index) => (
                        <Tag key={index} color="blue" className="mb-1">
                          {name}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Documents */}
            {ipo.documents && (
              <Card
                title={
                  <div className="flex items-center">
                    <FileTextOutlined className="mr-2 text-purple-600" />
                    <span className="text-lg font-semibold">IPO Documents</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <Space direction="vertical" className="w-full" size="middle">
                  {ipo.documents.drhp && (
                    <Button
                      block
                      icon={<FileTextOutlined />}
                      href={ipo.documents.drhp}
                      target="_blank"
                      className="h-10 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 hover:from-blue-100 hover:to-cyan-100"
                    >
                      Download DRHP
                    </Button>
                  )}
                  {ipo.documents.rhp && (
                    <Button
                      block
                      icon={<FileTextOutlined />}
                      href={ipo.documents.rhp}
                      target="_blank"
                      className="h-10 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:from-green-100 hover:to-emerald-100"
                    >
                      Download RHP
                    </Button>
                  )}
                  {ipo.documents.anchor && (
                    <Button
                      block
                      icon={<FileTextOutlined />}
                      href={ipo.documents.anchor}
                      target="_blank"
                      className="h-10 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200 hover:from-purple-100 hover:to-violet-100"
                    >
                      Anchor Investor List
                    </Button>
                  )}
                </Space>
              </Card>
            )}
          </Col>
        </Row>

        {/* Additional Information Sections */}
        <Row gutter={[24, 24]} className="mt-6">
          {/* Issue Objectives */}
          {ipo.issueObjectives && ipo.issueObjectives.length > 0 && (
            <Col xs={24} lg={12}>
              <Card
                title={
                  <div className="flex items-center">
                    <TrophyOutlined className="mr-2 text-blue-600" />
                    <span className="text-lg font-semibold">Issue Objectives</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <ul className="space-y-3">
                  {ipo.issueObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                      <Text className="text-gray-700">{objective}</Text>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          )}

          {/* Anchor Investors */}
          {ipo.anchorInvestors && (
            <Col xs={24} lg={12}>
              <Card
                title={
                  <div className="flex items-center">
                    <BankOutlined className="mr-2 text-green-600" />
                    <span className="text-lg font-semibold">Anchor Investors</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 text-center">
                    <div className="text-xl font-bold text-green-600">{ipo.anchorInvestors.totalAmount}</div>
                    <div className="text-sm font-medium text-green-700">Total Investment</div>
                  </div>
                </div>
                <div>
                  <Text strong className="text-gray-700 mb-2 block">Key Investors:</Text>
                  <div className="flex flex-wrap gap-1">
                    {ipo.anchorInvestors.investors.slice(0, 6).map((investor, index) => (
                      <Tag key={index} color="green" className="mb-1 text-xs">
                        {investor}
                      </Tag>
                    ))}
                    {ipo.anchorInvestors.investors.length > 6 && (
                      <Tag color="gray" className="mb-1 text-xs">
                        +{ipo.anchorInvestors.investors.length - 6} more
                      </Tag>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          )}

          {/* Peer Comparison */}
          {ipo.peers && ipo.peers.length > 0 && (
            <Col xs={24}>
              <Card
                title={
                  <div className="flex items-center">
                    <LineChartOutlined className="mr-2 text-purple-600" />
                    <span className="text-lg font-semibold">Peer Comparison</span>
                  </div>
                }
                className="mb-6 shadow-md border-0"
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-semibold">Company</th>
                        <th className="text-right p-3 font-semibold">P/B Ratio</th>
                        <th className="text-right p-3 font-semibold">P/E Ratio</th>
                        <th className="text-right p-3 font-semibold">RoNW</th>
                        <th className="text-right p-3 font-semibold">Net Worth (₹Cr)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 bg-blue-50">
                        <td className="p-3 font-medium text-blue-700">{ipo.name}</td>
                        <td className="p-3 text-right">N/A</td>
                        <td className="p-3 text-right">N/A</td>
                        <td className="p-3 text-right">N/A</td>
                        <td className="p-3 text-right font-medium">
                          {ipo.financials && ipo.financials[0] ? ipo.financials[0].netWorth.toFixed(0) : 'N/A'}
                        </td>
                      </tr>
                      {ipo.peers.map((peer, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="p-3 font-medium">{peer.name}</td>
                          <td className="p-3 text-right">{peer.pbRatio || 'N/A'}</td>
                          <td className="p-3 text-right">{peer.peRatio || 'N/A'}</td>
                          <td className="p-3 text-right">{peer.ronw ? `${peer.ronw}%` : 'N/A'}</td>
                          <td className="p-3 text-right font-medium">{peer.netWorth || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default IPODetailPage;
