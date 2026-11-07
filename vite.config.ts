import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Pages has no SPA fallback, so give each route its own file.
function routePages(routes: string[]): Plugin {
  return {
    name: 'route-pages',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist')
      const html = fs.readFileSync(path.join(dist, 'index.html'))
      for (const r of routes) {
        fs.writeFileSync(path.join(dist, `${r}.html`), html)
      }
      fs.writeFileSync(path.join(dist, '404.html'), html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), routePages(['experience', 'work'])],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
