import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* Background image */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
          alt="Moroccan café interior"
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__overlay" />
        {/* Decorative mesh */}
        <div className="hero__zellige" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__city section-label">
          <span>Casablanca, Morocco</span>
        </div>

        <h1 className="hero__title section-heading">
          Where Coffee<br />
          <em>Meets the Soul</em>
        </h1>

        <p className="hero__subtitle">
          A sanctuary of warmth, craft, and ancient flavours —<br />
          brewed with the spirit of a Moroccan riad.
        </p>

        <div className="hero__cta-row">
          <a href="#menu" className="btn-gold" id="hero-explore-btn">
            <span>Explore Our Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#story" className="btn-outline" id="hero-story-btn">
            <span>Our Story</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label">Scroll</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero__fade-bottom" aria-hidden="true" />
    </section>
  )
}
