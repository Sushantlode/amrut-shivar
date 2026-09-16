import { Droplets, FlaskConical, CloudRain, TrendingDown } from 'lucide-react'
import Reveal from './Reveal'

const problems = [
  {
    icon: FlaskConical,
    title: 'Pesticide residue',
    marathi: 'किटकनाशकांचे अतिरेकी अवशेष',
    text: 'Open-field farming needs heavy chemical intervention, making quality inconsistent for premium and export buyers.',
  },
  {
    icon: CloudRain,
    title: 'Unstable supply',
    marathi: 'अस्थिर पुरवठा आणि किंमत',
    text: 'Weather shocks create unpredictable harvests, uneven cash flow and broken urban supply chains.',
  },
  {
    icon: Droplets,
    title: 'Water intensity',
    marathi: 'पाण्याचा प्रचंड वापर',
    text: 'Traditional plots consume more water for lower yield per acre — a growing risk in Maharashtra.',
  },
  {
    icon: TrendingDown,
    title: 'Thin farmer margins',
    marathi: 'कमी शेतकरी नफा',
    text: 'Fragmented value chains and middlemen leave growers with high input costs and low, seasonal income.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">The challenge</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl md:text-6xl">
            Traditional farming cannot serve premium cities year-round.
          </h2>
          <p className="font-deva mt-4 max-w-2xl text-lg text-forest/80">
            शहरी ग्राहकांना स्वच्छ, विश्वसनीय, प्रीमियम अन्न हवे आहे, परंतु पुरवठा साखळी तुटलेली आहे.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-sand bg-mist p-6 transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_50px_rgba(13,42,28,0.12)]">
                <item.icon className="mb-5 text-leaf transition group-hover:scale-110 group-hover:text-gold" />
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="font-deva mt-1 text-sm text-leaf">{item.marathi}</p>
                <p className="mt-4 text-sm leading-relaxed text-forest/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
