import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// GitHub Pages serves this site from a subdirectory. Change if the repo name or domain changes.
export default defineConfig({ base: '/prayashshrestha-portfolio/', plugins: [react()] })
