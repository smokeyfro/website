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
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  },
  routeRules: {
    '/**': { prerender: true, experimentalNoScripts: true },
  },
  nitro: {
    preset: 'static',
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
  }
})