import { useEffect } from 'react'
import { Navigation } from './components/Navigation.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Recommendations } from './components/Recommendations.jsx'
import { Interests } from './components/Interests.jsx'
import { Education } from './components/Education.jsx'

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '') {
      window.location.replace('#home')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background font-serif">
      <Navigation />

      <main>
        <section id="home" className="section section--hero">
          <Hero />
        </section>

        {/* <section id="about" className="section">
          <div className="section__container">
            <About />
          </div>
        </section> */}

        <section id="experience" className="section">
          <div className="section__container">
            <Experience />
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__container">
            <Education />
          </div>
        </section>

        <section id="Projects" className="section">
          <div className="section__container">
            <Projects />
          </div>
        </section>

        {/* <section id="recommendations" className="section">
          <div className="section__container">
            <Recommendations />
          </div>
        </section> */}

        {/* <section id="interests" className="section">
          <div className="section__container">
            <Interests />
          </div>
        </section> */}
      </main>

      <footer className="footer">
        <p className="footer__credit">
          Made with ♡ by Yulia.
        </p>
      </footer>
    </div>
  )
}
