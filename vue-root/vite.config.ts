import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginSingleSpa({
    type: 'root',
    imo: '2.4.2'
  })],
  server: {
    port: 4100
  },
  preview: {
    port: 4100
  }
})
