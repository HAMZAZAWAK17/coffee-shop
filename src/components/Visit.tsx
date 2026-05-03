import './Visit.css'

const hours = [
  { day: 'Monday – Thursday', time: '8:00 – 22:00' },
  { day: 'Friday', time: '8:00 – 23:30' },
  { day: 'Saturday', time: '9:00 – 23:30' },
  { day: 'Sunday', time: '9:00 – 21:00' },
]

export default function Visit() {
  return (
    <section className="visit section" id="visit" aria-labelledby="visit-heading">
      <div className="visit__bg" aria-hidden="true" />
      <div className="container">
        <div className="visit__header">
          <p className="section-label"><span>Find Us</span></p>
          <h2 className="section-heading visit__title" id="visit-heading">
            Come & <em>Stay a While</em>
          </h2>
        </div>

        <div className="visit__grid">
          {/* Opening Hours */}
          <div className="visit__card">
            <div className="visit__card-header">
              <div className="visit__card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="visit__card-title">Opening Hours</h3>
            </div>

            <div className="visit__hours">
              {hours.map(({ day, time }) => (
                <div className="visit__hours-row" key={day}>
                  <span className="visit__hours-day">{day}</span>
                  <span className="visit__hours-dots" aria-hidden="true" />
                  <span className="visit__hours-time">{time}</span>
                </div>
              ))}
            </div>

            <p className="visit__hours-note">
              Kitchen closes 30 minutes before closing time.<br />
              Last coffee orders: 15 min before close.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="visit__card">
            <div className="visit__card-header">
              <div className="visit__card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="visit__card-title">Location & Contact</h3>
            </div>

            <ul className="visit__info-list">
              <li className="visit__info-item">
                <span className="visit__info-label">Address</span>
                <span className="visit__info-value">
                  12 Rue des Orangers, Quartier Maarif,<br />
                  Casablanca 20340, Morocco
                </span>
              </li>
              <li className="visit__info-item">
                <span className="visit__info-label">Phone</span>
                <a href="tel:+212522123456" className="visit__info-value visit__info-link">
                  +212 522 123 456
                </a>
              </li>
              <li className="visit__info-item">
                <span className="visit__info-label">Instagram</span>
                <a
                  href="https://instagram.com/darija.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit__info-value visit__info-link"
                >
                  @darija.cafe
                </a>
              </li>
              <li className="visit__info-item">
                <span className="visit__info-label">Email</span>
                <a href="mailto:hello@darija.ma" className="visit__info-value visit__info-link">
                  hello@darija.ma
                </a>
              </li>
            </ul>

            <a href="mailto:hello@darija.ma" className="btn-gold visit__cta" id="visit-reserve-btn">
              <span>Reserve a Table</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="visit__map">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
            alt="Casablanca cityscape — DARIJA is located in Maarif district"
            className="visit__map-img"
            loading="lazy"
          />
          <div className="visit__map-overlay">
            <div className="visit__map-pin">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="visit__map-label">Maarif, Casablanca</span>
          </div>
        </div>
      </div>
    </section>
  )
}
