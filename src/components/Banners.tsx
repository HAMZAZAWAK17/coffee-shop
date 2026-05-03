import './Banners.css'

export default function Banners() {
  return (
    <section className="banners">
      <div className="container">
        <div className="banners__grid">
          {/* Banner 1 */}
          <div className="banner__card">
            <img 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80" 
              alt="Brownies and Coffee" 
              className="banner__img" 
            />
            <div className="banner__overlay" />
            <div className="banner__content">
              <h3 className="banner__title">Get 1 Free<br/>Brownie</h3>
              <p className="banner__desc">With any large coffee purchase</p>
              <a href="#order" className="btn btn-secondary">Learn More</a>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="banner__card">
            <img 
              src="https://images.unsplash.com/photo-1507133750070-4cb6531473fb?w=800&q=80" 
              alt="Iced Coffee" 
              className="banner__img" 
            />
            <div className="banner__overlay" />
            <div className="banner__content banner__content--right">
              <h3 className="banner__title">Chill Out<br/>With Iced</h3>
              <p className="banner__desc">Try our new seasonal flavors</p>
              <a href="#order" className="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
