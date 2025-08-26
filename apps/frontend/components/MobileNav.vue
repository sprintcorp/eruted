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
      :class="{ 'nav-item-active': $route.path === '/contact' }"
      @click="navigateTo('/contact')"
    >
      <Mail class="w-6 h-6 mb-1" />
      <span class="text-xs font-medium">Contact</span>
      <!-- Fallback icon in case lucide icon fails -->
      <span v-if="!iconLoaded" class="text-lg mb-1">✉️</span>
    </button>
  </nav>


</template>

<script setup>
import { onMounted, ref } from 'vue'
import { 
  Home, 
  Camera, 
  Briefcase, 
  User,
  Mail
} from 'lucide-vue-next'

const iconLoaded = ref(false)

const router = useRouter()
const navigateTo = (path) => {
  // Use Nuxt router to navigate
  router.push(path)
}

// Debug: Log when component mounts and check icon loading
onMounted(() => {
  console.log('MobileNav mounted, icons should be visible')
  
  // Check if Mail icon is loaded
  setTimeout(() => {
    const mailIcon = document.querySelector('.nav-item svg')
    iconLoaded.value = !!mailIcon
    console.log('Mail icon loaded:', iconLoaded.value)
  }, 100)
})
</script>

<style scoped>
/* Enhanced LinkedIn-style navigation */
.nav-item {
  @apply flex flex-col items-center text-slate-600 hover:text-slate-900 transition-all duration-300 relative;
}

/* Ensure icons are always visible */
.nav-item svg {
  @apply w-6 h-6 mb-1;
  min-width: 1.5rem;
  min-height: 1.5rem;
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

/* Debug: Add border to see if icons are loading */
.nav-item svg {
  border: 1px solid transparent;
}

/* Ensure icon container is visible */
.nav-item {
  min-height: 3rem;
}

/* Force icon visibility on mobile */
@media (max-width: 768px) {
  .nav-item svg {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  
  /* Debug: Show icon container */
  .nav-item {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
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
