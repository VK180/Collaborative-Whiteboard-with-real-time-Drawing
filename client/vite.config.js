import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // For simple-peer
    'global': {},
    'process.env': {}
  },
  server: {
    open: true
  }
})
