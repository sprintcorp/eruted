<template>
  <footer class="bg-white text-slate-900 hidden md:block">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Uncle Eruted Photography</h3>
          </div>
          <p class="text-slate-700 mb-6 max-w-md">
            Professional photography and videography services that transform your special moments into timeless memories. 
            Capturing life's beautiful moments with creativity and passion.
          </p>
          <div class="flex space-x-4">
            <a href="https://twitter.com/uncle_eruted" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-slate-900 transition-colors duration-300" title="Follow @uncle_eruted on Twitter">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com/uncleeruted_photography" target="_blank" rel="noopener noreferrer" class="text-slate-600 hover:text-slate-900 transition-colors duration-300" title="Follow @uncleeruted_photography on Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-slate-900">Services</h4>
          <ul class="space-y-3">
            <li><a href="/services" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Wedding Photography</a></li>
            <li><a href="/services" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Portrait Sessions</a></li>
            <li><a href="/services" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Event Coverage</a></li>
            <li><a href="/services" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Commercial Photography</a></li>
            <li><a href="/services" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Videography</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-slate-900">Contact Info</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-5 h-5 mt-1 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p class="text-slate-900 text-sm">Phone</p>
                <a href="tel:+2348070953724" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">+234 807 095 3724</a>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-5 h-5 mt-1 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-slate-900 text-sm">Email</p>
                <a href="mailto:Okuneyetewo@gmail.com" class="text-slate-900 hover:text-slate-700 transition-colors duration-300">Okuneyetewo@gmail.com</a>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-5 h-5 mt-1 text-slate-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-slate-900 text-sm">Studio Address</p>
                <p class="text-slate-900 text-sm">8, Elder Adedokun Close, Ashi, Bodija, Ibadan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
              <div class="border-t border-slate-300 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-slate-900 text-sm">
            © 2024 Uncle Eruted Photography. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" class="text-slate-900 hover:text-slate-700 transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="/terms" class="text-slate-900 hover:text-slate-700 transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="/contact" class="text-slate-900 hover:text-slate-700 transition-colors duration-300 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
/* Additional custom styles can be added here if needed */

/* Ensure footer is completely hidden on mobile */
@media (max-width: 767px) {
  footer {
    display: none !important;
  }
}
</style>
