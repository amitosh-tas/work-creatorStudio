import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(import.meta.dirname, "index.html"),
        landingMotion: path.resolve(import.meta.dirname, "src/landing-motion.js"),
      },
    },
  },
  resolve:{
    alias:{
      "@": path.resolve(import.meta.dirname, "./src")
    }
  }
})
