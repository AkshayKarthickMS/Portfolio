import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  port: parseInt(process.env.PORT) || 4173, // Use Render's PORT environment variable
  host: true, 
})
