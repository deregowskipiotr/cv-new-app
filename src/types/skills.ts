export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface InterestItem {
  text: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  provider: string;
  note?: string;
  topics?: string[];
}

export interface SkillsContent {
  eyebrow: string;
  headline: string;
  intro: string;
  skillsHeading: string;
  languagesHeading: string;
  interestsHeading: string;
  credentialsHeading: string;
  skillGroups: SkillGroup[];
  languages: LanguageItem[];
  interests: InterestItem[];
  credentials: CredentialItem[];
}

