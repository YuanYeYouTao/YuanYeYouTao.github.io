import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/YuanYeYouTao.github.io/', // 修改这一行
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
