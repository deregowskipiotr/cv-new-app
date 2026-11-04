export interface ContactCard {
  id: string;
  iconKey: 'location' | 'hours' | 'communication';
  title: string;
  primaryText: string;
  secondaryText: string;
  actionText: string;
  actionHref?: string;
}

export interface ContactFormField {
  label: string;
  placeholder: string;
}

export interface ContactFormContent {
  name: ContactFormField;
  email: ContactFormField;
  subject: ContactFormField;
  message: ContactFormField;
  submitButton: string;
  submittingButton: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactSidebar {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface ContactFooterInfo {
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  copyright: string;
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  cardsEyebrow: string;
  cardsHeading: string;
  cardsHeadingAccent: string;
  cards: ContactCard[];
  form: ContactFormContent;
  sidebar: ContactSidebar;
  footer: ContactFooterInfo;
}

