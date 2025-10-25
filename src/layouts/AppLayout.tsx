import type { PropsWithChildren } from 'react';
import NavBar from '@components/NavBar';
import type { SectionConfig } from '@data/sections';
import type { SectionId } from '@types/sections';

interface AppLayoutProps extends PropsWithChildren {
  sections: SectionConfig[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const AppLayout = ({ sections, activeSection, onNavigate, children }: AppLayoutProps): JSX.Element => (
  <div className="app-shell">
    <header className="site-header">
      <div className="brand">
        <span className="brand__initials">YS</span>
        <span className="brand__name">Yulia Savine</span>
      </div>
      <NavBar sections={sections} activeSection={activeSection} onNavigate={onNavigate} />
    </header>
    <main className="site-main">{children}</main>
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Yulia Savine. Built with React, TypeScript, and a love of delightful UX.</p>
    </footer>
  </div>
);

export default AppLayout;
