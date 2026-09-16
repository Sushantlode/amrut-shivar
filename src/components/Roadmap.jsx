import Reveal from './Reveal'

const steps = [
  {
    phase: 'Phase 1',
    title: 'Pilot · Pune',
    years: 'Year 1–2',
    text: 'Build the flagship Amrut Shivar integrated smart farm. Prove yield, buyer contracts and the circular operating model.',
  },
  {
    phase: 'Phase 2',
    title: 'Partner network',
    years: 'Year 3–5',
    text: 'Grow a hydroponic partner-farmer network across Maharashtra — 50 farms, one acre each, sharing data, brand and offtake.',
  },
  {
    phase: 'Phase 3',
    title: 'National scale',
    years: 'Year 6–10 · 2030',
    text: 'A 5,000-farm national smart-farming network. India’s largest climate-aligned produce brand, with certification and export depth.',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Traction plan</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Pilot. Network. Nation.</h2>
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-8 right-8 top-10 hidden h-px bg-gold/40 md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.phase} delay={i * 0.1}>
              <article className="relative rounded-3xl border border-sand bg-white p-7">
                <span className="relative z-10 mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold font-semibold text-ink">
                  {i + 1}
                </span>
                <p className="text-xs tracking-[0.22em] uppercase text-leaf">{step.phase} · {step.years}</p>
                <h3 className="mt-2 font-serif text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-forest/75">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
