<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="headerClass">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="relative">
            <!-- Camera Icon Animation -->
            <div class="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center animate-pulse-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <!-- Shutter Animation -->
            <div class="absolute inset-0 w-10 h-10 border-2 border-accent-300 rounded-full animate-spin-slow opacity-50"></div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gradient">Uncle Eruted</h1>
            <p class="text-sm text-accent-300 font-medium">Photography</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <NuxtLink to="/booking" class="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Book Now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg glass-effect hover:bg-accent-500/20 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden py-6 border-t border-accent-500/20">
          <nav class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="nav-link-mobile"
              active-class="text-accent-400 bg-accent-500/10"
            >
              {{ item.name }}
            </NuxtLink>
            <NuxtLink 
              to="/booking" 
              @click="closeMobileMenu"
              class="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Now
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const headerClass = computed(() => {
  if (route.path === '/') {
    return 'bg-transparent'
  }
  return 'bg-primary-1000/95 backdrop-blur-xl border-b border-accent-500/20'
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<style scoped>
.text-gradient {
  @apply bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent;
}

.glass-effect {
  @apply bg-white/10 backdrop-blur-xl border border-white/20;
}

.nav-link-mobile {
  @apply text-white/80 hover:text-white px-4 py-2 rounded-lg transition-colors;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes pulse-glow {
  from {
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
  }
  to {
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.8);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
