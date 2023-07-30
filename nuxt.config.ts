// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'hs.weird from HU$TLANG',
      meta: [
        { name: 'description', content: 'Nuxt 3' }
      ],
      link: []
    }
  },
  nitro: {
    preset: 'node',
    compressPublicAssets: { gzip: true, brotli: true }
  },
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 8000
  },
  typescript: {
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
      compilerOptions: {
        noImplicitReturns: false // For middleware
      }
    }
  },
  ssr: true,
  css: [
    '@/assets/styles/index.scss'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-seo-experiments',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    'nuxt-simple-robots'
  ],
  site: {
    url: process.env['NUXT_PUBLIC_SITE_URL']
  },
  robots: {},
  pinia: {
    autoImports: [
      'defineStore'
    ]
  }
})
