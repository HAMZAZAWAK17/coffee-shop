import './Featured.css'

const featuredItems = [
  {
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
    title: 'Espresso Masterpieces',
    description: 'Rich, bold, and crafted with precision. Experience the true essence of our dark roasted beans in every shot.',
  },
  {
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    title: 'Iced Favorites',
    description: 'Cool down with our refreshing selection of iced lattes, cold brews, and signature blended drinks.',
  },
  {
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
    title: 'Cookies & Brownies',
    description: 'Perfectly baked treats to complement your coffee. From classic chocolate chip to fudge brownies.',
  },
]

export default function Featured() {
  return (
    <section className="featured section" id="menu">
      <div className="container">
        <h2 className="section-title">Featured Drinks & Treats</h2>
        <p className="section-subtitle">
          Discover our most loved creations. We specialize in all types of coffee 
          and pair them with the perfect freshly baked cookies and brownies.
        </p>

        <div className="featured__grid">
          {featuredItems.map((item, index) => (
            <div className="featured__card" key={index}>
              <div className="featured__card-img-wrapper">
                <img src={item.image} alt={item.title} className="featured__card-img" />
              </div>
              <div className="featured__card-content">
                <h3 className="featured__card-title">{item.title}</h3>
                <p className="featured__card-desc">{item.description}</p>
                <a href="#order" className="btn btn-primary featured__card-btn">Order Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
