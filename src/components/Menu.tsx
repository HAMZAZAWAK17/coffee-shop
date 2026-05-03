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
    title: 'Hot Drinks',
    items: [
      { name: 'Café Marocain', description: 'Traditional spiced coffee with cardamom, cinnamon & rose water', price: '32 MAD' },
      { name: 'Atay Nana', description: 'Authentic Moroccan mint tea, brewed high & slow with mountain herbs', price: '25 MAD' },
      { name: 'Latte au Safran', description: 'Velvety espresso latte infused with Taliouine saffron & honey', price: '48 MAD' },
      { name: 'Café Noir Riad', description: 'Single-origin Atlas blend, French press, served with orange blossom sugar', price: '35 MAD' },
      { name: 'Chocolat Chaud Épicé', description: 'Dark chocolate with ras el hanout, chili, and steamed milk', price: '42 MAD' },
    ],
  },
  {
    icon: '🧊',
    title: 'Cold & Specialties',
    items: [
      { name: 'Cold Brew Argan', description: 'Slow-steeped cold brew finished with a drop of Moroccan argan oil', price: '55 MAD' },
      { name: 'Iced Atay Royal', description: 'Cold-pressed mint tea with fresh lime, honey, and crushed ice', price: '38 MAD' },
      { name: 'Horchata de Noix', description: 'Walnut & almond milk, cardamom, vanilla — a Moroccan take on horchata', price: '50 MAD' },
      { name: 'Citron Pressé Safran', description: 'Fresh-squeezed Moroccan lemon with saffron syrup and sparkling water', price: '30 MAD' },
      { name: 'Rose & Hibiscus Cooler', description: 'Karkadé hibiscus with rose water, elderflower, and pink pepper', price: '36 MAD' },
    ],
  },
  {
    icon: '🥐',
    title: 'Bites & Pastries',
    items: [
      { name: 'Msemen Miel', description: 'Flaky Moroccan flatbread, griddle-fresh, with wildflower honey & butter', price: '28 MAD' },
      { name: 'Briouat au Fromage', description: 'Crispy pastry parcels filled with spiced goat cheese & herbs', price: '38 MAD' },
      { name: 'Cornes de Gazelle', description: 'Almond-paste crescent pastries dusted with orange blossom icing sugar', price: '32 MAD' },
      { name: 'Sfenj du Jour', description: 'Moroccan doughnuts, warm from the fryer, with argan honey dip', price: '24 MAD' },
      { name: 'Sellou Énergisant', description: 'Traditional roasted flour & sesame ball with almonds and anise', price: '30 MAD' },
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
