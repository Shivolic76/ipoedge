import React from 'react';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  LinkedinOutlined, 
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { ROUTES } from '../../constants';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto relative overflow-hidden z-0">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IPO Edge
                </div>
              </div>
              <Text className="text-gray-300 leading-relaxed text-base">
                Your comprehensive platform for IPO tracking, analysis, and investment opportunities.
                Stay updated with the latest IPO launches, subscription status, and market insights.
              </Text>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <FacebookOutlined className="text-lg text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <TwitterOutlined className="text-lg text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <LinkedinOutlined className="text-lg text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <YoutubeOutlined className="text-lg text-gray-300 hover:text-white" />
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <Title level={4} className="!text-white mb-6 text-xl font-semibold">
              Products
            </Title>
            <div className="space-y-4">
              <div>
                <Link to={ROUTES.IPO} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  IPO Tracking
                </Link>
              </div>
              <div>
                <Link to={ROUTES.BUYBACK} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Buyback Information
                </Link>
              </div>
              <div>
                <Link to={ROUTES.BROKERS} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Broker Comparison
                </Link>
              </div>
              <div>
                <Link to={ROUTES.CALENDAR} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  IPO Calendar
                </Link>
              </div>
              <div>
                <Link to={ROUTES.ALLOTMENT} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Allotment Status
                </Link>
              </div>
            </div>
          </div>

          {/* IPO Categories */}
          <div>
            <Title level={4} className="!text-white mb-6 text-xl font-semibold">
              IPO Categories
            </Title>
            <div className="space-y-4">
              <div>
                <Link to={ROUTES.CURRENT_IPO} className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Current IPOs
                </Link>
              </div>
              <div>
                <Link to={ROUTES.UPCOMING_IPO} className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Upcoming IPOs
                </Link>
              </div>
              <div>
                <Link to={ROUTES.LISTED_IPO} className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  Listed IPOs
                </Link>
              </div>
              <div>
                <Link to={ROUTES.CURRENT_SME_IPO} className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                  SME IPOs
                </Link>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <Title level={4} className="!text-white mb-6 text-xl font-semibold">
              Contact & Support
            </Title>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MailOutlined className="text-sm text-white" />
                </div>
                <Text className="text-gray-300">ipoedge@gmail.com</Text>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <PhoneOutlined className="text-sm text-white" />
                </div>
                <Text className="text-gray-300">+91 12345 67890</Text>
              </div>
              <div className="pt-4 space-y-3">
                <div>
                  <Link to={ROUTES.FAQS} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    FAQs
                  </Link>
                </div>
                <div>
                  <Link to={ROUTES.HELP_CENTER} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    Help Center
                  </Link>
                </div>
                <div>
                  <Link to={ROUTES.CONTACT} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col space-y-6">
            {/* Copyright */}
            <div className="text-center">
              <Text className="text-gray-400 text-base">
                © {currentYear} IPO Edge. All rights reserved.
              </Text>
            </div>

            {/* Legal Links - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <Link
                to={ROUTES.PRIVACY_POLICY}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm px-4 py-2 rounded-lg hover:bg-gray-800/50 w-full sm:w-auto text-center"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link
                to={ROUTES.TERMS_CONDITIONS}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm px-4 py-2 rounded-lg hover:bg-gray-800/50 w-full sm:w-auto text-center"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link
                to={ROUTES.DISCLAIMER}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm px-4 py-2 rounded-lg hover:bg-gray-800/50 w-full sm:w-auto text-center"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700/30">
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6">
              <Text className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                <strong className="text-yellow-400">Disclaimer:</strong> IPO Edge is an information platform and does not provide investment advice.
                All information is for educational purposes only. Please consult with qualified financial advisors
                before making investment decisions. We are not SEBI registered analysts.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
