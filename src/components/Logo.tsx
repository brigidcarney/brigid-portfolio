import logo from '@/assets/logo.png'

// Brigid's hand-drawn moon and bird. The PNG is used as a mask so the
// strokes take the surrounding text color instead of a baked-in black.
export function Logo({ className = '' }: { className?: string }) {
  const mask = `url(${logo}) center / contain no-repeat`
  return (
    <div
      role="img"
      aria-label="Brigid Carney"
      className={`aspect-[749/631] w-full bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  )
}
