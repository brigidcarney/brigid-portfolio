import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { site } from '@/data/site'
import { Experience } from '@/pages/Experience'
import { Home } from '@/pages/Home'
import { Work } from '@/pages/Work'

const titles: Record<string, string> = {
  '/': site.name,
  '/experience': `Bio | ${site.name}`,
  '/work': `Copywriting | ${site.name}`,
}

function PageTracker() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    document.title = titles[pathname] || site.name
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <div className="mx-auto min-h-svh max-w-6xl bg-cream shadow-[0_0_24px_rgba(0,0,0,0.08)]">
      <PageTracker />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <footer className="px-6 py-10 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  )
}

export default App
