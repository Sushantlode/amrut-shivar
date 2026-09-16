import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Process from './components/Process'
import Problem from './components/Problem'
import WhyHydro from './components/WhyHydro'
import Ecosystem from './components/Ecosystem'
import FarmMap from './components/FarmMap'
import Technology from './components/Technology'
import Products from './components/Products'
import Market from './components/Market'
import Proof from './components/Proof'
import Financials from './components/Financials'
import Roadmap from './components/Roadmap'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <main className="bg-ink text-cream">
      <Navbar />
      <Hero />
      <Process />
      <Problem />
      <WhyHydro />
      <Ecosystem />
      <FarmMap />
      <Technology />
      <Products />
      <Market />
      <Proof />
      <Financials />
      <Roadmap />
      <Impact />
      <Contact />
      <Footer />
    </main>
  )
}
