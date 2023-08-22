export default defineNuxtConfig({
  telemetry: false,
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
  experimental: {
    payloadExtraction: false,
    //inlineSSRStyles: false
  },
  // routeRules: {
  //   '/**': { prerender: true },
  //   '/work/**': { prerender: true },
  //   '/tutorials/**': { prerender: true },
  //   '/themes/**': { prerender: true },
  //   '/journal/**': { prerender: true },
  // },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      crawlLinks: true
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