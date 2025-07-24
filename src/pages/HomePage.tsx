import React from 'react';
import { Row, Col, Card, Button, Typography, Statistic } from 'antd';
import {
  LineChartOutlined,
  CalendarOutlined,
  BankOutlined,
  RiseOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useIPOsByStatus, useBrokers } from '../hooks';
import { SkeletonCard } from '../components/common';
import { IPOCard } from '../components/ipo';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  // Fetch current IPOs and brokers data
  const { ipos: currentIPOs, loading: iposLoading } = useIPOsByStatus('current');
  const { brokers, loading: brokersLoading } = useBrokers();

  // Get featured IPOs (first 3 current IPOs)
  const featuredIPOs = currentIPOs.slice(0, 3);

  const stats = [
    { title: 'Active IPOs', value: 12, icon: <LineChartOutlined /> },
    { title: 'Upcoming IPOs', value: 25, icon: <CalendarOutlined /> },
    { title: 'Listed This Month', value: 8, icon: <RiseOutlined /> },
    { title: 'Total Brokers', value: 15, icon: <BankOutlined /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-40"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white/5 rounded-full translate-y-32"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Row align="middle" gutter={[48, 48]} className="min-h-[600px]">
            <Col xs={24} lg={12} className="flex flex-col justify-center">
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Live IPO Tracking
                  </div>
                  <Title level={1} className="!text-white !mb-0 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                    India's Premier
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                      IPO Platform
                    </span>
                  </Title>
                  <Paragraph className="text-lg sm:text-xl text-blue-100 !mb-0 leading-relaxed max-w-2xl">
                    Track, analyze, and apply for IPOs with real-time data, subscription status,
                    and expert insights. Your gateway to investment opportunities.
                  </Paragraph>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to={ROUTES.CURRENT_IPO}>
                    <Button
                      type="primary"
                      size="large"
                      className="w-full sm:w-auto bg-white text-blue-600 border-white hover:bg-blue-50 hover:border-blue-50 font-semibold px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Explore Current IPOs
                    </Button>
                  </Link>
                  <Button
                    type="default"
                    size="large"
                    icon={<PlayCircleOutlined />}
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 hover:border-white font-semibold px-8 py-6 h-auto backdrop-blur-sm bg-white/10 transition-all duration-300"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">12+</div>
                    <div className="text-sm text-blue-200">Active IPOs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
                    <div className="text-sm text-blue-200">Upcoming IPOs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-blue-200">Top Brokers</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} className="flex justify-center items-center">
              <div className="relative w-full max-w-lg animate-slideInRight">
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

                {/* Main image container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <img
                    src="/api/placeholder/500/400"
                    alt="IPO Dashboard"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-lg animate-bounce">
                    <div className="text-xs text-gray-600">Live Updates</div>
                    <div className="text-sm font-bold text-green-600">+12.5%</div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg animate-bounce delay-500">
                    <div className="text-xs text-gray-600">New IPO</div>
                    <div className="text-sm font-bold text-blue-600">Opening Soon</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <section className="py-16 -mt-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <div className="p-4 lg:p-6">
                  <div className="text-3xl lg:text-4xl text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <Statistic
                    title={<span className="text-gray-600 text-sm lg:text-base">{stat.title}</span>}
                    value={stat.value}
                    valueStyle={{
                      color: '#1890ff',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured IPOs Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <Title level={2} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current IPOs
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest IPO opportunities with real-time subscription data and expert analysis
            </Paragraph>
          </div>

          {iposLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3].map((key) => (
                <SkeletonCard key={key} loading={true} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {featuredIPOs.map((ipo) => (
                <div key={ipo.id} className="animate-fadeIn">
                  <IPOCard ipo={ipo} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to={ROUTES.CURRENT_IPO}>
              <Button
                type="primary"
                size="large"
                className="px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All IPOs
              </Button>
            </Link>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-16">
          <div className="bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 rounded-3xl overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-16">
              <Row align="middle" gutter={[48, 48]}>
                <Col xs={24} lg={12} className="flex flex-col justify-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        20,00,000+ Downloads
                      </div>
                      <Title level={2} className="!text-white !mb-0 text-3xl lg:text-5xl font-bold">
                        Download Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                          Mobile App
                        </span>
                      </Title>
                      <Paragraph className="text-green-100 text-lg lg:text-xl !mb-0 leading-relaxed max-w-lg">
                        India's most downloaded IPO App. Get real-time notifications, apply for IPOs,
                        and track your investments on the go.
                      </Paragraph>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="default"
                        size="large"
                        className="w-full sm:w-auto bg-white text-gray-900 border-white hover:bg-gray-50 hover:border-gray-50 font-semibold px-8 py-6 h-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img src="/api/placeholder/24/24" alt="Google Play" className="mr-3" />
                        <div className="text-left">
                          <div className="text-xs text-gray-600">Get it on</div>
                          <div className="text-sm font-bold">Google Play</div>
                        </div>
                      </Button>
                      <Button
                        type="default"
                        size="large"
                        className="w-full sm:w-auto bg-white text-gray-900 border-white hover:bg-gray-50 hover:border-gray-50 font-semibold px-8 py-6 h-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img src="/api/placeholder/24/24" alt="App Store" className="mr-3" />
                        <div className="text-left">
                          <div className="text-xs text-gray-600">Download on the</div>
                          <div className="text-sm font-bold">App Store</div>
                        </div>
                      </Button>
                    </div>

                    {/* App features */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">📱</span>
                        </div>
                        <span className="text-sm">Real-time Updates</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">🔔</span>
                        </div>
                        <span className="text-sm">Push Notifications</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">📊</span>
                        </div>
                        <span className="text-sm">Portfolio Tracking</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">⚡</span>
                        </div>
                        <span className="text-sm">Quick Apply</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12} className="flex justify-center items-center">
                  <div className="relative w-full max-w-sm mx-auto">
                    {/* Phone mockup */}
                    <div className="relative">
                      {/* Floating elements */}
                      <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-2xl opacity-20 animate-pulse"></div>
                      <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

                      {/* Phone container */}
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-[3rem] p-4 border border-white/20">
                        <img
                          src="/api/placeholder/280/500"
                          alt="Mobile App"
                          className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                        />

                        {/* Floating notification */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                          <div className="text-xs text-gray-600">New IPO Alert!</div>
                          <div className="text-sm font-bold text-green-600">Apply Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* Top Brokers Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <Title level={2} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top Brokers
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare and choose from India's leading brokers with competitive pricing and excellent service
            </Paragraph>
          </div>

          {brokersLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((key) => (
                <SkeletonCard key={key} loading={true} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              {brokers.slice(0, 4).map((broker) => (
                <Card
                  key={broker.id}
                  className="text-center card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={broker.logo}
                        alt={broker.name}
                        className="w-16 h-16 mx-auto rounded-xl object-cover shadow-md"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        ★ {broker.rating}
                      </div>
                    </div>

                    <Title level={4} className="mb-4 text-gray-900">{broker.name}</Title>

                    <div className="space-y-3 text-sm mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-600 mb-1">Account Opening</div>
                        <div className="font-bold text-gray-900">
                          {broker.accountOpening === 'Free' ? 'Free' : `₹${broker.accountOpening}`}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-gray-600 mb-1">Equity Delivery</div>
                        <div className="font-bold text-gray-900">
                          {broker.equityDelivery === 'Zero' ? 'Zero' :
                           typeof broker.equityDelivery === 'number' ? `₹${broker.equityDelivery}` : broker.equityDelivery}
                        </div>
                      </div>
                    </div>

                    <Button
                      type="primary"
                      block
                      size="large"
                      className="font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Open Account
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to={ROUTES.BROKERS}>
              <Button
                type="primary"
                size="large"
                className="px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Brokers
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center mb-16">
            <Title level={2} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything Under One Roof
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IPO platform with all the tools you need for successful investing
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Track All IPOs */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-white">
                <div className="p-8 text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <LineChartOutlined className="text-4xl text-white" />
                    </div>
                    <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                  </div>
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Track All IPOs
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-base">
                    Track all ongoing IPOs, upcoming IPOs, and recently listed IPOs in one place.
                    Never miss upcoming IPOs with real-time updates and notifications.
                  </Paragraph>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Real-time Data
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Live Updates
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Apply Online Easily */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-green-50 to-white">
                <div className="p-8 text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <PlayCircleOutlined className="text-4xl text-white" />
                    </div>
                    <div className="absolute inset-0 bg-green-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                  </div>
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Apply Online Easily
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-base">
                    Cut the clutter! Use IPO Edge's integrated platform to apply for IPOs online easily.
                    Know the expected premium and plan your investment strategy.
                  </Paragraph>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Easy Apply
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        GMP Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stay Updated */}
            <div className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-purple-50 to-white">
                <div className="p-8 text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <CalendarOutlined className="text-4xl text-white" />
                    </div>
                    <div className="absolute inset-0 bg-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
                  </div>
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Stay Updated
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed text-base">
                    Stay updated with all upcoming Mainboard IPOs and SME IPOs in India.
                    Get detailed insights into draft papers and subscription status.
                  </Paragraph>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Notifications
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Alerts
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
