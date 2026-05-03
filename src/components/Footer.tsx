import './Footer.css'

const footerLinks = ['Story', 'Menu', 'Experience', 'Visit']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top-border" aria-hidden="true" />
      <div className="container">
        <div className="footer__inner">
          {/* Logo */}
          <div className="footer__logo-block">
            <a href="#" className="footer__logo" aria-label="DARIJA — Back to top">
              <span className="footer__logo-arabic">دارجة</span>
              <span className="footer__logo-text">DARIJA</span>
            </a>
            <p className="footer__tagline">
              Où l'âme du Maroc se pose dans une tasse.
            </p>
          </div>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul role="list">
              {footerLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer__nav-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="footer__social">
            <a
              href="https://instagram.com/darija.cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://wa.me/212522123456"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 111.79 1.8z"/>
              </svg>
            </a>
            <a
              href="mailto:hello@darija.ma"
              className="footer__social-link"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__divider" aria-hidden="true" />
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              © {year} DARIJA Café — All rights reserved.
            </p>
            <p className="footer__crafted">
              Crafted with love in <span>Casablanca, Morocco</span> 🇲🇦
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
