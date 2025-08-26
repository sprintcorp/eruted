// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      'Playfair Display': [400, 500, 600, 700, 800, 900],
      'Dancing Script': [400, 500, 600, 700]
    }
  },
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Disallow: ['/admin', '/dashboard']
    }
  },
  sitemap: {
    siteUrl: 'https://uncle-eruted-photography.herokuapp.com',
    routes: [
      '/',
      '/about',
      '/services',
      '/gallery',
      '/contact',
      '/booking'
    ]
  },
  app: {
    head: {
      title: 'Uncle Eruted - Professional Photography & Videography',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional photography and videography services in Ibadan, Nigeria. Specializing in portraits, weddings, events, and corporate photography. Book your session today!' 
        },
        { 
          name: 'keywords', 
          content: 'Professional Photographer, Videographer, Event Photography, Wedding Photographer, Uncle Eruted Photography, Ibadan Photography, Portrait Photography, Corporate Photography' 
        },
        { name: 'author', content: 'Uncle Eruted' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Uncle Eruted - Professional Photography & Videography' },
        { property: 'og:description', content: 'Professional photography and videography services in Ibadan, Nigeria. Specializing in portraits, weddings, events, and corporate photography.' },
        { property: 'og:url', content: 'https://uncle-eruted-photography.herokuapp.com' },
        { property: 'og:image', content: 'https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg' },
        { property: 'og:site_name', content: 'Uncle Eruted Photography' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Uncle Eruted - Professional Photography & Videography' },
        { name: 'twitter:description', content: 'Professional photography and videography services in Ibadan, Nigeria. Specializing in portraits, weddings, events, and corporate photography.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg' },
        
        // Canonical
        { rel: 'canonical', href: 'https://uncle-eruted-photography.herokuapp.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3001'
    }
  }
})
