import Reveal from './Reveal'

const primary = [
  { name: 'Lettuce', hi: 'लेट्यूस' },
  { name: 'Cherry tomato', hi: 'चेरी टोमॅटो' },
  { name: 'Cucumber', hi: 'काकडी' },
  { name: 'Spinach', hi: 'पालक' },
  { name: 'Basil / Tulsi', hi: 'तुलस' },
]

const secondary = [
  { name: 'Moringa powder', hi: 'शेवगा पावडर' },
  { name: 'Farm eggs', hi: 'अंडी' },
  { name: 'A2 milk', hi: 'A2 दूध' },
  { name: 'Ghee', hi: 'तूप' },
]

export default function Products() {
  return (
    <section id="products" className="bg-mist py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Production portfolio</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Premium produce for urban tables.</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] bg-forest p-8 text-cream">
              <p className="text-xs tracking-[0.24em] uppercase text-gold-soft">Primary · hydroponic greens</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {primary.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl border border-white/10 bg-ink/30 p-4 transition hover:border-gold hover:bg-ink/50"
                  >
                    <p className="font-serif text-lg">{p.name}</p>
                    <p className="font-deva mt-1 text-sm text-gold-soft">{p.hi}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-sand bg-white p-8">
              <p className="text-xs tracking-[0.24em] uppercase text-leaf">Secondary · farm value-add</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {secondary.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl border border-sand bg-mist p-4 transition hover:border-gold"
                  >
                    <p className="font-serif text-lg">{p.name}</p>
                    <p className="font-deva mt-1 text-sm text-leaf">{p.hi}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-forest/70">
                Dual market: HoReCa in Pune & Mumbai, plus export distributors in the UAE and Middle
                East. Existing supply chain and export linkages are already in place.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
