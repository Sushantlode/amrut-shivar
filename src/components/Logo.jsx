import { useId } from 'react'
import { motion } from 'framer-motion'

export default function Logo({ size = 64, withWordmark = true }) {
  const uid = useId().replace(/:/g, '')
  return (
    <div className="flex items-center gap-3.5">
      <motion.div
        className="logo-mark relative shrink-0"
        style={{ width: size, height: size }}
        whileHover={{ rotate: -8, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
      >
        <span className="pulse-ring absolute -inset-1 rounded-full border border-gold/70" />
        <svg viewBox="0 0 80 80" className="relative z-10 h-full w-full">
          <defs>
            <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff6c8" />
              <stop offset="45%" stopColor="#f1d789" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <linearGradient id={`${uid}-green`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7dffb0" />
              <stop offset="100%" stopColor="#1f6b45" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r="38" fill="#07160f" stroke={`url(#${uid}-gold)`} strokeWidth="3.6" />
          <path
            d="M18 46c8-18 16-28 22-34 6 6 14 16 22 34-10-6-16-6-22-6s-12 0-22 6z"
            fill={`url(#${uid}-gold)`}
          />
          <path
            d="M28 48c5-12 9-18 12-22 3 4 7 10 12 22-6-3-9-3-12-3s-6 0-12 3z"
            fill={`url(#${uid}-green)`}
          />
          <path d="M40 18v34" stroke="#07160f" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M40 52c-8 10-6 16 0 18 6-2 8-8 0-18z" fill={`url(#${uid}-gold)`} />
        </svg>
      </motion.div>
      {withWordmark && (
        <div className="leading-none">
          <p className="font-display text-[10px] font-semibold tracking-[0.3em] text-gold-soft uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-[12px]">
            Geniuss Smart Agro
          </p>
          <p className="mt-1.5 font-serif text-[1.35rem] font-semibold tracking-wide text-gold-soft drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-[1.7rem]">
            Amrut Shivar
          </p>
        </div>
      )}
    </div>
  )
}
