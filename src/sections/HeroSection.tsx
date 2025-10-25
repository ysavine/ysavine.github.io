import { forwardRef, lazy } from 'react';
import type { SectionProps } from '@types/sections';

const HeroCanvas = lazy(() => import('@three/HeroCanvas'));

const HeroSection = forwardRef<HTMLDivElement, SectionProps>(({ id, title, description }, ref) => (
  <section id={id} ref={ref} className="section section--hero">
    <div className="section__content">
      <p className="section__eyebrow">TODO: Replace with a punchy tagline</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="cta-group">
        <button type="button" className="btn btn--primary">
          TODO: Primary Call to Action
        </button>
        <button type="button" className="btn btn--ghost">
          TODO: Secondary Call to Action
        </button>
      </div>
    </div>
    <div className="section__visual">
      <HeroCanvas />
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

export default HeroSection;
