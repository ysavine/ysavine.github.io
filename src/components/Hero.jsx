import { Typewriter } from './Typewriter.jsx'

const highlights = ['Software Engineer', 'Creative', 'Student']

export function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__icon"
        src="/yulia_website_icon.png"
        alt="Yulia Savine icon"
      />
      <h1 className="hero__title">Yulia Savine</h1>
      <Typewriter className="hero__eyebrow" words={highlights} />
      <p className="hero__lead">
          Senior at Duke University studying Computer Science (B.S.) and Linguistics (A.B.) with experiences in systems, full stack development, AI/ML, and product. I love connecting my experiences across different disciplines, exploring new fields and technologies, growing in collaborative spaces, building community, and learning through creative, meaningful projects. I'm passionate about connecting people through language and technology.
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
