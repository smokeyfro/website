export default defineNuxtConfig({
  telemetry: false,
  devtools: false,
  ssr: true,
  css: [
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  plugins: [
    '~/plugins/silentbox.js',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    "@nuxt/image"
  ],
  googleFonts: {
    download: true,
    display: 'auto',
    families: {
      Lora: [400, 700],
    }
  },
  content: {
    highlight: {
      theme: 'solarized-light'
    }
  },
  spaLoadingTemplate: false,
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/smokeyfro/image/upload/',
      use_filename: true,
      unique_filename: false
    },
    presets: {
      journal: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '80',
        },
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  build: {
    transpile: ['lite-youtube'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  }
})