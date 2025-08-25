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
          
          <!-- Horizontal Button Navigation -->
          <div class="horizontal-nav">
            <!-- Navigation Dots Indicator -->
            <div class="nav-dots">
              <div class="dot" v-for="n in 6" :key="n"></div>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="nav-buttons">
              <div 
                v-for="(item, index) in navigationItems" 
                :key="item.path"
                class="nav-button"
                :class="{ 'active': currentPath === item.path }"
                @click="navigateTo(item.path)"
              >
                <div class="button-icon">{{ item.icon }}</div>
                <div class="button-label">{{ item.label }}</div>
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

    <!-- Mobile Bottom Navigation Bar (visible only on mobile) -->
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

/* Mobile Bottom Navigation */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
  max-width: 100%;
  margin: 0 auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  min-width: 60px;
}

.nav-item:hover {
  background-color: #f3f4f6;
}

.nav-item.active {
  color: #1e40af;
}

.nav-icon {
  position: relative;
  font-size: 24px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-label {
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  color: #374151;
}

.nav-item.active .nav-label {
  color: #1e40af;
  font-weight: 600;
}

/* Notification Badge */
.notification-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Desktop Camera Trigger */
.camera-trigger {
  cursor: pointer;
  transition: all 0.3s ease;
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
  display: flex;
  gap: 8px;
}

.flash {
  width: 12px;
  height: 8px;
  background: #fbbf24;
  border-radius: 2px;
}

.viewfinder {
  width: 16px;
  height: 12px;
  background: #374151;
  border-radius: 2px;
}

.camera-grip {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 30px;
  background: #1e40af;
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
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0.8;
}

/* Navigation Elements */
.photo-nav-elements {
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

/* Horizontal Navigation */
.horizontal-nav {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #1e40af;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

/* Navigation Dots */
.nav-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #64748b;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dot:hover {
  background: #3b82f6;
  transform: scale(1.2);
}

/* Navigation Buttons */
.nav-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  background: #1e293b;
  border: 2px solid #475569;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  text-align: center;
}

.nav-button:hover {
  background: #334155;
  border-color: #64748b;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
}

.nav-button.active {
  background: #1e40af;
  border-color: #3b82f6;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

.button-icon {
  font-size: 28px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}

.button-label {
  font-size: 12px;
  font-weight: 600;
  color: white;
  line-height: 1.2;
  white-space: nowrap;
}

/* Close Button */
.close-nav {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  background: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
}

.close-nav:hover {
  background: #dc2626;
  transform: scale(1.1);
}

.close-icon {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* Transitions */
.photo-nav-enter-active,
.photo-nav-leave-active {
  transition: all 0.5s ease;
}

.photo-nav-enter-from {
  opacity: 0;
  transform: translateX(50px) translateY(-50%);
}

.photo-nav-leave-to {
  opacity: 0;
  transform: translateX(50px) translateY(-50%);
}

/* Animations */
@keyframes lens-focus {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

/* Responsive */
@media (max-width: 1200px) {
  .photo-nav-elements {
    right: 120px;
  }
  
  .horizontal-nav {
    padding: 16px;
  }
  
  .nav-buttons {
    gap: 10px;
    max-width: 500px;
  }
  
  .nav-button {
    padding: 14px 16px;
    min-width: 90px;
  }
}

@media (max-width: 768px) {
  .photo-navigation {
    right: 20px;
  }
  
  .photo-nav-elements {
    right: 100px;
  }
  
  .horizontal-nav {
    padding: 12px;
  }
  
  .nav-buttons {
    gap: 8px;
    max-width: 400px;
  }
  
  .nav-button {
    padding: 12px 14px;
    min-width: 80px;
  }
  
  .button-icon {
    font-size: 24px;
  }
  
  .button-label {
    font-size: 11px;
  }
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .nav-container {
    padding: 6px 0;
  }
  
  .nav-item {
    padding: 6px 8px;
    min-width: 50px;
  }
  
  .nav-icon {
    font-size: 20px;
  }
  
  .nav-label {
    font-size: 10px;
  }
  
  .notification-badge {
    width: 16px;
    height: 16px;
    font-size: 9px;
  }
}
</style>
