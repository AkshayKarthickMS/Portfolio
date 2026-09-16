import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
  preview: {
    port: parseInt(process.env.PORT) || 4173, // Use Render's PORT environment variable
    host: true, // Expose to the network
  },
});
