import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    eslintPlugin(),
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/translations/locales/**')
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'v-admin',
      fileName: (format) => `v-admin.${format}.js`
    },
    rollupOptions: {
      external: ['chart.js/auto']
    }
  }
})
