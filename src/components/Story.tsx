import { useEffect, useRef, useState } from 'react'
import './Story.css'

interface StatProps {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const num = parseFloat(value.replace(/[^0-9.]/g, ''))
          const suffix = value.replace(/[0-9.]/g, '')
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = (num * eased).toFixed(num % 1 !== 0 ? 1 : 0)
            setDisplayed(current + suffix)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">{displayed}</span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Story() {
  return (
    <section className="story section" id="story" aria-labelledby="story-heading">
      <div className="container">
        <div className="story__grid">
          {/* Left: Photo */}
          <div className="story__photo-wrap">
            <div className="story__photo-frame">
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
                alt="Moroccan riad interior with lanterns"
                className="story__photo"
                loading="lazy"
              />
              <div className="story__photo-border" aria-hidden="true" />
              <div className="story__photo-corner tl" aria-hidden="true" />
              <div className="story__photo-corner tr" aria-hidden="true" />
              <div className="story__photo-corner bl" aria-hidden="true" />
              <div className="story__photo-corner br" aria-hidden="true" />
            </div>
            {/* Floating tag */}
            <div className="story__photo-tag">
              <span className="story__photo-tag-year">Est.</span>
              <span className="story__photo-tag-num">2018</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="story__text">
            <p className="section-label">
              <span>Our Story</span>
            </p>
            <h2 className="section-heading story__heading" id="story-heading">
              Born from the<br />
              <em>Heart of a Riad</em>
            </h2>

            <p className="story__body">
              DARIJA began as a dream nurtured over endless cups of café marocain —
              in the lantern-lit courtyards of Marrakech, in the salt-kissed air of
              Casablanca's Maarif district, in the memory of grandmothers brewing
              spiced tea at dawn.
            </p>
            <p className="story__body">
              We are not merely a café. We are a living archive of Moroccan hospitality,
              where every cup is a ritual, every corner tells a story, and every
              flavour carries the soul of our homeland. Our beans are sourced from the
              Atlas highlands; our pastries baked fresh each morning in the tradition
              of ancient medina kitchens.
            </p>

            <div className="story__ornament" aria-hidden="true">
              ✦ ✦ ✦
            </div>

            {/* Stats */}
            <div className="story__stats">
              <Stat value="12+" label="Signature Drinks" />
              <div className="story__stats-divider" aria-hidden="true" />
              <Stat value="6" label="Years of Craft" />
              <div className="story__stats-divider" aria-hidden="true" />
              <Stat value="4.9" label="Guest Rating" />
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="ornament-divider container" style={{ marginTop: '5rem' }}>
        <span className="line" />
        <span className="symbol">⬡ ◆ ⬡</span>
        <span className="line" />
      </div>
    </section>
  )
}
