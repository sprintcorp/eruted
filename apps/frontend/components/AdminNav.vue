<template>
  <nav class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/admin" class="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Dashboard
          </NuxtLink>
          <NuxtLink to="/admin/gallery" class="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Gallery
          </NuxtLink>
          <NuxtLink to="/admin/bookings" class="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Bookings
          </NuxtLink>
        </div>
        
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Welcome, Admin</span>
          <button @click="logout" class="text-sm text-red-600 hover:text-red-800 font-medium">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const logout = () => {
  if (process.client) {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_remember')
  }
  navigateTo('/admin/login')
}
</script>
