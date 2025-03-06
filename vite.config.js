import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/vite-todoList/',
  plugins: [vue(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'vuetify' as *;`
      }
    }
  }
})
