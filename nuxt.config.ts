const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const withBase = (path: string) => `${baseURL.replace(/\/$/, '')}${path}`

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  devtools: { enabled: false },
  modules: ['@nuxt/eslint'],

  typescript: {
    strict: true,
    typeCheck: false,
  },

  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/fonts.css',
    '~/assets/css/base.css',
  ],

  app: {
    baseURL,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: withBase('/favicon.svg') },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: withBase('/fonts/Geist-400.woff2'), crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: withBase('/fonts/Geist-600.woff2'), crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: withBase('/fonts/Geist-Mono-400.woff2'), crossorigin: 'anonymous' },
      ],
    },
  },

  experimental: {
    payloadExtraction: false,
  },
})
