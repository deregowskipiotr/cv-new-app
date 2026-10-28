export type AboutIconKey =
  | 'sales-development'
  | 'key-accounts'
  | 'commercial-performance'
  | 'channels-distribution'
  | 'leadership-mindset';

export interface AboutCompetency {
  id: string;
  number: string;
  iconKey: AboutIconKey;
  title: string;
  description: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  stats?: AboutStat[];
  competencies: AboutCompetency[];
}
