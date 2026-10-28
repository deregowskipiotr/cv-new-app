import type { NavTranslations } from '@/types/navigation';
import type { AboutContent } from '@/types/about';
import type { ProjectsContent } from '@/types/projects';

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
};