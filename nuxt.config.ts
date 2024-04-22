// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Book wander',
      titleTemplate: 'Book wander',
      meta: [
        { name: 'description', content: 'Book your travel and travel with ease 🗺️' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})