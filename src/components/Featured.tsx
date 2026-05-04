import './Featured.css'
import featuredImg from '../assets/featured.png'

const products = [
  {
    name: 'Signature House Blend Set',
    rating: 4,
    price: '$24.99',
    image: featuredImg
  },
  {
    name: 'Dark Roast Espresso',
    rating: 5,
    price: '$18.50',
    image: featuredImg
  },
  {
    name: 'Matcha Green Tea Powder',
    rating: 4,
    price: '$22.00',
    image: featuredImg
  },
  {
    name: 'Ceramic Pour-Over',
    rating: 3,
    price: '$35.00',
    image: featuredImg
  }
]

export default function Featured() {
  return (
    <section className="featured container reveal">
      <div className="featured__header">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured__filters">
          <button className="filter-btn">Oat/High</button>
          <button className="filter-btn active">Canister</button>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-card__image">
              <img src={product.image} alt={product.name} />
              <button className="wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
            <div className="product-card__info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

