import Logo from './Logo'
import { scrollToId } from '../hooks/useLenis'

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
        <button onClick={() => scrollToId('hero')} className="text-left">
          <Logo size={64} />
        </button>
        <p className="max-w-md text-sm text-cream/55">
          Integrated hydroponic and smart farming project · Pune, Maharashtra. Content sourced from
          the Amrut Shivar, compact project report and investor decks of Geniuss Smart Agro Farming
          LLP.
        </p>
        <p className="text-xs tracking-[0.2em] uppercase text-gold/70">
          Sustainable today. Thriving tomorrow.
        </p>
      </div>
    </footer>
  )
}
