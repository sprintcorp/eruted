<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Main app component - layout is handled by layouts/default.vue
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
