import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'LIFSY'  // 👈 change to your GitHub repo name

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production' || process.env.NODE_ENV === 'production'
  return {
    base: isProd ? `/${repoName}/` : '/',
    plugins: [react(), tailwindcss()],
  }
})
