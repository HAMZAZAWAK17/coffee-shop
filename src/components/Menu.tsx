import './Menu.css'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  icon: string
  title: string
  items: MenuItem[]
}

const categories: MenuCategory[] = [
  {
    icon: '☕',
    title: 'Classic Coffees',
    items: [
      { name: 'Espresso Ristretto', description: 'Short, strong, and full-bodied classic espresso', price: '20 MAD' },
      { name: 'Café Marocain', description: 'Traditional spiced coffee with cardamom, cinnamon & nutmeg', price: '32 MAD' },
      { name: 'Latte au Safran', description: 'Velvety espresso latte infused with Taliouine saffron', price: '48 MAD' },
      { name: 'Cappuccino', description: 'Rich espresso topped with deeply textured steamed milk', price: '30 MAD' },
      { name: 'Pour Over V60', description: 'Single-origin Atlas blend, brewed fresh to order', price: '40 MAD' },
    ],
  },
  {
    icon: '🧊',
    title: 'Specialty & Iced Coffees',
    items: [
      { name: 'Cold Brew Argan', description: 'Slow-steeped cold brew finished with a drop of Moroccan argan oil', price: '55 MAD' },
      { name: 'Iced Latte', description: 'Chilled espresso over ice with milk and a touch of vanilla', price: '35 MAD' },
      { name: 'Mocha Glacé', description: 'Iced coffee blended with dark chocolate and steamed milk', price: '45 MAD' },
      { name: 'Nitro Cold Brew', description: 'Nitrogen-infused cold brew for a creamy, stout-like texture', price: '60 MAD' },
      { name: 'Caramel Macchiato', description: 'Espresso layered with vanilla, steamed milk, and caramel drizzle', price: '42 MAD' },
    ],
  },
  {
    icon: '🍪',
    title: 'Cookies & Brownies',
    items: [
      { name: 'Classic Chocolate Chip', description: 'Warm, gooey cookie loaded with rich dark chocolate chunks', price: '25 MAD' },
      { name: 'Double Fudge Brownie', description: 'Decadent chocolate brownie with a fudgy center and crispy edge', price: '30 MAD' },
      { name: 'Walnut Brownie', description: 'Our signature brownie studded with toasted Moroccan walnuts', price: '35 MAD' },
      { name: 'White Chocolate Macadamia', description: 'Soft-baked cookie with white chocolate chips and macadamia nuts', price: '28 MAD' },
      { name: 'Sea Salt Caramel Cookie', description: 'Chewy cookie infused with caramel and a sprinkle of sea salt', price: '28 MAD' },
    ],
  },
]

export default function Menu() {
  return (
    <section className="menu section" id="menu" aria-labelledby="menu-heading">
      <div className="menu__bg" aria-hidden="true" />

      <div className="container">
        <div className="menu__header">
          <p className="section-label"><span>The Menu</span></p>
          <h2 className="section-heading menu__title" id="menu-heading">
            Crafted with<br />
            <em>Moroccan Soul</em>
          </h2>
          <p className="menu__subtitle">
            Every recipe is a story. Every flavour, a memory from Morocco's diverse culinary heritage.
          </p>
        </div>

        <div className="menu__grid">
          {categories.map(({ icon, title, items }) => (
            <div className="menu__category" key={title}>
              <div className="menu__category-header">
                <span className="menu__category-icon" role="img" aria-hidden="true">{icon}</span>
                <h3 className="menu__category-title">{title}</h3>
                <div className="menu__category-rule" aria-hidden="true" />
              </div>
              <ul className="menu__items" role="list">
                {items.map(({ name, description, price }) => (
                  <li className="menu__item" key={name}>
                    <div className="menu__item-top">
                      <span className="menu__item-name">{name}</span>
                      <span className="menu__item-dots" aria-hidden="true" />
                      <span className="menu__item-price">{price}</span>
                    </div>
                    <p className="menu__item-desc">{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="menu__footer">
          <p className="menu__note">
            All beverages are crafted to order. Seasonal specials rotate with the harvest calendar.
          </p>
          <a href="#visit" className="btn-gold" id="menu-reserve-btn">
            <span>Reserve a Table</span>
          </a>
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
