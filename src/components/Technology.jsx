import { Activity, Cpu, Droplets, Smartphone, Thermometer, Waves } from 'lucide-react'
import Reveal from './Reveal'

const specs = [
  { icon: Thermometer, label: 'Climate', value: '18–25°C · 65–75% RH' },
  { icon: Waves, label: 'Systems', value: 'NFT + Dutch bucket' },
  { icon: Droplets, label: 'Water', value: '90% less vs open field' },
  { icon: Activity, label: 'Yield', value: '3× traditional farming' },
  { icon: Cpu, label: 'Intelligence', value: 'IoT + AI farm analytics' },
  { icon: Smartphone, label: 'Control', value: 'Live mobile dashboard' },
]

export default function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Hydroponics business unit</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">
            Future of food. Grown clean. Grown smart.
          </h2>
          <p className="mt-5 text-forest/75">
            The greenhouse is the production core: high-density soilless cultivation with automated
            irrigation, nutrient delivery and climate control. 10,800 sq.ft of protected growing,
            25–30 harvests a year for leafy crops, and 365-day output independent of monsoon.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-sand bg-white p-4 transition hover:-translate-y-1 hover:border-gold"
              >
                <spec.icon className="mb-3 text-leaf" size={20} />
                <p className="text-[11px] tracking-[0.22em] uppercase text-leaf/70">{spec.label}</p>
                <p className="mt-1 font-serif text-lg">{spec.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <img
              src="/images/hydro-greenhouse.jpg?v=2"
              alt="Climate controlled hydroponic greenhouse"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(7,22,15,0.25)] md:h-[520px]"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl glass p-4 text-cream md:left-auto md:right-6 md:w-72">
              <p className="text-xs tracking-[0.2em] uppercase text-gold-soft">Live farm pulse</p>
              <p className="mt-2 font-serif text-2xl">26.7°C · 65% humidity</p>
              <p className="mt-1 text-sm text-cream/70">All systems active · 78% nutrient balance</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
