<template>
  <div class="services-page">
    <!-- Services Hero Section -->
    <section class="services-hero bg-gradient-to-b from-white via-white-50 to-white-100 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-primary-1000 mb-6">
            Our Photography Services
          </h1>
          <p class="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Professional photography and videography services tailored to capture your most precious moments with artistic vision and technical excellence
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid-section bg-white py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="service-card-large animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="service-header">
              <div class="service-icon-wrapper">
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-subtitle">{{ service.subtitle }}</p>
            </div>
            
            <div class="service-content">
              <p class="service-description">{{ service.description }}</p>
              
              <div class="service-features">
                <h4 class="features-title">What's Included:</h4>
                <ul class="features-list">
                  <li v-for="feature in service.features" :key="feature" class="feature-item">
                    <Check class="w-4 h-4 text-primary-600 mr-3" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="service-pricing">
                <div class="price-tag">
                  <span class="price-currency">₦</span>
                  <span class="price-amount">{{ service.price }}</span>
                  <span class="price-unit">/session</span>
                </div>
                <p class="price-note">{{ service.priceNote }}</p>
              </div>
            </div>
            
            <div class="service-actions">
              <button class="btn-primary-service">
                <Calendar class="w-4 h-4 mr-2" />
                Book Now
              </button>
              <button class="btn-secondary-service">
                <Info class="w-4 h-4 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-section bg-gradient-to-b from-white-50 to-white-100 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-primary-1000 mb-6">
            Why Choose Uncle Eruted?
          </h2>
          <p class="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that professional expertise, artistic vision, and cutting-edge technology make in capturing your special moments.
          </p>
        </div>
        
        <div class="features-grid">
          <div 
            v-for="(feature, index) in features" 
            :key="feature.id"
            class="feature-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-icon-wrapper">
              <component :is="feature.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section bg-white py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-primary-1000 mb-6">
            Our Photography Process
          </h2>
          <p class="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final delivery, we ensure every step of your photography experience is seamless and enjoyable.
          </p>
        </div>
        
        <div class="process-timeline">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.id"
            class="process-step animate-slide-up"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-gradient-to-br from-primary-1000 via-primary-900 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold mb-8">
            Ready to Capture Your Story?
          </h2>
          <p class="text-lg md:text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your photography needs and create a custom package that perfectly captures your vision.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn-white-large">
              <Calendar class="w-5 h-5 mr-3" />
              Book Your Session
            </button>
            <button class="btn-outline-white-large">
              <Mail class="w-5 h-5 mr-3" />
              Get a Quote
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
import { 
  Camera, 
  Heart, 
  Video, 
  Briefcase, 
  Users, 
  Edit3, 
  Check, 
  Calendar, 
  Info,
  Star,
  Zap,
  Shield,
  Clock,
  Award,
  Target,
  Palette,
  Mail
} from 'lucide-vue-next'

// Services data
const services = [
  {
    id: 1,
    icon: Camera,
    title: 'Portrait Photography',
    subtitle: 'Professional & Creative Portraits',
    description: 'Capture your personality and essence with our professional portrait photography services. From headshots to creative artistic portraits, we create stunning images that tell your story.',
    features: [
      'Professional lighting setup',
      'Multiple outfit changes',
      'Location or studio options',
      'Professional editing & retouching',
      'High-resolution digital files',
      'Print-ready formats'
    ],
    price: '25,000',
    priceNote: 'Starting price, custom packages available'
  },
  {
    id: 2,
    icon: Heart,
    title: 'Wedding Photography',
    subtitle: 'Complete Wedding Coverage',
    description: 'Comprehensive wedding photography coverage from engagement to reception. We capture every precious moment with artistic vision and attention to detail.',
    features: [
      'Full day coverage (8-12 hours)',
      'Engagement session included',
      'Professional editing & retouching',
      'Online gallery & USB delivery',
      'Wedding album design',
      'Print rights & social media files'
    ],
    price: '150,000',
    priceNote: 'Full wedding coverage, custom packages available'
  },
  {
    id: 3,
    icon: Video,
    title: 'Videography',
    subtitle: 'Cinematic Video Production',
    description: 'Professional video services including event coverage, promotional videos, and cinematic storytelling that brings your story to life.',
    features: [
      '4K video recording',
      'Professional audio recording',
      'Cinematic editing & color grading',
      'Multiple camera angles',
      'Background music & sound effects',
      'Multiple delivery formats'
    ],
    price: '80,000',
    priceNote: 'Starting price, custom packages available'
  },
  {
    id: 4,
    icon: Briefcase,
    title: 'Commercial Photography',
    subtitle: 'Business & Product Photography',
    description: 'High-quality product and commercial photography to enhance your business marketing materials and brand presence.',
    features: [
      'Product photography setup',
      'Professional lighting & styling',
      'Multiple product angles',
      'Background options',
      'High-resolution files',
      'Commercial usage rights'
    ],
    price: '35,000',
    priceNote: 'Per product, bulk discounts available'
  },
  {
    id: 5,
    icon: Users,
    title: 'Event Photography',
    subtitle: 'Corporate & Social Events',
    description: 'Professional coverage for corporate events, parties, and special occasions with high-quality images that capture the energy and atmosphere.',
    features: [
      'Event coverage (2-6 hours)',
      'Candid & posed shots',
      'Professional editing',
      'Quick turnaround time',
      'Online gallery delivery',
      'Print-ready files'
    ],
    price: '45,000',
    priceNote: 'Per hour, minimum 2 hours'
  },
  {
    id: 6,
    icon: Edit3,
    title: 'Photo Editing',
    subtitle: 'Professional Post-Processing',
    description: 'Professional post-processing and retouching services to ensure your images look their absolute best.',
    features: [
      'Color correction & grading',
      'Skin retouching & smoothing',
      'Background enhancement',
      'Object removal & manipulation',
      'Multiple editing styles',
      'Fast turnaround time'
    ],
    price: '5,000',
    priceNote: 'Per image, bulk discounts available'
  }
]

// Features data
const features = [
  {
    id: 1,
    icon: Star,
    title: '5+ Years Experience',
    description: 'Over 5 years of professional photography experience with hundreds of satisfied clients.'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick delivery times without compromising on quality. Get your photos within 3-7 days.'
  },
  {
    id: 3,
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee. We work until you\'re completely happy with your photos.'
  },
  {
    id: 4,
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available for sessions during weekdays, weekends, and evenings to accommodate your schedule.'
  },
  {
    id: 5,
    icon: Award,
    title: 'Professional Equipment',
    description: 'State-of-the-art camera equipment and professional lighting for the highest quality results.'
  },
  {
    id: 6,
    icon: Target,
    title: 'Custom Packages',
    description: 'Tailored photography packages designed to meet your specific needs and budget.'
  }
]

// Process steps
const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and create a custom photography package that fits your needs.'
  },
  {
    id: 2,
    number: '02',
    title: 'Planning & Preparation',
    description: 'We plan the perfect location, timing, and styling to ensure your session is a success.'
  },
  {
    id: 3,
    number: '03',
    title: 'Photography Session',
    description: 'On the day of your session, we capture beautiful moments with professional expertise and artistic vision.'
  },
  {
    id: 4,
    number: '04',
    title: 'Editing & Retouching',
    description: 'We carefully edit and retouch your images to ensure they look their absolute best.'
  },
  {
    id: 5,
    number: '05',
    title: 'Delivery & Follow-up',
    description: 'Receive your final images through our online gallery and follow up to ensure your complete satisfaction.'
  }
]

// SEO Meta
useHead({
  title: 'Services - Uncle Eruted Photography',
  meta: [
    {
      name: 'description',
      content: 'Professional photography services including portraits, weddings, events, and commercial photography. View our pricing and book your session today.'
    }
  ]
})
</script>

<style scoped>
/* Services page styles */
.services-page {
  @apply bg-white;
}

/* Services grid */
.services-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.service-card-large {
  @apply bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300;
}

.service-header {
  @apply text-center mb-8;
}

.service-icon-wrapper {
  @apply w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md;
}

.service-title {
  @apply text-2xl font-bold text-slate-900 mb-3;
}

.service-subtitle {
  @apply text-slate-600 font-medium;
}

.service-content {
  @apply mb-8;
}

.service-description {
  @apply text-slate-700 mb-6 leading-relaxed;
}

.service-features {
  @apply mb-6;
}

.features-title {
  @apply text-lg font-semibold text-slate-900 mb-4;
}

.features-list {
  @apply space-y-3;
}

.feature-item {
  @apply flex items-center text-slate-700;
}

.service-pricing {
  @apply text-center mb-6;
}

.price-tag {
  @apply text-3xl font-bold text-slate-900 mb-2;
}

.price-currency {
  @apply text-slate-600;
}

.price-amount {
  @apply text-slate-900;
}

.price-unit {
  @apply text-slate-600 text-lg;
}

.price-note {
  @apply text-sm text-slate-500;
}

.service-actions {
  @apply flex flex-col sm:flex-row gap-3;
}

.btn-primary-service {
  @apply bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

.btn-secondary-service {
  @apply bg-white text-slate-900 border-2 border-slate-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

/* Features grid */
.features-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.feature-card {
  @apply bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300;
}

.feature-icon-wrapper {
  @apply w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-md;
}

.feature-title {
  @apply text-xl font-bold text-slate-900 mb-4;
}

.feature-description {
  @apply text-slate-700 leading-relaxed;
}

/* Process timeline */
.process-timeline {
  @apply space-y-8;
}

.process-step {
  @apply flex items-start space-x-6;
}

.step-number {
  @apply w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0;
}

.step-content {
  @apply flex-1;
}

.step-title {
  @apply text-xl font-bold text-slate-900 mb-3;
}

.step-description {
  @apply text-slate-700 leading-relaxed;
}

/* Button styles */
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
  
  .service-card-large {
    @apply p-6;
  }
  
  .features-grid {
    @apply grid-cols-1 gap-6;
  }
  
  .process-step {
    @apply flex-col text-center space-x-0 space-y-4;
  }
  
  .btn-white-large, .btn-outline-white-large {
    @apply px-6 py-3 text-sm;
  }
}
</style>
