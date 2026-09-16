import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

const zones = [
  {
    id: 'hydro',
    title: 'Hydroponics clean zone',
    compass: 'East',
    copy: '10,800 sq.ft climate-controlled polyhouse with NFT channels and Dutch buckets. Morning sunlight and positive energy for high yield and premium quality. 18–25°C, 65–75% humidity.',
  },
  {
    id: 'moringa',
    title: 'Moringa buffer zone',
    compass: 'West',
    copy: 'Natural bio-shield and wind barrier. Improves biodiversity and soil health while feeding the processing unit with superfood leaf.',
  },
  {
    id: 'dairy',
    title: 'Gir dairy stability zone',
    compass: 'South-West',
    copy: 'Heavy zone as per Vastu. 30–40 Gir cows for A2 milk, ghee and paneer — consistent cash flow and regenerative manure loop.',
  },
  {
    id: 'poultry',
    title: 'Poultry controlled zone',
    compass: 'Centre',
    copy: 'Layer house with biosecurity buffers. ~2,000 birds, 1,500–1,700 eggs a day, placed away from the hydroponic clean flow.',
  },
  {
    id: 'utility',
    title: 'Utility & water zone',
    compass: 'East support',
    copy: 'RO, storage, nutrient tanks and technical infrastructure. Recirculation cuts water use by about 90% versus open-field farming.',
  },
  {
    id: 'wind',
    title: 'SETU wind energy',
    compass: 'North',
    copy: 'On-site turbine for energy independence. Offsets a large share of farm power and lowers operating cost year after year.',
  },
  {
    id: 'entry',
    title: 'Entry / retreat',
    compass: 'South-East',
    copy: 'Controlled entry for people and produce. The public face of agro-tourism, harvest walks and investor visits.',
  },
]

export default function FarmMap() {
  const [active, setActive] = useState('hydro')
  const zone = zones.find((z) => z.id === active)

  return (
    <section id="farm" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">1-acre master plan</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-6xl">Vastu + biosecurity design.</h2>
          <p className="mt-5 max-w-2xl text-cream/70">
            Clean movement in the east, heavy dairy in the south-west, natural buffer in the west.
            Tap a zone to see how the farm is planned to stay productive and protected.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20">
              <img src="/images/master-plan.jpg?v=2" alt="Amrut Shivar master plan" className="w-full" />
              {[
                { id: 'hydro', top: '30%', left: '62%' },
                { id: 'moringa', top: '36%', left: '22%' },
                { id: 'dairy', top: '70%', left: '16%' },
                { id: 'poultry', top: '40%', left: '42%' },
                { id: 'utility', top: '62%', left: '78%' },
                { id: 'wind', top: '10%', left: '48%' },
                { id: 'entry', top: '78%', left: '48%' },
              ].map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setActive(pin.id)}
                  style={{ top: pin.top, left: pin.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={pin.id}
                >
                  <span
                    className={`block h-5 w-5 rounded-full border-2 border-cream shadow-[0_0_0_8px_rgba(212,175,55,0.25)] transition ${
                      active === pin.id ? 'scale-125 bg-gold' : 'bg-mint'
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="rounded-[2rem] border border-gold/20 bg-forest p-8"
              >
                <p className="text-xs tracking-[0.28em] uppercase text-gold">{zone.compass}</p>
                <h3 className="mt-3 font-serif text-3xl text-cream">{zone.title}</h3>
                <p className="mt-4 leading-relaxed text-cream/75">{zone.copy}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex flex-wrap gap-2">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setActive(z.id)}
                  className={`rounded-full px-3 py-1.5 text-xs tracking-wide transition ${
                    active === z.id
                      ? 'bg-gold text-ink'
                      : 'border border-gold/25 text-cream/70 hover:border-gold'
                  }`}
                >
                  {z.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
