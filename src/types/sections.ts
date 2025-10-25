import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type SectionId = 'hero' | 'about' | 'projects' | 'contact';

export interface SectionProps {
  id: SectionId;
  title: string;
  description: string;
}

export type SectionComponent = ForwardRefExoticComponent<SectionProps & RefAttributes<HTMLDivElement>>;
