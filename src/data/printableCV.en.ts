import type { PrintableCVData } from '../types/printableCV';

export const printableCVDataEN: PrintableCVData = {
  personal: {
    fullName: "Piotr Deręgowski",
    title: "FMCG | Key Accounts | Commercial Leadership",
    location: "Warsaw, Poland",
    phonePlaceholder: "+48 500 000 000",
    emailPlaceholder: "piotr.deregowski@email.com",
    linkedIn: "linkedin.com/in/piotr-deregowski",
    photoUrl: "/images/cv-image.png",
  },
  summary: {
    title: "Professional Summary",
    paragraphs: [
      "I bring over 18 years of sales and business development experience in the FMCG sector. My professional career spans every operational tier — from frontline sales representation and managing a 12-person regional sales team to high-stakes key account partnerships.",
      "I have operated across diverse commercial channels: Traditional Trade, HoReCa, B2B, and modern retail networks, cultivating long-term partnerships with retail clients and wholesale distributors alike.",
      "I combine advanced commercial negotiations and relationship building with rigorous sales analysis, marketing budget governance, and ambitious revenue target delivery.",
      "I emphasize autonomy, collaborative partnership, and continuous learning. I augment proven commercial expertise with practical knowledge of AI and modern digital solutions to optimize real-world business workflows."
    ],
  },
  experience: {
    title: "Professional Experience",
    subtitle: "Chronological Order · Years Only",
    items: [
      {
        id: "exp-05",
        role: "Junior Key Account Manager",
        company: "North Coast S.A.",
        period: "2023–2024",
        location: "Warsaw, Poland",
        scope: "Modern retail networks: Auchan, Duka, Carrefour, Selgros | Spirits, Wine, Non-Alcoholic",
        highlights: [
          "Managed strategic commercial relationships and annual negotiations across retail chains in spirits, wine, and non-alcoholic categories.",
          "Initiated and secured direct supplier cooperation with Carrefour in the non-alcoholic beverages segment.",
          "Doubled listed wine SKUs at Auchan within two years through range optimization and category management.",
          "Formulated and executed joint customer business plans, sales targets, promotional campaigns, and wine festival presentations.",
          "Collaborated closely with Trade Marketing, Finance, and Logistics departments to protect margins and ensure fulfillment reliability.",
        ],
      },
      {
        id: "exp-04",
        role: "Key Account Manager, B2B",
        company: "CEDC International",
        period: "2017–2020",
        location: "Warsaw, Poland",
        scope: "B2B client portfolio, retail chains & regional distributors",
        highlights: [
          "Formulated and delivered revenue targets across B2B clients, modern retail chains, and regional wholesale partners.",
          "Monitored and optimized marketing budget allocations, promotional trade calendars, and commercial terms compliance.",
          "Developed active customer networks and coordinated cross-channel execution directly with regional field sales teams.",
        ],
      },
      {
        id: "exp-03",
        role: "Regional Sales Manager",
        company: "Eurocash S.A. – Premium Distributors",
        period: "2015–2017",
        location: "Warsaw, Poland",
        scope: "Regional sales territory | Direct leadership of 12-person sales team",
        highlights: [
          "Directly led, coached, and managed a 12-person regional sales team; directed territory recruitment and onboarding.",
          "Planned regional commercial activities and governed sales quotas, margin targets, and qualitative KPIs.",
          "Managed producer relationships, local distributor partnerships, promotional trade budgets, and logistical processes.",
        ],
      },
      {
        id: "exp-02",
        role: "Sales Representative, HoReCa",
        company: "Carey Agri / CEDC / Eurocash S.A.",
        period: "2006–2015",
        location: "Warsaw, Poland",
        scope: "Gastronomic sector: hotels, restaurants, nightclubs, catering",
        highlights: [
          "Negotiated commercial contracts, pricing structures, and payment terms across an extensive HoReCa client portfolio.",
          "Expanded active SKU distribution and market share, introducing premium brand portfolios to premier gastronomy venues.",
          "Managed customer inventory stock levels, order delivery coordination, and long-term client retention.",
        ],
      },
      {
        id: "exp-01",
        role: "Sales Representative",
        company: "Verte sp. z o.o.",
        period: "2004–2006",
        location: "Warsaw, Poland",
        scope: "Retail clients and national press distribution networks (Empik)",
        highlights: [
          "Managed direct retail relationships and specialized press retail networks, including key partner Empik.",
          "Introduced new product lines, optimized point-of-sale display presence, negotiated terms, and oversaw timely receivables collection.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        id: "edu-01",
        institution: "Random School",
      },
    ],
  },
  training: {
    title: "Professional Training",
    items: [
      {
        id: "tr-01",
        title: "Umiejętności Jutra AI",
        provider: "Google & SGH (Warsaw School of Economics)",
        details: "Practical applications of artificial intelligence, prompt engineering, and automated business workflows.",
      },
      {
        id: "tr-02",
        title: "Front-end Developer Bootcamp",
        provider: "Kodilla",
        details: "Modern web technologies: HTML, CSS, JavaScript, ES6, React, Git, and software development fundamentals.",
      },
      {
        id: "tr-03",
        title: "Microsoft Excel — Intermediate & Advanced",
        provider: "Expose",
        details: "Advanced commercial calculation, data analysis, lookup functions, pivot tables, and sales reporting models.",
      },
      {
        id: "tr-04",
        title: "Sales Team Management Training",
        provider: "Eurocash Internal Leadership Program",
        details: "Sales team leadership, recruitment of sales representatives, target setting, coaching, and performance management.",
      },
    ],
  },
  skills: {
    title: "Professional Skills",
    subtitle: "Core Functional & Strategic Competencies",
    categories: [
      {
        title: "Commercial & Key Account Management",
        skills: [
          "Key Account Management (KAM)",
          "Annual commercial terms negotiation",
          "Joint customer business plans (JBP)",
          "Margin, revenue & profitability governance",
          "B2B contractual agreements & terms",
        ],
      },
      {
        title: "Distribution & Channel Strategy",
        skills: [
          "Modern retail networks (Carrefour, Auchan, Selgros)",
          "Traditional Trade & independent retail",
          "HoReCa channel execution",
          "Wholesale & regional distributor cooperation",
          "Brand portfolio & category expansion",
        ],
      },
      {
        title: "Leadership & Team Management",
        skills: [
          "12-person regional sales team leadership",
          "Sales representative recruitment & onboarding",
          "Target setting & territory planning",
          "Coaching, motivation & performance review",
          "Cross-departmental collaboration (Trade Marketing, Finance, Logistics)",
        ],
      },
      {
        title: "Commercial Analysis & Planning",
        skills: [
          "Sales volume & margin data analysis",
          "Trade marketing budget governance",
          "Market trend & competitor benchmarking",
          "Demand forecasting & stock alignment",
        ],
      },
      {
        title: "Digital Tools & Applied AI",
        skills: [
          "AI practical business applications (Google & SGH)",
          "Advanced Microsoft Excel (commercial modeling & reporting)",
          "Modern web technologies (JavaScript, React, Git)",
          "Sales CRM & ERP business applications",
        ],
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { language: "Polish", level: "Native proficiency" },
      { language: "English", level: "B1/B2 (Ongoing learning)" },
    ],
  },
  achievements: {
    title: "Selected Commercial Impact",
    items: [
      {
        client: "Auchan",
        description: "Doubled wine SKU listings within 2 years through category management and targeted portfolio expansion.",
      },
      {
        client: "Carrefour",
        description: "Secured direct supplier listing in the non-alcoholic beverages category, creating a long-term commercial platform.",
      },
      {
        client: "In&Out",
        description: "Introduced spirits, wine, and non-alcoholic categories, expanding product range and basket value.",
      },
      {
        client: "Regional Sales Leadership",
        description: "Led and developed a 12-person regional sales team, consistently meeting territory sales and margin targets.",
      },
    ],
  },
  interests: {
    title: "Interests & Continuous Learning",
    items: [
      "Artificial Intelligence & practical digital workflow automation in business",
      "Web application development using modern JavaScript and React",
      "Author cinema — particularly works of David Lynch, Jim Jarmusch, and Quentin Tarantino",
      "European football — avid follower of Spanish La Liga",
    ],
  },
  gdprClause: "I hereby consent to my personal data being processed for the purposes of the recruitment process in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).",
  ui: {
    backToPortfolio: "Back to Portfolio",
    printOrSavePdf: "Print / Save as PDF",
    printHint: "Print dialog: Select \"Save as PDF\" & enable \"Background graphics\"",
    previewBadge: "Printable CV (A4 · 2 Pages)",
    pageLabel: "Page",
    ofLabel: "of",
    credentialsHeaderRight: "Education, Skills & Credentials",
  },
};

export const printableCVData = printableCVDataEN;
