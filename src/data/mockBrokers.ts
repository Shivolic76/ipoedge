import type { Broker } from '../types';

export const mockBrokers: Broker[] = [
  {
    id: '1',
    name: 'Zerodha',
    logo: 'https://media.ipoji.com/broker/images/zerodha-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 300,
    equityDelivery: 'Zero',
    equityIntraday: '0.03%',
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    rating: 4.5,
    features: [
      'Free account opening',
      'Zero brokerage on equity delivery',
      'Advanced trading platforms',
      'Educational resources',
      'Mobile app'
    ]
  },
  {
    id: '2',
    name: 'Angel One',
    logo: 'https://media.ipoji.com/broker/images/angel-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 240,
    equityDelivery: 'Zero',
    equityIntraday: '0.03%',
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    rating: 4.3,
    features: [
      'Free account opening',
      'Zero brokerage on equity delivery',
      'Research reports',
      'Portfolio management',
      'Mobile trading'
    ]
  },
  {
    id: '3',
    name: 'Upstox',
    logo: 'https://media.ipoji.com/broker/images/upstox-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 0,
    equityDelivery: 20,
    equityIntraday: '0.05%',
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    rating: 4.2,
    features: [
      'Free account opening',
      'No AMC charges',
      'Low brokerage rates',
      'User-friendly platform',
      'Quick onboarding'
    ]
  },
  {
    id: '4',
    name: 'Dhan',
    logo: 'https://media.ipoji.com/broker/images/dhan-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 'Free',
    equityDelivery: 'Zero',
    equityIntraday: '0.03%',
    services: ['Equity', 'Commodity', 'Futures', 'Options'],
    rating: 4.4,
    features: [
      'Free account opening',
      'Free AMC',
      'Zero brokerage on equity delivery',
      'Advanced charting',
      'Options strategies'
    ]
  },
  {
    id: '5',
    name: 'Kotak Securities',
    logo: 'https://media.ipoji.com/broker/images/kotak-sec-logo.jpeg',
    accountOpening: 99,
    accountMaintenance: 0,
    equityDelivery: 0,
    equityIntraday: 10,
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    rating: 4.1,
    features: [
      'Established brand',
      'Research and advisory',
      'Multiple trading platforms',
      'Banking integration',
      'Customer support'
    ]
  },
  {
    id: '6',
    name: 'ICICI Direct',
    logo: 'https://media.ipoji.com/broker/images/icici-sec-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 500,
    equityDelivery: 0,
    equityIntraday: '0.05%',
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options', 'Mutual Funds'],
    rating: 4.0,
    features: [
      'Banking integration',
      'Research reports',
      'Investment advisory',
      'Multiple platforms',
      'Comprehensive services'
    ]
  },
  {
    id: '7',
    name: 'HDFC Securities',
    logo: 'https://media.ipoji.com/broker/images/hdfc-sec-logo.jpeg',
    accountOpening: 999,
    accountMaintenance: 750,
    equityDelivery: 0.5,
    equityIntraday: '0.05%',
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options', 'Mutual Funds'],
    rating: 3.9,
    features: [
      'Trusted brand',
      'Research and analysis',
      'Investment products',
      'Banking services',
      'Customer support'
    ]
  },
  {
    id: '8',
    name: 'Groww',
    logo: 'https://media.ipoji.com/broker/images/groww.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 0,
    equityDelivery: 'Zero',
    equityIntraday: '0.05%',
    services: ['Equity', 'Mutual Funds', 'IPO', 'Gold'],
    rating: 4.2,
    features: [
      'Simple interface',
      'Free account opening',
      'Zero delivery charges',
      'Mutual fund platform',
      'Educational content'
    ]
  },
  {
    id: '9',
    name: '5paisa',
    logo: 'https://media.ipoji.com/broker/images/5paisa-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 0,
    equityDelivery: 20,
    equityIntraday: 20,
    services: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
    rating: 3.8,
    features: [
      'Flat fee structure',
      'Multiple platforms',
      'Research tools',
      'Mobile trading',
      'Customer support'
    ]
  },
  {
    id: '10',
    name: 'Paytm Money',
    logo: 'https://media.ipoji.com/broker/images/paytm-money-logo.jpeg',
    accountOpening: 'Free',
    accountMaintenance: 0,
    equityDelivery: 'Zero',
    equityIntraday: '0.05%',
    services: ['Equity', 'Mutual Funds', 'IPO'],
    rating: 3.7,
    features: [
      'Digital-first approach',
      'Zero delivery charges',
      'Mutual fund platform',
      'Easy onboarding',
      'Mobile-centric'
    ]
  }
];
