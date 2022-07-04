/// <reference types="vitest" />
import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  test: {
    environment: 'jsdom',
  },
})
