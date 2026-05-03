import './PhotoStrip.css'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Artisan coffee being poured',
  },
  {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    alt: 'Golden Moroccan lanterns',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    alt: 'Espresso close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Café interior warm lighting',
  },
]

export default function PhotoStrip() {
  return (
    <section className="photo-strip" aria-label="Gallery">
      {photos.map(({ src, alt }, i) => (
        <div className="photo-strip__item" key={i}>
          <img src={src} alt={alt} loading="lazy" />
          <div className="photo-strip__overlay" aria-hidden="true" />
        </div>
      ))}
    </section>
  )
}
