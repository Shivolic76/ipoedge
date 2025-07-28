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
    status: 'listed',
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
    gmp: {
      premium: 2,
      percentage: 3.08
    },
    listingDate: '2025-07-28',
    listingPrice: 67,
    issueSize: '₹14.07 Crores',
    companyDescription: 'Swastika Castal Limited deals in aluminum casting. The company deals mostly in manufacturing, specifically in making high-quality aluminum castings using processes including sand, gravity, and centrifugal casting.',
    sector: 'Manufacturing',
    registrar: 'Accurate Securities & Registry Private Limited',
    leadManagers: ['Horizon Management Private Limited']
  },
  {
    id: '2',
    name: 'Savy Infra & Logistics',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-07-21',
      end: '2025-07-23'
    },
    status: 'listed',
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
      premium: 16.5,
      percentage: 13.75
    },
    listingDate: '2025-07-28',
    listingPrice: 136.5,
    issueSize: '₹75 Crores',
    companyDescription: 'Savy Infra & Logistics Limited provides comprehensive infrastructure development and logistics services including transportation, warehousing, and supply chain management solutions across India.',
    sector: 'Infrastructure',
    registrar: 'Bigshare Services Private Limited',
    leadManagers: ['Savy Capital Markets Private Limited']
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
      times: 250.65,
      retail: 263.01,
      hni: 317.05,
      qib: 179.01
    },
    gmp: {
      premium: 205,
      percentage: 80
    },
    issueSize: '₹93.75 Crores',
    companyDescription: 'Founded in 1992, Monarch Surveyors & Engineering Consultants Limited is a civil engineering consultancy company. The company provides wide-ranging services covering topographic surveys, project management consultancy, design and engineering, geotechnical investigations, land acquisition, GIS mapping, and feasibility studies.',
    sector: 'Engineering Services',
    registrar: 'Bigshare Services Pvt Ltd',
    leadManagers: ['Beeline Capital Advisors Pvt Ltd']
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
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
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
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
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
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
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
  },
  {
    id: '31',
    name: 'TSC India',
    logo: 'https://media.ipoji.com/ipo/images/tsc-india-logo.jpeg',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'closed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 68,
      max: 70
    },
    lotSize: 2000,
    subscription: {
      times: 73.35,
      retail: 65.42,
      hni: 89.28,
      qib: 65.35
    },
    gmp: {
      premium: 10,
      percentage: 14.29
    },
    listingDate: '2025-07-28',
    listingPrice: 80,
    issueSize: '₹35 Crores',
    companyDescription: 'TSC India Limited is engaged in technology services and consulting, providing comprehensive IT solutions including software development, system integration, and digital transformation services to enterprises across various sectors.',
    sector: 'Technology',
    registrar: 'Skyline Financial Services Private Limited',
    leadManagers: ['TSC Securities Private Limited']
  },
  {
    id: '32',
    name: 'Indiqube Spaces',
    logo: 'https://media.ipoji.com/ipo/images/indiqube-spaces-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'closed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 225,
      max: 237
    },
    lotSize: 63,
    subscription: {
      times: 12.33,
      retail: 0,
      hni: 0,
      qib: 0
    },
    gmp: {
      premium: 5,
      percentage: 2.11
    },
    issueSize: '₹450 Crores',
    companyDescription: 'Indiqube Spaces is a leading co-working space provider in India.',
    sector: 'Real Estate',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '33',
    name: 'GNG Electronics',
    logo: 'https://media.ipoji.com/ipo/images/gng-electronics-logo.png',
    offerDate: {
      start: '2025-07-23',
      end: '2025-07-25'
    },
    status: 'closed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 225,
      max: 237
    },
    lotSize: 63,
    subscription: {
      times: 146.84,
      retail: 0,
      hni: 0,
      qib: 0
    },
    gmp: {
      premium: 95,
      percentage: 39.66
    },
    issueSize: '₹320 Crores',
    companyDescription: 'GNG Electronics manufactures electronic components and devices.',
    sector: 'Electronics',
    registrar: 'Link Intime India',
    leadManagers: ['Axis Capital', 'JM Financial']
  },
  {
    id: '34',
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
      times: 1.19,
      retail: 0.95,
      hni: 1.28,
      qib: 1.35
    },
    gmp: {
      premium: 3,
      percentage: 3.33
    },
    issueSize: '₹280 Crores',
    companyDescription: 'Brigade Hotel Ventures Limited operates hotels and hospitality services under the Brigade Group, one of South India\'s leading property developers. The company manages premium hotels and resorts across major cities.',
    sector: 'Hospitality',
    registrar: 'Integrated Registry Management Services Private Limited',
    leadManagers: ['IIFL Securities Limited', 'Ambit Capital Private Limited']
  },
  {
    id: '35',
    name: 'Shree Refrigerations',
    logo: 'https://media.ipoji.com/ipo/images/shree-refrigerations-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'current',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 119,
      max: 125
    },
    lotSize: 1000,
    subscription: {
      times: 1.97,
      retail: 1.85,
      hni: 2.12,
      qib: 1.94
    },
    gmp: {
      premium: 85,
      percentage: 68
    },
    issueSize: '₹40 Crores',
    companyDescription: 'Shree Refrigerations Limited manufactures commercial refrigeration equipment including deep freezers, display counters, water coolers, and industrial refrigeration systems for retail and commercial establishments.',
    sector: 'Manufacturing',
    registrar: 'Bigshare Services Private Limited',
    leadManagers: ['Shree Capital Markets Private Limited']
  },
  {
    id: '36',
    name: 'Patel Chem Specialities',
    logo: 'https://media.ipoji.com/ipo/images/patel-chem-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'current',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 82,
      max: 84
    },
    lotSize: 1600,
    subscription: {
      times: 2.27,
      retail: 0,
      hni: 0,
      qib: 0
    },
    gmp: {
      premium: 42,
      percentage: 45.24
    },
    issueSize: '₹30 Crores',
    companyDescription: 'Patel Chem Specialities is engaged in chemical manufacturing and specialty chemicals.',
    sector: 'Chemicals',
    registrar: 'Bigshare Services',
    leadManagers: ['Patel Capital']
  },
  {
    id: '37',
    name: 'Sellowrap Industries',
    logo: 'https://media.ipoji.com/ipo/images/sk-group-logo.jpg',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'current',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 79,
      max: 83
    },
    lotSize: 1600,
    subscription: {
      times: 1.27,
      retail: 1.15,
      hni: 1.42,
      qib: 1.18
    },
    gmp: {
      premium: 6,
      percentage: 7.23
    },
    issueSize: '₹25 Crores',
    companyDescription: 'Sellowrap Industries Limited is engaged in manufacturing and supply of packaging and wrapping solutions including plastic films, adhesive tapes, and protective packaging materials for various industries.',
    sector: 'Packaging',
    registrar: 'Skyline Financial Services Private Limited',
    leadManagers: ['SK Capital Markets Private Limited']
  },
  {
    id: '38',
    name: 'Shanti Gold International',
    logo: 'https://media.ipoji.com/ipo/images/shanti-gold-ipo-logo.png',
    offerDate: {
      start: '2025-07-25',
      end: '2025-07-29'
    },
    status: 'current',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 189,
      max: 199
    },
    lotSize: 75,
    subscription: {
      times: 1.16,
      retail: 0,
      hni: 0,
      qib: 0
    },
    gmp: {
      premium: 36,
      percentage: 17.59
    },
    issueSize: '₹180 Crores',
    companyDescription: 'Shanti Gold International is engaged in gold trading and jewelry business.',
    sector: 'Precious Metals',
    registrar: 'Link Intime India',
    leadManagers: ['Shanti Securities']
  },
  {
    id: '39',
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
    gmp: {
      premium: 12,
      percentage: 12.5
    },
    issueSize: '₹22 Crores',
    companyDescription: 'Repono Limited is engaged in technology and software services, providing comprehensive IT solutions including software development, system integration, and digital transformation services to enterprises.',
    sector: 'Technology',
    registrar: 'Bigshare Services Private Limited',
    leadManagers: ['Repono Capital Advisors Private Limited']
  },
  {
    id: '40',
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
    gmp: {
      premium: 8,
      percentage: 12.12
    },
    issueSize: '₹18 Crores',
    companyDescription: 'Umiya Mobile Limited is engaged in mobile phone retail and distribution business, providing a wide range of smartphones, accessories, and related services to customers across multiple retail outlets.',
    sector: 'Retail',
    registrar: 'Skyline Financial Services Private Limited',
    leadManagers: ['Umiya Securities Private Limited']
  },
  {
    id: '41',
    name: 'PropShare Titania SM REIT',
    logo: 'https://media.ipoji.com/ipo/images/propshare-titania-logo.png',
    offerDate: {
      start: '2025-07-21',
      end: '2025-07-25'
    },
    status: 'closed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1000000,
      max: 1060000
    },
    lotSize: 1,
    subscription: {
      times: 1.61,
      retail: 0,
      hni: 0,
      qib: 0
    },
    issueSize: '₹500 Crores',
    companyDescription: 'PropShare Titania SM REIT is a small and medium real estate investment trust.',
    sector: 'Real Estate',
    registrar: 'KFin Technologies',
    leadManagers: ['PropShare Capital']
  },
  {
    id: '42',
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
    gmp: {
      premium: 25,
      percentage: 13.89
    },
    issueSize: '₹35 Crores',
    companyDescription: 'Kaytex Fabrics Limited is engaged in textile manufacturing and fabric production, specializing in high-quality cotton and synthetic fabrics for garment manufacturers and textile exporters.',
    sector: 'Textiles',
    registrar: 'Skyline Financial Services Private Limited',
    leadManagers: ['Kaytex Capital Advisors Private Limited']
  },
  {
    id: '43',
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
      premium: 208,
      percentage: 30.37
    },
    issueSize: '₹400 Crores',
    companyDescription: 'Aditya Infotech is a leading IT services and software development company.',
    sector: 'Information Technology',
    registrar: 'Link Intime India',
    leadManagers: ['Aditya Securities', 'ICICI Securities']
  },
  {
    id: '44',
    name: 'Laxmi India Finance',
    logo: 'https://media.ipoji.com/ipo/images/laxmi-india-finance-logo.png',
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
      premium: 14,
      percentage: 8.23
    },
    issueSize: '₹250 Crores',
    companyDescription: 'Laxmi India Finance is a non-banking financial company providing various financial services.',
    sector: 'Financial Services',
    registrar: 'Bigshare Services',
    leadManagers: ['Laxmi Capital', 'Kotak Mahindra Capital']
  },
  {
    id: '45',
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
      min: 850,
      max: 900
    },
    lotSize: 16,
    gmp: {
      premium: 125,
      percentage: 13.89
    },
    issueSize: '₹8000 Crores',
    companyDescription: 'Established in 1997, LG Electronics India Limited is a producer and distributor of home appliances and consumer electronics. The company retail products to B2C and B2B consumers within India and abroad.',
    sector: 'Consumer Electronics',
    registrar: 'Link Intime India Private Limited',
    leadManagers: ['ICICI Securities Limited', 'Kotak Mahindra Capital Company Limited', 'Goldman Sachs (India) Securities Private Limited']
  },
  {
    id: '46',
    name: 'Hero Motors',
    logo: 'https://media.ipoji.com/ipo/images/hero-motors-logo.jpeg',
    offerDate: {
      start: '2025-08-20',
      end: '2025-08-24'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 450,
      max: 475
    },
    lotSize: 31,
    gmp: {
      premium: 85,
      percentage: 17.89
    },
    issueSize: '₹1200 Crores',
    companyDescription: 'Hero Motors began its operations in 2001 with the Alloys and Metallic\'s segment and today is India\'s leading automotive technology company. The company specializes in designing, developing, manufacturing, and supplying highly engineered powertrain solutions for automotive OEM manufacturer across the world.',
    sector: 'Automotive',
    registrar: 'KFin Technologies Private Limited',
    leadManagers: ['Axis Capital Limited', 'JM Financial Limited']
  },
  {
    id: '47',
    name: 'Veritas Finance',
    logo: 'https://media.ipoji.com/ipo/images/veritas-finance-logo.png',
    offerDate: {
      start: '2025-09-15',
      end: '2025-09-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 320,
      max: 340
    },
    lotSize: 44,
    issueSize: '₹600 Crores',
    companyDescription: 'Established in 2015, Veritas Finance Limited is a Reserve Bank of India registered Non-banking financial company (NBF). Being a diversified, retail NBFC, the company mainly provides small business loans to MSMEs and self-employed individuals.',
    sector: 'Financial Services',
    registrar: 'Bigshare Services',
    leadManagers: ['Veritas Capital', 'IIFL Securities']
  },
  {
    id: '48',
    name: 'Imagine Marketing (boAt)',
    logo: 'https://media.ipoji.com/ipo/images/boat-logo.png',
    offerDate: {
      start: '2025-11-10',
      end: '2025-11-14'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 280,
      max: 300
    },
    lotSize: 50,
    issueSize: '₹2000 Crores',
    companyDescription: 'Incorporated in November 2013, Imagine Marketing Limited is a consumer products company with a digital-first approach. The company provides a broad portfolio of high-quality, lifestyle-oriented consumer products at affordable price points, under its brands boAt.',
    sector: 'Consumer Electronics',
    registrar: 'KFin Technologies',
    leadManagers: ['Morgan Stanley', 'Kotak Mahindra Capital', 'ICICI Securities']
  },
  {
    id: '49',
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
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-21',
    listingPrice: 723.05,
    issueSize: '₹800 Crores',
    companyDescription: 'Anthem Biosciences is a pharmaceutical and biotechnology company.',
    sector: 'Pharmaceuticals',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '50',
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
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-17',
    listingPrice: 435,
    issueSize: '₹600 Crores',
    companyDescription: 'Smartworks Coworking Spaces is a leading co-working space provider.',
    sector: 'Real Estate',
    registrar: 'Link Intime India',
    leadManagers: ['Axis Capital', 'JM Financial']
  },
  {
    id: '51',
    name: 'Travel Food Services',
    logo: 'https://media.ipoji.com/ipo/images/travel-food-services-logo.png',
    offerDate: {
      start: '2025-07-07',
      end: '2025-07-09'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1045,
      max: 1100
    },
    lotSize: 13,
    subscription: {
      times: 2.88,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-12',
    listingPrice: 1125,
    issueSize: '₹400 Crores',
    companyDescription: 'Travel Food Services operates food and beverage services in travel and hospitality sector.',
    sector: 'Food & Beverages',
    registrar: 'Bigshare Services',
    leadManagers: ['IIFL Securities']
  },
  {
    id: '52',
    name: 'Crizac Limited',
    logo: 'https://media.ipoji.com/ipo/images/crizac-logo.jpeg',
    offerDate: {
      start: '2025-07-02',
      end: '2025-07-04'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 233,
      max: 245
    },
    lotSize: 61,
    subscription: {
      times: 59.82,
      retail: 45.25,
      hni: 78.45,
      qib: 55.76
    },
    listingDate: '2025-07-07',
    listingPrice: 281.05,
    issueSize: '₹180 Crores',
    companyDescription: 'Crizac Limited is engaged in manufacturing and trading activities.',
    sector: 'Manufacturing',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Crizac Capital']
  },
  {
    id: '53',
    name: 'Indogulf Cropsciences',
    logo: 'https://media.ipoji.com/ipo/images/indogulf-cropsciences-ipo-logo.png',
    offerDate: {
      start: '2025-06-26',
      end: '2025-06-30'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 105,
      max: 111
    },
    lotSize: 135,
    subscription: {
      times: 25.91,
      retail: 18.45,
      hni: 35.28,
      qib: 24.05
    },
    listingDate: '2025-07-03',
    listingPrice: 111,
    issueSize: '₹150 Crores',
    companyDescription: 'Indogulf Cropsciences is engaged in agricultural chemicals and crop protection.',
    sector: 'Chemicals',
    registrar: 'KFin Technologies',
    leadManagers: ['Indogulf Securities']
  },
  {
    id: '54',
    name: 'HDB Financial Services',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-06-25',
      end: '2025-06-27'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 700,
      max: 740
    },
    lotSize: 20,
    subscription: {
      times: 16.69,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-01',
    listingPrice: 835,
    issueSize: '₹1200 Crores',
    companyDescription: 'HDB Financial Services is a non-banking financial company providing various financial services.',
    sector: 'Financial Services',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '55',
    name: 'Sambhv Steel Tubes',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-06-25',
      end: '2025-06-27'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 77,
      max: 82
    },
    lotSize: 183,
    subscription: {
      times: 28.46,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-01',
    listingPrice: 110,
    issueSize: '₹120 Crores',
    companyDescription: 'Sambhv Steel Tubes is engaged in manufacturing of steel tubes and pipes.',
    sector: 'Steel',
    registrar: 'Bigshare Services',
    leadManagers: ['Sambhv Capital']
  },
  {
    id: '56',
    name: 'Ellenbarrie Industrial Gases',
    logo: 'https://media.ipoji.com/ipo/images/ellenbarrie-industrial-logo.png',
    offerDate: {
      start: '2025-06-24',
      end: '2025-06-26'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 380,
      max: 400
    },
    lotSize: 37,
    subscription: {
      times: 22.18,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-29',
    listingPrice: 486,
    issueSize: '₹300 Crores',
    companyDescription: 'Ellenbarrie Industrial Gases is engaged in manufacturing and supply of industrial gases.',
    sector: 'Chemicals',
    registrar: 'KFin Technologies',
    leadManagers: ['Ellenbarrie Securities']
  },
  {
    id: '57',
    name: 'Globe Civil Projects',
    logo: 'https://media.ipoji.com/ipo/images/globe-civil-logo.png',
    offerDate: {
      start: '2025-06-24',
      end: '2025-06-26'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 67,
      max: 71
    },
    lotSize: 211,
    subscription: {
      times: 85.93,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-29',
    listingPrice: 90,
    issueSize: '₹100 Crores',
    companyDescription: 'Globe Civil Projects is engaged in civil construction and infrastructure projects.',
    sector: 'Construction',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Globe Securities']
  },
  {
    id: '58',
    name: 'Kalpataru Limited',
    logo: 'https://media.ipoji.com/ipo/images/kalpataru-logo.png',
    offerDate: {
      start: '2025-06-24',
      end: '2025-06-26'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 387,
      max: 414
    },
    lotSize: 36,
    subscription: {
      times: 2.26,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-29',
    listingPrice: 414,
    issueSize: '₹250 Crores',
    companyDescription: 'Kalpataru Limited is engaged in power transmission and infrastructure projects.',
    sector: 'Infrastructure',
    registrar: 'Link Intime India',
    leadManagers: ['Kalpataru Capital']
  },
  {
    id: '59',
    name: 'Monika Alcobev',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
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
    lotSize: 525,
    subscription: {
      times: 4.08,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-23',
    listingPrice: 288,
    issueSize: '₹45 Crores',
    companyDescription: 'Monika Alcobev is engaged in alcoholic beverage manufacturing and distribution.',
    sector: 'Beverages',
    registrar: 'Bigshare Services',
    leadManagers: ['Monika Capital']
  },
  {
    id: '60',
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
    listingPrice: 151,
    issueSize: '₹48 Crores',
    companyDescription: 'Spunweb Nonwoven manufactures nonwoven fabrics and related products.',
    sector: 'Textiles',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Spunweb Capital']
  },
  {
    id: '61',
    name: 'CFF Fluid Control Limited FPO',
    logo: 'https://media.ipoji.com/ipo/images/cff-fluid-control-logo.png',
    offerDate: {
      start: '2025-07-09',
      end: '2025-07-11'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: 585,
    lotSize: 256,
    subscription: {
      times: 8.51,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-14',
    listingPrice: 621,
    issueSize: '₹35 Crores',
    companyDescription: 'CFF Fluid Control Limited is engaged in fluid control systems and equipment.',
    sector: 'Engineering',
    registrar: 'KFin Technologies',
    leadManagers: ['CFF Capital']
  },
  {
    id: '62',
    name: 'Asston Pharmaceuticals',
    logo: 'https://media.ipoji.com/ipo/images/asston-pharmaceuticals-ipo-logo.png',
    offerDate: {
      start: '2025-07-09',
      end: '2025-07-11'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 115,
      max: 123
    },
    lotSize: 1220,
    subscription: {
      times: 186.55,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-14',
    listingPrice: 119,
    issueSize: '₹28 Crores',
    companyDescription: 'Asston Pharmaceuticals is engaged in pharmaceutical manufacturing and distribution.',
    sector: 'Pharmaceuticals',
    registrar: 'Bigshare Services',
    leadManagers: ['Asston Capital']
  },
  {
    id: '63',
    name: 'GLEN Industries',
    logo: 'https://media.ipoji.com/ipo/images/glen-industries-ipo-logo.jpg',
    offerDate: {
      start: '2025-07-08',
      end: '2025-07-10'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 92,
      max: 97
    },
    lotSize: 1546,
    subscription: {
      times: 260.28,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-13',
    listingPrice: 157,
    issueSize: '₹22 Crores',
    companyDescription: 'GLEN Industries is engaged in industrial manufacturing and engineering.',
    sector: 'Manufacturing',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Glen Capital']
  },
  {
    id: '64',
    name: 'Smarten Power Systems',
    logo: 'https://media.ipoji.com/ipo/images/smarten-power-logo.png',
    offerDate: {
      start: '2025-07-07',
      end: '2025-07-09'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: 100,
    lotSize: 1500,
    subscription: {
      times: 5.51,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-12',
    listingPrice: 144,
    issueSize: '₹25 Crores',
    companyDescription: 'Smarten Power Systems is engaged in power systems and electrical equipment.',
    sector: 'Power',
    registrar: 'KFin Technologies',
    leadManagers: ['Smarten Capital']
  },
  {
    id: '65',
    name: 'Chemkart India',
    logo: 'https://media.ipoji.com/ipo/images/chemkart-ipo-logo.png',
    offerDate: {
      start: '2025-07-07',
      end: '2025-07-09'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 236,
      max: 248
    },
    lotSize: 605,
    subscription: {
      times: 5.91,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-12',
    listingPrice: 250,
    issueSize: '₹32 Crores',
    companyDescription: 'Chemkart India is engaged in chemical trading and distribution.',
    sector: 'Chemicals',
    registrar: 'Bigshare Services',
    leadManagers: ['Chemkart Capital']
  },
  {
    id: '66',
    name: 'Meta Infotech',
    logo: 'https://media.ipoji.com/ipo/images/meta-infotech-ipo-logo.png',
    offerDate: {
      start: '2025-07-04',
      end: '2025-07-08'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 153,
      max: 161
    },
    lotSize: 930,
    subscription: {
      times: 166.94,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-11',
    listingPrice: 225,
    issueSize: '₹26 Crores',
    companyDescription: 'Meta Infotech is engaged in information technology services and solutions.',
    sector: 'Information Technology',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Meta Capital']
  },
  {
    id: '67',
    name: 'Cryogenic OGS',
    logo: 'https://media.ipoji.com/ipo/images/cryogenic-ogs-logo.jpg',
    offerDate: {
      start: '2025-07-03',
      end: '2025-07-07'
    },
    status: 'listed',
    exchange: 'BSE SME',
    category: 'sme',
    offerPrice: {
      min: 44,
      max: 47
    },
    lotSize: 3191,
    subscription: {
      times: 694.90,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-10',
    listingPrice: 89.3,
    issueSize: '₹18 Crores',
    companyDescription: 'Cryogenic OGS is engaged in cryogenic equipment and gas systems.',
    sector: 'Engineering',
    registrar: 'KFin Technologies',
    leadManagers: ['Cryogenic Capital']
  },
  {
    id: '68',
    name: 'Happy Square Outsourcing Services (White Force)',
    logo: 'https://media.ipoji.com/ipo/images/white-force-logo.jpeg',
    offerDate: {
      start: '2025-07-03',
      end: '2025-07-07'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 72,
      max: 76
    },
    lotSize: 1973,
    subscription: {
      times: 3.58,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-10',
    listingPrice: 77,
    issueSize: '₹20 Crores',
    companyDescription: 'Happy Square Outsourcing Services provides outsourcing and manpower services.',
    sector: 'Services',
    registrar: 'Bigshare Services',
    leadManagers: ['White Force Capital']
  },
  {
    id: '69',
    name: 'SK Finance',
    logo: 'https://media.ipoji.com/ipo/images/sk-finance-logo.jpeg',
    offerDate: {
      start: '2025-09-01',
      end: '2025-09-05'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 280,
      max: 300
    },
    lotSize: 50,
    issueSize: '₹800 Crores',
    companyDescription: 'Incorporated in 1994, SK Finance Limited is a non-deposit-taking middle-layer Non-Banking Financial Company (NBFC-ML). The business deals in two main lending segments: Vehicle Financing MSME Financing.',
    sector: 'Financial Services',
    registrar: 'Link Intime India',
    leadManagers: ['SK Securities', 'IIFL Securities']
  },
  {
    id: '70',
    name: 'Vikran Engineering',
    logo: 'https://media.ipoji.com/ipo/images/vikran-engineering-logo.png',
    offerDate: {
      start: '2025-08-25',
      end: '2025-08-29'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 180,
      max: 190
    },
    lotSize: 78,
    issueSize: '₹350 Crores',
    companyDescription: 'Incorporated in 2008, Vikran Engineering Limited is an Engineering, Procurement, and Construction (EPC) entity. The projects of the company include underground water distribution and surface water extraction, overhead tanks, and distribution networks.',
    sector: 'Engineering',
    registrar: 'KFin Technologies',
    leadManagers: ['Vikran Capital', 'Axis Capital']
  },
  {
    id: '71',
    name: 'Solarworld Energy Solutions',
    logo: 'https://media.ipoji.com/ipo/images/solarworld-energy-logo.png',
    offerDate: {
      start: '2025-08-10',
      end: '2025-08-14'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 120,
      max: 130
    },
    lotSize: 115,
    issueSize: '₹200 Crores',
    companyDescription: 'SolarWorld Energy Solutions Limited was founded in 2013 and provides solar energy solution services that deliver engineering, procurement, and construction (EPC) for solar power projects.',
    sector: 'Renewable Energy',
    registrar: 'Bigshare Services',
    leadManagers: ['Solarworld Capital']
  },
  {
    id: '72',
    name: 'Patel Retail',
    logo: 'https://media.ipoji.com/ipo/images/patel-retail-logo.png',
    offerDate: {
      start: '2025-08-05',
      end: '2025-08-09'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 95,
      max: 105
    },
    lotSize: 142,
    issueSize: '₹180 Crores',
    companyDescription: 'Patel Retail Limited, established in 2008, is a leading retail supermarket chain primarily serving tier-III cities and suburban areas, particularly in Maharashtra\'s Thane and Raigad districts.',
    sector: 'Retail',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Patel Capital']
  },
  {
    id: '73',
    name: 'IndiaFirst Life Insurance Company',
    logo: 'https://media.ipoji.com/ipo/images/india-first-logo.png',
    offerDate: {
      start: '2025-10-15',
      end: '2025-10-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 400,
      max: 425
    },
    lotSize: 35,
    gmp: {
      premium: 55,
      percentage: 12.94
    },
    issueSize: '₹1500 Crores',
    companyDescription: 'IndiaFirst Life Insurance started operating in 2009 as a private life insurance company. The Indian private life insurance firm was one of the fastest growing regarding New Business IRP in fiscal 2022.',
    sector: 'Insurance',
    registrar: 'Link Intime India Private Limited',
    leadManagers: ['ICICI Securities Limited', 'Kotak Mahindra Capital Company Limited']
  },
  {
    id: '74',
    name: 'Avanse Financial Services',
    logo: 'https://media.ipoji.com/ipo/images/avanse-financial-logo.png',
    offerDate: {
      start: '2025-09-20',
      end: '2025-09-24'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 220,
      max: 235
    },
    lotSize: 63,
    gmp: {
      premium: 28,
      percentage: 11.91
    },
    issueSize: '₹500 Crores',
    companyDescription: 'Avanse Financial Services Limited is an education-oriented NBFC leader in India. Its assets under management are the second largest in the market, and its ranking for loan disbursements and profit also leads within its peer group.',
    sector: 'Financial Services',
    registrar: 'KFin Technologies Private Limited',
    leadManagers: ['Avanse Capital Markets Limited', 'JM Financial Limited']
  },
  {
    id: '75',
    name: 'Credila Financial Services',
    logo: 'https://media.ipoji.com/ipo/images/credila-financial-logo.jpeg',
    offerDate: {
      start: '2025-10-01',
      end: '2025-10-05'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 180,
      max: 195
    },
    lotSize: 76,
    gmp: {
      premium: 22,
      percentage: 11.28
    },
    issueSize: '₹400 Crores',
    companyDescription: 'Established in 2006, Credila Financial Services Limited is a non-banking financial institution (NBFC) dealing in education loans. The organization deals in providing finance to students for higher studies in India and overseas.',
    sector: 'Financial Services',
    registrar: 'Bigshare Services Private Limited',
    leadManagers: ['Credila Capital Markets Limited', 'IIFL Securities Limited']
  },
  {
    id: '76',
    name: 'Polymatech Electronics',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-11-05',
      end: '2025-11-09'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 160,
      max: 175
    },
    lotSize: 85,
    issueSize: '₹300 Crores',
    companyDescription: 'Polymatech Electronics Limited was originally incorporated as Polymatech Electronics Private Limited on May 29, 2007. The company is the first opto-semiconductor chips manufacturer in India.',
    sector: 'Electronics',
    registrar: 'KFin Technologies',
    leadManagers: ['Polymatech Capital']
  },
  {
    id: '77',
    name: 'SMPP Limited',
    logo: 'https://media.ipoji.com/ipo/images/smpp-logo.png',
    offerDate: {
      start: '2025-11-15',
      end: '2025-11-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 240,
      max: 260
    },
    lotSize: 57,
    issueSize: '₹450 Crores',
    companyDescription: 'SMPP Limited is a manufacturer and designer of defence equipment. The company produces ammunition parts, personal protection items and protection kits for land, air and sea platforms.',
    sector: 'Defence',
    registrar: 'Link Intime India',
    leadManagers: ['SMPP Capital', 'Axis Capital']
  },
  {
    id: '78',
    name: 'Paras Healthcare',
    logo: 'https://media.ipoji.com/ipo/images/paras-healthcare-logo.jpeg',
    offerDate: {
      start: '2025-12-01',
      end: '2025-12-05'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 320,
      max: 340
    },
    lotSize: 44,
    issueSize: '₹800 Crores',
    companyDescription: 'Established in1987, Paras Health is a healthcare service provider having a chain of hospitals spread over North India, Bihar, and Jharkhand. As of March 31, 2024, Paras Health had a combined bed capacity of 2,135 beds.',
    sector: 'Healthcare',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Paras Capital', 'ICICI Securities']
  },
  {
    id: '79',
    name: 'Capital Small Finance Bank Limited',
    logo: 'https://media.ipoji.com/ipo/images/capital-small-finance-bank-logo.png',
    offerDate: {
      start: '2025-12-10',
      end: '2025-12-14'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 445,
      max: 468
    },
    lotSize: 32,
    issueSize: '₹1000 Crores',
    companyDescription: 'Capital Small Finance Bank Limited is a small finance bank. In 2015, Capital SFB became the first non-NBFC microfinance entity to receive the SFB license. The company has a strong presence in semi-urban and rural areas.',
    sector: 'Banking',
    registrar: 'Link Intime India',
    leadManagers: ['Capital Securities', 'Kotak Mahindra Capital']
  },
  {
    id: '80',
    name: 'Arisinfra Solutions',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-06-18',
      end: '2025-06-20'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 210,
      max: 222
    },
    lotSize: 67,
    subscription: {
      times: 2.65,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-23',
    listingPrice: 205,
    issueSize: '₹150 Crores',
    companyDescription: 'Arisinfra Solutions is engaged in infrastructure development and construction projects.',
    sector: 'Infrastructure',
    registrar: 'Bigshare Services',
    leadManagers: ['Arisinfra Capital']
  },
  {
    id: '81',
    name: 'Oswal Pumps',
    logo: 'https://media.ipoji.com/ipo/images/oswal-pumps-logo.png',
    offerDate: {
      start: '2025-06-13',
      end: '2025-06-17'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 584,
      max: 614
    },
    lotSize: 24,
    subscription: {
      times: 34.42,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-20',
    listingPrice: 634,
    issueSize: '₹250 Crores',
    companyDescription: 'Oswal Pumps is engaged in manufacturing and supply of pumps and pumping solutions.',
    sector: 'Manufacturing',
    registrar: 'KFin Technologies',
    leadManagers: ['Oswal Capital']
  },
  {
    id: '82',
    name: 'Scoda Tubes',
    logo: 'https://media.ipoji.com/ipo/images/scoda-tubes-logo.jpeg',
    offerDate: {
      start: '2025-05-28',
      end: '2025-05-30'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 130,
      max: 140
    },
    lotSize: 107,
    subscription: {
      times: 53.78,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-02',
    listingPrice: 140,
    issueSize: '₹120 Crores',
    companyDescription: 'Scoda Tubes is engaged in manufacturing of steel tubes and related products.',
    sector: 'Steel',
    registrar: 'Bigshare Services',
    leadManagers: ['Scoda Capital']
  },
  {
    id: '83',
    name: 'Prostarm Info Systems',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-05-27',
      end: '2025-05-29'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 95,
      max: 105
    },
    lotSize: 142,
    subscription: {
      times: 97.19,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-06-01',
    listingPrice: 120,
    issueSize: '₹80 Crores',
    companyDescription: 'Prostarm Info Systems is engaged in information technology services and solutions.',
    sector: 'Information Technology',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Prostarm Capital']
  },
  {
    id: '84',
    name: 'Aegis Vopak Terminals',
    logo: 'https://media.ipoji.com/ipo/images/aegis-vopak-terminals-logo.png',
    offerDate: {
      start: '2025-05-26',
      end: '2025-05-28'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 223,
      max: 235
    },
    lotSize: 63,
    subscription: {
      times: 2.09,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-05-31',
    listingPrice: 220,
    issueSize: '₹180 Crores',
    companyDescription: 'Aegis Vopak Terminals is engaged in terminal operations and storage services.',
    sector: 'Logistics',
    registrar: 'Link Intime India',
    leadManagers: ['Aegis Capital']
  },
  {
    id: '85',
    name: 'Silky Overseas',
    logo: 'https://media.ipoji.com/ipo/images/silky-overseas-logo.jpg',
    offerDate: {
      start: '2025-06-30',
      end: '2025-07-02'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 153,
      max: 161
    },
    lotSize: 930,
    subscription: {
      times: 170.21,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-05',
    listingPrice: 171,
    issueSize: '₹28 Crores',
    companyDescription: 'Silky Overseas is engaged in textile manufacturing and export.',
    sector: 'Textiles',
    registrar: 'KFin Technologies',
    leadManagers: ['Silky Capital']
  },
  {
    id: '86',
    name: 'Pushpa Jewellers',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-06-30',
      end: '2025-07-02'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 143,
      max: 147
    },
    lotSize: 1020,
    subscription: {
      times: 2.52,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-05',
    listingPrice: 112,
    issueSize: '₹22 Crores',
    companyDescription: 'Pushpa Jewellers is engaged in jewelry manufacturing and retail.',
    sector: 'Jewelry',
    registrar: 'Bigshare Services',
    leadManagers: ['Pushpa Capital']
  },
  {
    id: '87',
    name: 'Cedaar Textile',
    logo: 'https://media.ipoji.com/ipo/images/cedaar-textile-logo.jpeg',
    offerDate: {
      start: '2025-06-30',
      end: '2025-07-02'
    },
    status: 'listed',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 130,
      max: 140
    },
    lotSize: 1071,
    subscription: {
      times: 12.32,
      retail: 0,
      hni: 0,
      qib: 0
    },
    listingDate: '2025-07-05',
    listingPrice: 119,
    issueSize: '₹25 Crores',
    companyDescription: 'Cedaar Textile is engaged in textile manufacturing and processing.',
    sector: 'Textiles',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Cedaar Capital']
  },
  {
    id: '88',
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
    issueSize: '₹15 Crores',
    companyDescription: 'Takyon Networks is engaged in networking and telecommunications solutions.',
    sector: 'Telecommunications',
    registrar: 'KFin Technologies',
    leadManagers: ['Takyon Capital']
  },
  {
    id: '89',
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
    gmp: {
      premium: 15,
      percentage: 20.83
    },
    issueSize: '₹18 Crores',
    companyDescription: 'Mehul Colours Limited is engaged in manufacturing of colors, pigments, and specialty chemicals for textile, paint, and plastic industries, providing high-quality colorants and chemical solutions.',
    sector: 'Chemicals',
    registrar: 'Bigshare Services Private Limited',
    leadManagers: ['Mehul Capital Advisors Private Limited']
  },
  {
    id: '90',
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
    gmp: {
      premium: 18,
      percentage: 16.67
    },
    issueSize: '₹22 Crores',
    companyDescription: 'B.D.Industries Limited is engaged in industrial manufacturing and engineering, specializing in precision components, machinery parts, and engineering solutions for various industrial applications.',
    sector: 'Manufacturing',
    registrar: 'Skyline Financial Services Private Limited',
    leadManagers: ['BD Capital Markets Private Limited']
  },
  {
    id: '91',
    name: 'M&B Engineering',
    logo: 'https://media.ipoji.com/ipo/images/mb-engineering-ipo-logo.png',
    offerDate: {
      start: '2025-07-30',
      end: '2025-08-01'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 366,
      max: 385
    },
    lotSize: 38,
    gmp: {
      premium: 32,
      percentage: 8.05
    },
    issueSize: '₹280 Crores',
    companyDescription: 'M&B Engineering is engaged in engineering and construction services.',
    sector: 'Engineering',
    registrar: 'Link Intime India',
    leadManagers: ['MB Capital', 'Axis Capital']
  },
  {
    id: '92',
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
      min: 760,
      max: 800
    },
    lotSize: 18,
    gmp: {
      premium: 137,
      percentage: 16.88
    },
    issueSize: '₹1500 Crores',
    companyDescription: 'National Securities Depository Limited (NSDL) is India\'s first and largest securities depository.',
    sector: 'Financial Services',
    registrar: 'KFin Technologies',
    leadManagers: ['ICICI Securities', 'Kotak Mahindra Capital', 'Goldman Sachs']
  },
  {
    id: '93',
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
      premium: 32,
      percentage: 20.67
    },
    issueSize: '₹200 Crores',
    companyDescription: 'Sri Lotus Developers And Realty is engaged in real estate development and construction.',
    sector: 'Real Estate',
    registrar: 'Bigshare Services',
    leadManagers: ['Sri Lotus Capital']
  },
  {
    id: '94',
    name: 'Cash Ur Drive Marketing',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
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
    issueSize: '₹20 Crores',
    companyDescription: 'Cash Ur Drive Marketing is engaged in automotive marketing and services.',
    sector: 'Automotive',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Cash Ur Drive Capital']
  },
  {
    id: '95',
    name: 'Renol Polychem',
    logo: 'https://media.ipoji.com/ipo/images/renol-logo.jpeg',
    offerDate: {
      start: '2025-07-31',
      end: '2025-08-04'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 100,
      max: 105
    },
    lotSize: 1200,
    issueSize: '₹18 Crores',
    companyDescription: 'Renol Polychem is engaged in polymer and chemical manufacturing.',
    sector: 'Chemicals',
    registrar: 'KFin Technologies',
    leadManagers: ['Renol Capital']
  },
  {
    id: '96',
    name: 'Flysbs Aviation',
    logo: 'https://media.ipoji.com/ipo/images/flysbs-logo.jpeg',
    offerDate: {
      start: '2025-08-01',
      end: '2025-08-05'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 85,
      max: 90
    },
    lotSize: 1600,
    issueSize: '₹25 Crores',
    companyDescription: 'Flysbs Aviation is engaged in aviation services and aircraft maintenance.',
    sector: 'Aviation',
    registrar: 'Bigshare Services',
    leadManagers: ['Flysbs Capital']
  },
  {
    id: '97',
    name: 'Parth Electricals & Engineering',
    logo: 'https://media.ipoji.com/ipo/images/parth-engineering-logo.jpeg',
    offerDate: {
      start: '2025-08-04',
      end: '2025-08-06'
    },
    status: 'upcoming',
    exchange: 'NSE SME',
    category: 'sme',
    offerPrice: {
      min: 75,
      max: 80
    },
    lotSize: 1875,
    issueSize: '₹22 Crores',
    companyDescription: 'Parth Electricals & Engineering is engaged in electrical equipment manufacturing.',
    sector: 'Electrical',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Parth Capital']
  },
  {
    id: '98',
    name: 'Highway Infrastructure',
    logo: 'https://media.ipoji.com/ipo/images/highway-infrastructure-logo.png',
    offerDate: {
      start: '2025-08-05',
      end: '2025-08-07'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 65,
      max: 70
    },
    lotSize: 211,
    gmp: {
      premium: 24,
      percentage: 32.86
    },
    issueSize: '₹150 Crores',
    companyDescription: 'Highway Infrastructure is engaged in highway construction and infrastructure development.',
    sector: 'Infrastructure',
    registrar: 'Link Intime India',
    leadManagers: ['Highway Capital', 'JM Financial']
  },
  {
    id: '99',
    name: 'Hero FinCorp',
    logo: 'https://media.ipoji.com/ipo/images/hero-finance-logo.png',
    offerDate: {
      start: '2025-12-15',
      end: '2025-12-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 380,
      max: 400
    },
    lotSize: 37,
    gmp: {
      premium: 45,
      percentage: 11.25
    },
    issueSize: '₹1200 Crores',
    companyDescription: 'Hero FinCorp Limited is a leading non-banking financial company providing various financial services including vehicle financing, personal loans, and business loans across India.',
    sector: 'Financial Services',
    registrar: 'KFin Technologies Private Limited',
    leadManagers: ['Hero Capital Markets Limited', 'ICICI Securities Limited']
  },
  {
    id: '100',
    name: 'JSW Cement',
    logo: 'https://media.ipoji.com/ipo/images/jsw-cement-logo.png',
    offerDate: {
      start: '2025-12-20',
      end: '2025-12-24'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 450,
      max: 475
    },
    lotSize: 31,
    gmp: {
      premium: 65,
      percentage: 13.68
    },
    issueSize: '₹2000 Crores',
    companyDescription: 'JSW Cement Limited is one of India\'s leading cement manufacturers with a strong presence across the country, offering high-quality cement products for construction and infrastructure projects.',
    sector: 'Cement',
    registrar: 'Link Intime India Private Limited',
    leadManagers: ['JSW Capital Markets Limited', 'Kotak Mahindra Capital Company Limited', 'Morgan Stanley India Company Private Limited']
  },
  {
    id: '101',
    name: 'Reliance Retail Ventures',
    logo: 'https://media.ipoji.com/ipo/images/reliance-retail-logo.png',
    offerDate: {
      start: '2026-01-15',
      end: '2026-01-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 850,
      max: 900
    },
    lotSize: 16,
    gmp: {
      premium: 180,
      percentage: 20
    },
    issueSize: '₹15000 Crores',
    companyDescription: 'Reliance Retail Ventures Limited is India\'s largest retailer with a pan-India presence across multiple retail formats including grocery, fashion, electronics, and digital commerce.',
    sector: 'Retail',
    registrar: 'Link Intime India Private Limited',
    leadManagers: ['Morgan Stanley India Company Private Limited', 'Goldman Sachs (India) Securities Private Limited', 'ICICI Securities Limited']
  },
  {
    id: '102',
    name: 'Bajaj Housing Finance',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-09-10',
      end: '2025-09-14'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 320,
      max: 340
    },
    lotSize: 44,
    issueSize: '₹800 Crores',
    companyDescription: 'Bajaj Housing Finance Limited is a housing finance company providing home loans and related financial services.',
    sector: 'Financial Services',
    registrar: 'KFin Technologies',
    leadManagers: ['Bajaj Capital', 'Axis Capital']
  },
  {
    id: '103',
    name: 'Swiggy Limited',
    logo: 'https://media.ipoji.com/ipo/images/swiggy-logo.png',
    offerDate: {
      start: '2025-11-20',
      end: '2025-11-24'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 280,
      max: 300
    },
    lotSize: 50,
    issueSize: '₹3000 Crores',
    companyDescription: 'Swiggy Limited is India\'s leading food delivery and quick commerce platform.',
    sector: 'Technology',
    registrar: 'Bigshare Services',
    leadManagers: ['Morgan Stanley', 'Kotak Mahindra Capital', 'ICICI Securities']
  },
  {
    id: '104',
    name: 'Ola Electric Mobility',
    logo: 'https://media.ipoji.com/ipo/images/ola-electric-logo.jpg',
    offerDate: {
      start: '2025-08-15',
      end: '2025-08-19'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 180,
      max: 200
    },
    lotSize: 75,
    issueSize: '₹1500 Crores',
    companyDescription: 'Ola Electric Mobility Limited is India\'s leading electric vehicle manufacturer focusing on electric scooters.',
    sector: 'Electric Vehicles',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Ola Capital', 'Goldman Sachs']
  },
  {
    id: '105',
    name: 'Zomato Media',
    logo: 'https://media.ipoji.com/ipo/images/zomato-media-logo.png',
    offerDate: {
      start: '2025-04-15',
      end: '2025-04-19'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 72,
      max: 76
    },
    lotSize: 195,
    subscription: {
      times: 38.25,
      retail: 7.45,
      hni: 51.8,
      qib: 41.2
    },
    gmp: {
      premium: 39,
      percentage: 51.32
    },
    listingDate: '2025-04-23',
    listingPrice: 115,
    issueSize: '₹9375 Crores',
    companyDescription: 'Zomato Media Limited is India\'s leading food delivery and restaurant discovery platform, connecting millions of customers with restaurants and delivery partners across the country.',
    sector: 'Technology',
    registrar: 'Link Intime India Private Limited',
    leadManagers: ['Kotak Mahindra Capital Company Limited', 'Morgan Stanley India Company Private Limited', 'Credit Suisse Securities (India) Private Limited']
  },
  {
    id: '106',
    name: 'Nykaa E-Retail',
    logo: 'https://media.ipoji.com/ipo/images/nykaa-logo.png',
    offerDate: {
      start: '2025-03-28',
      end: '2025-04-01'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1085,
      max: 1125
    },
    lotSize: 13,
    subscription: {
      times: 81.78,
      retail: 12.2,
      hni: 99.3,
      qib: 92.4
    },
    gmp: {
      premium: 893,
      percentage: 79.38
    },
    listingDate: '2025-04-10',
    listingPrice: 2018,
    issueSize: '₹5352 Crores',
    companyDescription: 'Nykaa E-Retail Limited is India\'s leading beauty and personal care e-commerce platform, offering a wide range of beauty, wellness, and fashion products.',
    sector: 'E-commerce',
    registrar: 'KFin Technologies Private Limited',
    leadManagers: ['Morgan Stanley India Company Private Limited', 'Kotak Mahindra Capital Company Limited', 'BofA Securities India Limited']
  },
  {
    id: '107',
    name: 'Paytm One97 Communications',
    logo: 'https://media.ipoji.com/ipo/images/paytm-logo.png',
    offerDate: {
      start: '2025-03-08',
      end: '2025-03-12'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 2080,
      max: 2150
    },
    lotSize: 6,
    subscription: {
      times: 1.89,
      retail: 1.66,
      hni: 2.79,
      qib: 2.79
    },
    listingDate: '2025-03-18',
    listingPrice: 1560,
    issueSize: '₹18300 Crores',
    companyDescription: 'Paytm One97 Communications Limited is India\'s leading digital payments and financial services company.',
    sector: 'Fintech',
    registrar: 'Link Intime India',
    leadManagers: ['Morgan Stanley', 'Goldman Sachs', 'JP Morgan']
  },
  {
    id: '108',
    name: 'PolicyBazaar PB Fintech',
    logo: 'https://media.ipoji.com/ipo/images/policybazaar-logo.png',
    offerDate: {
      start: '2025-02-01',
      end: '2025-02-05'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 940,
      max: 980
    },
    lotSize: 15,
    subscription: {
      times: 16.59,
      retail: 2.95,
      hni: 4.15,
      qib: 66.95
    },
    listingDate: '2025-02-15',
    listingPrice: 1150,
    issueSize: '₹5710 Crores',
    companyDescription: 'PB Fintech Limited operates PolicyBazaar, India\'s largest online insurance marketplace.',
    sector: 'Insurance Technology',
    registrar: 'KFin Technologies',
    leadManagers: ['Morgan Stanley', 'Kotak Mahindra Capital', 'ICICI Securities']
  },
  {
    id: '109',
    name: 'Delhivery Limited',
    logo: 'https://media.ipoji.com/ipo/images/delhivery-logo.png',
    offerDate: {
      start: '2025-01-12',
      end: '2025-01-16'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 462,
      max: 487
    },
    lotSize: 30,
    subscription: {
      times: 1.63,
      retail: 0.92,
      hni: 2.21,
      qib: 2.64
    },
    listingDate: '2025-01-24',
    listingPrice: 311,
    issueSize: '₹5235 Crores',
    companyDescription: 'Delhivery Limited is India\'s largest and fastest-growing fully-integrated player in the logistics space.',
    sector: 'Logistics',
    registrar: 'Bigshare Services',
    leadManagers: ['Morgan Stanley', 'Kotak Mahindra Capital', 'BofA Securities']
  },
  {
    id: '110',
    name: 'Mobikwik One MobiKwik Systems',
    logo: 'https://media.ipoji.com/ipo/images/ipo.png',
    offerDate: {
      start: '2025-12-07',
      end: '2025-12-11'
    },
    status: 'upcoming',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 265,
      max: 279
    },
    lotSize: 53,
    issueSize: '₹700 Crores',
    companyDescription: 'One MobiKwik Systems Limited is a leading fintech company providing digital payment and financial services.',
    sector: 'Fintech',
    registrar: 'Skyline Financial Services',
    leadManagers: ['Mobikwik Capital', 'Axis Capital']
  },
  {
    id: '111',
    name: 'Fino Payments Bank',
    logo: 'https://media.ipoji.com/ipo/images/fino-payments-logo.png',
    offerDate: {
      start: '2024-12-29',
      end: '2025-01-02'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 560,
      max: 577
    },
    lotSize: 25,
    subscription: {
      times: 2.37,
      retail: 1.26,
      hni: 0.73,
      qib: 4.12
    },
    listingDate: '2025-01-12',
    listingPrice: 529,
    issueSize: '₹1300 Crores',
    companyDescription: 'Fino Payments Bank Limited is India\'s leading payments bank providing banking services to the underserved.',
    sector: 'Banking',
    registrar: 'Link Intime India',
    leadManagers: ['ICICI Securities', 'Fino Capital']
  },
  {
    id: '112',
    name: 'Star Health and Allied Insurance',
    logo: 'https://media.ipoji.com/ipo/images/star-health-logo.png',
    offerDate: {
      start: '2024-11-30',
      end: '2024-12-04'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 870,
      max: 900
    },
    lotSize: 16,
    subscription: {
      times: 3.45,
      retail: 1.05,
      hni: 1.49,
      qib: 7.91
    },
    listingDate: '2024-12-10',
    listingPrice: 845,
    issueSize: '₹7249 Crores',
    companyDescription: 'Star Health and Allied Insurance Company Limited is India\'s largest standalone health insurer.',
    sector: 'Insurance',
    registrar: 'KFin Technologies',
    leadManagers: ['Kotak Mahindra Capital', 'Axis Capital', 'IIFL Securities']
  },
  {
    id: '113',
    name: 'Nazara Technologies',
    logo: 'https://media.ipoji.com/ipo/images/nazara-logo.png',
    offerDate: {
      start: '2024-11-17',
      end: '2024-11-21'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1100,
      max: 1101
    },
    lotSize: 13,
    subscription: {
      times: 175.44,
      retail: 103.6,
      hni: 408.5,
      qib: 155.3
    },
    listingDate: '2024-11-30',
    listingPrice: 1982,
    issueSize: '₹583 Crores',
    companyDescription: 'Nazara Technologies Limited is India\'s leading gaming and sports media company.',
    sector: 'Gaming',
    registrar: 'Bigshare Services',
    leadManagers: ['Nazara Capital', 'JM Financial']
  },
  {
    id: '114',
    name: 'Easy Trip Planners',
    logo: 'https://media.ipoji.com/ipo/images/easytrip-logo.png',
    offerDate: {
      start: '2024-11-08',
      end: '2024-11-12'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 186,
      max: 187
    },
    lotSize: 80,
    subscription: {
      times: 159.12,
      retail: 56.4,
      hni: 150.6,
      qib: 271.3
    },
    listingDate: '2024-11-19',
    listingPrice: 354,
    issueSize: '₹510 Crores',
    companyDescription: 'Easy Trip Planners Limited is India\'s second-largest online travel agency.',
    sector: 'Travel Technology',
    registrar: 'Skyline Financial Services',
    leadManagers: ['EasyTrip Capital', 'Axis Capital']
  },
  {
    id: '115',
    name: 'Anupam Rasayan India',
    logo: 'https://media.ipoji.com/ipo/images/anupam-rasayan-logo.png',
    offerDate: {
      start: '2024-10-12',
      end: '2024-10-16'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 553,
      max: 555
    },
    lotSize: 27,
    subscription: {
      times: 43.55,
      retail: 6.96,
      hni: 118.4,
      qib: 5.31
    },
    listingDate: '2024-10-24',
    listingPrice: 708,
    issueSize: '₹760 Crores',
    companyDescription: 'Anupam Rasayan India Limited is a leading manufacturer of specialty chemicals.',
    sector: 'Chemicals',
    registrar: 'Link Intime India',
    leadManagers: ['Anupam Capital', 'ICICI Securities']
  },
  {
    id: '116',
    name: 'Gland Pharma Limited',
    logo: 'https://media.ipoji.com/ipo/images/gland-pharma-logo.png',
    offerDate: {
      start: '2024-09-06',
      end: '2024-09-10'
    },
    status: 'listed',
    exchange: 'Mainboard',
    category: 'mainboard',
    offerPrice: {
      min: 1490,
      max: 1500
    },
    lotSize: 10,
    subscription: {
      times: 6.73,
      retail: 1.41,
      hni: 2.44,
      qib: 13.34
    },
    listingDate: '2024-09-16',
    listingPrice: 1542,
    issueSize: '₹6480 Crores',
    companyDescription: 'Gland Pharma Limited is one of the largest and fastest-growing injectable-focused companies globally.',
    sector: 'Pharmaceuticals',
    registrar: 'KFin Technologies',
    leadManagers: ['Kotak Mahindra Capital', 'Morgan Stanley', 'Nomura']
  }
];
