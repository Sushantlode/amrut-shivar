export default function FloatingLeaves() {
  const leaves = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i * 7.4) % 100}%`,
    delay: `${i * 1.4}s`,
    duration: `${14 + (i % 6) * 2}s`,
    size: 10 + (i % 5) * 4,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="leaf-drift"
          style={{
            left: leaf.left,
            bottom: '-40px',
            width: leaf.size,
            height: leaf.size,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8 8 4 12 4 16a8 8 0 0 0 16 0c0-4-4-8-8-14Z" />
        </svg>
      ))}
    </div>
  )
}
