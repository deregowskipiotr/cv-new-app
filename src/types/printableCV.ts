export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string; // Years only, e.g. "2023–2025"
  location: string;
  scope?: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degreeOrCertificate: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface PrintableCVData {
  personal: {
    fullName: string;
    title: string;
    location: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    linkedIn: string;
    photoUrl: string;
  };
  summary: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  languages: {
    title: string;
    items: LanguageItem[];
  };
  achievements: {
    title: string;
    items: {
      client: string;
      description: string;
    }[];
  };
  interests: {
    title: string;
    items: string[];
  };
  gdprClause: string;
}
