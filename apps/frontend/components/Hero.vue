<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 text-center overflow-hidden">
    <!-- Clean Background with Subtle Accents -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-100/5 to-slate-200/5 opacity-20"></div>
    
    <!-- Minimal Background Elements for Clean Look -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Subtle Lens Motif -->
      <div class="absolute top-40 -left-20 w-40 h-40 rounded-full bg-slate-200/20 opacity-20"></div>
      
      <!-- Subtle Camera Motif -->
      <div class="absolute top-80 -right-20 w-32 h-32 rounded-2xl bg-slate-300/20 opacity-20"></div>
      
      <!-- Subtle Lighting Motif -->
      <div class="absolute bottom-40 left-24 w-28 h-28 bg-slate-200/20 opacity-20"></div>
    </div>
    
    <!-- Hero Content with Enhanced Typography -->
    <div class="relative z-10 max-w-5xl px-6">
      <!-- Clean Brand Logo Design -->
      <div class="mb-10 flex justify-center">
        <div class="relative">
          <!-- Simplified Camera Body Logo -->
          <div class="camera-body w-20 h-16 rounded-xl relative overflow-hidden">
            <!-- Clean Lens Aperture -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 rounded-full border-3 border-white/40 bg-gradient-to-br from-slate-600 to-slate-800"></div>
            </div>
            <!-- Simple Viewfinder -->
            <div class="absolute top-1 right-1 w-3 h-3 rounded-full bg-slate-900"></div>
            <!-- Camera Grip -->
            <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-3 rounded-full bg-slate-900"></div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Hero Title with Photography Typography -->
      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
        <span class="block text-slate-900">Capture</span>
        <span class="block text-slate-800">
          Every Moment
        </span>
      </h1>
      
      <!-- Enhanced Hero Description with Better Typography -->
      <p class="mt-8 text-lg md:text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
        Professional photography and videography services that transform your special moments into 
        <span class="text-slate-900 font-semibold">timeless memories</span>. 
        Experience the future of visual storytelling with cutting-edge technology and artistic vision.
      </p>
      
      <!-- Enhanced Call to Action Buttons with Photography Effects -->
      <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button @click="navigateTo('/booking')" class="btn-primary-enhanced group">
          <span class="btn-text">Book Your Session</span>
          <div class="btn-icon ml-3">
            <Camera class="w-5 h-5" />
          </div>
        </button>
        <button @click="navigateTo('/gallery')" class="btn-secondary-enhanced group">
          <span class="btn-text">View Gallery</span>
          <div class="btn-icon ml-3">
            <Image class="w-5 h-5" />
          </div>
        </button>
      </div>
      
      <!-- Enhanced Stats Section with Photography Icons -->
      <div class="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Camera class="w-7 h-7 text-slate-700" />
          </div>
          <div class="stat-number text-2xl md:text-3xl font-bold text-slate-900">500+</div>
          <div class="stat-label text-xs md:text-sm text-slate-700 font-medium">Happy Clients</div>
        </div>
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Target class="w-7 h-7 text-slate-700" />
          </div>
          <div class="stat-number text-2xl md:text-3xl font-bold text-slate-900">1000+</div>
          <div class="stat-label text-xs md:text-sm text-slate-700 font-medium">Photos Captured</div>
        </div>
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Zap class="w-7 h-7 text-slate-700" />
          </div>
          <div class="stat-number text-2xl md:text-3xl font-bold text-slate-900">5+</div>
          <div class="stat-label text-xs md:text-sm text-slate-700 font-medium">Years Experience</div>
        </div>
      </div>
    </div>
    
    <!-- Reduced Scroll Indicator with Photography Theme -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
        <span class="text-xs text-slate-600 font-medium mt-2">Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Camera, Image, Target, Zap } from 'lucide-vue-next'

// Navigation function using Nuxt router
const router = useRouter()
const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
/* Clean component styles */
.stat-card-enhanced {
  @apply bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-lg transition-all duration-300;
}

.btn-primary-enhanced {
  @apply relative bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 shadow-lg flex items-center justify-center;
}

.btn-secondary-enhanced {
  @apply bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-50 shadow-lg flex items-center justify-center;
}

/* Clean photography equipment effects */
.camera-body {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
  box-shadow: 
    0 4px 20px rgba(10, 15, 28, 0.15),
    0 0 0 1px rgba(30, 64, 175, 0.1);
}

/* Enhanced scroll indicator */
.scroll-indicator {
  @apply flex flex-col items-center;
}

.scroll-arrow {
  @apply w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center relative;
}

.scroll-arrow::after {
  content: '';
  @apply absolute w-1 h-3 bg-slate-600 rounded-full mt-2;
}

/* Enhanced stat icon wrapper */
.stat-icon-wrapper {
  @apply w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-3 transition-all duration-300;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stat-card-enhanced {
    @apply p-4;
  }
  
  .btn-primary-enhanced, .btn-secondary-enhanced {
    @apply px-6 py-3 text-sm;
  }
  
  .stat-icon-wrapper {
    @apply w-12 h-12;
  }
  
  /* Ensure text is clearly visible on mobile */
  h1 {
    @apply text-4xl;
  }
  
  p {
    @apply text-base;
  }
  
  /* Reduce any remaining animation interference */
  .camera-body {
    opacity: 0.7;
  }
}


</style>
