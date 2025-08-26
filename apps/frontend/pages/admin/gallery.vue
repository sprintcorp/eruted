<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Header -->
    <AdminNav />
    
    <!-- Page Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <h1 class="text-2xl font-bold text-gray-900">Gallery Management</h1>
          <button @click="showAddImageModal = true" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Image
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Filters</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select v-model="filters.category" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait</option>
                <option value="event">Event</option>
                <option value="commercial">Commercial</option>
                <option value="nature">Nature</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select v-model="filters.sortBy" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="category">Category</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input v-model="filters.search" type="text" placeholder="Search images..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="flex items-end">
              <button @click="clearFilters" class="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-medium text-gray-900">Gallery Images ({{ filteredImages.length }})</h2>
            <div class="flex space-x-2">
              <button @click="viewMode = 'grid'" :class="viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-400 hover:text-gray-600'" class="p-2 rounded-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </button>
              <button @click="viewMode = 'list'" :class="viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-400 hover:text-gray-600'" class="p-2 rounded-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="p-6">
          <!-- Grid View -->
          <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="image in filteredImages" :key="image.id" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="aspect-w-16 aspect-h-9 bg-gray-100">
                <img :src="image.url" :alt="image.title" class="w-full h-48 object-cover">
              </div>
              <div class="p-4">
                <h3 class="text-sm font-medium text-gray-900 mb-1">{{ image.title }}</h3>
                <p class="text-xs text-gray-500 mb-2">{{ image.category }}</p>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">{{ image.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-500">{{ formatDate(image.createdAt) }}</span>
                  <div class="flex space-x-2">
                    <button @click="editImage(image)" class="text-blue-600 hover:text-blue-800 text-xs">
                      Edit
                    </button>
                    <button @click="deleteImage(image.id)" class="text-red-600 hover:text-red-800 text-xs">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- List View -->
          <div v-else class="space-y-4">
            <div v-for="image in filteredImages" :key="image.id" class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <img :src="image.url" :alt="image.title" class="w-20 h-20 object-cover rounded">
              <div class="flex-1">
                <h3 class="text-sm font-medium text-gray-900">{{ image.title }}</h3>
                <p class="text-xs text-gray-500">{{ image.category }}</p>
                <p class="text-xs text-gray-600">{{ image.description }}</p>
                <span class="text-xs text-gray-500">{{ formatDate(image.createdAt) }}</span>
              </div>
              <div class="flex space-x-2">
                <button @click="editImage(image)" class="text-blue-600 hover:text-blue-800 text-xs px-3 py-1 border border-blue-300 rounded hover:bg-blue-50">
                  Edit
                </button>
                <button @click="deleteImage(image.id)" class="text-red-600 hover:text-red-800 text-xs px-3 py-1 border border-red-300 rounded hover:bg-red-50">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredImages.length === 0" class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No images found</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by adding your first gallery image.</p>
            <div class="mt-6">
              <button @click="showAddImageModal = true" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Image Modal -->
    <div v-if="showAddImageModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">{{ editingImage ? 'Edit Image' : 'Add Gallery Image' }}</h3>
          <form @submit.prevent="editingImage ? updateImage() : addGalleryImage()">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Image Title</label>
              <input v-model="newImage.title" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input v-model="newImage.url" type="url" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select v-model="newImage.category" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Select Category</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait</option>
                <option value="event">Event</option>
                <option value="commercial">Commercial</option>
                <option value="nature">Nature</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea v-model="newImage.description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div class="flex justify-end space-x-3">
              <button type="button" @click="closeModal" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                Cancel
              </button>
              <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                {{ editingImage ? 'Update Image' : 'Add Image' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

// Reactive data
const viewMode = ref('grid')
const showAddImageModal = ref(false)
const editingImage = ref(null)

const filters = ref({
  category: '',
  sortBy: 'newest',
  search: ''
})

const newImage = ref({
  title: '',
  url: '',
  category: '',
  description: ''
})

// Sample gallery data
const galleryImages = ref([
  {
    id: 1,
    title: 'Sunset Portrait',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'portrait',
    description: 'Beautiful sunset portrait session',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Wedding Ceremony',
    url: 'https://images.unsplash.com/photo-1519225421988-4c476dbf6c93?w=400&h=300&fit=crop',
    category: 'wedding',
    description: 'Magical wedding ceremony moments',
    createdAt: new Date('2024-01-10')
  },
  {
    id: 3,
    title: 'Corporate Event',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
    category: 'event',
    description: 'Professional corporate event coverage',
    createdAt: new Date('2024-01-05')
  }
])

// Computed properties
const filteredImages = computed(() => {
  let filtered = [...galleryImages.value]
  
  if (filters.value.category) {
    filtered = filtered.filter(img => img.category === filters.value.category)
  }
  
  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    filtered = filtered.filter(img => 
      img.title.toLowerCase().includes(search) ||
      img.description.toLowerCase().includes(search) ||
      img.category.toLowerCase().includes(search)
    )
  }
  
  // Sort images
  switch (filters.value.sortBy) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      break
    case 'oldest':
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      break
    case 'title':
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'category':
      filtered.sort((a, b) => a.category.localeCompare(b.category))
      break
  }
  
  return filtered
})

// Methods
const clearFilters = () => {
  filters.value = {
    category: '',
    sortBy: 'newest',
    search: ''
  }
}

const closeModal = () => {
  showAddImageModal.value = false
  editingImage.value = null
  newImage.value = { title: '', url: '', category: '', description: '' }
}

const addGalleryImage = () => {
  const image = {
    id: Date.now(),
    ...newImage.value,
    createdAt: new Date()
  }
  galleryImages.value.unshift(image)
  closeModal()
}

const editImage = (image) => {
  editingImage.value = image
  newImage.value = { ...image }
  showAddImageModal.value = true
}

const updateImage = () => {
  const index = galleryImages.value.findIndex(img => img.id === editingImage.value.id)
  if (index !== -1) {
    galleryImages.value[index] = { ...editingImage.value, ...newImage.value }
  }
  closeModal()
}

const deleteImage = (id) => {
  if (confirm('Are you sure you want to delete this image?')) {
    galleryImages.value = galleryImages.value.filter(img => img.id !== id)
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}
</script>
