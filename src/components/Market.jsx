import { Building2, Globe2, Ship, Users } from 'lucide-react'
import Reveal from './Reveal'

const pillars = [
  {
    icon: Building2,
    title: 'Market proximity',
    text: 'Minutes from Pune and a short hop to Mumbai HoReCa. Fresher produce, faster response, more frequent delivery.',
  },
  {
    icon: Ship,
    title: 'Export connectivity',
    text: 'JNPT access for UAE and Middle East shipments. Predictable outbound fulfilment for importers who need reliability.',
  },
  {
    icon: Globe2,
    title: 'Climate suitability',
    text: 'Year-round controlled production. Less seasonal volatility, stronger crop continuity for domestic and export contracts.',
  },
  {
    icon: Users,
    title: 'Labour & ecosystem',
    text: 'Skilled agri talent, mature input markets and local expertise in Maharashtra lower execution risk as the model scales.',
  },
]

export default function Market() {
  return (
    <section id="market" className="bg-forest py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">Dual market strategy</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-cream md:text-6xl">
            Strong demand. Premium positioning.
          </h2>
          <p className="mt-5 max-w-2xl text-cream/70">
            Domestic buyers want freshness, consistency and traceability. Export buyers want
            compliance, grade and on-time supply. Amrut Shivar is built for both.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-gold/15 bg-ink/35 p-6 transition hover:-translate-y-2 hover:border-gold">
                <item.icon className="text-gold" />
                <h3 className="mt-5 font-serif text-2xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 rounded-[2rem] border border-gold/20 bg-ink/40 p-6 md:grid-cols-3">
            {[
              ['5+', 'HoReCa chains in Pune & Mumbai'],
              ['3', 'Export distributors in the UAE'],
              ['80%', 'Sales-risk reduction via pre-signed supply'],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-serif text-4xl text-gold-soft">{n}</p>
                <p className="mt-2 text-sm text-cream/70">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
