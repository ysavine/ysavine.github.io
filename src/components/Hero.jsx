import { Typewriter } from './Typewriter.jsx'

const highlights = ['Software Engineer', 'Creative', 'Student']

export function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Yulia Savine</h1>
      <Typewriter className="hero__eyebrow" words={highlights} />
      <p className="hero__lead">
          Student at Duke University with experiences in systems, full stack development, AI/ML, and product. I love connecting my experiences across different disciplines, exploring new fields and technologies, growing in collaborative spaces, building community, and learning through creative, meaningful projects. 
      </p>
      <div className="hero__cta">
        <a className="button button--primary" href="mailto:yulia.savine@gmail.com">
          Email
        </a>
        <a className="button button--primary" href="https://linkedin.com/in/yulia-savine" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button button--primary" href="https://github.com/ysavine" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  )
}
