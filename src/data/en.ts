import type { NavTranslations } from '@/types/navigation';
import type { AboutContent } from '@/types/about';
import type { ProjectsContent } from '@/types/projects';
import type { SkillsContent } from '@/types/skills';
import type { ExperienceContent } from '@/types/experience';
import type { ContactContent } from '@/types/contact';

export const contentEN = {
  nav: {
    logo: "PD",
    labels: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    letsTalk: "Let's Talk",
  } as NavTranslations,
  hero: {
    badge: "Key Account Manager | Sales Leader",
    titlePrimary: "Commercial Experience",
    titleSecondary: "Modern Perspective",
    description: "I combine hands-on sales experience, key account management and distribution development with a growing interest in AI and digital solutions. My approach is built on strong business relationships, commercial awareness and finding practical ways to improve how businesses operate.",
    downloadCv: "Download CV",
    letsTalk: "Let's Talk",
    stats: [
      { value: "18+", label: "Years in FMCG" },
      { value: "12", label: "Team Managed" },
      { value: "2+", label: "Years Frontend Learning" },
      { value: "100%", label: "Target & Process Focus" },
    ],
  },
  about: {
    eyebrow: "Professional Profile",
    headline: "Commercial Experience, Strategic Partnerships, Continuous Growth.",
    paragraphs: [
      "I bring over 18 years of sales and business development experience in the FMCG sector. My professional career spans every operational tier — from frontline sales representation and managing a 12-person regional sales team to high-stakes key account partnerships.",
      "I have operated across diverse commercial channels: Traditional Trade, HoReCa, B2B, and modern retail networks, cultivating long-term partnerships with retail clients and wholesale distributors alike.",
      "I combine advanced commercial negotiations and relationship building with rigorous sales analysis, marketing budget governance, and ambitious revenue target delivery.",
      "I emphasize autonomy, collaborative partnership, and continuous learning. I augment proven commercial expertise with practical knowledge of AI and modern digital solutions to optimize real-world business workflows."
    ],
    stats: [
      { value: "18+", label: "Years FMCG Experience" },
      { value: "12", label: "Sales Team Managed" },
      { value: "5", label: "Core Competencies" }
    ],
    competencies: [
      {
        id: "sales-development",
        number: "1",
        iconKey: "sales-development",
        title: "Sales & Business Development",
        description: "Executing ambitious revenue targets, expanding channel distribution, and winning key accounts. Example: initiating direct supplier cooperation with Carrefour in the non-alcoholic beverages segment."
      },
      {
        id: "key-accounts",
        number: "2",
        iconKey: "key-accounts",
        title: "Key Account Management & Negotiation",
        description: "Cultivating key client partnerships, negotiating annual commercial terms, and scaling brand portfolios. Example: doubling wine SKU listings at Auchan."
      },
      {
        id: "commercial-performance",
        number: "3",
        iconKey: "commercial-performance",
        title: "Commercial Performance",
        description: "In-depth sales and margin analysis, tactical trade planning, and marketing budget governance. Aligning commercial goals with bottom-line profitability and reliable execution."
      },
      {
        id: "channels-distribution",
        number: "4",
        iconKey: "channels-distribution",
        title: "Sales Channels & Distribution",
        description: "Deep expertise across Traditional Trade, HoReCa, B2B, and modern retail. Close cooperation with regional distributors, retailers, producers, and gastronomy clients."
      },
      {
        id: "leadership-mindset",
        number: "5",
        iconKey: "leadership-mindset",
        title: "Leadership & Modern Business Mindset",
        description: "Direct leadership of a 12-person sales team and close cross-departmental coordination. Continuously developing modern technology and AI capabilities, including graduating from the Umiejętności Jutra AI program (Google & SGH)."
      }
    ]
  } as AboutContent,
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Projects",
    subtitle: "I explore AI and digital tools by building practical projects — from everyday learning aids to experiments in smarter planning.",
    openProject: "Explore project",
    unavailableLink: "Demo link pending",
    items: [
      {
        id: "excel-function-guide",
        number: "01",
        category: "PRODUCTIVITY",
        title: "Excel Function Guide",
        description: "A practical reference to six popular Excel functions, explaining what they do, how they work, and when to use them.",
        tags: ["Excel", "Learning", "Quick reference"],
        url: "https://excell-rules-app.netlify.app/",
        visual: "spreadsheet",
      },
      {
        id: "vocabulary-reminder",
        number: "02",
        category: "LANGUAGE LEARNING",
        title: "Vocabulary Reminder",
        description: "A personal English vocabulary tool featuring approximately 150 B2–C1 words, with definitions, usage guidance, common collocations, and synonyms.",
        tags: ["English B2–C1", "Vocabulary", "Self-learning"],
        url: "https://vocabulary-reminder-app.netlify.app/",
        visual: "vocabulary",
      },
      {
        id: "skalne-miasto-ai",
        number: "03",
        category: "AI EXPERIMENT",
        title: "Skalne Miasto — AI Travel Guide",
        description: "A sightseeing guide for Skalne Miasto in the Czech Republic, exploring and comparing itineraries prepared by three different AI models.",
        tags: ["Travel planning", "AI comparison", "Research"],
        url: "https://skalne-miasto-trip.netlify.app/",
        visual: "topographic",
      },
    ],
  } as ProjectsContent,
  skills: {
    eyebrow: "Skills & Beyond",
    headline: "Skills & Beyond",
    intro: "Commercial expertise, ongoing learning, and the curiosity that drives both.",
    skillsHeading: "Professional Skills",
    languagesHeading: "Languages",
    interestsHeading: "Interests & Continuous Learning",
    credentialsHeading: "Learning & Credentials",
    skillGroups: [
      {
        id: "commercial-analytical",
        label: "Commercial & Analytical",
        items: [
          "Sales data analysis",
          "Client needs assessment",
          "Market trend and competitor analysis",
        ],
      },
      {
        id: "sales-relationships",
        label: "Sales & Relationships",
        items: [
          "Negotiation",
          "Communication",
          "Building and sustaining long-term business relationships",
        ],
      },
      {
        id: "work-approach",
        label: "Work Approach",
        items: [
          "Independent and collaborative work organisation",
          "Time management and prioritisation",
          "Structured approach to daily work",
        ],
      },
    ],
    languages: [
      { name: "Polish", level: "Native" },
      { name: "English", level: "B1/B2 — ongoing improvement" },
    ],
    interests: [
      { text: "Artificial Intelligence and its practical applications in everyday life and work" },
      { text: "Building websites and applications with JavaScript" },
      { text: "Football — particularly La Liga" },
      { text: "Cinema — David Lynch, Jim Jarmusch, Quentin Tarantino" },
    ],
    credentials: [
      {
        id: "umiejetnosci-jutra",
        title: "Umiejętności Jutra AI",
        provider: "Google & SGH",
        note: "AI and practical applications in Business",
      },
      {
        id: "kodilla-bootcamp",
        title: "Front-end Bootcamp",
        provider: "Kodilla",
        topics: ["HTML", "CSS", "JavaScript", "Git", "ES6", "AJAX", "Redux", "React Router"],
      },
      {
        id: "excel-course",
        title: "Microsoft Excel — Intermediate / Advanced",
        provider: "Expose",
      },
      {
        id: "sales-management",
        title: "Sales Team Management Training",
        provider: "Internal training",
      },
    ],
  } as SkillsContent,
  experience: {
    eyebrow: "Experience",
    headline: "From the Field to Strategic Growth",
    intro: "Over 18 years of commercial experience across FMCG, HoReCa, B2B and Key Account Management. A career built on customer relationships, sales execution, team leadership and commercial development.",
    stats: [
      { value: "18+", label: "Years in FMCG", iconKey: "experience" },
      { value: "12", label: "Team Members Led", iconKey: "team" },
      { value: "5", label: "Career Milestones", iconKey: "milestones" },
      { value: "4", label: "Key Sales Channels", iconKey: "channels" },
    ],
    timelineHeading: "Career Progression",
    milestones: [
      {
        id: "sales-rep",
        number: "01",
        title: "Sales Representative",
        company: "Verte sp. z o.o.",
        period: "2004–2006",
        summary: "Building the foundations of commercial relationships and hands-on sales execution.",
      },
      {
        id: "horeca-rep",
        number: "02",
        title: "Sales Representative, HoReCa",
        company: "Carey Agri / CEDC / Eurocash S.A.",
        period: "2006–2015",
        summary: "Developing customer relationships, distribution and commercial execution across the HoReCa channel.",
      },
      {
        id: "regional-manager",
        number: "03",
        title: "Regional Sales Manager",
        company: "Eurocash S.A. – Premium Distributors",
        period: "2015–2017",
        summary: "Moving from individual sales execution to team leadership and regional commercial responsibility.",
        highlight: true,
      },
      {
        id: "kam-b2b",
        number: "04",
        title: "Key Account Manager, B2B",
        company: "CEDC International",
        period: "2017–2020",
        summary: "Developing B2B relationships and managing commercial cooperation across multiple customer channels.",
      },
      {
        id: "junior-kam",
        number: "05",
        title: "Junior Key Account Manager",
        company: "North Coast S.A.",
        period: "2023–2025",
        summary: "Developing key customer relationships, negotiating commercial conditions and supporting category growth.",
        isFeatured: true,
      },
    ],
    featured: {
      period: "2023–2025",
      title: "Junior Key Account Manager",
      company: "North Coast S.A.",
      description: "Direct cooperation with active customers in spirits, wine and non-alcoholic beverages. Developing new customer relationships and supporting category growth across a diverse product portfolio.",
      responsibilitiesLabel: "Key Responsibilities",
      responsibilities: [
        { text: "Developing new customer cooperation — including Carrefour in the non-alcoholic beverages category" },
        { text: "Conducting commercial negotiations and preparing sales plans" },
        { text: "Co-creating and implementing customer business strategies across retail networks" },
        { text: "Supporting trade marketing, finance and logistics coordination" },
        { text: "Implementing additional sales-support activities including trade fairs and wine festivals" },
      ],
    },
    impactHeading: "Selected Impact",
    impactItems: [
      {
        id: "auchan",
        client: "Auchan",
        category: "Wine Portfolio Development",
        description: "Doubled the number of wine SKUs through range optimisation and supplier partnerships.",
        iconKey: "store",
      },
      {
        id: "carrefour",
        client: "Carrefour",
        category: "New Customer Cooperation",
        description: "Developed new cooperation in the non-alcoholic beverages category, building a foundation for long-term growth.",
        iconKey: "cart",
      },
      {
        id: "inout",
        client: "In&Out",
        category: "Category Development",
        description: "Introduced spirits, wines and non-alcoholic beverage categories, expanding the product offering and increasing customer value.",
        iconKey: "bottle",
      },
      {
        id: "leadership",
        client: "Regional Sales Leadership",
        category: "Team Management",
        description: "Led a 12-person sales team, planning regional activities, monitoring performance and managing marketing budgets.",
        iconKey: "team",
      },
    ],
  } as ExperienceContent,
  contact: {
    eyebrow: "Contact",
    headline: "Let's Start a Conversation",
    subtitle: "I am always open to discussing new commercial partnerships, strategic key account management opportunities, or modern digital initiatives.",
    cardsEyebrow: "Contact Me",
    cardsHeading: "Get in",
    cardsHeadingAccent: "Touch",
    cards: [
      {
        id: "location",
        iconKey: "location",
        title: "Location",
        primaryText: "Warsaw, Poland",
        secondaryText: "Available for on-site & hybrid collaboration across Poland",
        actionText: "Warsaw Metropolitan Area",
        actionHref: "https://maps.google.com/?q=Warsaw,Poland",
      },
      {
        id: "hours",
        iconKey: "hours",
        title: "Working Hours",
        primaryText: "Mon – Fri: 08:00 – 18:00",
        secondaryText: "Flexible schedule for scheduled business meetings",
        actionText: "Open to new challenges",
      },
      {
        id: "communication",
        iconKey: "communication",
        title: "Communication",
        primaryText: "+48 500 000 000",
        secondaryText: "piotr.deregowski@email.com",
        actionText: "Send direct message",
        actionHref: "mailto:piotr.deregowski@email.com",
      },
    ],
    form: {
      name: {
        label: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        label: "Your Email",
        placeholder: "Your email address",
      },
      subject: {
        label: "Subject",
        placeholder: "Commercial partnership, Key Accounts, etc.",
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your business needs, project, or role...",
      },
      submitButton: "Send Message",
      submittingButton: "Sending Message...",
      successMessage: "Thank you for reaching out. Your message has been sent, and I will get back to you shortly.",
      errorMessage: "Please fill out all required fields before sending.",
    },
    sidebar: {
      eyebrow: "Have any query?",
      title: "Contact Me",
      paragraphs: [
        "Whether you are looking to discuss key account commercial strategy, FMCG distribution partnerships, or explore digital and AI workflow integration — I welcome the conversation.",
        "Feel free to reach out directly through this form or connect via LinkedIn. I value straightforward communication and thoughtful business dialogue.",
      ],
    },
    footer: {
      tagline: "Let's talk",
      location: "Warsaw, Mazovia, Poland",
      email: "piotr.deregowski@email.com",
      phone: "+48 500 000 000",
      linkedInUrl: "https://www.linkedin.com/in/piotr-der%C4%99gowski-61b86927a/",
      copyright: "© 2026 Piotr Deręgowski. All rights reserved.",
    },
  } as ContactContent,
};
