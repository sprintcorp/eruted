<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Header -->
    <AdminNav />
    
    <!-- Page Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <h1 class="text-2xl font-bold text-gray-900">Bookings Management</h1>
          <div class="flex space-x-3">
            <button @click="exportBookings" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Export
            </button>
            <button @click="showAddBookingModal = true" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Booking
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bookings Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Bookings</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.total }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-green-100 text-green-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Confirmed</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.confirmed }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Pending</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.pending }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-red-100 text-red-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Cancelled</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.cancelled }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Filters</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select v-model="filters.status" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
              <select v-model="filters.sessionType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Types</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait</option>
                <option value="event">Event</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select v-model="filters.dateRange" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Dates</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input v-model="filters.search" type="text" placeholder="Search bookings..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="flex items-end">
              <button @click="clearFilters" class="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bookings Table -->
      <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Bookings ({{ filteredBookings.length }})</h2>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session Type</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="booking in filteredBookings" :key="booking.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span class="text-sm font-medium text-gray-700">{{ getInitials(booking.clientName) }}</span>
                      </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ booking.clientName }}</div>
                      <div class="text-sm text-gray-500">{{ booking.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getSessionTypeClass(booking.sessionType)">
                    {{ booking.sessionType }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatDate(booking.sessionDate) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusClass(booking.status)">
                    {{ booking.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatCurrency(booking.amount) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                    <button @click="viewBooking(booking)" class="text-blue-600 hover:text-blue-900">View</button>
                    <button @click="editBooking(booking)" class="text-indigo-600 hover:text-indigo-900">Edit</button>
                    <button @click="updateStatus(booking.id, 'confirmed')" v-if="booking.status === 'pending'" class="text-green-600 hover:text-green-900">Confirm</button>
                    <button @click="updateStatus(booking.id, 'cancelled')" v-if="booking.status === 'pending'" class="text-red-600 hover:text-red-900">Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div v-if="filteredBookings.length === 0" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
          <p class="mt-1 text-sm text-gray-500">Get started by adding your first booking.</p>
          <div class="mt-6">
            <button @click="showAddBookingModal = true" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Booking
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Booking Modal -->
    <div v-if="showAddBookingModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">{{ editingBooking ? 'Edit Booking' : 'Add New Booking' }}</h3>
          <form @submit.prevent="editingBooking ? updateBooking() : addBooking()">
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
              <input v-model="newBooking.clientName" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input v-model="newBooking.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input v-model="newBooking.phone" type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
              <select v-model="newBooking.sessionType" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Select Type</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait</option>
                <option value="event">Event</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Session Date</label>
              <input v-model="newBooking.sessionDate" type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input v-model="newBooking.amount" type="number" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select v-model="newBooking.status" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div class="flex justify-end space-x-3">
              <button type="button" @click="closeModal" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
                Cancel
              </button>
              <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                {{ editingBooking ? 'Update Booking' : 'Add Booking' }}
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
const showAddBookingModal = ref(false)
const editingBooking = ref(null)

const filters = ref({
  status: '',
  sessionType: '',
  dateRange: '',
  search: ''
})

const newBooking = ref({
  clientName: '',
  email: '',
  phone: '',
  sessionType: '',
  sessionDate: '',
  amount: '',
  status: 'pending'
})

// Sample bookings data
const bookings = ref([
  {
    id: 1,
    clientName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    sessionType: 'wedding',
    sessionDate: '2024-06-15',
    amount: 2500.00,
    status: 'confirmed',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 2,
    clientName: 'Sarah Smith',
    email: 'sarah@example.com',
    phone: '+1234567891',
    sessionType: 'portrait',
    sessionDate: '2024-05-20',
    amount: 300.00,
    status: 'pending',
    createdAt: new Date('2024-01-10')
  },
  {
    id: 3,
    clientName: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1234567892',
    sessionType: 'event',
    sessionDate: '2024-07-10',
    amount: 800.00,
    status: 'confirmed',
    createdAt: new Date('2024-01-05')
  }
])

// Computed properties
const filteredBookings = computed(() => {
  let filtered = [...bookings.value]
  
  if (filters.value.status) {
    filtered = filtered.filter(booking => booking.status === filters.value.status)
  }
  
  if (filters.value.sessionType) {
    filtered = filtered.filter(booking => booking.sessionType === filters.value.sessionType)
  }
  
  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    filtered = filtered.filter(booking => 
      booking.clientName.toLowerCase().includes(search) ||
      booking.email.toLowerCase().includes(search) ||
      booking.sessionType.toLowerCase().includes(search)
    )
  }
  
  // Apply date range filter
  if (filters.value.dateRange) {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    switch (filters.value.dateRange) {
      case 'today':
        filtered = filtered.filter(booking => {
          const bookingDate = new Date(booking.sessionDate)
          return bookingDate.toDateString() === today.toDateString()
        })
        break
      case 'week':
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        filtered = filtered.filter(booking => {
          const bookingDate = new Date(booking.sessionDate)
          return bookingDate >= weekAgo
        })
        break
      case 'month':
        const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
        filtered = filtered.filter(booking => {
          const bookingDate = new Date(booking.sessionDate)
          return bookingDate >= monthAgo
        })
        break
    }
  }
  
  // Sort by date (newest first)
  filtered.sort((a, b) => new Date(b.sessionDate) - new Date(a.sessionDate))
  
  return filtered
})

const stats = computed(() => {
  const total = bookings.value.length
  const confirmed = bookings.value.filter(b => b.status === 'confirmed').length
  const pending = bookings.value.filter(b => b.status === 'pending').length
  const cancelled = bookings.value.filter(b => b.status === 'cancelled').length
  
  return { total, confirmed, pending, cancelled }
})

// Methods
const clearFilters = () => {
  filters.value = {
    status: '',
    sessionType: '',
    dateRange: '',
    search: ''
  }
}

const closeModal = () => {
  showAddBookingModal.value = false
  editingBooking.value = null
  newBooking.value = {
    clientName: '',
    email: '',
    phone: '',
    sessionType: '',
    sessionDate: '',
    amount: '',
    status: 'pending'
  }
}

const addBooking = () => {
  const booking = {
    id: Date.now(),
    ...newBooking.value,
    createdAt: new Date()
  }
  bookings.value.unshift(booking)
  closeModal()
}

const editBooking = (booking) => {
  editingBooking.value = booking
  newBooking.value = { ...booking }
  showAddBookingModal.value = true
}

const updateBooking = () => {
  const index = bookings.value.findIndex(b => b.id === editingBooking.value.id)
  if (index !== -1) {
    bookings.value[index] = { ...editingBooking.value, ...newBooking.value }
  }
  closeModal()
}

const updateStatus = (id, status) => {
  const booking = bookings.value.find(b => b.id === id)
  if (booking) {
    booking.status = status
  }
}

const viewBooking = (booking) => {
  // Implement view booking details
  console.log('Viewing booking:', booking)
}

const deleteBooking = (id) => {
  if (confirm('Are you sure you want to delete this booking?')) {
    bookings.value = bookings.value.filter(b => b.id !== id)
  }
}

const exportBookings = () => {
  // Implement export functionality
  console.log('Exporting bookings...')
}

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const getStatusClass = (status) => {
  const classes = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getSessionTypeClass = (type) => {
  const classes = {
    wedding: 'bg-pink-100 text-pink-800',
    portrait: 'bg-purple-100 text-purple-800',
    event: 'bg-indigo-100 text-indigo-800',
    commercial: 'bg-orange-100 text-orange-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}
</script>
