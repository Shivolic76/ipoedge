import type { IPO } from '../types';

export const mockIPOs: IPO[] = [
  {
    id: '1',
    name: 'Swastika Castal',
    logo: 'https://media.ipoji.com/ipo/images/swastika-ipo-logo.png',
    offerDate: {
      start: '2025-07-21',
      end: '2025-07-23'
    },
    status: 'current',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: 65,
    lotSize: 2000,
    subscription: {
      times: 5.08,
      retail: 7.75,
      hni: 2.42,
      qib: 2.42
    },
    issueSize: '₹14.07 Crores',
    companyDescription: 'Swastika Castal Limited deals in aluminum casting. The company deals mostly in manufacturing, specifically in making high-quality aluminum castings using processes including sand, gravity, and centrifugal casting.',
    sector: 'Manufacturing',
    registrar: 'Accurate Securities & Registry Private Limited',
    leadManagers: ['Horizon Management Private Limited']
  },
  {
    id: '2',
    name: 'Savy Infra & Logistics',
    logo: 'https://media.ipoji.com/ipo/images/savy_infra_logistics-logo.jpeg',
    offerDate: {
      start: '2025-07-21',
      end: '2025-07-23'
    },
    status: 'current',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 114,
      max: 120
    },
    lotSize: 1200,
    subscription: {
      times: 114.50,
      retail: 98.2,
      hni: 145.8,
      qib: 89.3
    },
    gmp: {
      premium: 23,
      percentage: 18.33
    },
    issueSize: '₹75 Crores',
    companyDescription: 'Savy Infra & Logistics provides infrastructure and logistics services.',
    sector: 'Infrastructure',
    registrar: 'Bigshare Services',
    leadManagers: ['Savy Capital Markets']
  },
  {
    id: '3',
    name: 'Monarch Surveyors & Engineering Consultants',
    logo: 'https://media.ipoji.com/ipo/images/monarch-ipo-logo.png',
    offerDate: {
      start: '2025-07-22',
      end: '2025-07-24'
    },
    status: 'closed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 237,
      max: 250
    },
    lotSize: 600,
    subscription: {
      times: 231.43,
      retail: 156.4,
      hni: 234.7,
      qib: 145.2
    },
    gmp: {
      premium: 200,
      percentage: 76
    },
    issueSize: '₹45 Crores',
    companyDescription: 'Monarch Surveyors provides engineering consultancy and surveying services.',
    sector: 'Engineering Services',
    registrar: 'Cameo Corporate Services',
    leadManagers: ['Monarch Capital']
  },
  {
    id: '4',
    name: 'TSC India',
    logo: 'https://media.ipoji.com/ipo/images/tsc-india-logo.jpeg',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'current',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 68,
      max: 70
    },
    lotSize: 2000,
    subscription: {
      times: 1.78,
      retail: 1.2,
      hni: 1.8,
      qib: 0.9
    },
    issueSize: '₹35 Crores',
    companyDescription: 'TSC India is engaged in technology services and consulting.',
    sector: 'Technology',
    registrar: 'Skyline Financial Services',
    leadManagers: ['TSC Securities']
  },
  {
    id: '5',
    name: 'Indiqube Spaces',
    logo: 'https://media.ipoji.com/ipo/images/indiqube-spaces-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'current',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 225,
      max: 237
    },
    lotSize: 63,
    subscription: {
      times: 2.54,
      retail: 1.4,
      hni: 2.1,
      qib: 1.2
    },
    gmp: {
      premium: 13,
      percentage: 5.06
    },
    issueSize: '₹450 Crores',
    companyDescription: 'Indiqube Spaces is a leading co-working space provider in India.',
    sector: 'Real Estate',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '6',
    name: 'GNG Electronics',
    logo: 'https://media.ipoji.com/ipo/images/gng-electronics-logo.png',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'current',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 225,
      max: 237
    },
    lotSize: 63,
    subscription: {
      times: 26.88,
      retail: 18.2,
      hni: 25.6,
      qib: 17.8
    },
    gmp: {
      premium: 98,
      percentage: 40.51
    },
    issueSize: '₹320 Crores',
    companyDescription: 'GNG Electronics manufactures electronic components and devices.',
    sector: 'Electronics',
    registrar: 'Link Intime India',
    leadManagers: ['Axis Capital', 'JM Financial']
  },
  {
    id: '7',
    name: 'Brigade Hotel Ventures',
    logo: 'https://media.ipoji.com/ipo/images/brigade-hotel-logo.png',
    offerDate: {
      start: '2025-07-24',
      end: '2025-07-28'
    },
    status: 'current',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 85,
      max: 90
    },
    lotSize: 166,
    subscription: {
      times: 0.62,
      retail: 0.4,
      hni: 0.6,
      qib: 0.3
    },
    gmp: {
      premium: 8,
      percentage: 7.78
    },
    issueSize: '₹280 Crores',
    companyDescription: 'Brigade Hotel Ventures operates hotels and hospitality services.',
    sector: 'Hospitality',
    registrar: 'Integrated Registry Management',
    leadManagers: ['IIFL Securities', 'Ambit Capital']
  },
  {
    id: '8',
    name: 'Shree Refrigerations',
    logo: 'https://media.ipoji.com/ipo/images/shree-refrigerations-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 119,
      max: 125
    },
    lotSize: 1000,
    gmp: {
      premium: 75,
      percentage: 56
    },
    issueSize: '₹40 Crores',
    companyDescription: 'Shree Refrigerations manufactures commercial refrigeration equipment.',
    sector: 'Manufacturing',
    registrar: 'Bigshare Services',
    leadManagers: ['Shree Capital Markets']
  },
  {
    id: '9',
    name: 'Patel Chem Specialities',
    logo: 'https://media.ipoji.com/ipo/images/patel-chem-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 82,
      max: 84
    },
    lotSize: 1600,
    gmp: {
      premium: 18,
      percentage: 20.24
    },
    issueSize: '₹55 Crores',
    companyDescription: 'Patel Chem Specialities manufactures specialty chemicals.',
    sector: 'Chemicals',
    registrar: 'Cameo Corporate Services',
    leadManagers: ['Patel Securities']
  },
  {
    id: '10',
    name: 'Sellowrap Industries',
    logo: 'https://media.ipoji.com/ipo/images/sk-group-logo.jpg',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 79,
      max: 83
    },
    lotSize: 1600,
    issueSize: '₹48 Crores',
    companyDescription: 'Sellowrap Industries manufactures packaging materials.',
    sector: 'Packaging',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Sellowrap Capital']
  },
  {
    id: '11',
    name: 'Shanti Gold International',
    logo: 'https://media.ipoji.com/ipo/images/shanti-gold-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 189,
      max: 199
    },
    lotSize: 75,
    gmp: {
      premium: 35,
      percentage: 17.59
    },
    issueSize: '₹350 Crores',
    companyDescription: 'Shanti Gold International is engaged in gold trading and jewelry business.',
    sector: 'Precious Metals',
    registrar: 'Link Intime India',
    leadManagers: ['Shanti Capital']
  },
  {
    id: '12',
    name: 'Repono Limited',
    logo: 'https://media.ipoji.com/ipo/images/repono-ipo-logo.png',
    offerDate: {
      start: '2025-07-28',
      end: '2025-07-30'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 91,
      max: 96
    },
    lotSize: 1200,
    issueSize: '₹45 Crores',
    companyDescription: 'Repono Limited provides technology solutions and services.',
    sector: 'Technology',
    registrar: 'Bigshare Services',
    leadManagers: ['Repono Capital']
  },
  {
    id: '13',
    name: 'Umiya Mobile',
    logo: 'https://media.ipoji.com/ipo/images/umiya-mobile-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-28',
      end: '2025-07-30'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: 66,
    lotSize: 2000,
    issueSize: '₹35 Crores',
    companyDescription: 'Umiya Mobile is engaged in mobile phone distribution and retail.',
    sector: 'Consumer Electronics',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Umiya Securities']
  },
  {
    id: '14',
    name: 'PropShare Titania SM REIT',
    logo: 'https://media.ipoji.com/ipo/images/propshare-titania-logo.png',
    offerDate: {
      start: '2025-07-21',
      end: '2025-07-25'
    },
    status: 'current',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1000000,
      max: 1060000
    },
    lotSize: 1,
    subscription: {
      times: 0.93,
      retail: 0.8,
      hni: 1.1,
      qib: 0.7
    },
    issueSize: '₹500 Crores',
    companyDescription: 'PropShare Titania SM REIT is a small and medium real estate investment trust.',
    sector: 'Real Estate',
    registrar: 'KFin Technologies',
    leadManagers: ['PropShare Capital']
  },
  {
    id: '15',
    name: 'Kaytex Fabrics',
    logo: 'https://media.ipoji.com/ipo/images/kaytex-fabric-logo.jpg',
    offerDate: {
      start: '2025-07-29',
      end: '2025-07-31'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 171,
      max: 180
    },
    lotSize: 800,
    issueSize: '₹60 Crores',
    companyDescription: 'Kaytex Fabrics manufactures and exports textile products.',
    sector: 'Textiles',
    registrar: 'Bigshare Services',
    leadManagers: ['Kaytex Capital']
  },
  {
    id: '16',
    name: 'Aditya Infotech',
    logo: 'https://media.ipoji.com/ipo/images/aditya-infotech-logo.png',
    offerDate: {
      start: '2025-07-29',
      end: '2025-07-31'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 640,
      max: 675
    },
    lotSize: 22,
    gmp: {
      premium: 220,
      percentage: 31.11
    },
    issueSize: '₹400 Crores',
    companyDescription: 'Aditya Infotech provides information technology services and solutions.',
    sector: 'Information Technology',
    registrar: 'Link Intime India',
    leadManagers: ['Aditya Securities', 'ICICI Securities']
  },
  {
    id: '17',
    name: 'Laxmi India Finance',
    logo: 'https://media.ipoji.com/ipo/images/Laxmi.png',
    offerDate: {
      start: '2025-07-29',
      end: '2025-07-31'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 150,
      max: 158
    },
    lotSize: 94,
    gmp: {
      premium: 17,
      percentage: 10.76
    },
    issueSize: '₹250 Crores',
    companyDescription: 'Laxmi India Finance is a non-banking financial company providing various financial services.',
    sector: 'Financial Services',
    registrar: 'KFin Technologies',
    leadManagers: ['Laxmi Capital', 'Kotak Mahindra Capital']
  },
  {
    id: '18',
    name: 'Mehul Colours',
    logo: 'https://media.ipoji.com/ipo/images/mehul-colours-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 68,
      max: 72
    },
    lotSize: 1600,
    issueSize: '₹42 Crores',
    companyDescription: 'Mehul Colours manufactures dyes and pigments for various industries.',
    sector: 'Chemicals',
    registrar: 'Bigshare Services',
    leadManagers: ['Mehul Securities']
  },
  {
    id: '19',
    name: 'B.D.Industries',
    logo: 'https://media.ipoji.com/ipo/images/bd-industries-ipo-logo.png',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 102,
      max: 108
    },
    lotSize: 1200,
    issueSize: '₹55 Crores',
    companyDescription: 'B.D.Industries is engaged in manufacturing industrial products.',
    sector: 'Manufacturing',
    registrar: 'Skyline Financial Services',
    leadManagers: ['BD Capital']
  },
  {
    id: '20',
    name: 'National Securities Depository Limited (NSDL)',
    logo: 'https://media.ipoji.com/ipo/images/nsdl-logo.png',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 800,
      max: 850
    },
    lotSize: 17,
    gmp: {
      premium: 147,
      percentage: 17.29
    },
    issueSize: '₹1200 Crores',
    companyDescription: 'NSDL is India\'s first and largest securities depository.',
    sector: 'Financial Services',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital', 'Axis Capital']
  },
  {
    id: '21',
    name: 'Sri Lotus Developers And Realty',
    logo: 'https://media.ipoji.com/ipo/images/sri-lotus-logo.png',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 140,
      max: 150
    },
    lotSize: 100,
    gmp: {
      premium: 44,
      percentage: 29.33
    },
    issueSize: '₹180 Crores',
    companyDescription: 'Sri Lotus Developers And Realty is engaged in real estate development.',
    sector: 'Real Estate',
    registrar: 'Bigshare Services',
    leadManagers: ['Sri Lotus Capital']
  },
  {
    id: '22',
    name: 'Takyon Networks',
    logo: 'https://media.ipoji.com/ipo/images/takyon-ipo-logo.png',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 51,
      max: 54
    },
    lotSize: 2000,
    issueSize: '₹38 Crores',
    companyDescription: 'Takyon Networks provides networking and telecommunications solutions.',
    sector: 'Telecommunications',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Takyon Capital']
  },
  {
    id: '23',
    name: 'Cash Ur Drive Marketing',
    logo: 'https://media.ipoji.com/ipo/images/cashurdriver-logo.jpeg',
    offerDate: {
      start: '2025-07-31',
      end: '2025-08-04'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 123,
      max: 130
    },
    lotSize: 1000,
    issueSize: '₹52 Crores',
    companyDescription: 'Cash Ur Drive Marketing provides digital marketing and advertising services.',
    sector: 'Marketing & Advertising',
    registrar: 'Bigshare Services',
    leadManagers: ['Cash Ur Drive Securities']
  },
  {
    id: '24',
    name: 'Monika Alcobev',
    logo: 'https://media.ipoji.com/ipo/images/monika-alcodev-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-16',
      end: '2025-07-18'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 271,
      max: 286
    },
    lotSize: 500,
    subscription: {
      times: 4.08,
      retail: 3.5,
      hni: 5.2,
      qib: 3.8
    },
    listingDate: '2025-07-23',
    listingPrice: 288.0,
    issueSize: '₹65 Crores',
    companyDescription: 'Monika Alcobev is engaged in manufacturing and distribution of alcoholic beverages.',
    sector: 'Beverages',
    registrar: 'Bigshare Services',
    leadManagers: ['Monika Securities']
  },
  {
    id: '25',
    name: 'Spunweb Nonwoven',
    logo: 'https://media.ipoji.com/ipo/images/spunweb-logo.png',
    offerDate: {
      start: '2025-07-14',
      end: '2025-07-16'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 90,
      max: 96
    },
    lotSize: 1500,
    subscription: {
      times: 251.39,
      retail: 220.5,
      hni: 285.8,
      qib: 248.2
    },
    listingDate: '2025-07-21',
    listingPrice: 151.0,
    issueSize: '₹48 Crores',
    companyDescription: 'Spunweb Nonwoven manufactures nonwoven fabrics and related products.',
    sector: 'Textiles',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Spunweb Capital']
  },
  {
    id: '26',
    name: 'Anthem Biosciences',
    logo: 'https://media.ipoji.com/ipo/images/anthem-logo.jpg',
    offerDate: {
      start: '2025-07-14',
      end: '2025-07-16'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 540,
      max: 570
    },
    lotSize: 26,
    subscription: {
      times: 63.85,
      retail: 45.2,
      hni: 85.6,
      qib: 60.8
    },
    listingDate: '2025-07-21',
    listingPrice: 723.05,
    issueSize: '₹850 Crores',
    companyDescription: 'Anthem Biosciences is a pharmaceutical company engaged in drug discovery and development.',
    sector: 'Pharmaceuticals',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '27',
    name: 'Smartworks Coworking Spaces',
    logo: 'https://media.ipoji.com/ipo/images/smartworks-ipo-logo.png',
    offerDate: {
      start: '2025-07-10',
      end: '2025-07-14'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 387,
      max: 407
    },
    lotSize: 36,
    subscription: {
      times: 13.45,
      retail: 11.2,
      hni: 16.8,
      qib: 12.5
    },
    listingDate: '2025-07-17',
    listingPrice: 435.0,
    issueSize: '₹600 Crores',
    companyDescription: 'Smartworks Coworking Spaces provides flexible workspace solutions.',
    sector: 'Real Estate',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Axis Capital']
  },
  {
    id: '28',
    name: 'LG Electronics India',
    logo: 'https://media.ipoji.com/ipo/images/lg-electronics-india-logo.png',
    offerDate: {
      start: '2025-08-15',
      end: '2025-08-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 950,
      max: 1000
    },
    lotSize: 15,
    issueSize: '₹5000 Crores',
    companyDescription: 'LG Electronics India is a producer and distributor of home appliances and consumer electronics.',
    sector: 'Consumer Electronics',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital', 'Morgan Stanley']
  },
  {
    id: '29',
    name: 'Hero Motors',
    logo: 'https://media.ipoji.com/ipo/images/hero-motors-logo.jpeg',
    offerDate: {
      start: '2025-09-10',
      end: '2025-09-14'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 450,
      max: 475
    },
    lotSize: 31,
    issueSize: '₹2500 Crores',
    companyDescription: 'Hero Motors is India\'s leading automotive technology company specializing in powertrain solutions.',
    sector: 'Automotive',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Axis Capital', 'JM Financial']
  },
  {
    id: '30',
    name: 'Tata Capital',
    logo: 'https://media.ipoji.com/ipo/images/tata-capital-logo.png',
    offerDate: {
      start: '2025-10-05',
      end: '2025-10-09'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 850,
      max: 900
    },
    lotSize: 16,
    issueSize: '₹8000 Crores',
    companyDescription: 'Tata Capital Limited is a diversified financial services company offering various financial solutions.',
    sector: 'Financial Services',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital', 'Goldman Sachs']
  }
];
