// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@vueuse/nuxt',

  ],

  // Runtime config
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      cloudinaryCloudName: process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      cloudinaryUploadPreset: process.env.NUXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    }
  },

  // App config
  app: {
    head: {
      title: 'Uncle Eruted Photography - Professional Photographer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional photography services for weddings, portraits, events, and more. Uncle Eruted Photography captures life\'s beautiful moments with artistic vision and technical expertise.' 
        },
        { 
          name: 'keywords', 
          content: 'Professional Photographer, Videographer, Event Photography, Wedding Photographer, Uncle Eruted Photography, Portrait Photography, Lagos Photography' 
        },
        { name: 'author', content: 'Uncle Eruted Photography' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Uncle Eruted Photography - Professional Photographer' },
        { property: 'og:description', content: 'Professional photography services for weddings, portraits, events, and more.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg' },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000' },
        { property: 'og:site_name', content: 'Uncle Eruted Photography' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Uncle Eruted Photography - Professional Photographer' },
        { name: 'twitter:description', content: 'Professional photography services for weddings, portraits, events, and more.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg' },
        
        // Canonical
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },

  // Color mode
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  // Google Fonts
  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700, 800, 900],
      'Dancing+Script': [400, 500, 600, 700],
      'Playfair+Display': [400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  },

  // Robots
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Disallow: ['/admin', '/api']
    },
    sitemap: '/sitemap.xml'
  },

  // Sitemap
  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    routes: [
      '/',
      '/gallery',
      '/booking',
      '/contact',
      '/about',
      '/services'
    ]
  },



  // CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Build
  build: {
    transpile: ['vue3-lottie']
  },

  // Nitro
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  }
})
