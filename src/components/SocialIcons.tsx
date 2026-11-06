import { site } from '@/data/site'

function Icon({ href, label, children, external = true }: {
  href: string
  label: string
  children: React.ReactNode
  external?: boolean
}) {
  const svg = (
    // Thin outlines to match the light Jost body text.
    <svg viewBox="0 0 24 24" className="size-5" fill="none"
      stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
  // Render a plain icon until the profile URL is filled in.
  if (!href) return <span title={label}>{svg}</span>
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    >
      {svg}
    </a>
  )
}

export function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-ink ${className}`}>
      <Icon href={`mailto:${site.email}`} label="Email" external={false}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </Icon>
      <Icon href={site.linkedin} label="LinkedIn">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5V17M12 17v-6.5M12 13.5c0-1.8 1.2-3 2.6-3s2.4 1.1 2.4 3V17" />
        <circle cx="8" cy="7.5" r="0.4" fill="currentColor" />
      </Icon>
      <Icon href={site.instagram} label="Instagram">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.25" cy="6.75" r="0.4" fill="currentColor" />
      </Icon>
    </div>
  )
}
