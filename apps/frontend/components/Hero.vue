<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-slate-100 to-slate-200 text-center overflow-hidden">
    <!-- Enhanced Background Photography Accents -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-slate-200/20 opacity-20"></div>
    
    <!-- Advanced Photography Equipment Background Motifs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Lens Motif with Enhanced Animation -->
      <div class="absolute top-20 -left-20 w-64 h-64 rounded-full bg-slate-300/20 animate-pulse"></div>
      
      <!-- Camera Body Motif with Shutter Effect -->
      <div class="absolute top-60 -right-24 w-48 h-48 rounded-2xl bg-slate-400/20 animate-pulse" style="animation-delay: 1s;"></div>
      
      <!-- Tripod Motif with Floating Animation -->
      <div class="absolute bottom-32 left-16 w-32 h-32 bg-slate-300/20 animate-pulse" style="animation-delay: 2s;"></div>
      
      <!-- Lighting Motif with Spotlight Effect -->
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-slate-200/20 animate-pulse" style="animation-delay: 0.5s;"></div>
      
      <!-- New: Film Roll Motif -->
      <div class="absolute top-40 left-1/4 w-24 h-24 bg-slate-300/20 animate-pulse" style="animation-delay: 1.5s;"></div>
      
      <!-- New: Viewfinder Motif -->
      <div class="absolute bottom-40 right-1/4 w-20 h-20 bg-slate-400/20 animate-pulse" style="animation-delay: 2.5s;"></div>
    </div>
    
    <!-- Hero Content with Enhanced Typography -->
    <div class="relative z-10 max-w-5xl px-6">
      <!-- Enhanced Brand Logo with Photography Elements -->
      <div class="mb-12 flex justify-center">
        <div class="relative group">
          <!-- Camera Body Logo with Hover Effects -->
          <div class="camera-body w-24 h-20 rounded-2xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <!-- Lens Aperture with Enhanced Animation -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full border-4 border-white/30 bg-gradient-to-br from-slate-600 to-slate-800 animate-pulse"></div>
              <!-- Inner Aperture Blades -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-700 to-slate-900 animate-pulse" style="animation-delay: 0.5s;"></div>
              </div>
            </div>
            <!-- Viewfinder with Glow Effect -->
            <div class="absolute top-2 right-2 w-5 h-5 rounded-full bg-slate-900 shadow-lg"></div>
            <!-- Camera Grip with Enhanced Shadow -->
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-full bg-slate-900 shadow-lg"></div>
          </div>
          
          <!-- Enhanced Lens Reflection Effect -->
          <div class="absolute inset-0 lens-reflection rounded-2xl"></div>
          
          <!-- Floating Light Particles -->
          <div class="absolute -top-2 -right-2 w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
          <div class="absolute -bottom-2 -left-2 w-2 h-2 bg-slate-300 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        </div>
      </div>
      
      <!-- Enhanced Hero Title with Photography Typography -->
      <h1 class="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight drop-shadow-2xl mb-8 animate-fade-in">
        <span class="block transform hover:scale-105 transition-transform duration-300">Capture</span>
        <span class="block text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text transform hover:scale-105 transition-transform duration-300">
          Every Moment
        </span>
      </h1>
      
      <!-- Enhanced Hero Description with Better Typography -->
      <p class="mt-8 text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto animate-slide-up font-medium">
        Professional photography and videography services that transform your special moments into 
        <span class="text-slate-800 font-semibold">timeless memories</span>. 
        Experience the future of visual storytelling with cutting-edge technology and artistic vision.
      </p>
      
      <!-- Enhanced Call to Action Buttons with Photography Effects -->
      <div class="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-scale-in">
        <button class="btn-primary-enhanced group">
          <span class="btn-text">Book Your Session</span>
          <div class="btn-icon ml-3 group-hover:scale-110 transition-transform duration-300">
            <Camera class="w-5 h-5" />
          </div>
          <!-- Button Glow Effect -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        </button>
        <button class="btn-secondary-enhanced group">
          <span class="btn-text">View Gallery</span>
          <div class="btn-icon ml-3 group-hover:scale-110 transition-transform duration-300">
            <Image class="w-5 h-5" />
          </div>
        </button>
      </div>
      
      <!-- Enhanced Floating Stats with Photography Icons -->
      <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style="animation-delay: 0.8s;">
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Camera class="w-8 h-8 text-slate-600" />
          </div>
          <div class="stat-number text-3xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">500+</div>
          <div class="stat-label text-sm text-slate-600 font-medium">Happy Clients</div>
        </div>
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Target class="w-8 h-8 text-slate-600" />
          </div>
          <div class="stat-number text-3xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">1000+</div>
          <div class="stat-label text-sm text-slate-600 font-medium">Photos Captured</div>
        </div>
        <div class="stat-card-enhanced group">
          <div class="stat-icon-wrapper">
            <Zap class="w-8 h-8 text-slate-600" />
          </div>
          <div class="stat-number text-3xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">5+</div>
          <div class="stat-label text-sm text-slate-600 font-medium">Years Experience</div>
        </div>
      </div>
    </div>
    
    <!-- Enhanced Scroll Indicator with Photography Theme -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
        <span class="text-xs text-slate-600 font-medium mt-2">Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Camera, Image, Target, Zap } from 'lucide-vue-next'
</script>

<style scoped>
/* Enhanced component styles */
.stat-card-enhanced {
  @apply bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white/95;
}

.btn-primary-enhanced {
  @apply relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-500 hover:bg-slate-800 hover:scale-105 shadow-md hover:shadow-xl flex items-center justify-center overflow-hidden;
}

.btn-secondary-enhanced {
  @apply bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-2xl font-semibold transition-all duration-500 hover:bg-slate-50 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center;
}

/* Enhanced photography equipment effects */
.camera-body {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
  box-shadow: 
    0 0 0 1px rgba(30, 64, 175, 0.2),
    0 8px 32px rgba(10, 15, 28, 0.1),
    0 0 60px rgba(30, 64, 175, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.lens-reflection {
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%);
  animation: shimmer 4s ease-in-out infinite;
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
  @apply absolute w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse;
}

/* Enhanced stat icon wrapper */
.stat-icon-wrapper {
  @apply w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stat-card-enhanced {
    @apply p-4;
  }
  
  .btn-primary-enhanced, .btn-secondary-enhanced {
    @apply px-8 py-4 text-sm;
  }
  
  .stat-icon-wrapper {
    @apply w-12 h-12;
  }
}

/* Animation keyframes */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
