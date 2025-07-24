import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Drawer, Avatar, Dropdown } from 'antd';
import {
  MenuOutlined,
  HomeOutlined,
  StockOutlined,
  BankOutlined,
  CalendarOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ROUTES } from '../../constants';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const isLoggedIn = false; // This would come from your auth context

  const menuItems: MenuProps['items'] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to={ROUTES.HOME}>Home</Link>,
    },
    {
      key: 'ipo',
      icon: <StockOutlined />,
      label: 'IPO',
      children: [
        {
          key: 'current-ipo',
          label: <Link to={ROUTES.CURRENT_IPO}>Current IPO</Link>,
        },
        {
          key: 'upcoming-ipo',
          label: <Link to={ROUTES.UPCOMING_IPO}>Upcoming IPO</Link>,
        },
        {
          key: 'listed-ipo',
          label: <Link to={ROUTES.LISTED_IPO}>Listed IPO</Link>,
        },
        {
          type: 'divider',
        },
        {
          key: 'current-sme-ipo',
          label: <Link to={ROUTES.CURRENT_SME_IPO}>Current SME IPO</Link>,
        },
        {
          key: 'upcoming-sme-ipo',
          label: <Link to={ROUTES.UPCOMING_SME_IPO}>Upcoming SME IPO</Link>,
        },
        {
          key: 'listed-sme-ipo',
          label: <Link to={ROUTES.LISTED_SME_IPO}>Listed SME IPO</Link>,
        },
      ],
    },
    // {
    //   key: 'buyback',
    //   icon: <SwapOutlined />,
    //   label: 'Buyback',
    //   children: [
    //     {
    //       key: 'current-buyback',
    //       label: <Link to={ROUTES.CURRENT_BUYBACK}>Current</Link>,
    //     },
    //     {
    //       key: 'upcoming-buyback',
    //       label: <Link to={ROUTES.UPCOMING_BUYBACK}>Upcoming</Link>,
    //     },
    //     {
    //       key: 'closed-buyback',
    //       label: <Link to={ROUTES.CLOSED_BUYBACK}>Closed</Link>,
    //     },
    //   ],
    // },
    {
      key: 'brokers',
      icon: <BankOutlined />,
      label: <Link to={ROUTES.BROKERS}>Brokers</Link>,
    },
    // {
    //   key: 'bids',
    //   icon: <FileTextOutlined />,
    //   label: <Link to={ROUTES.BIDS}>Orders/Bids</Link>,
    // },
    {
      key: 'allotment',
      icon: <ProfileOutlined />,
      label: <Link to={ROUTES.ALLOTMENT}>Allotment</Link>,
    },
    {
      key: 'calendar',
      icon: <CalendarOutlined />,
      label: <Link to={ROUTES.CALENDAR}>IPO Event Calendar</Link>,
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link to={ROUTES.PROFILE}>My Profile</Link>,
    },
    {
      key: 'orders',
      icon: <FileTextOutlined />,
      label: <Link to={ROUTES.BIDS}>Orders/Bids</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Log Out',
      onClick: () => {
        // Handle logout
        console.log('Logout clicked');
      },
    },
  ];

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path === ROUTES.HOME) return ['home'];
    if (path.startsWith('/ipo')) return ['ipo'];
    if (path.startsWith('/buyback')) return ['buyback'];
    if (path === ROUTES.BROKERS) return ['brokers'];
    if (path === ROUTES.BIDS) return ['bids'];
    if (path === ROUTES.ALLOTMENT) return ['allotment'];
    if (path === ROUTES.CALENDAR) return ['calendar'];
    return [];
  };

  return (
    <AntHeader className="bg-white shadow-sm border-b px-0 h-16 leading-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center group no-underline">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 transition-all duration-300 hover:scale-105">
              IPO Edge
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <Menu
              mode="horizontal"
              items={menuItems}
              selectedKeys={getSelectedKeys()}
              className="border-none bg-transparent flex-1 justify-center"
              style={{ lineHeight: '64px' }}
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={['click']}
              >
                <Avatar
                  size="default"
                  icon={<UserOutlined />}
                  className="cursor-pointer hover:bg-blue-50"
                />
              </Dropdown>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to={ROUTES.LOGIN}>
                  <Button type="default" icon={<LoginOutlined />}>
                    Login
                  </Button>
                </Link>
                <Link to={ROUTES.REGISTER}>
                  <Button type="primary">
                    Register
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuVisible(true)}
              className="lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            IPO Edge
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
      >
        <Menu
          mode="inline"
          items={menuItems}
          selectedKeys={getSelectedKeys()}
          className="border-none"
          onClick={() => setMobileMenuVisible(false)}
        />
        
        {!isLoggedIn && (
          <div className="mt-6 space-y-2">
            <Link to={ROUTES.LOGIN}>
              <Button type="default" block icon={<LoginOutlined />}>
                Login
              </Button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <Button type="primary" block>
                Register
              </Button>
            </Link>
          </div>
        )}
      </Drawer>
    </AntHeader>
  );
};

export default Header;
