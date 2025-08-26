<template>
  <div class="min-h-screen bg-white text-slate-900">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Newsletter Modal -->
    <NewsletterModal />
  </div>
</template>

<script setup lang="ts">
// Import components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import NewsletterModal from '~/components/NewsletterModal.vue'

useHead({
  title: 'Uncle Eruted Photography - Professional Photographer & Videographer',
  meta: [
    {
      name: 'description',
      content: 'Professional photography and videography services by Uncle Eruted. Specializing in weddings, events, portraits, and commercial photography. Book your session today!'
    },
    {
      name: 'keywords',
      content: 'Professional Photographer, Videographer, Event Photography, Wedding Photographer, Uncle Eruted Photography, Portrait Photography, Commercial Photography'
    }
  ]
})
</script>
