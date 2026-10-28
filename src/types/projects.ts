export type ProjectVisualType = 'spreadsheet' | 'vocabulary' | 'topographic';

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  url: string | null;
  visual: ProjectVisualType;
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  openProject: string;
  unavailableLink: string;
  items: ProjectItem[];
}
