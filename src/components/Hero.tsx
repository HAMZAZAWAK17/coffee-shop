import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-container">
        <div className="hero__overlay" />
        <div className="hero__content container reveal">
          <h1 className="hero__title serif">
            Crafted Coffee.<br />Brewed with Soul.
          </h1>
          <p className="hero__subtitle">
            Ethically sourced beans, slow-roasted perfection,<br />
            delivered fresh to your door.
          </p>
          <div className="hero__actions">
            <button className="btn btn-primary">Shop Coffee</button>
            <button className="btn btn-outline glass" style={{ color: 'white', borderColor: 'white' }}>Visit Our Café</button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="hero__dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      
      {/* Decorative Curved Bottom */}
      <div className="hero__curve">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="var(--color-bg)"/>
        </svg>
      </div>
    </section>
  )
}

