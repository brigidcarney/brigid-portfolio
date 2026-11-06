import { site } from '@/data/site'

const linkedinPath =
  'M4.98 3.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2c4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z'

function Icon({ href, label, children, external = true }: {
  href: string
  label: string
  children: React.ReactNode
  external?: boolean
}) {
  const svg = (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
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
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none"
          stroke="currentColor" strokeWidth="2" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinejoin="round" />
      </Icon>
      <Icon href={site.linkedin} label="LinkedIn">
        <path d={linkedinPath} fill="currentColor" />
      </Icon>
      <Icon href={site.instagram} label="Instagram">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none"
          stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor"
          strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </Icon>
    </div>
  )
}
