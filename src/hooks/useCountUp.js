import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 1600, startWhen = true) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!startWhen || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [startWhen, target, duration])

  return value
}
