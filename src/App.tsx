import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopCategories from './components/ShopCategories'
import Featured from './components/Featured'
import OurStore from './components/OurStore'
import Footer from './components/Footer'
import './index.css'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ShopCategories />
        <Featured />
        
        {/* Promotional Banner Section */}
        <section className="promo-banner container reveal">
          <div className="promo-banner__inner">
            <div className="promo-banner__image">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80" alt="Cafe ambiance" />
            </div>
            <div className="promo-banner__content">
              <h2 className="serif">More Than Coffee.<br />Never Run Out of Coffee.</h2>
              <p>Our subscription service ensures you always have the freshest beans at your doorstep, tailored to your taste.</p>
              <button className="btn btn-primary">Subscribe & Save 15%</button>
            </div>
          </div>
        </section>

        <OurStore />
        
        {/* Customer Reviews Section */}
        <section className="reviews container reveal">
          <h2 className="section-title text-center">Customer Reviews</h2>
          <div className="reviews-scroll">
            <div className="review-card">
              <img src="https://i.pravatar.cc/150?u=1" alt="User" />
              <p>"Best coffee I've ever had."</p>
            </div>
            <div className="review-card">
              <img src="https://i.pravatar.cc/150?u=2" alt="User" />
              <p>"Feels like a café experience at home."</p>
            </div>
            <div className="review-card">
              <img src="https://i.pravatar.cc/150?u=3" alt="User" />
              <p>"The roast is perfect every time."</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

