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
            {{ item.icon }}
            <!-- Notification Badge (example for Book Now) -->
            <div v-if="item.path === '/booking' && hasNewBookings" class="notification-badge">
              <span>1</span>
            </div>
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
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/gallery', label: 'Gallery', icon: '📸' },
  { path: '/services', label: 'Services', icon: '⚙️' },
  { path: '/about', label: 'About', icon: '👨‍💼' },
  { path: '/booking', label: 'Book', icon: '📅' },
  { path: '/contact', label: 'Contact', icon: '📧' }
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
  background: linear-gradient(135deg, #0a0f1c 0%, #1e293b 100%);
  border-top: 1px solid rgba(129, 140, 248, 0.2);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 8px 0;
  max-width: 100%;
  margin: 0 auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  min-width: 60px;
  position: relative;
}

.nav-item:hover {
  background: rgba(129, 140, 248, 0.1);
  transform: translateY(-2px);
}

.nav-item.active {
  background: rgba(129, 140, 248, 0.15);
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.nav-icon {
  position: relative;
  font-size: 24px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-item.active .nav-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 0 8px rgba(129, 140, 248, 0.5));
}

.nav-label {
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  color: #94a3b8;
  transition: all 0.3s ease;
}

.nav-item.active .nav-label {
  color: #818cf8;
  font-weight: 600;
}

.nav-item:hover .nav-label {
  color: #cbd5e1;
}

/* Notification Badge */
.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  border: 2px solid #0a0f1c;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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
