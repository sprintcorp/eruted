<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-photo-pattern opacity-5"></div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-float"></div>
        <div class="absolute top-40 right-20 w-16 h-16 bg-accent-400/30 rounded-full animate-float-delayed"></div>
        <div class="absolute bottom-40 left-20 w-12 h-12 bg-accent-600/25 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-20 right-10 w-24 h-24 bg-accent-500/15 rounded-full animate-float-reverse"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="text-center lg:text-left space-y-8 animate-fade-in">
            <div class="space-y-4">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-gradient">Capture</span>
                <br />
                <span class="text-white">Every Moment</span>
              </h1>
              <p class="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Professional photography and videography services that transform your special moments into timeless memories.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink to="/booking" class="btn-primary text-lg px-8 py-4">
                Book Your Session
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              <NuxtLink to="/gallery" class="btn-secondary text-lg px-8 py-4">
                View Gallery
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 pt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-400">500+</div>
                <div class="text-sm text-white/70">Happy Clients</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-400">1000+</div>
                <div class="text-sm text-white/70">Photos Captured</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-400">5+</div>
                <div class="text-sm text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="relative animate-slide-up">
            <div class="relative">
              <!-- Main Image -->
              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg"
                  alt="Uncle Eruted - Professional Photographer"
                  class="w-full h-[600px] object-cover"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>
              </div>
              
              <!-- Floating Camera Elements -->
              <div class="absolute -top-6 -right-6 w-16 h-16 bg-accent-500/90 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                </svg>
              </div>
              
              <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-800/90 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow-delayed">
                <svg class="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-accent-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span class="text-gradient">Services</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, we offer comprehensive photography and videography services tailored to your needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.name"
            class="modern-card group hover:scale-105 transition-all duration-500"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="p-8 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="service.icon" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">{{ service.name }}</h3>
              <p class="text-white/70 leading-relaxed">{{ service.description }}</p>
              <div class="mt-6">
                <NuxtLink :to="service.link" class="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                  Learn More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-slide-up">
            <h2 class="text-4xl lg:text-5xl font-bold text-white">
              Meet <span class="text-gradient">Uncle Eruted</span>
            </h2>
            <p class="text-xl text-white/80 leading-relaxed">
              With over 5 years of experience in professional photography, I specialize in capturing the essence of life's most precious moments. 
              From the intimate details of a wedding day to the dynamic energy of corporate events, every shot tells a story.
            </p>
            <p class="text-lg text-white/70 leading-relaxed">
              My approach combines technical expertise with artistic vision, ensuring that every image not only documents the moment but also 
              evokes the emotions and atmosphere that made it special.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink to="/about" class="btn-primary">
                Read More About Me
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary">
                Get In Touch
              </NuxtLink>
            </div>
          </div>

          <div class="relative animate-fade-in">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="modern-card p-6 text-center">
                  <div class="text-3xl font-bold text-accent-400 mb-2">500+</div>
                  <div class="text-white/70">Happy Clients</div>
                </div>
                <div class="modern-card p-6 text-center">
                  <div class="text-3xl font-bold text-accent-400 mb-2">1000+</div>
                  <div class="text-white/70">Photos Captured</div>
                </div>
              </div>
              <div class="space-y-4 pt-8">
                <div class="modern-card p-6 text-center">
                  <div class="text-3xl font-bold text-accent-400 mb-2">50+</div>
                  <div class="text-white/70">Events Covered</div>
                </div>
                <div class="modern-card p-6 text-center">
                  <div class="text-3xl font-bold text-accent-400 mb-2">5+</div>
                  <div class="text-white/70">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Gallery Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span class="text-gradient">Gallery</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Explore a curated selection of our finest work, showcasing the diversity and quality of our photography services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div 
            v-for="(image, index) in featuredImages" 
            :key="image.id"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-xl font-bold text-white mb-2">{{ image.title }}</h3>
              <p class="text-white/80 text-sm">{{ image.category }}</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/gallery" class="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Full Gallery
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span class="text-gradient">Clients Say</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            class="modern-card p-8 animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-accent-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-white/80 leading-relaxed mb-6">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">{{ testimonial.initials }}</span>
              </div>
              <div>
                <div class="font-semibold text-white">{{ testimonial.name }}</div>
                <div class="text-sm text-white/60">{{ testimonial.event }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white">
            Ready to <span class="text-gradient">Capture</span> Your Story?
          </h2>
          <p class="text-xl text-white/80 leading-relaxed">
            Let's work together to create beautiful, lasting memories that you'll treasure forever. 
            Contact us today to discuss your photography needs and book your session.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/booking" class="btn-primary text-lg px-8 py-4">
              Book Your Session
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
              Get In Touch
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Services data
const services = [
  {
    name: 'Wedding Photography',
    description: 'Capture your special day with our comprehensive wedding photography packages, from engagement to reception.',
    icon: 'IconHeart',
    link: '/services#wedding'
  },
  {
    name: 'Event Photography',
    description: 'Professional coverage for corporate events, parties, and special occasions with high-quality images.',
    icon: 'IconCalendar',
    link: '/services#events'
  },
  {
    name: 'Portrait Sessions',
    description: 'Professional portraits for individuals, families, and businesses in our studio or on location.',
    icon: 'IconUser',
    link: '/services#portraits'
  },
  {
    name: 'Commercial Photography',
    description: 'High-quality product and commercial photography to enhance your business marketing materials.',
    icon: 'IconBriefcase',
    link: '/services#commercial'
  },
  {
    name: 'Videography',
    description: 'Professional video services including event coverage, promotional videos, and cinematic storytelling.',
    icon: 'IconVideo',
    link: '/services#videography'
  },
  {
    name: 'Photo Editing',
    description: 'Professional post-processing and retouching to ensure your images look their absolute best.',
    icon: 'IconEdit',
    link: '/services#editing'
  }
]

// Featured gallery images
const featuredImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    alt: 'Wedding ceremony',
    title: 'Wedding Ceremony',
    category: 'Wedding Photography'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Portrait session',
    title: 'Professional Portrait',
    category: 'Portrait Photography'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    alt: 'Corporate event',
    title: 'Corporate Event',
    category: 'Event Photography'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    alt: 'Product photography',
    title: 'Product Showcase',
    category: 'Commercial Photography'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
    alt: 'Wedding reception',
    title: 'Wedding Reception',
    category: 'Wedding Photography'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Family portrait',
    title: 'Family Portrait',
    category: 'Portrait Photography'
  }
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    content: "Uncle Eruted captured our wedding day perfectly! Every photo tells a story and brings back the emotions of that special day. Highly recommended!",
    name: "Sarah & Michael",
    initials: "S&M",
    event: "Wedding Photography"
  },
  {
    id: 2,
    content: "Professional, creative, and incredibly talented. Our corporate event photos exceeded all expectations and helped us showcase our brand perfectly.",
    name: "Jennifer Davis",
    initials: "JD",
    event: "Corporate Event"
  },
  {
    id: 3,
    content: "The family portrait session was so much fun! Uncle Eruted made us all feel comfortable and the results are absolutely stunning.",
    name: "The Johnson Family",
    initials: "TJ",
    event: "Family Portrait"
  }
]
</script>
