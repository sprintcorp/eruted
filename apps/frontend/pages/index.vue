<template>
  <div class="photography-app">
    <!-- Hero Section -->
    <Hero />
    
    <!-- Enhanced Services Section with Photography Theme -->
    <section class="section services-section bg-gradient-to-b from-white-50 to-white-100 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-header text-center mb-16 animate-fade-in">
          <h2 class="section-title text-4xl md:text-5xl font-bold text-primary-1000 mb-6">
            Our Photography Services
          </h2>
          <p class="section-subtitle text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Professional photography and videography services tailored to capture your most precious moments with artistic vision and technical excellence
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card animate-slide-up" style="animation-delay: 0.1s;">
            <div class="service-icon-wrapper">
              <Camera class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Portrait Photography</h3>
            <p class="service-description">
              Professional portraits that capture your personality and essence in stunning detail, from headshots to creative artistic portraits.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div class="service-card animate-slide-up" style="animation-delay: 0.2s;">
            <div class="service-icon-wrapper">
              <Heart class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Wedding Photography</h3>
            <p class="service-description">
              Timeless wedding memories captured with artistic vision and attention to detail, from engagement to reception.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div class="service-card animate-slide-up" style="animation-delay: 0.3s;">
            <div class="service-icon-wrapper">
              <Video class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Videography</h3>
            <p class="service-description">
              Cinematic video production that tells your story with emotion and creativity, from events to promotional content.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div class="service-card animate-slide-up" style="animation-delay: 0.4s;">
            <div class="service-icon-wrapper">
              <Briefcase class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Commercial Photography</h3>
            <p class="service-description">
              High-quality product and commercial photography to enhance your business marketing materials and brand presence.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div class="service-card animate-slide-up" style="animation-delay: 0.5s;">
            <div class="service-icon-wrapper">
              <Users class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Event Photography</h3>
            <p class="service-description">
              Professional coverage for corporate events, parties, and special occasions with high-quality images.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div class="service-card animate-slide-up" style="animation-delay: 0.6s;">
            <div class="service-icon-wrapper">
              <Edit3 class="w-8 h-8 text-white" />
            </div>
            <h3 class="service-title">Photo Editing</h3>
            <p class="service-description">
              Professional post-processing and retouching to ensure your images look their absolute best.
            </p>
            <button class="service-cta" @click="navigateTo('/services')">
              Learn More
              <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Gallery Preview Section -->
    <section class="section gallery-preview bg-white py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="section-header text-center mb-16 animate-fade-in">
          <h2 class="section-title text-4xl md:text-5xl font-bold text-primary-1000 mb-6">
            Featured Gallery
          </h2>
          <p class="section-subtitle text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of our finest work, showcasing the diversity and quality of our photography services
          </p>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item animate-scale-in group" style="animation-delay: 0.1s;">
            <div class="photography-frame">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&crop=center"
                alt="Professional photography equipment and camera gear setup"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4 class="gallery-title">Camera Gear</h4>
                  <p class="gallery-subtitle">Professional Equipment</p>
                  <button class="gallery-button">
                    <Eye class="w-4 h-4 mr-2" />
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gallery-item animate-scale-in group" style="animation-delay: 0.2s;">
            <div class="photography-frame">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop&crop=center"
                alt="Professional studio lighting setup for photography"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4 class="gallery-title">Studio Setup</h4>
                  <p class="gallery-subtitle">Professional Lighting</p>
                  <button class="gallery-button">
                    <Eye class="w-4 h-4 mr-2" />
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gallery-item animate-scale-in group" style="animation-delay: 0.3s;">
            <div class="photography-frame">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center"
                alt="Collection of professional photography lenses and accessories"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4 class="gallery-title">Lens Collection</h4>
                  <p class="gallery-subtitle">Premium Optics</p>
                  <button class="gallery-button">
                    <Eye class="w-4 h-4 mr-2" />
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-16 animate-fade-in" style="animation-delay: 0.5s;">
          <button class="btn-primary-large">
            <Image class="w-5 h-5 mr-3" />
            View Full Gallery
          </button>
        </div>
      </div>
    </section>

    <!-- Enhanced About Preview Section -->
    <section class="section about-preview bg-gradient-to-b from-white-100 to-white-50 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-bold text-primary-1000 mb-8">
              Meet Uncle Eruted
            </h2>
            <p class="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed">
              A passionate photographer with over 5 years of experience capturing life's most precious moments. 
              Specializing in portrait, wedding, and event photography with a unique artistic vision that transforms 
              ordinary moments into extraordinary memories.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary-large">
                <User class="w-5 h-5 mr-3" />
                Learn More
              </button>
              <button class="btn-secondary-large">
                <Mail class="w-5 h-5 mr-3" />
                Contact Me
              </button>
            </div>
          </div>
          
          <div class="animate-scale-in" style="animation-delay: 0.2s;">
            <div class="photography-frame-enhanced">
              <img 
                src="https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg"
                alt="Uncle Eruted - Professional Photographer in Ibadan"
                class="w-full h-96 object-cover"
              />
              <!-- Photography Equipment Overlay -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center shadow-large">
                <Camera class="w-8 h-8 text-white" />
              </div>
              <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-large">
                <Target class="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Contact CTA Section -->
    <section class="section contact-cta py-20" style="background: linear-gradient(135deg, #0A0F1C 0%, #0F172A 50%, #1E293B 100%) !important;">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold mb-8" style="color: white !important;">
            Ready to Capture Your Story?
          </h2>
          <p class="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style="color: white !important;">
            Let's work together to create stunning visual memories that will last a lifetime. 
            Every moment is worth capturing, and every story deserves to be told beautifully.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              @click="navigateTo('/booking')" 
              class="btn-white-large" 
              style="background: white !important; color: #1E293B !important;"
            >
              <Calendar class="w-5 h-5 mr-3" />
              Book Your Session
            </button>
            <button 
              @click="navigateTo('/contact')" 
              class="btn-outline-white-large" 
              style="border: 2px solid white !important; color: white !important;"
            >
              <Mail class="w-5 h-5 mr-3" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Navigation -->
    <MobileNav />
  </div>
</template>

<script setup>
// Import components
import Hero from '~/components/Hero.vue'
import MobileNav from '~/components/MobileNav.vue'

// Navigation function using Nuxt router
const router = useRouter()
const navigateTo = (path) => {
  router.push(path)
}

// Import icons
import { 
  Camera, 
  Heart, 
  Video, 
  Briefcase, 
  Users, 
  Edit3, 
  ArrowRight, 
  Eye, 
  Image, 
  User, 
  Mail, 
  Calendar, 
  Target 
} from 'lucide-vue-next'

// SEO Meta
useHead({
  title: 'Uncle Eruted Photography - Professional Photographer in Ibadan',
  meta: [
    {
      name: 'description',
      content: 'Professional photography and videography services in Ibadan. Specializing in portraits, weddings, and events. Book your session with Uncle Eruted today.'
    },
    {
      name: 'keywords',
      content: 'photographer, photography, videography, Ibadan, portrait, wedding, event, Uncle Eruted, professional photographer'
    },
    {
      property: 'og:title',
      content: 'Uncle Eruted Photography - Professional Photographer in Ibadan'
    },
    {
      property: 'og:description',
      content: 'Professional photography and videography services in Ibadan. Specializing in portraits, weddings, and events.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://uncle-eruted-photography.herokuapp.com'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Uncle Eruted Photography - Professional Photographer in Ibadan'
    },
    {
      name: 'twitter:description',
      content: 'Professional photography and videography services in Ibadan. Specializing in portraits, weddings, and events.'
    }
  ]
})
</script>

<style scoped>
/* Enhanced custom styles for the index page */
.photography-app {
  @apply bg-white;
}

/* Services Grid */
.services-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.service-card {
  @apply bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300;
}

.service-icon-wrapper {
  @apply w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-md;
}

.service-title {
  @apply text-xl font-bold text-slate-900 mb-4;
}

.service-description {
  @apply text-slate-700 mb-6 leading-relaxed;
}

.service-cta {
  @apply flex items-center text-slate-600 hover:text-slate-800 font-semibold transition-colors duration-200;
}

/* Gallery Grid */
.gallery-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.gallery-item {
  @apply overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-all duration-500;
}

.photography-frame {
  @apply relative overflow-hidden;
}

.gallery-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500;
}

.gallery-content {
  @apply absolute bottom-0 left-0 right-0 p-6 text-white;
}

.gallery-title {
  @apply text-lg font-semibold mb-2;
}

.gallery-subtitle {
  @apply text-sm opacity-90 mb-4;
}

.gallery-actions {
  @apply flex space-x-3;
}

.gallery-action-btn {
  @apply w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200;
}

/* Enhanced Photography Frame */
.photography-frame-enhanced {
  @apply relative rounded-3xl overflow-hidden shadow-lg;
}

/* Button Styles */
.btn-primary-large {
  @apply bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

.btn-secondary-large {
  @apply bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

.btn-white-large {
  @apply bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

.btn-outline-white-large {
  @apply border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 flex items-center justify-center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-grid {
    @apply grid-cols-1 gap-6;
  }
  
  .gallery-grid {
    @apply grid-cols-1 gap-6;
  }
  
  .service-card {
    @apply p-6;
  }
  
  .btn-primary-large, .btn-secondary-large, .btn-white-large, .btn-outline-white-large {
    @apply px-6 py-3 text-sm;
  }
}
</style>
