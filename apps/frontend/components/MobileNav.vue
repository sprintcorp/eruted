<template>
  <!-- LinkedIn-style Bottom Navigation -->
  <nav class="fixed bottom-0 left-0 w-full bg-white/95 border-t border-slate-200 shadow-lg md:hidden flex justify-around py-4 backdrop-blur-2xl z-50">
    <button 
      class="nav-item"
      :class="{ 'nav-item-active': $route.path === '/' }"
      @click="navigateTo('/')"
    >
      <Home class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">Home</span>
    </button>
    
    <button 
      class="nav-item"
      :class="{ 'nav-item-active': $route.path === '/gallery' }"
      @click="navigateTo('/gallery')"
    >
      <Camera class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">Gallery</span>
    </button>
    
    <button 
      class="nav-item"
      :class="{ 'nav-item-active': $route.path === '/services' }"
      @click="navigateTo('/services')"
    >
      <Briefcase class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">Services</span>
    </button>
    
    <button 
      class="nav-item"
      :class="{ 'nav-item-active': $route.path === '/about' }"
      @click="navigateTo('/about')"
    >
      <User class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">About</span>
    </button>
    
    <button 
      class="nav-item"
      @click="toggleMenu"
    >
      <Menu class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">Menu</span>
    </button>
  </nav>

  <!-- Enhanced Slide-in Drawer for Extra Pages -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 md:hidden"
      @click="closeMenu"
    >
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-full opacity-0"
      >
        <div 
          class="absolute bottom-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transform"
          @click.stop
        >
          <!-- Drawer Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center">
                <Menu class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900">Quick Menu</h3>
                <p class="text-sm text-slate-600">Access all features</p>
              </div>
            </div>
            <button 
              @click="closeMenu"
              class="close-button"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
          
          <!-- Menu Items Grid -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <button 
              @click="navigateTo('/contact')"
              class="menu-item-primary"
            >
              <Mail class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Contact</span>
            </button>
            
            <button 
              @click="navigateTo('/booking')"
              class="menu-item-primary"
            >
              <Calendar class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Book Session</span>
            </button>
            
            <button 
              @click="navigateTo('/help')"
              class="menu-item-primary"
            >
              <HelpCircle class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Help & FAQ</span>
            </button>
            
            <button 
              @click="navigateTo('/blog')"
              class="menu-item-primary"
            >
              <FileText class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Blog</span>
            </button>
          </div>
          
          <!-- Quick Actions -->
          <div class="space-y-3">
            <button 
              @click="navigateTo('/portfolio')"
              class="menu-item-secondary"
            >
              <Image class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Portfolio</span>
              <ArrowRight class="w-4 h-4 text-slate-400 ml-auto" />
            </button>
            
            <button 
              @click="navigateTo('/testimonials')"
              class="menu-item-secondary"
            >
              <Star class="w-5 h-5 text-slate-600" />
              <span class="text-slate-800 font-medium">Testimonials</span>
              <ArrowRight class="w-4 h-4 text-slate-400 ml-auto" />
            </button>
          </div>
          
          <!-- Social Links -->
          <div class="pt-4 border-t border-slate-200 mt-6">
            <p class="text-sm text-slate-600 mb-3 font-medium">Follow Us</p>
            <div class="flex space-x-3">
              <button class="social-button">
                <Twitter class="w-5 h-5" />
              </button>
              <button class="social-button">
                <Instagram class="w-5 h-5" />
              </button>
              <button class="social-button">
                <Facebook class="w-5 h-5" />
              </button>
              <button class="social-button">
                <Youtube class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Home, 
  Camera, 
  Briefcase, 
  User, 
  Menu, 
  X, 
  Mail, 
  Calendar, 
  HelpCircle,
  FileText,
  Image,
  ArrowRight,
  Star,
  Twitter,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-vue-next'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navigateTo = (path) => {
  closeMenu()
  // Use Nuxt router to navigate
  if (process.client) {
    window.location.href = path
  }
}
</script>

<style scoped>
/* Enhanced LinkedIn-style navigation */
.nav-item {
  @apply flex flex-col items-center text-slate-600 hover:text-slate-900 transition-all duration-300 relative;
}

.nav-item-active {
  @apply text-slate-900;
}

.nav-item-active::after {
  content: '';
  @apply absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-600 rounded-full;
}

.nav-item:hover {
  transform: translateY(-2px);
}

/* Enhanced menu items */
.menu-item-primary {
  @apply flex flex-col items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all duration-200 text-center space-y-2;
}

.menu-item-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(10, 15, 28, 0.1);
}

.menu-item-secondary {
  @apply flex items-center w-full p-4 text-left hover:bg-slate-50 rounded-2xl transition-all duration-200 space-x-3;
}

.menu-item-secondary:hover {
  transform: translateX(4px);
}

/* Close button */
.close-button {
  @apply p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 text-slate-600 hover:text-slate-800;
}

/* Social buttons */
.social-button {
  @apply w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-all duration-200 text-slate-600 hover:text-slate-800 hover:scale-110;
}

/* Enhanced hover effects */
.nav-item:hover {
  transform: translateY(-2px);
}

/* Smooth transitions */
* {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus states for accessibility */
button:focus {
  @apply outline-none ring-2 ring-slate-500 ring-offset-2 ring-offset-white rounded-lg;
}
</style>
