import { forwardRef } from 'react';
import type { SectionProps } from '@types/sections';

interface ProjectCard {
  id: string;
  name: string;
  blurb: string;
  status: 'live' | 'wip';
}

const placeholderProjects: ProjectCard[] = [
  {
    id: 'placeholder-1',
    name: 'TODO: Project Name',
    blurb: 'Outline the business problem, your technical contributions, and the outcome.',
    status: 'live'
  },
  {
    id: 'placeholder-2',
    name: 'TODO: Another Project',
    blurb: 'Highlight differentiators: scale, constraints, novel solution, or lessons learned.',
    status: 'wip'
  }
];

const ProjectsSection = forwardRef<HTMLDivElement, SectionProps>(({ id, title, description }, ref) => (
  <section id={id} ref={ref} className="section section--alt">
    <div className="section__inner">
      <header className="section__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <div className="project-grid">
        {placeholderProjects.map((project) => (
          <article key={project.id} className="project-card" data-status={project.status}>
            <header>
              <h3>{project.name}</h3>
              <span className="project-card__badge">
                {project.status === 'live' ? 'Live' : 'Work in progress'}
              </span>
            </header>
            <p>{project.blurb}</p>
            <p className="project-card__meta">TODO: Add tech stack and links.</p>
          </article>
        ))}
      </div>
      <p className="section__note">
        Tip: Replace `placeholderProjects` with data fetched from GitHub or a CMS. Strong typing (`ProjectCard`) will
        flag missing fields when you expand it.
      </p>
    </div>
  </section>
));

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
