import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { site } from '@/data/site'
import { useRoute, type Route } from '@/lib/router'
import { Experience } from '@/pages/Experience'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'

const titles: Record<Route, string> = {
  '/': site.name,
  '/experience': `Experience | ${site.name}`,
  '/work': `Work | ${site.name}`,
}

function App() {
  const route = useRoute()
  useEffect(() => { document.title = titles[route] }, [route])

  return (
    <div className="mx-auto min-h-svh max-w-6xl bg-cream shadow-[0_0_24px_rgba(0,0,0,0.08)]">
      <Header route={route} />
      <main>
        {route === '/' && <Home />}
        {route === '/experience' && <Experience />}
        {route === '/work' && <Work />}
      </main>
      <footer className="px-6 py-10 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  )
}

export default App
