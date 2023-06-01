import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const { createProxyMiddleware } = require('http-proxy-middleware');
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    port: 8888,
    proxy: {
      '/api': {
        target: 'https://apis.bald3r.wang/api',  // 设置代理的目标地址
        changeOrigin: true,  // 是否改变请求头中的 Origin 属性，用于跨域
        rewrite: (path) => path.replace(/^\/api/, '')  // 将 URL 中以 '/api' 开头的部分替换为空字符串
      }
    }
  }

})
