<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-1000 via-primary-950 to-secondary-950"></div>
      
      <!-- Floating Photography Elements -->
      <div class="floating-elements">
        <div class="floating-element camera-icon" style="top: 15%; left: 15%; animation-delay: 0s;">
          📷
        </div>
        <div class="floating-element lens-icon" style="top: 25%; right: 20%; animation-delay: 1s;">
          🔍
        </div>
        <div class="floating-element film-icon" style="top: 75%; left: 25%; animation-delay: 2s;">
          🎞️
        </div>
        <div class="floating-element tripod-icon" style="top: 65%; right: 15%; animation-delay: 3s;">
          🦵
        </div>
      </div>

      <div class="container mx-auto px-4 py-32 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            Photography <span class="text-gradient">Services</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 leading-relaxed animate-fade-in" style="animation-delay: 0.2s;">
            Professional photography services tailored to capture your most precious moments with artistic excellence
          </p>
        </div>
      </div>
    </section>

    <!-- Main Services Grid -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            v-for="(service, index) in mainServices" 
            :key="service.name"
            class="service-card animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="service-icon">
              <span class="text-4xl">{{ service.icon }}</span>
            </div>
            <div class="service-content">
              <h3 class="text-3xl font-bold text-white mb-4">{{ service.name }}</h3>
              <p class="text-white/80 text-lg leading-relaxed mb-6">{{ service.description }}</p>
              
              <div class="service-features mb-6">
                <h4 class="text-lg font-semibold text-primary-300 mb-3">What's Included:</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="feature in service.features" 
                    :key="feature"
                    class="flex items-center text-white/70"
                  >
                    <svg class="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="service-pricing">
                <div class="text-2xl font-bold text-primary-400 mb-2">Starting at {{ service.startingPrice }}</div>
                <div class="text-white/60 text-sm">{{ service.pricingNote }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Additional <span class="text-gradient">Services</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Specialized photography services to meet all your needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in additionalServices" 
            :key="service.name"
            class="modern-card p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ service.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ service.name }}</h3>
            <p class="text-white/80 leading-relaxed mb-4">{{ service.description }}</p>
            <div class="text-primary-400 font-semibold">{{ service.price }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It <span class="text-gradient">Works</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            A simple, streamlined process from consultation to final delivery
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.title"
            class="text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                {{ index + 1 }}
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <span class="text-2xl">{{ step.icon }}</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ step.title }}</h3>
            <p class="text-white/80 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Showcase -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span class="text-gradient">Equipment</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            State-of-the-art gear ensuring the highest quality results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(item, index) in equipment" 
            :key="item.name"
            class="equipment-card text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">{{ item.icon }}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ item.name }}</h3>
            <p class="text-white/70 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white">
            Ready to <span class="text-gradient">Get Started</span>?
          </h2>
          <p class="text-xl text-white/80 leading-relaxed">
            Let's discuss your photography needs and create a custom package that's perfect for you.
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
// Main services data
const mainServices = [
  {
    icon: '💒',
    name: 'Wedding Photography',
    description: 'Comprehensive wedding photography coverage from engagement to reception, capturing every precious moment of your special day.',
    features: [
      'Engagement session',
      'Full wedding day coverage',
      'Professional editing',
      'Online gallery',
      'Print rights',
      'Wedding album design'
    ],
    startingPrice: '$1,500',
    pricingNote: 'Custom packages available based on coverage needs'
  },
  {
    icon: '🎉',
    name: 'Event Photography',
    description: 'Professional event photography for corporate events, parties, celebrations, and special occasions.',
    features: [
      'Event coverage',
      'Professional editing',
      'Quick turnaround',
      'Online gallery',
      'Print rights',
      'Event highlights video'
    ],
    startingPrice: '$300',
    pricingNote: 'Per hour, minimum 2 hours'
  },
  {
    icon: '👤',
    name: 'Portrait Photography',
    description: 'Beautiful, professional portraits for individuals, families, and professionals.',
    features: [
      'Studio or outdoor sessions',
      'Professional editing',
      'Multiple outfit changes',
      'Online gallery',
      'Print rights',
      'Print packages available'
    ],
    startingPrice: '$200',
    pricingNote: 'Per session, includes 20 edited images'
  },
  {
    icon: '🏢',
    name: 'Commercial Photography',
    description: 'High-quality commercial photography for businesses, products, and marketing materials.',
    features: [
      'Product photography',
      'Business portraits',
      'Marketing imagery',
      'Professional editing',
      'Commercial usage rights',
      'Quick turnaround'
    ],
    startingPrice: '$400',
    pricingNote: 'Per project, custom quotes available'
  }
]

// Additional services data
const additionalServices = [
  {
    icon: '🎥',
    name: 'Videography',
    description: 'Professional video services for weddings, events, and commercial projects.',
    price: 'Starting at $800'
  },
  {
    icon: '✏️',
    name: 'Photo Editing',
    description: 'Professional photo editing and retouching services for existing images.',
    price: 'Starting at $25'
  },
  {
    icon: '🖼️',
    name: 'Print Services',
    description: 'High-quality prints, canvases, and albums for your favorite images.',
    price: 'Starting at $15'
  },
  {
    icon: '📱',
    name: 'Social Media',
    description: 'Optimized images and content for social media platforms.',
    price: 'Starting at $100'
  },
  {
    icon: '🎨',
    name: 'Custom Albums',
    description: 'Beautiful, custom-designed photo albums and books.',
    price: 'Starting at $200'
  },
  {
    icon: '🚀',
    name: 'Rush Delivery',
    description: 'Expedited editing and delivery for urgent projects.',
    price: 'Additional $100'
  }
]

// Process steps data
const processSteps = [
  {
    icon: '💬',
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and create a custom photography plan.'
  },
  {
    icon: '📅',
    title: 'Booking',
    description: 'Secure your date with a deposit and receive detailed preparation information.'
  },
  {
    icon: '📸',
    title: 'Photography',
    description: 'Professional photography session with guidance and direction throughout.'
  },
  {
    icon: '🎁',
    title: 'Delivery',
    description: 'Receive your beautifully edited images in an online gallery within 2 weeks.'
  }
]

// Equipment data
const equipment = [
  {
    icon: '📷',
    name: 'Canon EOS R5',
    description: '45MP full-frame mirrorless camera'
  },
  {
    icon: '🔍',
    name: 'RF 24-70mm f/2.8',
    description: 'Professional zoom lens'
  },
  {
    icon: '💡',
    name: 'Profoto B10',
    description: 'Professional lighting system'
  },
  {
    icon: '🦵',
    name: 'Manfrotto MT055',
    description: 'Professional tripod system'
  },
  {
    icon: '📱',
    name: 'iPad Pro',
    description: 'On-site image review'
  },
  {
    icon: '💻',
    name: 'MacBook Pro',
    description: 'Professional editing workstation'
  },
  {
    icon: '🔋',
    name: 'Backup Batteries',
    description: 'Never miss a moment'
  },
  {
    icon: '💾',
    name: 'Dual Memory Cards',
    description: 'Redundant storage system'
  }
]
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  font-size: 3rem;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.text-gradient {
  @apply bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent;
}

.service-card {
  @apply bg-secondary-900/80 backdrop-blur-xl rounded-2xl p-8 border border-secondary-800/50 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300;
}

.service-icon {
  @apply w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6;
}

.modern-card {
  @apply bg-secondary-900/80 backdrop-blur-xl rounded-2xl border border-secondary-800/50 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300;
}

.equipment-card {
  @apply bg-secondary-900/60 backdrop-blur-xl rounded-xl p-6 border border-secondary-700/30 hover:border-primary-400/50 transition-all duration-300;
}

.btn-primary {
  @apply inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300;
}

.btn-secondary {
  @apply inline-flex items-center bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
