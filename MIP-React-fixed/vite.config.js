import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain => base should be '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
