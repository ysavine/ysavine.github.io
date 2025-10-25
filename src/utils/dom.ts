import type { SectionId } from '@types/sections';

const sectionIdRegistry: SectionId[] = ['hero', 'about', 'projects', 'contact'];

export const isSectionId = (value: string): value is SectionId => sectionIdRegistry.includes(value as SectionId);

export const getSectionElement = (id: SectionId): HTMLElement | null =>
  document.querySelector<HTMLElement>(`[data-section-id="${id}"]`);

export const listRegisteredSections = (): SectionId[] => [...sectionIdRegistry];

// TODO: When you add or remove sections, update sectionIdRegistry or replace this with a dynamic registry.
