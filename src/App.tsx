import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Banners from './components/Banners'
import DailyDeal from './components/DailyDeal'
import Footer from './components/Footer'
import './index.css'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Featured />
        <Banners />
        <DailyDeal />
      </main>
      <Footer />
    </>
  )
}

export default App
