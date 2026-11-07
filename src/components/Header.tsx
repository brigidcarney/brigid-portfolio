import { NavLink, Link } from 'react-router-dom'
import { Logo } from './Logo'
import { SocialIcons } from './SocialIcons'

const nav: { to: string; label: string }[] = [
  { to: '/', label: 'home' },
  { to: '/experience', label: 'experience' },
  { to: '/work', label: 'work' },
]

export function Header() {
  return (
    <header className="px-6 pt-10 sm:px-12">
      <Link to="/" className="mx-auto block w-32 text-ink" aria-label="home">
        <Logo />
      </Link>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <nav className="flex gap-5 text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-ink underline decoration-olive decoration-1 underline-offset-[6px]'
                  : 'text-ink/70 transition-colors hover:text-ink'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <SocialIcons />
      </div>
    </header>
  )
}
