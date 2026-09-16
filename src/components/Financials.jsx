import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ prefix = '', suffix = '', value, label, decimals = 1 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const n = useCountUp(value, 1500, inView)
  const shown = decimals === 0 ? Math.round(n) : n.toFixed(decimals)

  return (
    <div ref={ref} className="stat-card relative overflow-hidden rounded-3xl border border-gold/20 bg-forest p-6">
      <div className="stat-glow absolute -right-10 -top-10 h-28 w-28 scale-75 rounded-full bg-gold/20 opacity-0 blur-2xl transition duration-700" />
      <p className="font-serif text-4xl text-gold-soft md:text-5xl">
        {prefix}
        {shown}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-cream/70">{label}</p>
    </div>
  )
}

export default function Financials() {
  return (
    <section id="financials" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">Project snapshot</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-6xl">Numbers that travel well.</h2>
          <p className="mt-5 max-w-2xl text-cream/70">
            Figures as presented across the Amrut Shivar investor materials and compact hydroponic
            project report. 1 acre. Integrated agriculture + FaaS.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Stat prefix="₹" suffix=" Cr" value={1.35} label="Total investment" />
          <Stat prefix="₹" suffix=" Cr" value={1.15} label="Developer investment" />
          <Stat prefix="₹" suffix=" L" value={20} label="Farmer contribution" decimals={0} />
          <Stat prefix="₹" suffix=" Cr" value={3.8} label="Projected annual revenue" />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Stat prefix="₹" suffix=" Cr" value={2.8} label="Projected annual profit" />
          <Stat suffix="%" value={78} label="Indicative profit margin" decimals={0} />
          <Stat suffix="+" value={10} label="DSCR" decimals={0} />
          <Stat suffix=" months" value={9} label="Compact-model payback band" decimals={0} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-gold/20 bg-forest p-8">
              <h3 className="font-serif text-3xl text-cream">Partner farm unit economics</h3>
              <p className="mt-3 text-sm text-cream/70">
                From the जीनिअस अॅग्रीटेक investor deck — a modular hydroponic + poultry + energy unit
                designed to replicate beyond the flagship Pune farm.
              </p>
              <ul className="mt-6 space-y-4 text-cream">
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span>Seed capital</span>
                  <span className="text-gold-soft">₹30 lakh</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span>Monthly revenue</span>
                  <span className="text-gold-soft">₹4–5 lakh</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span>Monthly opex / profit</span>
                  <span className="text-gold-soft">₹2L / ₹2–3L</span>
                </li>
                <li className="flex justify-between">
                  <span>ROI / payback</span>
                  <span className="text-gold-soft">80–100% · 12–16 months</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] bg-cream p-8 text-ink">
              <h3 className="font-serif text-3xl">Bankability & support</h3>
              <p className="mt-3 text-sm text-forest/75">
                Capital plan covers greenhouse, NFT & Dutch bucket systems, climate automation,
                renewable energy and first-cycle operations. Subsidies are mapped under NABARD,
                MIDH protected cultivation, Maharashtra state incentives and renewable-energy schemes.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['NABARD credit-linked subsidy', 'MIDH horticulture support', 'Maharashtra state incentives', 'Wind & solar benefits'].map(
                  (item) => (
                    <div key={item} className="rounded-2xl border border-sand bg-white p-4 text-sm">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
