import './DailyDeal.css'

export default function DailyDeal() {
  return (
    <section className="daily-deal">
      {/* Title is outside the dark container to match layout */}
      <h2 className="section-title">Daily Deal</h2>
      
      <div className="daily-deal__dark-section">
        {/* Decorative coffee beans background on the edges */}
        <div className="daily-deal__bg" />
        
        <div className="container">
          <div className="daily-deal__grid">
            
            {/* Card 1: Daily Deal Info */}
            <div className="daily-deal__card daily-deal__card--text">
              <h3>Daily Deal</h3>
              <p>Start your morning with our signature freshly baked croissant and a warm, rich cup of coffee. The perfect duo to fuel your day.</p>
              <a href="#order" className="btn btn-primary">Order Now</a>
            </div>

            {/* Card 2: Image */}
            <div className="daily-deal__card daily-deal__card--img">
              <img 
                src="https://images.unsplash.com/photo-1623366302587-bca9bc2385b0?w=600&q=80" 
                alt="Croissant and Coffee" 
              />
            </div>

            {/* Card 3: Newsletter/Contact */}
            <div className="daily-deal__card daily-deal__card--text">
              <h3>Newsletter Sign</h3>
              <p>Get exclusive deals and coffee tips delivered to your inbox.</p>
              
              <div className="daily-deal__phone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span>1-800-COFFEE</span>
              </div>
              
              <button className="btn btn-secondary" style={{width: '100%'}}>Subscribe</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
