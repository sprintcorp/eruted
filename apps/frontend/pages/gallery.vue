<template>
  <div class="gallery-page">
    <!-- Gallery Hero Section -->
    <section class="gallery-hero bg-gradient-to-b from-white via-white-50 to-white-100 py-20 relative overflow-hidden">
      <!-- Background SVG Photography Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="photography-elements">
          <!-- Vintage Film Camera -->
          <svg class="floating-element camera-float" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Camera Body -->
            <rect x="25" y="20" width="50" height="35" rx="6" fill="none" stroke="#E2E8F0" stroke-width="2"/>
            <!-- Film Chamber -->
            <rect x="30" y="25" width="40" height="25" rx="3" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <!-- Film Reel -->
            <circle cx="35" cy="37.5" r="8" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
            <circle cx="75" cy="37.5" r="8" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>
            <!-- Film Strip -->
            <rect x="40" y="30" width="20" height="15" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <!-- Sprocket Holes -->
            <circle cx="42" cy="32" r="1" fill="#CBD5E1"/>
            <circle cx="42" cy="35" r="1" fill="#CBD5E1"/>
            <circle cx="42" cy="38" r="1" fill="#CBD5E1"/>
            <circle cx="42" cy="41" r="1" fill="#CBD5E1"/>
            <circle cx="58" cy="32" r="1" fill="#CBD5E1"/>
            <circle cx="58" cy="35" r="1" fill="#CBD5E1"/>
            <circle cx="58" cy="38" r="1" fill="#CBD5E1"/>
            <circle cx="58" cy="41" r="1" fill="#CBD5E1"/>
            <!-- Viewfinder -->
            <rect x="45" y="15" width="10" height="8" rx="2" fill="none" stroke="#E2E8F0" stroke-width="1"/>
          </svg>
          
          <!-- Film Strip with Sprocket Holes -->
          <svg class="floating-element lens-float" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <!-- Main Film Strip -->
            <rect x="10" y="20" width="80" height="20" rx="2" fill="none" stroke="#F1F5F9" stroke-width="2"/>
            <!-- Sprocket Holes Left Side -->
            <circle cx="15" cy="25" r="2" fill="#E2E8F0"/>
            <circle cx="15" cy="30" r="2" fill="#E2E8F0"/>
            <circle cx="15" cy="35" r="2" fill="#E2E8F0"/>
            <!-- Sprocket Holes Right Side -->
            <circle cx="85" cy="25" r="2" fill="#E2E8F0"/>
            <circle cx="85" cy="30" r="2" fill="#E2E8F0"/>
            <circle cx="85" cy="35" r="2" fill="#E2E8F0"/>
            <!-- Film Frames -->
            <rect x="20" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="35" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="50" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="65" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
          </svg>
          
          <!-- Film Reel -->
          <svg class="floating-element rays-float" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Reel Body -->
            <circle cx="40" cy="40" r="25" fill="none" stroke="#F1F5F9" stroke-width="2"/>
            <!-- Reel Holes -->
            <circle cx="40" cy="40" r="18" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="40" cy="40" r="12" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <!-- Spokes -->
            <path d="M40 15 L40 25 M40 55 L40 65 M15 40 L25 40 M55 40 L65 40" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Film End -->
            <path d="M40 15 L40 5 M40 65 L40 75" stroke="#F8FAFC" stroke-width="2" stroke-linecap="round"/>
          </svg>
          
          <!-- Vintage Lens with Aperture -->
          <svg class="floating-element aperture-float" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Lens Body -->
            <rect x="25" y="30" width="30" height="20" rx="10" fill="none" stroke="#F1F5F9" stroke-width="2"/>
            <!-- Aperture Blades -->
            <path d="M40 25 L45 30 L40 35 L35 30 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M40 35 L45 40 L40 45 L35 40 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M25 40 L30 45 L35 40 L30 35 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M45 40 L50 45 L55 40 L50 35 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Center Aperture -->
            <circle cx="40" cy="40" r="8" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <circle cx="40" cy="40" r="4" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Photography Gallery
          </h1>
          <p class="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of photography equipment, abstract visuals, and futuristic imagery that showcases the art and technology of visual storytelling.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Filters -->
    <section class="gallery-filters bg-white py-8 border-b border-slate-200 relative overflow-hidden">
      <!-- Background SVG Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="filter-elements">
          <!-- Film Sprocket Wheel -->
          <svg class="floating-element filter-gear" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Main Wheel -->
            <circle cx="35" cy="35" r="30" fill="none" stroke="#F8FAFC" stroke-width="1.5"/>
            <!-- Sprocket Teeth -->
            <path d="M35 5 L38 8 L35 11 L32 8 Z" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M35 59 L38 62 L35 65 L32 62 Z" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M5 35 L8 38 L11 35 L8 32 Z" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <path d="M59 35 L62 38 L65 35 L62 32 Z" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <!-- Inner Ring -->
            <circle cx="35" cy="35" r="20" fill="none" stroke="#E2E8F0" stroke-width="1"/>
            <!-- Center Hub -->
            <circle cx="35" cy="35" r="8" fill="#CBD5E1"/>
          </svg>
          
          <!-- Film Shutter -->
          <svg class="floating-element filter-shutter" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <!-- Shutter Housing -->
            <circle cx="30" cy="30" r="25" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <!-- Shutter Blades -->
            <path d="M30 5 L35 25 L30 30 L25 25 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M30 30 L35 35 L30 55 L25 35 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M5 30 L25 35 L30 30 L25 25 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <path d="M30 30 L35 25 L55 30 L35 35 Z" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Center Aperture -->
            <circle cx="30" cy="30" r="12" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <circle cx="30" cy="30" r="6" fill="#F8FAFC"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="setActiveCategory(category.id)"
            class="filter-button"
            :class="{ 'filter-button-active': activeCategory === category.id }"
          >
            <component :is="category.icon" class="w-4 h-4 mr-2" />
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-grid-section bg-white py-16 relative overflow-hidden">
      <!-- Background SVG Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-elements">
          <!-- Vintage Film Light Meter -->
          <svg class="floating-element grid-lightbulb" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Light Meter Body -->
            <rect x="25" y="25" width="30" height="20" rx="3" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <!-- Meter Face -->
            <circle cx="40" cy="35" r="12" fill="none" stroke="#E2E8F0" stroke-width="1"/>
            <!-- Meter Needle -->
            <path d="M40 35 L40 25" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Scale Marks -->
            <path d="M35 28 L35 30 M45 28 L45 30 M32 32 L32 34 M48 32 L48 34" stroke="#F8FAFC" stroke-width="1" stroke-linecap="round"/>
          </svg>
          
          <!-- Film Strip with Sprocket Holes -->
          <svg class="floating-element grid-film" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <!-- Main Film Strip -->
            <rect x="10" y="20" width="80" height="20" rx="2" fill="none" stroke="#F1F5F9" stroke-width="1.5"/>
            <!-- Sprocket Holes Left Side -->
            <circle cx="15" cy="25" r="2" fill="#E2E8F0"/>
            <circle cx="15" cy="30" r="2" fill="#E2E8F0"/>
            <circle cx="15" cy="35" r="2" fill="#E2E8F0"/>
            <!-- Sprocket Holes Right Side -->
            <circle cx="85" cy="25" r="2" fill="#E2E8F0"/>
            <circle cx="85" cy="30" r="2" fill="#E2E8F0"/>
            <circle cx="85" cy="35" r="2" fill="#E2E8F0"/>
            <!-- Film Frames -->
            <rect x="20" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="35" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="50" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <rect x="65" y="22" width="12" height="16" fill="none" stroke="#CBD5E1" stroke-width="1"/>
          </svg>
          
          <!-- Vintage Film Camera -->
          <svg class="floating-element grid-tripod" viewBox="0 0 70 80" xmlns="http://www.w3.org/2000/svg">
            <!-- Camera Body -->
            <rect x="20" y="25" width="30" height="20" rx="4" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Film Chamber -->
            <rect x="25" y="30" width="20" height="10" rx="2" fill="none" stroke="#F1F5F9" stroke-width="1"/>
            <!-- Film Reel -->
            <circle cx="30" cy="35" r="4" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <circle cx="50" cy="35" r="4" fill="none" stroke="#CBD5E1" stroke-width="1"/>
            <!-- Viewfinder -->
            <rect x="35" y="20" width="8" height="6" rx="1" fill="none" stroke="#F8FAFC" stroke-width="1"/>
            <!-- Film Advance Lever -->
            <path d="M55 30 L60 25 L60 35 L55 30" fill="none" stroke="#CBD5E1" stroke-width="1"/>
          </svg>
        </div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="gallery-grid">
          <div 
            v-for="(item, index) in filteredGalleryItems" 
            :key="item.id"
            class="gallery-item-wrapper animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="gallery-item group" @click="openLightbox(item)">
              <div class="photography-frame relative">
                <!-- Loading skeleton -->
                <div class="w-full h-80 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse rounded-lg flex items-center justify-center">
                  <div class="flex flex-col items-center space-y-2">
                    <div class="w-6 h-6 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                    <div class="text-slate-500 text-sm">Loading...</div>
                  </div>
                </div>
                
                <img 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105 opacity-0 absolute inset-0 rounded-lg"
                  @error="handleImageError"
                  @load="handleImageLoad"
                  loading="lazy"
                />
                
                <div class="gallery-overlay">
                  <div class="gallery-content">
                    <h4 class="gallery-title">{{ item.title }}</h4>
                    <p class="gallery-subtitle">{{ item.subtitle }}</p>
                    <div class="gallery-actions">
                      <button class="gallery-action-btn">
                        <Eye class="w-4 h-4" />
                      </button>
                      <button class="gallery-action-btn">
                        <Heart class="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredGalleryItems.length === 0" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
              <Camera class="w-12 h-12 text-slate-500" />
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">No Images Found</h3>
            <p class="text-slate-600 mb-6">No images match the selected category. Try selecting a different filter.</p>
            <button 
              @click="setActiveCategory('all')"
              class="btn-primary"
            >
              View All Images
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 bg-black/90 backdrop-blur-sm z-100 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-6xl w-full" @click.stop>
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors z-10"
          >
            <X class="w-8 h-8" />
          </button>
          
          <!-- Navigation Arrows -->
          <button 
            @click="previousItem"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <ChevronLeft class="w-8 h-8" />
          </button>
          
          <button 
            @click="nextItem"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === filteredGalleryItems.length - 1 }"
          >
            <ChevronRight class="w-8 h-8" />
          </button>
          
          <!-- Main Image -->
          <div class="relative">
            <img 
              :src="currentLightboxItem.image" 
              :alt="currentLightboxItem.title"
              class="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              @error="handleLightboxImageError"
            />
            
            <!-- Image Info -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 class="text-2xl font-bold text-white mb-2">{{ currentLightboxItem.title }}</h3>
                      <p class="text-slate-200">{{ currentLightboxItem.subtitle }}</p>
        <p class="text-sm text-slate-300 mt-2">{{ currentLightboxItem.description }}</p>
            </div>
          </div>
          
          <!-- Thumbnail Navigation -->
          <div class="flex justify-center mt-6 space-x-2">
            <button 
              v-for="(item, index) in filteredGalleryItems" 
              :key="item.id"
              @click="goToItem(index)"
              class="thumbnail-btn"
              :class="{ 'thumbnail-btn-active': index === currentIndex }"
            >
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-16 h-16 object-cover rounded-lg"
                @error="handleThumbnailError"
              />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Navigation -->
    <MobileNav />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Camera, 
  Video, 
  Settings, 
  Zap, 
  Eye, 
  Heart, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Target,
  Lightbulb,
  Palette
} from 'lucide-vue-next'

// Import MobileNav component
import MobileNav from '~/components/MobileNav.vue'

// Gallery categories
const categories = [
  { id: 'all', name: 'All', icon: Camera },
  { id: 'equipment', name: 'Equipment', icon: Camera },
  { id: 'abstract', name: 'Abstract', icon: Palette },
  { id: 'futuristic', name: 'Futuristic', icon: Zap },
  { id: 'lighting', name: 'Lighting', icon: Lightbulb },
  { id: 'technology', name: 'Technology', icon: Settings }
]

// Gallery items - Photography gadgets, abstract visuals, futuristic imagery
const galleryItems = [
  {
    id: 1,
    category: 'equipment',
    title: 'Professional Camera Setup',
    subtitle: 'High-end photography equipment',
    description: 'Complete professional photography setup with multiple lenses, lighting equipment, and accessories.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 2,
    category: 'lighting',
    title: 'Studio Lighting System',
    subtitle: 'Advanced lighting technology',
    description: 'Professional studio lighting setup with multiple light sources and modifiers for perfect illumination.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    category: 'equipment',
    title: 'Lens Collection',
    subtitle: 'Premium optical equipment',
    description: 'Collection of professional photography lenses covering wide-angle to telephoto ranges.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    category: 'abstract',
    title: 'Light Patterns',
    subtitle: 'Abstract light photography',
    description: 'Creative abstract photography exploring light patterns and visual effects.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    category: 'futuristic',
    title: 'Digital Interface',
    subtitle: 'Modern technology aesthetic',
    description: 'Futuristic digital interface design with modern technology aesthetics.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 6,
    category: 'technology',
    title: 'Smart Camera System',
    subtitle: 'AI-powered photography',
    description: 'Next-generation smart camera system with AI-powered features and advanced automation.',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 7,
    category: 'abstract',
    title: 'Color Theory',
    subtitle: 'Abstract color composition',
    description: 'Abstract photography exploring color theory and visual composition principles.',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 8,
    category: 'futuristic',
    title: 'Neon Aesthetics',
    subtitle: 'Cyberpunk photography',
    description: 'Futuristic neon aesthetics with cyberpunk-inspired visual elements.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 9,
    category: 'lighting',
    title: 'LED Light Show',
    subtitle: 'Dynamic lighting effects',
    description: 'Dynamic LED lighting setup creating stunning visual effects and atmosphere.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 10,
    category: 'equipment',
    title: 'Vintage Film Camera',
    subtitle: 'Classic photography gear',
    description: 'Beautiful vintage film camera with classic design and mechanical precision.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 11,
    category: 'technology',
    title: 'Drone Photography',
    subtitle: 'Aerial perspective',
    description: 'Advanced drone photography equipment for capturing stunning aerial perspectives.',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 12,
    category: 'abstract',
    title: 'Geometric Patterns',
    subtitle: 'Modern abstract art',
    description: 'Contemporary abstract photography featuring geometric patterns and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center'
  }
]

// Reactive state
const activeCategory = ref('all')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

// Computed properties
const filteredGalleryItems = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeCategory.value)
})

const currentLightboxItem = computed(() => {
  return filteredGalleryItems.value[currentIndex.value] || {}
})

// Methods
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const openLightbox = (item) => {
  currentIndex.value = filteredGalleryItems.value.findIndex(i => i.id === item.id)
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextItem = () => {
  if (currentIndex.value < filteredGalleryItems.value.length - 1) {
    currentIndex.value++
  }
}

const previousItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToItem = (index) => {
  currentIndex.value = index
}

// Image error handling
const handleImageError = (event) => {
  // Fallback to a placeholder image if the original fails to load
  event.target.src = 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Image+Loading...'
  console.warn('Image failed to load:', event.target.src)
}

const handleImageLoad = (event) => {
  // Image loaded successfully
  event.target.classList.remove('opacity-0')
  event.target.classList.add('opacity-100')
}

const handleLightboxImageError = (event) => {
  // Fallback for lightbox images
  event.target.src = 'https://via.placeholder.com/800x600/1e293b/ffffff?text=Image+Unavailable'
  console.warn('Lightbox image failed to load:', event.target.src)
}

const handleThumbnailError = (event) => {
  // Fallback for thumbnail images
  event.target.src = 'https://via.placeholder.com/64x64/1e293b/ffffff?text=!'
  console.warn('Thumbnail image failed to load:', event.target.src)
}

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e) => {
    if (!lightboxOpen.value) return
    
    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowRight':
        nextItem()
        break
      case 'ArrowLeft':
        previousItem()
        break
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})

// SEO Meta
useHead({
  title: 'Gallery - Uncle Eruted Photography',
  meta: [
    {
      name: 'description',
      content: 'Explore our photography gallery featuring professional equipment, abstract visuals, and futuristic imagery. Discover the art and technology of visual storytelling.'
    }
  ]
})
</script>

<style scoped>
/* Gallery page styles */
.gallery-page {
  @apply bg-white;
}

/* Gallery filters */
.filter-button {
  @apply flex items-center px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 font-medium;
}

.filter-button-active {
  @apply bg-slate-900 text-white border-slate-900;
}

/* Gallery grid */
.gallery-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.gallery-item-wrapper {
  @apply overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-all duration-500;
}

.gallery-item {
  @apply cursor-pointer;
}

.photography-frame {
  @apply relative overflow-hidden;
}

/* Image loading states */
.gallery-item img {
  transition: opacity 0.3s ease-in-out;
}

.gallery-item img.opacity-0 {
  opacity: 0;
}

.gallery-item img.opacity-100 {
  opacity: 1;
}

/* Button styles */
.btn-primary {
  @apply bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 hover:scale-105 shadow-md hover:shadow-lg;
}

.gallery-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500;
}

.gallery-content {
  @apply absolute bottom-0 left-0 right-0 p-6 text-white;
}

.gallery-title {
  @apply text-lg font-semibold mb-2;
}

.gallery-subtitle {
  @apply text-sm opacity-90 mb-4;
}

.gallery-actions {
  @apply flex space-x-3;
}

.gallery-action-btn {
  @apply w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200;
}

/* Lightbox styles */
.thumbnail-btn {
  @apply opacity-60 hover:opacity-100 transition-opacity duration-200;
}

.thumbnail-btn-active {
  @apply opacity-100 ring-2 ring-slate-400;
}

/* SVG Animation Elements and Positioning */
.photography-elements {
  @apply absolute inset-0;
}

.filter-elements {
  @apply absolute inset-0;
}

.grid-elements {
  @apply absolute inset-0;
}

.floating-element {
  @apply absolute opacity-20;
  animation: float 15s ease-in-out infinite;
}

/* Hero Section Elements */
.camera-float {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 20s;
}

.lens-float {
  top: 25%;
  right: 15%;
  animation-delay: -5s;
  animation-duration: 18s;
}

.rays-float {
  bottom: 30%;
  left: 20%;
  animation-delay: -10s;
  animation-duration: 22s;
}

.aperture-float {
  bottom: 20%;
  right: 25%;
  animation-delay: -15s;
  animation-duration: 25s;
}

/* Filter Section Elements */
.filter-gear {
  top: 20%;
  left: 5%;
  animation-delay: -3s;
  animation-duration: 16s;
}

.filter-shutter {
  bottom: 15%;
  right: 10%;
  animation-delay: -8s;
  animation-duration: 19s;
}

/* Grid Section Elements */
.grid-lightbulb {
  top: 10%;
  left: 15%;
  animation-delay: -12s;
  animation-duration: 21s;
}

.grid-film {
  top: 30%;
  right: 20%;
  animation-delay: -6s;
  animation-duration: 17s;
}

.grid-tripod {
  bottom: 25%;
  left: 25%;
  animation-delay: -14s;
  animation-duration: 24s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(5deg);
  }
  50% {
    transform: translateY(-8px) rotate(-3deg);
  }
  75% {
    transform: translateY(-20px) rotate(8deg);
  }
}

/* Enhanced filter button animations */
.filter-button {
  @apply flex items-center px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all duration-300 font-medium hover:scale-105 hover:shadow-md;
}

.filter-button-active {
  @apply bg-slate-900 text-white border-slate-900 shadow-lg;
}

/* Enhanced gallery item animations */
.gallery-item-wrapper {
  @apply overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2;
}

.gallery-item {
  @apply cursor-pointer;
}

.photography-frame {
  @apply relative overflow-hidden;
}

.gallery-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500;
}

.gallery-content {
  @apply absolute bottom-0 left-0 right-0 p-6 text-white;
}

.gallery-title {
  @apply text-lg font-semibold mb-2;
}

.gallery-subtitle {
  @apply text-sm opacity-90 mb-4;
}

.gallery-actions {
  @apply flex space-x-3;
}

.gallery-action-btn {
  @apply w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110;
}

/* Lightbox styles */
.thumbnail-btn {
  @apply opacity-60 hover:opacity-100 transition-opacity duration-200;
}

.thumbnail-btn-active {
  @apply opacity-100 ring-2 ring-slate-400;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-grid {
    @apply grid-cols-1 gap-6;
  }
  
  .filter-button {
    @apply px-4 py-2 text-sm;
  }
  
  /* Hide floating elements on mobile for better performance */
  .floating-element {
    @apply hidden;
  }
}
</style>


