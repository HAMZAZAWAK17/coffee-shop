import './Testimonial.css'

export default function Testimonial() {
  return (
    <section className="testimonial" aria-labelledby="testimonial-label">
      <div className="testimonial__bg" aria-hidden="true" />
      <div className="container">
        <div className="testimonial__inner">
          {/* Stars */}
          <div className="testimonial__stars" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="testimonial__star" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="testimonial__quote" id="testimonial-label">
            <p>
              "DARIJA is not just a café — it is a return to something ancient and precious.
              The Latte au Safran made me close my eyes and think of my mother's kitchen
              in the medina. In Casablanca, this place is unlike any other."
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="testimonial__attribution">
            <div className="testimonial__line" aria-hidden="true" />
            <div className="testimonial__author">
              <span className="testimonial__name">Nadia Benali</span>
              <span className="testimonial__place">Casablanca, Morocco</span>
            </div>
            <div className="testimonial__line" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="ornament-divider container" style={{ marginTop: '5rem' }}>
        <span className="line" />
        <span className="symbol">⬡ ◆ ⬡</span>
        <span className="line" />
      </div>
    </section>
  )
}
