import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },

  components: {
    dirs: [
      {
        path: '~/components/storyblok',
        global: true,
      }
    ]
  },

  routeRules: {
    '/**': { isr: true },
    '/static': { isr: true },
  },

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/device',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@storyblok/nuxt',
    '@nuxtjs/fontaine',
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    componentsDir: '~/components',
    apiOptions: {
      region: 'ap',
    },
    cacheProvider: 'memory',
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      storyblokAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    },
  },

  precompress: {
    gzip: true,
    brotli: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  imports: {
    dirs: ["./stores", "./locales"],
  },

  image: {
    quality: 80,
    formats: ['webp', 'jpeg', 'png'],
    staticFilename: '[name]-[hash][ext]',
    screens: {
      'xs': 368,
      'sm': 480,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1366,
      '3xl': 1536,
      '4xl': 1920,
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  googleFonts: {
    families: {
      Inter: ['300', '400', '500', '600', '700'],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  eslint: {
    lintOnStart: false,
  },

  compatibilityDate: "2024-09-15",
});