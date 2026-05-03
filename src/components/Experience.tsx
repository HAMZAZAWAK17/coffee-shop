import './Experience.css'

const tiles = [
  {
    bg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 2a10 10 0 110 20A10 10 0 0116 6zm0 3a1 1 0 00-1 1v5.586l-3.707 3.707a1 1 0 101.414 1.414L16 17.414V10a1 1 0 00-1-1z" fill="currentColor"/>
      </svg>
    ),
    title: 'Warm Ambiance',
    subtitle: 'Hand-plastered tadelakt walls, cedar wood ceilings, and a light that feels like dusk in Fes.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M10 6h12v2H10V6zm-2 4h16v2H8v-2zm14 4v10H10V14h12zm2-2H8a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V13a1 1 0 00-1-1zm-8 3a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/>
      </svg>
    ),
    title: 'Craft Coffee',
    subtitle: 'Atlas-sourced single-origins, micro-roasted in-house and brewed to order by certified baristas.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4a1 1 0 01.894.553l3.27 6.63 7.317 1.063a1 1 0 01.555 1.705l-5.294 5.159 1.25 7.285a1 1 0 01-1.452 1.054L16 23.865l-6.54 3.44a1 1 0 01-1.452-1.054l1.25-7.285L4.964 13.95a1 1 0 01.555-1.705l7.317-1.063 3.27-6.63A1 1 0 0116 4z" fill="currentColor"/>
      </svg>
    ),
    title: 'Live Music',
    subtitle: 'Gnawa rhythms on Friday evenings. Andalusian oud sessions every Sunday — the soul of Morocco, live.',
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="experience__header">
          <p className="section-label"><span>The Experience</span></p>
          <h2 className="section-heading experience__title" id="experience-heading">
            More Than a Cup —<br />
            <em>A Moment</em>
          </h2>
        </div>
      </div>

      <div className="experience__grid">
        {tiles.map(({ bg, icon, title, subtitle }, i) => (
          <article className="experience__tile" key={i} aria-label={title}>
            <img src={bg} alt={title} className="experience__tile-bg" loading="lazy" />
            <div className="experience__tile-overlay" aria-hidden="true" />
            <div className="experience__tile-content">
              <div className="experience__tile-icon">{icon}</div>
              <h3 className="experience__tile-title">{title}</h3>
              <p className="experience__tile-sub">{subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ornament-divider container" style={{ marginTop: '5rem' }}>
        <span className="line" />
        <span className="symbol">⬡ ◆ ⬡</span>
        <span className="line" />
      </div>
    </section>
  )
}
