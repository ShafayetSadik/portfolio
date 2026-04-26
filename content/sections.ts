import { AboutSection } from "@/components/sections/AboutSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import type { NavSection, SectionConfig } from "@/lib/types";

export const sections: SectionConfig[] = [
  { id: "hero", label: "Home", component: HeroSection, showInNav: true },
  { id: "about", label: "About", component: AboutSection, showInNav: true },
  { id: "skills", label: "Skills", component: SkillsSection, showInNav: true },
  {
    id: "projects",
    label: "Projects",
    component: ProjectsSection,
    showInNav: true,
  },
  {
    id: "experience",
    label: "Experience",
    component: ExperienceSection,
    showInNav: true,
  },
  {
    id: "publications",
    label: "Publications",
    component: PublicationsSection,
    showInNav: true,
  },
  {
    id: "awards",
    label: "Awards",
    component: AwardsSection,
    showInNav: true,
  },
  {
    id: "contact",
    label: "Contact",
    component: ContactSection,
    showInNav: true,
  },
];

export const navigationSections: NavSection[] = sections
  .filter((section) => section.showInNav)
  .map(({ id, label }) => ({ id, label }));
