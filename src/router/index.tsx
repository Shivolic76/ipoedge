import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants';

// Layout components
import MainLayout from '../components/layout/MainLayout';

// Page components (we'll create these later)
import HomePage from '../pages/HomePage';
import IPOListPage from '../pages/IPOListPage';
import IPODetailPage from '../pages/IPODetailPage';
import BuybackPage from '../pages/BuybackPage';
import BrokersPage from '../pages/BrokersPage';
import BrokerDetailPage from '../pages/BrokerDetailPage';
import BidsPage from '../pages/BidsPage';
import AllotmentPage from '../pages/AllotmentPage';
import CalendarPage from '../pages/CalendarPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes without layout */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      
      {/* Main app routes with layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        
        {/* IPO routes */}
        <Route path={ROUTES.IPO} element={<IPOListPage />} />
        <Route path={ROUTES.CURRENT_IPO} element={<IPOListPage />} />
        <Route path={ROUTES.UPCOMING_IPO} element={<IPOListPage />} />
        <Route path={ROUTES.LISTED_IPO} element={<IPOListPage />} />
        
        {/* SME IPO routes */}
        <Route path={ROUTES.CURRENT_SME_IPO} element={<IPOListPage />} />
        <Route path={ROUTES.UPCOMING_SME_IPO} element={<IPOListPage />} />
        <Route path={ROUTES.LISTED_SME_IPO} element={<IPOListPage />} />
        
        {/* IPO detail */}
        <Route path={ROUTES.IPO_DETAIL} element={<IPODetailPage />} />
        
        {/* Buyback routes */}
        <Route path={ROUTES.BUYBACK} element={<BuybackPage />} />
        <Route path={ROUTES.CURRENT_BUYBACK} element={<BuybackPage />} />
        <Route path={ROUTES.UPCOMING_BUYBACK} element={<BuybackPage />} />
        <Route path={ROUTES.CLOSED_BUYBACK} element={<BuybackPage />} />
        
        {/* Broker routes */}
        <Route path={ROUTES.BROKERS} element={<BrokersPage />} />
        <Route path={ROUTES.BROKER_DETAIL} element={<BrokerDetailPage />} />
        
        {/* Other routes */}
        <Route path={ROUTES.BIDS} element={<BidsPage />} />
        <Route path={ROUTES.ALLOTMENT} element={<AllotmentPage />} />
        <Route path={ROUTES.ALLOTMENT_CHECK} element={<AllotmentPage />} />
        <Route path={ROUTES.CALENDAR} element={<CalendarPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
