import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/getting-started/assets/
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/styles/global.scss";'
        }
      }
    }
  }
})
