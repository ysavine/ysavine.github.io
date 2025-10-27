import { useState } from 'react'

const navigationItems = [
  { id: 'home', label: 'Home' },
  // { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  // { id: 'portfolio', label: 'Portfolio' },
  // { id: 'recommendations', label: 'Recommendations' },
  // { id: 'interests', label: 'Interests' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={closeMenu}>
          YS
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav className={`nav__links ${isOpen ? 'nav__links--visible' : ''}`} id="primary-navigation">
          {navigationItems.map((item) => (
            <a key={item.id} className="nav__link" href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
