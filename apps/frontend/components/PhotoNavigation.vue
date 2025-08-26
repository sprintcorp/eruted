<template>
  <div class="photo-navigation">
    <!-- Desktop Navigation (simple top nav, non-sticky) -->
    <div class="hidden md:block desktop-nav">
      <nav class="top-nav">
        <div class="nav-container">
          <div class="nav-logo">
            <div class="camera-logo">
              <div class="lens-aperture"></div>
              <div class="camera-body"></div>
            </div>
            <span class="brand-text">Uncle Eruted</span>
          </div>
          
          <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="/gallery" class="nav-link">Gallery</a>
            <a href="/services" class="nav-link">Services</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/contact" class="nav-link">Contact</a>
          </div>
          
          <button class="cta-button">
            Book Session
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Navigation (LinkedIn-style bottom nav) -->
    <div class="md:hidden mobile-nav">
      <!-- Bottom Navigation Bar -->
      <div class="mobile-nav-bar">
        <div class="nav-container">
          <div
            v-for="item in navigationItems"
            :key="item.path"
            class="nav-item"
            :class="{ 'active': currentPath === item.path }"
            @click="navigateTo(item.path)"
          >
            <div class="nav-icon-wrapper">
              <component :is="item.icon" class="nav-icon" />
              <div class="nav-label">{{ item.label }}</div>
            </div>
            
            <!-- Active Indicator -->
            <div class="active-indicator" v-if="currentPath === item.path"></div>
          </div>
          

        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { 
  Home, 
  Image, 
  Settings, 
  User, 
  Mail
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)

const navigationItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/services', label: 'Services', icon: Settings },
  { path: '/about', label: 'About', icon: User },
  { path: '/contact', label: 'Contact', icon: Mail }
]



const navigateTo = (path: string) => {
  router.push(path)
}


</script>

<style scoped>
/* Photo Navigation - Strict Color System */
.photo-navigation {
  position: relative;
  z-index: 1000;
}

/* Desktop Navigation */
.desktop-nav {
  position: relative;
  background: var(--paper);
  border-bottom: 1px solid var(--border-color);
}

.top-nav {
  padding: 1rem 2rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.camera-logo {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
}

.lens-aperture {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid var(--deep);
  border-radius: 50%;
  opacity: 0.8;
}

.camera-body {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 6px;
  background: var(--ink);
  border-radius: 3px;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ink);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--ink);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--deep);
}

.cta-button {
  background: var(--ink);
  color: var(--paper);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: var(--deep);
  transform: translateY(-1px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.mobile-nav-bar {
  background: var(--paper);
  border-top: 1px solid var(--border-color);
  box-shadow: var(--soft);
  padding: 0.5rem 0 1.5rem 0;
  position: relative;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 4rem;
  user-select: none;
}

.nav-item:hover {
  transform: translateY(-2px);
}

.nav-item.active {
  background: var(--deep);
  color: var(--paper);
}

.nav-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
}

.nav-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.3s ease;
}

.nav-item:not(.active) .nav-icon {
  color: var(--ink);
}

.nav-item.active .nav-icon {
  color: var(--paper);
}

.nav-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink);
  text-align: center;
  line-height: 1.2;
  transition: all 0.3s ease;
}

.nav-item.active .nav-label {
  color: var(--paper);
  font-weight: 600;
}

.active-indicator {
  position: absolute;
  top: -0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.25rem;
  height: 0.25rem;
  background: var(--deep);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(1.2);
  }
}



/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-nav {
    display: block;
  }
}

/* Safe area for devices with home indicators */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .mobile-nav-bar {
    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));
  }
  
  .drawer-content {
    padding-bottom: calc(6rem + env(safe-area-inset-bottom));
  }
}
</style>
