export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: [
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  plugins: [
    '~/plugins/silentbox.js',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Lateef: [400],
      Mandali: [400]
    }
  },
  content: {
    documentDriven: false
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/smokeyfro/image/upload/',
      use_filename: true,
      unique_filename: false
    },
    imgix: {
      baseURL: 'https://images.unsplash.com/',
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
    componentIslands: true,
    payloadExtraction: true
  },
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    compressPublicAssets: true,
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
  },
})
