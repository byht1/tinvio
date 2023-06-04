// vite.config.js
import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html', './src/**/**.scss', './src/**/**.js'])],
})
