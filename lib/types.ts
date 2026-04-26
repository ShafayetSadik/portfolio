import type { ComponentType } from "react";

export const themeTokens = [
  "bg",
  "fg",
  "muted",
  "accent",
  "surface",
  "border",
] as const;

export type ThemeToken = (typeof themeTokens)[number];

export interface Theme {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  surface: string;
  border: string;
}

export interface ThemePreset {
  name: string;
  theme: Theme;
}

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "publications"
  | "awards"
  | "contact";

export interface SectionCopy {
  label: string;
  title: string;
  intro: string;
}

export interface SectionConfig {
  id: SectionId;
  label: string;
  component: ComponentType;
  showInNav: boolean;
}

export interface NavSection {
  id: SectionId;
  label: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  value: string;
  icon: "github" | "linkedin" | "mail";
}

export interface HeroContent extends SectionCopy {
  kicker: string;
  availability: string;
  highlights: string[];
  ctas: HeroCTA[];
}

export interface ContactContent extends SectionCopy {
  availability: string;
  note: string;
  ctas: HeroCTA[];
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  description: string;
  siteUrl: string;
  footerNote: string;
  hero: HeroContent;
  contact: ContactContent;
  socials: SocialLink[];
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface AboutContent extends SectionCopy {
  body: string[];
  stats: StatItem[];
}

export interface SkillGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface SkillsContent extends SectionCopy {
  groups: SkillGroup[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
  repository?: string;
  metrics: ProjectMetric[];
}

export interface ProjectsContent extends SectionCopy {
  items: Project[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceContent extends SectionCopy {
  items: ExperienceItem[];
}

export interface Publication {
  title: string;
  venue: string;
  status?: string;
}

export interface PublicationsContent extends SectionCopy {
  items: Publication[];
}

export interface AwardItem {
  title: string;
  organization: string;
  year: number;
}

export interface AwardsContent extends SectionCopy {
  items: AwardItem[];
}
