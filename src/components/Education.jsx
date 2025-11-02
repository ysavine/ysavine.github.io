import { coursework } from './Coursework.jsx'

const education = [
  {
    institution: 'Duke University',
    degree: 'B.S. Computer Science, A.B. Linguistics',
    period: 'August 2022 – May 2026',
  },
]

export function Education() {
  return (
    <section className="stack">
      <h2 className="section-title">Education</h2>

      <div className="stack stack--gap">
        {education.map((item) => (
          <article key={item.institution} className="experience experience--education">
            <header>
              <p className="experience__company">{item.institution}</p>
              <p className="experience__role">{item.degree}</p>
              <p className="experience__period">{item.period}</p>
            </header>
            <ul className="experience__course-list">
              {coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
