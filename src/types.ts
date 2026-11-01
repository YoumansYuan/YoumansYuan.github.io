export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface WorkProject {
  name: string;
  area: string;
  summary: string;
  points?: string[];
  featured?: boolean;
}

export interface Role {
  title: string;
  org: string;
  place: string;
  period: string;
  intro?: string;
  points: string[];
  tools?: string[];
}

export interface Spec {
  value: string;
  label: string;
}

export interface AcademicProject {
  kicker: string;
  title: string;
  summary: string;
  specs?: Spec[];
  points?: string[];
  tools?: string[];
  link?: Link;
  tone: 'light' | 'dark' | 'accent';
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Result {
  place: string;
  event: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Site {
  name: string;
  fullName: string;
  headline: string;
  tagline: string;
  intro: string;
  email: string;
  links: { linkedin: string; github: string; archive: string };
  stats: Stat[];
  current: Role;
  workProjects: WorkProject[];
  pastRoles: Role[];
  academic: AcademicProject[];
  skills: SkillGroup[];
  keyCerts: string[];
  certs: string[];
  results: { sport: string; items: Result[] }[];
  photos: Photo[];
}
