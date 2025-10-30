import { Badge } from './ui/Badge.jsx'

const ProjectsItems = [
  {
    title: 'Raven Read',
    description: 'AI-powered tool designed to help users read websites and extract text from PDFs with ease.',
    link: 'https://ai.colab.duke.edu/colab-ai-blog/',
    tags: ['AI', 'Full Stack Development'],
    skills: ['Svelte', 'Python', 'FastAPI', 'crawl4ai', 'Docker',],
    image: "/binary.png",
  },
  {
    title: 'YuYak',
    description: 'Language learning app focused on pronunciation.',
    link: 'https://ai.colab.duke.edu/colab-ai-blog/all-blogs/meet-yuyak-your-new-language-learning-buddy/',
    tags: ['Azure Cognitive Speech Services', 'Full Stack Development'],
    skills: ['Azure Cognitive Speech Services', 'FastAPI', 'React', 'JavaScript', 'HTML', 'CSS', 'phonemizer'],
    image: "/binary.png",
  },
  {
    title: 'Whimsical Plant Store',
    description: 'E-commerce plant store with a cozy Stardew Valley-inspired design.',
    link: 'https://github.com/ysavine/whimsy-plant-store',
    tags: ['Databases', 'Full Stack Development'],
    skills: ['SQL', 'React', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    image: "/whimsy_plant_store.png",
  },
  {
    title: 'CDN Edge Server',
    description: 'cs.duke.edu edge server with caching, persistence, and HTTP/HTTPS support.',
    link: null,
    tags: ['Networking'],
    skills: ['Python', 'Sockets', 'TLS/SSL'],
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
        {ProjectsItems.map((item) => {
          const hasLink = Boolean(item.link)

          return (
            <article key={item.title} className="project">
              <div className="project__body">
                <header className="project__header">
                  {hasLink ? (
                    <h3 className="project__title">
                      <a
                        className="project__title-link"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="project__title-text">{item.title}</span>
                        <svg
                          className="project__title-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          role="img"
                          aria-hidden="true"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7 17 17 7m-6 0h6v6"
                          />
                        </svg>
                      </a>
                    </h3>
                  ) : (
                    <h3 className="project__title">
                      <span className="project__title-static">
                        <span className="project__title-text">{item.title}</span>
                      </span>
                    </h3>
                  )}
                  <p className="project__description">{item.description}</p>
                </header>
                <div className="project__tags">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                {item.skills?.length ? (
                  <div className="project__skill-tags">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="skill">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ) : null}
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
          )
        })}
      </div>
    </section>
  )
}
