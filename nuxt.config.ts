import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/styles/global.scss";'
        }
      }
    }
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  }
})
