import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import PhotoStrip from './components/PhotoStrip'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Testimonial from './components/Testimonial'
import Visit from './components/Visit'
import Footer from './components/Footer'
import './index.css'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Story />
        <PhotoStrip />
        <Menu />
        <Experience />
        <Testimonial />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App
