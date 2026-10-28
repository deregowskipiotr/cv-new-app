export interface NavItem {
  id: string;
  href: string;
}

export interface NavTranslations {
  logo: string;
  labels: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  downloadCv: string;
  letsTalk: string;
}