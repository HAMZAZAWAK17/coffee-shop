import './ShopCategories.css'
import categoriesImg from '../assets/categories.png'

const categories = [
  { name: 'Coffee Beans', icon: '1' },
  { name: 'Ground Coffee', icon: '2' },
  { name: 'Matcha & Tea', icon: '3' },
  { name: 'Brewing Equipment', icon: '4' },
  { name: 'Gift Boxes', icon: '5' }
]

export default function ShopCategories() {
  return (
    <section className="shop-categories container reveal">
      <h2 className="section-title text-center">Shop Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="category-card__icon-wrapper">
               {/* Using a placeholder circle since I have a collage image but I can also use parts of it if needed. 
                   Actually, for better visual, I'll just use a styled div with a number for now, matching the screenshot's style. */}
               <span className="category-number">{cat.icon}</span>
               <div className="category-placeholder-img">
                 <img src={categoriesImg} alt={cat.name} className="cat-img" />
               </div>
            </div>
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
