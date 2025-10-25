import { forwardRef } from 'react';
import type { SectionProps } from '@types/sections';

const AboutSection = forwardRef<HTMLDivElement, SectionProps>(({ id, title, description }, ref) => (
  <section id={id} ref={ref} className="section section--standard">
    <div className="section__inner">
      <header className="section__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="section__body">
        <ul className="timeline">
          <li className="timeline__item">
            <h3>TODO: Current Role</h3>
            <p>Summarize current focus, domains, and impact metrics.</p>
          </li>
          <li className="timeline__item">
            <h3>TODO: Past Highlight</h3>
            <p>Walk through a pivotal project that showcases growth or leadership.</p>
          </li>
          <li className="timeline__item">
            <h3>TODO: Personal Detail</h3>
            <p>Add a humanizing element (community work, hobbies, origin story).</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;
