import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen :false,
  plugins: [
    vue(), svgLoader({
    defaultImport: 'component' // or 'raw'
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@CMPNTS': fileURLToPath(new URL('./src/views/components', import.meta.url)),
      '@PAGES': fileURLToPath(new URL('./src/views/pages', import.meta.url)),
      '@ASSETS': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@SRVCS': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@STORES': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@UTILS': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // this will be on all components
        additionalData: `@use "sass:math"; @use "@ASSETS/styles/tailwindcss" as *;`,
      },
    },
  },  
})
