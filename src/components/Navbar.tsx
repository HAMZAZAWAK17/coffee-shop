import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="DARIJA — Home">
          <span className="navbar__logo-arabic">دارجة</span>
          <span className="navbar__logo-text">DARIJA</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="navbar__link">{label}</a>
            </li>
          ))}
          <li>
            <a href="#visit" className="navbar__reserve btn-outline">
              <span>Reserve</span>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="navbar__drawer-link" onClick={handleLinkClick}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#visit" className="btn-gold" onClick={handleLinkClick}><span>Reserve a Table</span></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
