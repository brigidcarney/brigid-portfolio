// Line-drawn crescent and bird in flight, approximating the original mark.
// Swap for her original logo file once we have it.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Brigid Carney"
      className={className}
    >
      <path d="M50 8a14 14 0 1 0 12 22a11 11 0 1 1 -12 -22z" />
      <path d="M12 62c10-4 18-10 28-10c8 0 12 6 20 6c10 0 18-12 30-14c6-1 10 1 14 3" />
      <path d="M104 47c-4 0-7 3-10 6c-6 6-12 12-22 14c-8 2-14-2-20 0" />
      <path d="M52 67c-6 3-14 8-22 10" />
      <path d="M40 72c6 4 14 6 22 4c6-2 10-6 16-6" />
      <path d="M8 74c8-1 16-3 22-6" />
    </svg>
  )
}
