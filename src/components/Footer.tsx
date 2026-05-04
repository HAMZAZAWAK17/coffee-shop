import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          <div className="footer__col">
            <h4 className="footer__title">Coffee Leo</h4>
            <p className="footer__text">
              Crafting perfect moments, one cup at a time. Serving you the finest coffee in the city.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Our Coffee</h4>
            <ul className="footer__links">
              <li><a href="#featured">Featured</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#shop">Shop Beans</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__links">
              <li>123 Coffee Ave, NY 10001</li>
              <li>info@coffeeleo.com</li>
              <li>1-800-COFFEE</li>
              <li>Mon-Sun: 7am - 8pm</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Connect</h4>
            <p className="footer__text">
              Join our newsletter for exclusive offers and updates on new blends.
            </p>
            <form className="footer__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit">→</button>
            </form>
          </div>

        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Coffee Leo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
