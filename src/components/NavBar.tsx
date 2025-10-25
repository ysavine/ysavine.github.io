import type { SectionConfig } from '@data/sections';
import type { SectionId } from '@types/sections';

interface NavBarProps {
  sections: SectionConfig[];
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const NavBar = ({ sections, activeSection, onNavigate }: NavBarProps): JSX.Element => (
  <nav className="nav-bar" aria-label="Primary">
    <ul className="nav-bar__list">
      {sections.map(({ id, title }) => (
        <li key={id} className="nav-bar__item">
          <button
            type="button"
            className={id === activeSection ? 'nav-bar__link nav-bar__link--active' : 'nav-bar__link'}
            onClick={() => onNavigate(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
