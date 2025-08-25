<template>
  <div class="min-h-screen bg-primary-1000 text-white">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Newsletter Modal -->
    <NewsletterModal />
    
    <!-- Creative Photo Navigation -->
    <PhotoNavigation />
  </div>
</template>

<script setup>
// Main app component
useHead({
  title: 'Uncle Eruted Photography - Professional Photographer',
  meta: [
    {
      name: 'description',
      content: 'Professional photography services for weddings, portraits, events, and more. Uncle Eruted Photography captures life\'s beautiful moments with artistic vision and technical expertise.'
    }
  ]
})
</script>

<style>
/* Global styles are handled in main.css */
</style>
