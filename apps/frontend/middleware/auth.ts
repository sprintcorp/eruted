export default defineNuxtRouteMiddleware((to, from) => {
  // Simple authentication check
  // In a real app, you'd check for valid JWT tokens or session
  const isAuthenticated = process.client ? localStorage.getItem('admin_token') : false
  
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return navigateTo('/admin/login')
  }
})
