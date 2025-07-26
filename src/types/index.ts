// IPO related types
export interface IPO {
  id: string;
  name: string;
  logo: string;
  offerDate: {
    start: string;
    end: string;
  };
  status: 'upcoming' | 'current' | 'listed' | 'closed';
  exchange: 'NSE' | 'BSE' | 'NSE SME' | 'BSE SME' | 'Mainboard';
  category: 'mainboard' | 'sme';
  offerPrice: {
    min: number;
    max: number;
  } | number;
  lotSize: number;
  subscription?: {
    times: number;
    retail?: number;
    hni?: number;
    qib?: number;
  };
  gmp?: {
    premium: number;
    percentage: number;
  };
  listingDate?: string;
  listingPrice?: number;
  issueSize: string;
  companyDescription?: string;
  sector?: string;
  registrar?: string;
  leadManagers?: string[];
}

// Buyback related types
export interface Buyback {
  id: string;
  companyName: string;
  logo: string;
  recordDate: string;
  issueDate?: string;
  closeDate?: string;
  buybackPrice: number;
  issueSize: string;
  sharesCount: number;
  percentage: number;
  status: 'upcoming' | 'current' | 'closed';
  method: 'tender' | 'open market';
}

// Broker related types
export interface BrokerageCharges {
  equityDelivery: string;
  equityIntraday: string;
  equityFutures: string;
  equityOptions: string;
  currencyFutures: string;
  currencyOptions: string;
  commodityFutures: string;
  commodityOptions: string;
}

export interface MarginInfo {
  equityDelivery: string;
  equityIntraday: string;
  equityFutures: string;
  equityOptions: string;
  currencyFutures: string;
  currencyOptions: string;
  commodityFutures: string;
  commodityOptions: string;
}

export interface ChargeBreakdown {
  transactionCharges: { BSE?: string; NSE?: string };
  clearingCharges: string | { BSE?: string; NSE?: string };
  dpCharges?: string;
  dpCharge?: string;
  gst: string;
  stt: string;
  sebiCharges: string;
}

export interface DetailedCharges {
  delivery: ChargeBreakdown;
  intraday: ChargeBreakdown;
  futures: ChargeBreakdown;
  options: ChargeBreakdown;
}

export interface AdditionalFeatures {
  '3in1Account': boolean;
  'freeTradingCalls': boolean;
  'freeResearch': boolean;
  'smsAlerts': boolean;
  'marginFunding': boolean;
  'marginAgainstShare': boolean;
}

export interface Broker {
  id: string;
  name: string;
  logo: string;
  type: string;
  activeClients: string;
  about: string;

  // Basic charges
  accountOpening: number | string;
  accountMaintenance: number | string;
  callTrade: number | string;
  planCharges?: number;

  // Brokerage charges
  brokerage: BrokerageCharges;

  // Margins
  margins: MarginInfo;

  // Services and platforms
  services: string[];
  platforms: string[];

  // Pros and cons
  pros: string[];
  cons: string[];

  // Additional features
  additionalFeatures: AdditionalFeatures;

  // Other investment options
  otherInvestments: string[];

  // Detailed charges breakdown
  charges: DetailedCharges;

  // Rating and features
  rating: number;
  features: string[];

  // Legacy fields for backward compatibility
  equityDelivery?: number | string;
  equityIntraday?: number | string;
}

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    favoriteIPOs: string[];
  };
}

// Application/Bid related types
export interface IPOApplication {
  id: string;
  ipoId: string;
  userId: string;
  category: 'retail' | 'hni' | 'qib';
  quantity: number;
  amount: number;
  bidPrice: number;
  status: 'pending' | 'confirmed' | 'allotted' | 'not_allotted';
  appliedDate: string;
  allotmentDate?: string;
  allottedQuantity?: number;
}

// Filter and search types
export interface IPOFilters {
  status?: string[];
  category?: string[];
  exchange?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface SearchParams {
  query: string;
  filters: IPOFilters;
  sortBy: 'name' | 'date' | 'subscription' | 'gmp';
  sortOrder: 'asc' | 'desc';
}

// API response types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Navigation types
export interface NavItem {
  key: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

// Theme types
export interface ThemeConfig {
  primaryColor: string;
  borderRadius: number;
  fontFamily: string;
}
