import Reveal from './Reveal'

const rows = [
  ['Water use', 'High and wasteful', 'About 90% less, recirculated'],
  ['Harvest window', 'Seasonal, weather-led', 'Year-round, 365 days'],
  ['Quality', 'Inconsistent, pesticide-heavy', 'Controlled, pest-free, premium'],
  ['Income', 'Single crop, thin margins', 'Six streams, resilient cash flow'],
]

export default function WhyHydro() {
  return (
    <section className="bg-mist py-20 text-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Why controlled environment</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Traditional field vs smart farm.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-sand bg-white">
            <div className="hidden grid-cols-3 bg-forest px-6 py-4 text-xs tracking-[0.2em] uppercase text-gold-soft sm:grid">
              <span>Lens</span>
              <span>पारंपरिक शेती</span>
              <span>स्मार्ट फार्म</span>
            </div>
            {rows.map((row) => (
              <div
                key={row[0]}
                className="grid gap-2 border-t border-sand px-6 py-5 text-sm sm:grid-cols-3 md:text-base"
              >
                <span className="font-semibold">{row[0]}</span>
                <span className="text-forest/60">
                  <span className="mr-2 text-[10px] tracking-widest uppercase text-forest/40 sm:hidden">Traditional</span>
                  {row[1]}
                </span>
                <span className="text-leaf">
                  <span className="mr-2 text-[10px] tracking-widest uppercase text-leaf/50 sm:hidden">Smart farm</span>
                  {row[2]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
