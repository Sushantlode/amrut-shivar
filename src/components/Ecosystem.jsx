import { Leaf, Milk, Egg, Trees, Factory, Wind } from 'lucide-react'
import Reveal from './Reveal'

const streams = [
  {
    icon: Leaf,
    share: '45%',
    title: 'Hydroponic farming',
    text: 'Lettuce, spinach, basil, mint, cherry tomato and culinary herbs. 8–10 kg per rack each 25–30 day cycle for HoReCa and premium retail.',
  },
  {
    icon: Egg,
    share: '20%',
    title: 'Poultry',
    text: 'About 2,000 layers producing 1,500–1,700 eggs a day — 45,000–51,000 eggs a month for local retail.',
  },
  {
    icon: Milk,
    share: '15%',
    title: 'Gir dairy',
    text: '30–40 milch animals, 250–350 litres of A2 milk daily, plus ghee, paneer and bottled milk for nearby cities.',
  },
  {
    icon: Trees,
    share: '10%',
    title: 'Agro-tourism',
    text: 'Guided tours, harvest experiences and education trails across hydroponics, dairy, poultry and processing.',
  },
  {
    icon: Factory,
    share: '7%',
    title: 'Processing',
    text: 'Moringa powder, turmeric paste and value-added products from farm-grown raw material.',
  },
  {
    icon: Wind,
    share: '3%',
    title: 'SETU wind energy',
    text: 'A 50–100 kW turbine offsets grid power, cuts electricity cost and supports climate-independent operations.',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-forest py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">Six integrated revenue streams</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-cream md:text-6xl">
            One farm. A complete circular agribusiness.
          </h2>
          <p className="mt-5 max-w-2xl text-cream/70">
            No single stream exceeds 50% of revenue. Hydroponics leads, while dairy, poultry, tourism,
            processing and wind keep cash flow resilient.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {streams.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-ink/40 p-7 transition duration-500 hover:-translate-y-1.5 hover:border-gold/50">
                <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/25" />
                <div className="flex items-center justify-between">
                  <item.icon className="text-gold" />
                  <span className="font-serif text-3xl text-gold-soft">{item.share}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold to-mint transition-all duration-1000 group-hover:from-gold-soft"
                    style={{ width: item.share }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
