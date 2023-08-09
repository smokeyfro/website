export default defineNuxtConfig({
  // devtools: { enabled: true },
  // ssr: true,
  css: [
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  // content: {
  //   highlight: {
  //     theme: {
  //       default: "dracula",
  //     },
  //   },
  // },
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
      Lora: [400, 700],
    }
  },
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
  // experimental: {
  //   //componentIslands: true,
  //   payloadExtraction: true
  // },
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    //compressPublicAssets: true,
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
  },
})
