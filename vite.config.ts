import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({
    defaultImport: 'component' // or 'raw'
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@CMPNTS': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@ASSETS': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
})
