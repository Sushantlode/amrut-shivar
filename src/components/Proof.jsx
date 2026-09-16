import Reveal from './Reveal'

export default function Proof() {
  return (
    <section className="bg-mist py-24 text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <img
            src={`${import.meta.env.BASE_URL}images/farmers.jpg`}
            alt="Hydroponic greenhouse team"
            className="h-[420px] w-full rounded-[2rem] object-cover object-center shadow-[0_24px_60px_rgba(7,22,15,0.16)] md:h-[520px]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Execution strength</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Already operating. Built to scale.</h2>
          <p className="mt-5 leading-relaxed text-forest/75">
            Live hydroponic farms are already running — proof of concept, not a paper model. Promoters
            bring cross-sector operations experience and established supply-chain plus export linkages,
            which shortens the path from harvest to HoReCa and UAE buyers.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5">
              <p className="font-serif text-2xl">NFT + Dutch</p>
              <p className="mt-1 text-sm text-forest/65">Zoned 1-acre production core</p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="font-serif text-2xl">18–25°C</p>
              <p className="mt-1 text-sm text-forest/65">Protected climate envelope</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
