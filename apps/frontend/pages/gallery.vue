<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-primary-900 to-primary-800">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 class="text-5xl lg:text-6xl font-bold text-white">
            Our <span class="text-gradient">Gallery</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 leading-relaxed">
            Explore our diverse collection of photography work, from intimate portraits to grand celebrations. 
            Each image tells a unique story and showcases our commitment to artistic excellence.
          </p>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-float"></div>
        <div class="absolute top-40 right-20 w-16 h-16 bg-accent-400/30 rounded-full animate-float-delayed"></div>
        <div class="absolute bottom-20 left-20 w-12 h-12 bg-accent-600/25 rounded-full animate-float-slow"></div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-12 bg-primary-900 border-b border-accent-500/20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-3 rounded-full transition-all duration-300 font-medium"
            :class="selectedCategory === category.id 
              ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25' 
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-20">
          <div class="inline-flex items-center space-x-2">
            <div class="w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
            <div class="w-8 h-8 bg-accent-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
            <div class="w-8 h-8 bg-accent-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          </div>
          <p class="text-white/70 mt-4">Loading beautiful moments...</p>
        </div>

        <!-- Gallery Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="image.id"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            :style="{ animationDelay: `${index * 0.05}s` }"
            @click="openLightbox(image)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Image Info -->
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-xl font-bold text-white mb-2">{{ image.title }}</h3>
              <p class="text-white/80 text-sm mb-3">{{ image.category }}</p>
              <div class="flex items-center justify-between">
                <span class="text-accent-400 text-sm font-medium">{{ image.date }}</span>
                <div class="w-8 h-8 bg-accent-500/80 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-accent-500/90 text-white text-xs font-medium rounded-full">
                {{ image.category }}
              </span>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!isLoading && filteredImages.length === 0" class="text-center py-20">
          <div class="w-24 h-24 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">No Images Found</h3>
          <p class="text-white/70 mb-6">We couldn't find any images in this category. Please try another category or check back later.</p>
          <button 
            @click="selectedCategory = 'all'"
            class="btn-primary"
          >
            View All Images
          </button>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMoreImages && !isLoading" class="text-center pt-12">
          <button 
            @click="loadMoreImages"
            class="btn-secondary text-lg px-8 py-4"
          >
            Load More Images
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 class="text-4xl lg:text-5xl font-bold text-white">
            Ready to <span class="text-gradient">Create</span> Your Own Story?
          </h2>
          <p class="text-xl text-white/80 leading-relaxed">
            Inspired by what you see? Let's work together to capture your special moments with the same level of artistry and attention to detail.
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

    <!-- Lightbox Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="lightboxImage" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/90 backdrop-blur-sm"
          @click="closeLightbox"
        ></div>
        
        <!-- Modal Content -->
        <div class="relative w-full max-w-6xl max-h-[90vh]">
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute top-4 right-4 w-12 h-12 bg-accent-500/90 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Image -->
          <div class="relative overflow-hidden rounded-2xl">
            <img 
              :src="lightboxImage.src" 
              :alt="lightboxImage.alt"
              class="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>

          <!-- Image Info -->
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 class="text-2xl font-bold text-white mb-2">{{ lightboxImage.title }}</h3>
            <p class="text-white/80 mb-2">{{ lightboxImage.category }}</p>
            <p class="text-white/60 text-sm">{{ lightboxImage.description }}</p>
          </div>

          <!-- Navigation -->
          <div class="absolute inset-y-0 left-0 flex items-center">
            <button 
              @click="previousImage"
              class="w-12 h-12 bg-accent-500/90 hover:bg-accent-500 rounded-r-full flex items-center justify-center transition-colors ml-4"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center">
            <button 
              @click="nextImage"
              class="w-12 h-12 bg-accent-500/90 hover:bg-accent-500 rounded-l-full flex items-center justify-center transition-colors mr-4"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Gallery data
const categories = [
  { id: 'all', name: 'All Images' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'event', name: 'Event' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'nature', name: 'Nature' }
]

const selectedCategory = ref('all')
const isLoading = ref(false)
const lightboxImage = ref(null)
const currentImageIndex = ref(0)

// Sample gallery images (replace with API call)
const galleryImages = ref([
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    alt: 'Wedding ceremony',
    title: 'Wedding Ceremony',
    category: 'wedding',
    description: 'A beautiful outdoor wedding ceremony captured in natural light.',
    date: '2024'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Portrait session',
    title: 'Professional Portrait',
    category: 'portrait',
    description: 'Elegant portrait photography showcasing natural beauty and personality.',
    date: '2024'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    alt: 'Corporate event',
    title: 'Corporate Event',
    category: 'event',
    description: 'Professional coverage of corporate events and business functions.',
    date: '2024'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    alt: 'Product photography',
    title: 'Product Showcase',
    category: 'commercial',
    description: 'High-quality product photography for marketing and e-commerce.',
    date: '2024'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
    alt: 'Wedding reception',
    title: 'Wedding Reception',
    category: 'wedding',
    description: 'Celebrating love and joy at wedding receptions and celebrations.',
    date: '2024'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Family portrait',
    title: 'Family Portrait',
    category: 'portrait',
    description: 'Cherished family moments captured with warmth and authenticity.',
    date: '2024'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    alt: 'Birthday party',
    title: 'Birthday Celebration',
    category: 'event',
    description: 'Joyful birthday celebrations and special milestone moments.',
    date: '2024'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop',
    alt: 'Food photography',
    title: 'Culinary Art',
    category: 'commercial',
    description: 'Delicious food photography that makes every dish look irresistible.',
    date: '2024'
  }
])

// Computed properties
const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    return galleryImages.value
  }
  return galleryImages.value.filter(image => image.category === selectedCategory.value)
})

const hasMoreImages = computed(() => {
  // TODO: Implement pagination logic
  return false
})

// Methods
const openLightbox = (image) => {
  lightboxImage.value = image
  currentImageIndex.value = filteredImages.value.findIndex(img => img.id === image.id)
}

const closeLightbox = () => {
  lightboxImage.value = null
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
  lightboxImage.value = filteredImages.value[currentImageIndex.value]
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = filteredImages.value.length - 1
  }
  lightboxImage.value = filteredImages.value[currentImageIndex.value]
}

const loadMoreImages = async () => {
  // TODO: Implement API call to load more images
  console.log('Loading more images...')
}

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e) => {
    if (!lightboxImage.value) return
    
    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowRight':
        nextImage()
        break
      case 'ArrowLeft':
        previousImage()
        break
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>
