export interface ExperienceStat {
  value: string;
  label: string;
  iconKey?: 'experience' | 'team' | 'milestones' | 'channels';
}

export interface CareerMilestone {
  id: string;
  number: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  highlight?: boolean;
  isFeatured?: boolean;
}

export interface FeaturedResponsibility {
  text: string;
}

export interface FeaturedExperience {
  period: string;
  title: string;
  company: string;
  description: string;
  responsibilitiesLabel: string;
  responsibilities: FeaturedResponsibility[];
}

export interface ImpactItem {
  id: string;
  client: string;
  category: string;
  description: string;
  iconKey?: 'store' | 'cart' | 'bottle' | 'team';
}

export interface ExperienceContent {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  stats: ExperienceStat[];
  timelineHeading: string;
  milestones: CareerMilestone[];
  featured: FeaturedExperience;
  impactHeading: string;
  impactItems: ImpactItem[];
}
