import { Badge } from './ui/Badge.jsx'

const experiences = [
  {
    company: 'Google',
    role: 'Software Engineer Intern',
    period: 'May 2025 - August 2025',
    description:
      'Engineered and launched an internal diagnostic tool providing full stack profiling for Google Drive that enables Drive teams to visualize 99%+ of Drive requests retroactively.',
    tags: ['Distributed Systems', 'Profiling', 'Java'],
  },
  {
    company: 'Duke University Innovation Co-Lab',
    role: 'Student Software Developer',
    period: 'August 2024 - Present',
    description:
      'Build full-stack applications and educational tools for 17,000+ Duke community members and Innovation Co-Lab clients.',
    tags: ['Full Stack Development', 'Azure Cognitive Speech Services'],
  },
  {
    company: 'Duke University Computer Science Department',
    role: 'Teaching Assistant: Intro to Computer Science (CS 101), Design & Analysis of Algorithms (CS 330)',
    period: 'August 2023 - May 2024, January 2025 - Present',
    description:
      'Lead weekly office hours for class of ~300 students, providing guidance on assignments and deepening students’ understanding of complex algorithm concepts including graphs, divide & conquer, greedy, and dynamic programming.',
    tags: ['Teaching', 'Algorithms'],
  },
  {
    company: 'Duke University Office of Information Technology',
    role: 'Software Engineer Intern',
    period: 'May 2024 - July 2024',
    description:
      'Developed search and text generation features, streamlining the process for 8000+ researchers and faculty to find collaborators, discover funding opportunities, and generate a profile on Scholars at Duke.',
    tags: ['Full Stack Development', 'Natural Language Processing', 'Large Language Models'],
  },
]

const involvement = [
  {
    company: 'Product Space',
    role: 'Duke Chapter Fellowship Co-Director & Product Manager',
    period: 'August 2024 - Present',
    description:
      'Created and implemented curriculum for educational and community-building fellowship with industry professionals and students, expanding access to opportunities in product design, development, and management at Duke.',
    tags: ['Product Management', 'Figma'],
  },
  {
    company: 'Musical Empowerment',
    role: 'Duke Chapter Co-President',
    period: 'September 2022 - Present',
    description:
      'Scaled new chapter growth to over 50 mentor-mentee pairs by spearheading recruitment, fundraising, outreach, and onboarding workflows for non-profit providing free music lessons, mentorship, and instruments to K-12 children.',
    tags: ['Music Education'],
  },
]

export function Experience() {
  return (
    <section className="stack">
      <h2 className="section-title">Experience</h2>

      <div className="stack stack--gap">
        <h3 className="section-subtitle">Work Experience</h3>
        {experiences.map((exp) => (
          <article key={exp.company} className="experience">
            <header>
              <p className="experience__company">{exp.company}</p>
              <p className="experience__role">{exp.role}</p>
              <p className="experience__period">{exp.period}</p>
            </header>
            <p className="experience__description">{exp.description}</p>
            <div className="experience__tags">
              {exp.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      <br></br>

      <div className="stack stack--gap">
        <h3 className="section-subtitle">Involvement</h3>
        {involvement.map((exp) => (
          <article key={exp.company} className="experience">
            <header>
              <p className="experience__company">{exp.company}</p>
              <p className="experience__role">{exp.role}</p>
              <p className="experience__period">{exp.period}</p>
            </header>
            <p className="experience__description">{exp.description}</p>
            <div className="experience__tags">
              {exp.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
