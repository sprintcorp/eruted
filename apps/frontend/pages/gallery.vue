<template>
  <div class="gallery-page">
    <!-- Gallery Hero Section -->
    <section class="gallery-hero bg-gradient-to-b from-white via-white-50 to-white-100 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-6xl font-bold text-primary-1000 mb-6">
            Photography Gallery
          </h1>
          <p class="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of photography equipment, abstract visuals, and futuristic imagery that showcases the art and technology of visual storytelling.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Filters -->
    <section class="gallery-filters bg-white py-8 border-b border-primary-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
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
    <section class="gallery-grid-section bg-white py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="gallery-grid">
          <div 
            v-for="(item, index) in filteredGalleryItems" 
            :key="item.id"
            class="gallery-item-wrapper animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="gallery-item group" @click="openLightbox(item)">
              <div class="photography-frame">
                <img 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
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
            class="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors z-10"
          >
            <X class="w-8 h-8" />
          </button>
          
          <!-- Navigation Arrows -->
          <button 
            @click="previousItem"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-300 transition-colors z-10"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <ChevronLeft class="w-8 h-8" />
          </button>
          
          <button 
            @click="nextItem"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-300 transition-colors z-10"
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
            />
            
            <!-- Image Info -->
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 class="text-2xl font-bold text-white mb-2">{{ currentLightboxItem.title }}</h3>
              <p class="text-primary-200">{{ currentLightboxItem.subtitle }}</p>
              <p class="text-sm text-primary-300 mt-2">{{ currentLightboxItem.description }}</p>
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery-grid {
    @apply grid-cols-1 gap-6;
  }
  
  .filter-button {
    @apply px-4 py-2 text-sm;
  }
}
</style>


