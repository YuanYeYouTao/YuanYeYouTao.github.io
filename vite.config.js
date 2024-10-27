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
  base: '/YuanYeYouTao.github.io/', // 修改这里，使用仓库名作为基础路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
