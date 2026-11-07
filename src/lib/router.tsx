import { useEffect, useState } from 'react'

// Three pages don't need a router library. Vite emits a real index.html
// per route (see vite.config.ts), so deep links return 200 on Pages.
export const routes = ['/', '/experience', '/work'] as const
export type Route = (typeof routes)[number]

function current(): Route {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return (routes as readonly string[]).includes(path) ? (path as Route) : '/'
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(current)
  useEffect(() => {
    const clean = current()
    if (window.location.pathname !== clean && window.location.pathname !== '/') {
      window.history.replaceState(null, '', clean + window.location.search + window.location.hash)
    }
    const onPop = () => setRoute(current())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return route
}

export function navigate(to: Route) {
  if (to === current()) return
  window.history.pushState(null, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

export function Link({ to, className, children, ...rest }: {
  to: Route
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
