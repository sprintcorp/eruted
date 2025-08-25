<template>
  <div class="photo-navigation">
    <!-- Desktop Camera Navigation (hidden on mobile) -->
    <div class="hidden md:block desktop-nav">
      <!-- Camera Icon Trigger -->
      <div
        class="camera-trigger"
        @click="toggleNavigation"
        :class="{ 'active': isNavigationOpen }"
      >
        <div class="camera-body">
          <div class="camera-lens">
            <div class="lens-ring outer"></div>
            <div class="lens-ring middle"></div>
            <div class="lens-ring inner"></div>
            <div class="lens-aperture" :class="{ 'open': isNavigationOpen }"></div>
          </div>
          <div class="camera-top">
            <div class="flash"></div>
            <div class="viewfinder"></div>
          </div>
          <div class="camera-grip"></div>
        </div>

        <!-- Click indicator -->
        <div class="click-hint" v-if="!isNavigationOpen">
          <span>Click to navigate</span>
        </div>
      </div>

      <!-- Single Photography Navigation Menu -->
      <Transition name="photo-nav">
        <div v-if="isNavigationOpen" class="photo-nav-menu">
          <div class="nav-header">
            <div class="brand-logo">
              <div class="camera-icon">📷</div>
              <div class="brand-text">
                <div class="brand-name">Uncle Eruted</div>
                <div class="brand-subtitle">Photography</div>
              </div>
            </div>
            <div class="close-btn" @click="toggleNavigation">×</div>
          </div>
          
          <div class="nav-content">
            <div class="nav-items">
              <div
                v-for="item in navigationItems"
                :key="item.path"
                class="nav-item"
                :class="{ 'active': currentPath === item.path }"
                @click="navigateTo(item.path)"
              >
                <div class="item-icon">{{ getItemIcon(item.path) }}</div>
                <div class="item-label">{{ item.label }}</div>
              </div>
            </div>
            
            <div class="nav-actions">
              <button class="btn-primary" @click="navigateTo('/booking')">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile Bottom Navigation Bar (LinkedIn Style) -->
    <div class="md:hidden mobile-bottom-nav">
      <div class="nav-container">
        <div
          v-for="item in navigationItems"
          :key="item.path"
          class="nav-item"
          :class="{ 'active': currentPath === item.path }"
          @click="navigateTo(item.path)"
        >
          <div class="nav-icon">
            <!-- Home Icon -->
            <svg v-if="item.path === '/'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              <path v-else d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            
            <!-- Gallery Icon -->
            <svg v-else-if="item.path === '/gallery'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"/>
              <path v-else d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            
            <!-- Services Icon -->
            <svg v-else-if="item.path === '/services'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path v-if="currentPath === item.path" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path v-else d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" fill="none" stroke="currentColor" stroke-width="2"/>
              <path v-if="currentPath === item.path" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path v-else d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            
            <!-- About Icon -->
            <svg v-else-if="item.path === '/about'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              <path v-else d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            
            <!-- Booking Icon -->
            <svg v-else-if="item.path === '/booking'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              <path v-else d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
              <!-- Notification Badge -->
              <div v-if="hasNewBookings" class="notification-badge">
                <span>1</span>
              </div>
            </svg>
            
            <!-- Contact Icon -->
            <svg v-else-if="item.path === '/contact'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"/>
              <path v-else d="M3 8l7.89 4.26a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
          </div>
          <div class="nav-label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)
const isNavigationOpen = ref(false)
const hasNewBookings = ref(true) // Example: you can make this dynamic

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/booking', label: 'Book' },
  { path: '/contact', label: 'Contact' }
]

const getItemIcon = (path: string) => {
  const icons: Record<string, string> = {
    '/': '🏠',
    '/gallery': '📸',
    '/services': '⚙️',
    '/about': '👤',
    '/booking': '📅',
    '/contact': '📧'
  }
  return icons[path] || '🔗'
}

const toggleNavigation = () => {
  isNavigationOpen.value = !isNavigationOpen.value
}

const navigateTo = (path: string) => {
  router.push(path)
  // Keep navigation open for a moment to show the transition
  setTimeout(() => {
    isNavigationOpen.value = false
  }, 500)
}

// Close navigation when route changes
watch(currentPath, () => {
  if (isNavigationOpen.value) {
    setTimeout(() => {
      isNavigationOpen.value = false
    }, 300)
  }
})
</script>

<style scoped>
.photo-navigation {
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  z-index: 1000;
}

/* Desktop Navigation */
.desktop-nav {
  position: relative;
}

.camera-trigger {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.camera-trigger:hover {
  transform: scale(1.05);
}

.camera-trigger.active {
  transform: scale(1.1);
}

.camera-body {
  width: 80px;
  height: 60px;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border-radius: 15px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 2px solid #0ea5e9;
}

.camera-lens {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(145deg, #0f172a, #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0ea5e9;
}

.lens-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid #0ea5e9;
}

.lens-ring.outer {
  width: 36px;
  height: 36px;
}

.lens-ring.middle {
  width: 28px;
  height: 28px;
}

.lens-ring.inner {
  width: 20px;
  height: 20px;
}

.lens-aperture {
  width: 12px;
  height: 12px;
  background: #0ea5e9;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.lens-aperture.open {
  background: #fbbf24;
  box-shadow: 0 0 20px #fbbf24;
}

.camera-top {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 8px;
  background: #0f172a;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
}

.flash {
  width: 12px;
  height: 6px;
  background: #fbbf24;
  border-radius: 2px;
}

.viewfinder {
  width: 16px;
  height: 6px;
  background: #0ea5e9;
  border-radius: 2px;
}

.camera-grip {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 8px;
  background: #0f172a;
  border-radius: 4px;
}

.click-hint {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0.8;
}

/* Desktop Navigation Menu */
.photo-nav-menu {
  position: absolute;
  top: 0;
  right: 100px;
  width: 300px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid #0ea5e9;
  backdrop-filter: blur(20px);
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.camera-icon {
  font-size: 24px;
  filter: drop-shadow(0 0 10px #fbbf24);
}

.brand-text {
  color: white;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.brand-subtitle {
  font-size: 12px;
  color: #0ea5e9;
  font-weight: 500;
}

.close-btn {
  width: 32px;
  height: 32px;
  background: #0ea5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #0284c7;
  transform: scale(1.1);
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.nav-item:hover {
  background: rgba(15, 23, 42, 0.8);
  border-color: #0ea5e9;
  transform: translateY(-2px);
}

.nav-item.active {
  background: rgba(14, 165, 233, 0.2);
  border-color: #0ea5e9;
}

.item-icon {
  font-size: 24px;
  filter: drop-shadow(0 0 8px #0ea5e9);
}

.item-label {
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

.nav-actions {
  display: flex;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(14, 165, 233, 0.4);
}

/* Mobile Bottom Navigation - LinkedIn Style */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0 4px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
}

.nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

.nav-item.active {
  background: transparent;
}

.nav-icon {
  position: relative;
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
}

.icon.filled {
  color: #0a66c2;
}

.icon:not(.filled) {
  color: #666666;
}

.nav-item.active .icon {
  color: #0a66c2;
}

.nav-label {
  font-size: 11px;
  font-weight: 400;
  color: #666666;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-align: center;
  line-height: 1.2;
}

.nav-item.active .nav-label {
  color: #0a66c2;
  font-weight: 500;
}

.nav-item:hover .nav-label {
  color: #0a66c2;
}

.notification-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #d11124;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Transitions */
.photo-nav-enter-active,
.photo-nav-leave-active {
  transition: all 0.3s ease;
}

.photo-nav-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.9);
}

.photo-nav-leave-to {
  opacity: 0;
  transform: translateX(20px) scale(0.9);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-bottom-nav {
    display: block;
  }
}

/* Force mobile navigation to show on mobile devices */
@media (max-width: 768px) {
  .mobile-bottom-nav {
    display: block !important;
  }
}
</style>
