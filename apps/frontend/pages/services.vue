<template>
  <div class="services-page">
    <!-- Services Hero Section -->
    <section class="services-hero bg-gradient-to-b from-white via-white-50 to-white-100 py-20 relative overflow-hidden">
      <!-- Background SVG Gears -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="gear-container">
          <!-- Large Gear -->
          <svg class="gear gear-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" stroke-width="2" stroke-dasharray="8,8"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/>
          </svg>
          
          <!-- Medium Gear -->
          <svg class="gear gear-2" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#F1F5F9" stroke-width="2" stroke-dasharray="6,6"/>
            <circle cx="40" cy="40" r="25" fill="none" stroke="#F8FAFC" stroke-width="1.5"/>
            <path d="M40 5 L40 12 M40 68 L40 75 M5 40 L12 40 M68 40 L75 40" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          
          <!-- Small Gear -->
          <svg class="gear gear-3" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="25" fill="none" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="4,4"/>
            <circle cx="30" cy="30" r="15" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M30 5 L30 10 M30 50 L30 55 M5 30 L10 30 M50 30 L55 30" stroke="#E2E8F0" stroke-width="1" stroke-linecap="round"/>
          </svg>
          
          <!-- Camera Lens Gear -->
          <svg class="gear gear-4" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" fill="none" stroke="#E2E8F0" stroke-width="2"/>
            <circle cx="35" cy="35" r="20" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <circle cx="35" cy="35" r="10" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <path d="M35 5 L35 12 M35 58 L35 65 M5 35 L12 35 M58 35 L65 35" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="35" cy="35" r="5" fill="#F1F5F9"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Photography Services
          </h1>
          <p class="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Professional photography and videography services tailored to capture your most precious moments with artistic vision and technical excellence
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid-section bg-white py-20 relative overflow-hidden">
      <!-- Background SVG Gears -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="gear-container-secondary">
          <!-- Technical Gear -->
          <svg class="gear gear-5" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="45" r="40" fill="none" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="10,10"/>
            <circle cx="45" cy="45" r="30" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M45 5 L45 15 M45 75 L45 85 M5 45 L15 45 M75 45 L85 45" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="45" cy="45" r="8" fill="#F1F5F9"/>
          </svg>
          
          <!-- Photography Gear -->
          <svg class="gear gear-6" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37.5" cy="37.5" r="32" fill="none" stroke="#F8FAFC" stroke-width="1.5"/>
            <circle cx="37.5" cy="37.5" r="22" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M37.5 5 L37.5 12 M37.5 63 L37.5 70 M5 37.5 L12 37.5 M63 37.5 L70 37.5" stroke="#E2E8F0" stroke-width="1" stroke-linecap="round"/>
            <circle cx="37.5" cy="37.5" r="12" fill="#F1F5F9" opacity="0.5"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <Check class="w-4 h-4 text-slate-600 mr-3" />
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
    <section class="why-choose-section bg-gradient-to-b from-white-50 to-white-100 py-20 relative overflow-hidden">
      <!-- Background SVG Gears -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="gear-container-why">
          <!-- Why Choose Gear 1 -->
          <svg class="gear gear-9" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
            <circle cx="47.5" cy="47.5" r="42" fill="none" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="15,15"/>
            <circle cx="47.5" cy="47.5" r="32" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M47.5 5 L47.5 18 M47.5 77 L47.5 90 M5 47.5 L18 47.5 M77 47.5 L90 47.5" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="47.5" cy="47.5" r="10" fill="#F1F5F9" opacity="0.4"/>
          </svg>
          
          <!-- Why Choose Gear 2 -->
          <svg class="gear gear-10" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5" cy="32.5" r="28" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <circle cx="32.5" cy="32.5" r="18" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <path d="M32.5 4 L32.5 12 M32.5 53 L32.5 61 M4 32.5 L12 32.5 M53 32.5 L61 32.5" stroke="#E2E8F0" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Uncle Eruted?
          </h2>
          <p class="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
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
              <component :is="feature.icon" class="w-8 h-8 text-slate-600" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section bg-white py-20 relative overflow-hidden">
      <!-- Background SVG Gears -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="gear-container-process">
          <!-- Process Gear 1 -->
          <svg class="gear gear-7" viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42.5" cy="42.5" r="37" fill="none" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="12,12"/>
            <circle cx="42.5" cy="42.5" r="27" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M42.5 5 L42.5 15 M42.5 70 L42.5 80 M5 42.5 L15 42.5 M70 42.5 L80 42.5" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          
          <!-- Process Gear 2 -->
          <svg class="gear gear-8" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <circle cx="35" cy="35" r="20" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <path d="M35 5 L35 12 M35 58 L35 65 M5 35 L12 35 M58 35 L65 35" stroke="#E2E8F0" stroke-width="1" stroke-linecap="round"/>
            <circle cx="35" cy="35" r="6" fill="#F1F5F9" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Photography Process
          </h2>
          <p class="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
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
    <section class="cta-section bg-slate-900 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Capture Your Story?
          </h2>
          <p class="text-lg md:text-xl font-semibold text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your photography needs and create a custom package that perfectly captures your vision.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center border-2 border-slate-300">
              <Calendar class="w-5 h-5 mr-3" />
              Book Your Session
            </button>
            <button class="bg-slate-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
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
  @apply text-slate-700 font-medium;
}

.service-content {
  @apply mb-8;
}

.service-description {
  @apply text-slate-800 mb-6 leading-relaxed;
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
  @apply flex items-center text-slate-800;
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
  @apply text-sm text-slate-600;
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
  @apply text-slate-800 leading-relaxed;
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
  @apply text-slate-800 leading-relaxed;
}

/* Button styles */
.btn-white-large {
  @apply bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-50 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center border-2 border-slate-300;
}

.btn-dark-blue {
  @apply bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-slate-700 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl;
}



/* SVG Gear Animations and Positioning */
.gear-container {
  @apply absolute inset-0;
}

.gear-container-secondary {
  @apply absolute inset-0;
}

.gear-container-process {
  @apply absolute inset-0;
}

.gear-container-why {
  @apply absolute inset-0;
}

.gear {
  @apply absolute opacity-20;
  animation: gearFloat 20s ease-in-out infinite;
}

.gear-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.gear-2 {
  top: 20%;
  right: 15%;
  animation-delay: -5s;
  animation-duration: 30s;
}

.gear-3 {
  bottom: 30%;
  left: 20%;
  animation-delay: -10s;
  animation-duration: 22s;
}

.gear-4 {
  bottom: 20%;
  right: 25%;
  animation-delay: -15s;
  animation-duration: 28s;
}

.gear-5 {
  top: 15%;
  left: 5%;
  animation-delay: -3s;
  animation-duration: 26s;
}

.gear-6 {
  bottom: 25%;
  right: 10%;
  animation-delay: -8s;
  animation-duration: 24s;
}

.gear-7 {
  top: 25%;
  left: 15%;
  animation-delay: -12s;
  animation-duration: 27s;
}

.gear-8 {
  bottom: 15%;
  right: 20%;
  animation-delay: -6s;
  animation-duration: 23s;
}

.gear-9 {
  top: 30%;
  right: 5%;
  animation-delay: -9s;
  animation-duration: 29s;
}

.gear-10 {
  bottom: 35%;
  left: 10%;
  animation-delay: -14s;
  animation-duration: 25s;
}

@keyframes gearFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
  }
  50% {
    transform: translateY(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(-15px) rotate(270deg);
  }
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
  
  /* Hide gears on mobile for better performance */
  .gear {
    @apply hidden;
  }
}
</style>
