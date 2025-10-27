const interestGroups = [
  {
    title: 'Research & Curiosity',
    items: ['Computational linguistics', 'Digital humanities', 'Creative AI'],
  },
  {
    title: 'Creative Practice',
    items: ['Modern poetry', 'Experimental music', 'Interactive fiction'],
  },
  {
    title: 'Community',
    items: ['Mentoring student builders', 'Volunteering at local libraries', 'Organizing language meetups'],
  },
]

export function Interests() {
  return (
    <section className="stack">
      <h2 className="section-title">Interests</h2>
      <div className="grid">
        {interestGroups.map((group) => (
          <article key={group.title} className="card">
            <h3 className="card__title">{group.title}</h3>
            <ul className="card__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
