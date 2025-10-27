const recommendations = [
  {
    name: 'Alex Kim',
    title: 'Professor of Linguistics, Duke University',
    quote:
      'Yulia brings an extraordinary combination of creative thinking and technical rigor to every project. Their work bridges disciplines in a way that feels natural and inspiring.',
  },
  {
    name: 'Priya Patel',
    title: 'Engineering Manager, Google',
    quote:
      'Collaborating with Yulia was a highlight of the internship program. They are thoughtful, quick to learn, and always eager to help the team move forward.',
  },
]

export function Recommendations() {
  return (
    <section className="stack">
      <h2 className="section-title">Recommendations</h2>
      <div className="stack">
        {recommendations.map((rec) => (
          <blockquote key={rec.name} className="quote">
            <p>“{rec.quote}”</p>
            <footer>
              <span className="quote__name">{rec.name}</span>
              <span className="quote__title">{rec.title}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
