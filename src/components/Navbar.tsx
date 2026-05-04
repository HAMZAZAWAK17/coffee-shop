import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar__inner container">
        
        {/* Left Side: Hamburger & Text */}
        <div className="navbar__left">
          <button 
            className={`navbar__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <span className="navbar__text-link hide-mobile">Home & Leaf Our Products</span>
        </div>

        {/* Center: Logo */}
        <a href="/" className="navbar__logo serif">
          EMBER & LEAF CAFÉ
        </a>

        {/* Right Side: Search & CTA */}
        <div className="navbar__right">
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href="#visit" className="btn btn-outline glass navbar__cta">Visit Our Café</a>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'open' : ''}`}>
        <ul className="drawer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#store">Our Store</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

