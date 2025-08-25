<template>
  <div class="photo-navigation">
    <!-- Desktop Camera Navigation (hidden on mobile) -->
    <div class="hidden md:block">
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

      <!-- Photography Navigation Elements -->
      <Transition name="photo-nav">
        <div v-if="isNavigationOpen" class="photo-nav-elements">
          <!-- Film Strip Navigation -->
          <div class="film-strip-nav">
            <div class="film-perforations">
              <div class="perforation" v-for="n in 8" :key="n"></div>
            </div>
            <div class="film-frames">
              <div
                v-for="(item, index) in navigationItems"
                :key="item.path"
                class="film-frame"
                :class="{ 'active': currentPath === item.path }"
                @click="navigateTo(item.path)"
              >
                <div class="frame-content">
                  <div class="frame-icon">{{ item.icon }}</div>
                  <div class="frame-label">{{ item.label }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Close Button -->
          <div class="close-nav" @click="toggleNavigation">
            <div class="close-icon">×</div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile Bottom Navigation Bar (LinkedIn Style) -->
    <div class="md:hidden mobile-bottom-nav">
      <div class="nav-container">
        <div
          v-for="(item, index) in navigationItems"
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
              <path v-if="currentPath === item.path" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              <path v-else d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
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
              <path v-else d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
              <!-- Notification Badge -->
              <div v-if="hasNewBookings" class="notification-badge">
                <span>1</span>
              </div>
            </svg>
            
            <!-- Contact Icon -->
            <svg v-else-if="item.path === '/contact'" class="icon" :class="{ 'filled': currentPath === item.path }" viewBox="0 0 24 24" fill="currentColor">
              <path v-if="currentPath === item.path" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              <path v-else d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" stroke-width="2"/>
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
  max-width: 100%;
  margin: 0 auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  min-width: 60px;
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
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
  text-align: center;
  line-height: 1.2;
  color: #666666;
  transition: all 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.nav-item.active .nav-label {
  color: #0a66c2;
  font-weight: 500;
}

.nav-item:hover .nav-label {
  color: #0a66c2;
}

/* Notification Badge - LinkedIn Style */
.notification-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #d11124;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Desktop Camera Trigger */
.camera-trigger {
  cursor: pointer;
}

.camera-trigger:hover {
  transform: scale(1.1);
}

.camera-trigger.active .camera-lens {
  animation: lens-focus 0.5s ease-in-out;
}

.camera-body {
  position: relative;
  width: 80px;
  height: 60px;
  background: linear-gradient(145deg, #1e3a8a, #1e40af);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 2px solid #3b82f6;
}

.camera-lens {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lens-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #64748b;
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
  width: 16px;
  height: 16px;
  background: #1e293b;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.lens-aperture.open {
  background: #3b82f6;
  box-shadow: 0 0 20px #3b82f6;
}

.camera-top {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 8px;
  background: #1e293b;
  border-radius: 4px;
}

.flash {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 4px;
  background: #fbbf24;
  border-radius: 2px;
}

.viewfinder {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 4px;
  background: #64748b;
  border-radius: 1px;
}

.camera-grip {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 8px;
  height: 20px;
  background: #374151;
  border-radius: 4px;
}

.click-hint {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  animation: fadeInOut 3s ease-in-out infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Photo Navigation Elements */
.photo-nav-elements {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.film-strip-nav {
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 2px solid #475569;
  min-width: 300px;
}

.film-perforations {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.perforation {
  width: 8px;
  height: 8px;
  background: #64748b;
  border-radius: 50%;
}

.film-frames {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.film-frame {
  background: linear-gradient(135deg, #334155, #475569);
  border-radius: 12px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.film-frame:hover {
  transform: translateY(-5px);
  border-color: #818cf8;
  box-shadow: 0 10px 25px rgba(129, 140, 248, 0.3);
}

.film-frame.active {
  border-color: #818cf8;
  background: linear-gradient(135deg, #3730a3, #4338ca);
}

.frame-content {
  text-align: center;
}

.frame-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.frame-label {
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.close-nav {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.close-nav:hover {
  transform: scale(1.1);
  background: #dc2626;
}

.close-icon {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

/* Transitions */
.photo-nav-enter-active,
.photo-nav-leave-active {
  transition: all 0.3s ease;
}

.photo-nav-enter-from,
.photo-nav-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

@keyframes lens-focus {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .photo-navigation {
    display: none;
  }

  .mobile-bottom-nav {
    display: block;
  }
}

@media (min-width: 769px) {
  .mobile-bottom-nav {
    display: none;
  }
}
</style>
