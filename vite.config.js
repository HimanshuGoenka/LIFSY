// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // keep if installed

const repoName = 'LIFSY' // e.g. 'LIFSY1'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production' || process.env.NODE_ENV === 'production'
  return {
    base: isProd ? `/${repoName}/` : '/',
    plugins: [react(), tailwindcss()],
  }
})
