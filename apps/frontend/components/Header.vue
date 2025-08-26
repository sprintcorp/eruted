<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="headerClasses">
    <!-- Desktop Navigation -->
    <nav class="hidden md:block">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="relative">
              <!-- Camera Body Logo -->
              <div class="camera-body w-12 h-10 rounded-xl relative overflow-hidden">
                <!-- Lens Aperture -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-8 h-8 rounded-full border-3 border-white/30 bg-gradient-to-br from-slate-600 to-slate-800 animate-pulse"></div>
                </div>
                <!-- Viewfinder -->
                <div class="absolute top-1 right-1 w-3 h-3 rounded-full bg-slate-900"></div>
                <!-- Camera Grip -->
                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 rounded-full bg-slate-900"></div>
              </div>
            </div>
            <div class="text-left">
              <h1 class="text-xl font-bold text-slate-900 leading-tight">Uncle Eruted</h1>
              <p class="text-sm text-slate-600 leading-tight">Photography</p>
            </div>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/gallery' }"
            >
              Gallery
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/services' }"
            >
              Services
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/about' }"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/contact' }"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- CTA Button -->
          <button class="btn-header-primary">
            Book Session
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation Header -->
    <nav class="md:hidden">
      <div class="px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Mobile Logo -->
          <div class="flex items-center space-x-2">
            <div class="camera-body w-10 h-8 rounded-lg relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-6 h-6 rounded-full border-2 border-white/30 bg-gradient-to-br from-slate-600 to-slate-800"></div>
              </div>
            </div>
            <div>
              <h1 class="text-lg font-bold text-slate-900 leading-tight">Uncle Eruted</h1>
              <p class="text-xs text-slate-600 leading-tight">Photography</p>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-slate-900" />
            <X v-else class="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div 
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg"
      >
        <div class="px-4 py-4 space-y-3">
          <NuxtLink 
            to="/" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/gallery" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Gallery
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>
          <div class="pt-3 border-t border-slate-200">
            <button class="btn-header-primary w-full">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const headerClasses = computed(() => {
  if (isScrolled.value) {
    return 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md'
  }
  return 'bg-transparent'
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navigation link styles */
.nav-link {
  @apply text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300;
}

.nav-link:hover::after,
.nav-link-active::after {
  @apply w-full;
}

.nav-link-active {
  @apply text-slate-900;
}

/* Mobile navigation link styles */
.mobile-nav-link {
  @apply block py-3 px-4 text-slate-800 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium;
}

/* Button styles */
.btn-header-primary {
  @apply bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 shadow-md hover:shadow-lg;
}

/* Camera body logo styles */
.camera-body {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
  box-shadow: 
    0 0 0 1px rgba(30, 64, 175, 0.2),
    0 4px 16px rgba(10, 15, 28, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .btn-header-primary {
    @apply px-4 py-2 text-sm;
  }
}
</style>
