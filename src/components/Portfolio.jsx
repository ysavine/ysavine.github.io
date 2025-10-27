const portfolioItems = [
  {
    title: 'Syntax Studio',
    description: 'Interactive visualizations that help students understand grammatical structures.',
    link: '#',
  },
  {
    title: 'Listening Rooms',
    description: 'A curated archive of audio narratives blending storytelling and computational analysis.',
    link: '#',
  },
]

export function Portfolio() {
  return (
    <section className="stack">
      <h2 className="section-title">Portfolio</h2>
      <div className="list">
        {portfolioItems.map((item) => (
          <article key={item.title} className="list__item">
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a className="link" href={item.link}>
              View
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
