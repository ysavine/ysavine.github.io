import AboutSection from '@sections/AboutSection';
import ContactSection from '@sections/ContactSection';
import HeroSection from '@sections/HeroSection';
import ProjectsSection from '@sections/ProjectsSection';
import type { SectionComponent, SectionId } from '@types/sections';

export interface SectionConfig {
  id: SectionId;
  title: string;
  description: string;
  component: SectionComponent;
}

export const sections: SectionConfig[] = [
  {
    id: 'hero',
    title: 'Welcome',
    description: 'TODO: Replace copy with a concise value proposition and hook in three.js hero canvas.',
    component: HeroSection
  },
  {
    id: 'about',
    title: 'About',
    description: 'TODO: Summarize your background and highlight differentiators (timeline, expertise, human story).',
    component: AboutSection
  },
  {
    id: 'projects',
    title: 'Projects',
    description:
      'TODO: Curate 3–5 projects. Include challenges, your contribution, tech, and link to repos/case studies.',
    component: ProjectsSection
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'TODO: Provide preferred contact channel and embed call-to-action (email, Calendly, newsletter).',
    component: ContactSection
  }
];
