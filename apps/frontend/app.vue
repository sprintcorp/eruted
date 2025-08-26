<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow pt-0">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Newsletter Modal -->
    <NewsletterModal />
    

  </div>
</template>

<script setup>
// Import components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import NewsletterModal from '~/components/NewsletterModal.vue'


// Main app component
useHead({
  title: 'Uncle Eruted Photography - Professional Photographer',
  meta: [
    {
      name: 'description',
      content: 'Professional photography services for weddings, portraits, events, and more. Uncle Eruted Photography captures life\'s beautiful moments with artistic vision and technical expertise.'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      charset: 'utf-8'
    }
  ]
})
</script>

<style>
/* Global styles are handled in main.css */

/* Hide any hamburger menu icons on mobile */
@media (max-width: 768px) {
  /* Hide any elements that might look like hamburger menus */
  [class*="menu"], [class*="hamburger"], [class*="bars"] {
    display: none !important;
  }
  
  /* Hide any three-line icons */
  .hamburger, .menu-icon, .bars {
    display: none !important;
  }
}
</style>
