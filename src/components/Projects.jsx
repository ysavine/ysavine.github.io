import { Badge } from './ui/Badge.jsx'

const ProjectsItems = [
  {
    title: 'Raven Read',
    description: 'AI-powered tool designed to help users read websites and extract text from PDFs with ease.',
    link: 'https://ai.colab.duke.edu/colab-ai-blog/',
    tags: ['AI', 'Full Stack', 'Accessibility'],
    image: "/binary.png",
  },
  {
    title: 'YuYak',
    description: 'Language learning app focused on pronunciation.',
    link: '#',
    tags: ['Azure Cognitive Speech Services', ''],
    image: "/binary.png",
  },
  {
    title: 'Online Plant Store',
    description: 'E-commerce plant store with a cozy Stardew Valley-inspired design.',
    link: '',
    tags: ['Databases', 'Full Stack Development', 'SQL', 'Flask'],
    image: "/whimsy_plant_store.png",
  },
  {
    title: 'CDN Edge Server',
    description: 'cs.duke.edu edge server with caching, persistence, and HTTP/HTTPS support.',
    link: '',
    tags: ['Networking', 'Python'],
    image: "/binary.png",
  },
  // {
  //   title: 'Scholars@Duke Collaboration Finder',
  //   description: 'Connecting Duke University researchers.',
  //   link: 'https://codeplus.duke.edu/project/scholarsduke-collaboration-finder-using-power-ai/',
  //   tags: ['Product Design', 'Retrieval Augmented Generation'],
  //   image: "/scholars_duke.png",
  // },
]

export function Projects() {
  return (
    <section className="stack">
      <h2 className="section-title">Projects</h2>
      <div className="stack stack--gap">
        {ProjectsItems.map((item) => (
          <article key={item.title} className="project">
            <div className="project__body">
              <header className="project__header">
                <h3 className="project__title">
                  <a
                    className="project__title-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="project__title-text">{item.title}</span>
                  </a>
                </h3>
                <p className="project__description">{item.description}</p>
              </header>
              <div className="project__tags">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
            {/* <div className="project__media" aria-hidden={!item.image}>
              {item.image ? (
                <img className="project__image" src={item.image} alt={`${item.title} preview`} />
              ) : (
                <div className="project__media-placeholder">
                  <span>{item.title}</span>
                </div>
              )}
            </div> */}
          </article>
        ))}
      </div>
    </section>
  )
}
