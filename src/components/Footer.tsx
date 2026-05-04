import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          <div className="footer__col">
            <h4 className="footer__brand serif">EMBER & LEAF CAFÉ</h4>
            <p className="footer__text">
              Crafting perfect moments, one cup at a time. Discover the soul of coffee in every brew.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Opening Hours</h4>
            <ul className="footer__info-list">
              <li>08:00 - 20:00</li>
              <li>Every Day</li>
              <li>Marrakech, MA</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Newsletter</h4>
            <form className="footer__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Sign up" required />
              <button type="submit" className="btn-sign">Sign</button>
            </form>
          </div>

          <div className="footer__col">
            <div className="footer__gallery">
               <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&q=80" alt="Gallery 1" />
               <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80" alt="Gallery 2" />
               <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80" alt="Gallery 3" />
               <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=200&q=80" alt="Gallery 4" />
               <img src="https://images.unsplash.com/photo-1507133750040-4a8f5700e35f?w=200&q=80" alt="Gallery 5" />
               <img src="https://images.unsplash.com/photo-1497933321027-944837531c2c?w=200&q=80" alt="Gallery 6" />
            </div>
          </div>

        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Ember & Leaf Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

