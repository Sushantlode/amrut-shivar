import Reveal from './Reveal'

const impacts = [
  'Sustainable food production',
  'Water conservation',
  'Soil regeneration',
  'Climate resilience',
  'Rural employment',
  'Farmer capacity building',
  'Technology adoption',
  'Higher farm productivity',
]

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 md:py-32">
      <img
        src="/images/concept-aerial.jpg?v=2"
        alt="Amrut Shivar rural prosperity concept"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-gold-soft">Vision & mission</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-cream md:text-6xl">
            A scalable model for rural prosperity.
          </h2>
          <p className="mt-5 max-w-2xl text-cream/75">
            To integrate agriculture, technology, renewable resources and value creation into a
            replicable framework that strengthens food security and rural communities.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {impacts.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <span className="inline-block rounded-full border border-gold/30 bg-ink/50 px-4 py-2 text-sm text-gold-soft">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
