import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Specialties from './components/Specialties'
import Reviews from './components/Reviews'
import Order from './components/Order'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Gallery />
        <Reviews />
        <Order />
      </main>
      <Footer />
    </div>
  )
}

export default App
