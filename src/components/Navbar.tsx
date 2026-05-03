import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner container">
        
        {/* Left Links */}
        <ul className="navbar__links navbar__links--left" role="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#story">Story</a></li>
        </ul>

        {/* Logo */}
        <a href="#" className="navbar__logo">
          Coffee Leo
        </a>

        {/* Right Links & CTA */}
        <div className="navbar__right">
          <ul className="navbar__links" role="list">
            <li><a href="#contact">Contact</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>
          <a href="#order" className="btn btn-secondary navbar__cta">Order Now</a>
        </div>

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
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#story" onClick={() => setMenuOpen(false)}>Story</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li><a href="#order" className="btn btn-secondary" style={{marginTop: '1rem'}} onClick={() => setMenuOpen(false)}>Order Now</a></li>
        </ul>
      </div>
    </nav>
  )
}
