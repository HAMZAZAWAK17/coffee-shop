import './OurStore.css'

const stores = [
  { name: 'Casablanca Central', city: 'Casablanca', top: '35%', left: '42%' },
  { name: 'Marrakech Medina', city: 'Marrakech', top: '55%', left: '35%' },
  { name: 'Rabat Coastal', city: 'Rabat', top: '28%', left: '48%' },
  { name: 'Tangier Bay', city: 'Tangier', top: '12%', left: '55%' },
]

export default function OurStore() {
  return (
    <section className="our-store container reveal">
      <div className="our-store__content">
        <h2 className="section-title">Our Store Locations</h2>
        <p className="section-subtitle">
          Visit us at one of our premium cafes across Morocco. 
          Experience the same soul-brewed coffee in every city.
        </p>
        
        <div className="store-container">
          <div className="map-wrapper">
            {/* Simplified Morocco SVG Outline */}
            <svg viewBox="0 0 500 500" className="morocco-map">
              <path 
                d="M400,50 L420,70 L430,100 L420,120 L380,150 L350,180 L320,200 L300,230 L280,260 L250,300 L220,350 L200,400 L180,450 L150,470 L120,460 L100,430 L110,400 L130,350 L150,300 L180,250 L220,200 L260,150 L300,100 L350,60 Z" 
                className="map-path"
              />
              
              {/* Store Markers */}
              {stores.map((store, index) => (
                <g key={index} className="store-marker" style={{ transform: `translate(${store.left}, ${store.top})` }}>
                  <circle r="6" className="marker-dot" />
                  <circle r="12" className="marker-ring" />
                  <foreignObject x="15" y="-10" width="150" height="40">
                    <div className="marker-label">
                      <strong>{store.city}</strong>
                      <span>{store.name}</span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </div>
          
          <div className="store-list">
            {stores.map((store, index) => (
              <div key={index} className="store-item">
                <div className="store-item__icon">📍</div>
                <div className="store-item__info">
                  <h4>{store.city}</h4>
                  <p>{store.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
