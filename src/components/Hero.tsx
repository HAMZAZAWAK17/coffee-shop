import './Hero.css'

export default function Hero() {
  return (
    <section className="hero angle-bottom" id="home">
      {/* Background image */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80"
          alt="Barista pouring milk into coffee"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <h1 className="hero__title">
          Brewed to Perfection,
        </h1>
        <p className="hero__subtitle-text">
          RICH FLAVORS & DAILY CRAFT
        </p>

        {/* Floating Cup */}
        <div className="hero__cup-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80" 
            alt="Coffee cup" 
            className="hero__cup"
          />
        </div>
      </div>
    </section>
  )
}
