import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { scrollToId } from '../hooks/useLenis'

const links = [
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'farm', label: 'Farm Plan' },
  { id: 'technology', label: 'Technology' },
  { id: 'market', label: 'Market' },
  { id: 'financials', label: 'Financials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['hero', ...links.map((l) => l.id)]
      let current = 'hero'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 140) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.28)]'
          : 'bg-ink/55 py-4 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <button onClick={() => go('hero')} className="text-left">
          <Logo size={scrolled ? 58 : 72} />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`nav-link text-[13px] tracking-[0.16em] uppercase transition ${
                active === link.id ? 'active text-gold-soft' : 'text-cream/80 hover:text-gold-soft'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="rounded-full bg-gold px-5 py-2 text-[13px] font-semibold tracking-wide text-ink transition hover:bg-gold-soft"
          >
            Invest with us
          </button>
        </nav>

        <button
          className="rounded-full border border-gold/40 p-2 text-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-5 mt-3 space-y-2 rounded-2xl glass p-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="block w-full rounded-xl px-3 py-3 text-left text-sm tracking-widest uppercase text-cream/90 hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
