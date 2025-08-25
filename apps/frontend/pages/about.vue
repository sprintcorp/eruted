<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-1000 via-primary-950 to-secondary-950"></div>
      
      <!-- Floating Photography Elements -->
      <div class="floating-elements">
        <div class="floating-element camera-icon" style="top: 20%; left: 10%; animation-delay: 0s;">
          📷
        </div>
        <div class="floating-element lens-icon" style="top: 30%; right: 15%; animation-delay: 1s;">
          🔍
        </div>
        <div class="floating-element film-icon" style="top: 70%; left: 20%; animation-delay: 2s;">
          🎞️
        </div>
        <div class="floating-element tripod-icon" style="top: 60%; right: 25%; animation-delay: 3s;">
          🦵
        </div>
      </div>

      <div class="container mx-auto px-4 py-32 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            About <span class="text-gradient">Uncle Eruted</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 leading-relaxed animate-fade-in" style="animation-delay: 0.2s;">
            A passionate photographer with over a decade of experience capturing life's most precious moments
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-in" style="animation-delay: 0.3s;">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8">
              The <span class="text-gradient">Story</span> Behind the Lens
            </h2>
            <div class="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                My journey in photography began with a simple curiosity about capturing the world around me. 
                What started as a hobby quickly evolved into a passion that would shape my entire life.
              </p>
              <p>
                Through the lens, I discovered the extraordinary beauty in ordinary moments - the way light 
                dances across a bride's face, the genuine laughter shared between families, the quiet 
                confidence of a portrait subject.
              </p>
              <p>
                Every photograph tells a story, and I'm honored to be the storyteller behind the camera, 
                preserving memories that will be cherished for generations to come.
              </p>
            </div>
          </div>
          
          <div class="relative animate-fade-in" style="animation-delay: 0.6s;">
            <div class="relative z-10">
              <img 
                src="https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg"
                alt="Uncle Eruted - Professional Photographer"
                class="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span class="text-gradient">Values</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide every photograph I take and every client I serve
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="value.title"
            class="modern-card p-8 text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">{{ value.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ value.title }}</h3>
            <p class="text-white/80 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Years of <span class="text-gradient">Experience</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, I've captured countless moments across diverse settings
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-5xl lg:text-6xl font-bold text-gradient-primary mb-4">{{ stat.value }}</div>
            <div class="text-lg text-white/80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span class="text-gradient">Equipment</span>
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Using state-of-the-art gear to ensure every image meets the highest standards of quality
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(gear, index) in equipment" 
            :key="gear.name"
            class="modern-card p-6 text-center animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="w-20 h-20 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">{{ gear.icon }}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{{ gear.name }}</h3>
            <p class="text-white/70 text-sm">{{ gear.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white">
            Ready to <span class="text-gradient">Work Together</span>?
          </h2>
          <p class="text-xl text-white/80 leading-relaxed">
            Let's create something beautiful together. Whether you're planning a wedding, 
            need professional portraits, or want to capture a special event, I'm here to help.
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
// Values data
const values = [
  {
    icon: '💝',
    title: 'Authenticity',
    description: 'Every photograph captures genuine emotions and real moments, never staged or artificial.'
  },
  {
    icon: '✨',
    title: 'Excellence',
    description: 'Committed to delivering the highest quality images that exceed expectations.'
  },
  {
    icon: '🤝',
    title: 'Connection',
    description: 'Building lasting relationships with clients through trust, communication, and understanding.'
  },
  {
    icon: '🎨',
    title: 'Creativity',
    description: 'Bringing artistic vision and innovative techniques to every photography session.'
  },
  {
    icon: '⏰',
    title: 'Reliability',
    description: 'Always punctual, professional, and prepared for every assignment.'
  },
  {
    icon: '💎',
    title: 'Quality',
    description: 'Using premium equipment and techniques to create images that last a lifetime.'
  }
]

// Stats data
const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Events Captured' },
  { value: '50K+', label: 'Photos Delivered' }
]

// Equipment data
const equipment = [
  {
    icon: '📷',
    name: 'Professional Cameras',
    description: 'Latest Canon and Sony full-frame cameras for exceptional image quality'
  },
  {
    icon: '🔍',
    name: 'Premium Lenses',
    description: 'High-quality prime and zoom lenses for versatility and sharpness'
  },
  {
    icon: '💡',
    name: 'Lighting Equipment',
    description: 'Professional lighting setups for perfect illumination in any condition'
  },
  {
    icon: '🦵',
    name: 'Stabilization',
    description: 'Tripods, gimbals, and stabilizers for crystal-clear images'
  },
  {
    icon: '💻',
    name: 'Editing Suite',
    description: 'Advanced post-processing tools for perfect final images'
  },
  {
    icon: '📱',
    name: 'Backup Systems',
    description: 'Multiple backup solutions to ensure your memories are safe'
  }
]
</script>

<style scoped>
.about-page {
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

.text-gradient-primary {
  @apply bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent;
}

.modern-card {
  @apply bg-secondary-900/80 backdrop-blur-xl rounded-2xl border border-secondary-800/50 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2;
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
