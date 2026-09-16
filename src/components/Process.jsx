import Reveal from './Reveal'

const steps = [
  { n: '01', title: 'Seed & germinate', text: 'Start healthy seedlings under controlled light.' },
  { n: '02', title: 'Hydroponic system', text: 'Soilless NFT and Dutch-bucket nutrient delivery.' },
  { n: '03', title: 'Smart monitoring', text: 'Sensors, climate automation and live dashboards.' },
  { n: '04', title: 'Data-driven harvest', text: 'Optimize yield, grade and freshness for buyers.' },
]

export default function Process() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">How the farm works</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="rounded-3xl border border-gold/15 p-6 transition hover:border-gold">
                <p className="font-serif text-3xl text-gold">{step.n}</p>
                <h3 className="mt-3 font-serif text-xl text-cream">{step.title}</h3>
                <p className="mt-2 text-sm text-cream/65">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
