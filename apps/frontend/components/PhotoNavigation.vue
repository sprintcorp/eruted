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
          
          <!-- Hamburger Menu Trigger -->
          <div class="nav-item menu-trigger" @click="toggleMenu">
            <div class="nav-icon-wrapper">
              <Menu class="nav-icon" />
              <div class="nav-label">Menu</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full-Screen Glassmorphism Drawer -->
      <Transition name="drawer">
        <div v-if="isMenuOpen" class="menu-drawer" @click="closeMenu">
          <div class="drawer-content" @click.stop>
            <!-- Blueprint Grid Background -->
            <div class="blueprint-grid"></div>
            
            <!-- Drawer Header -->
            <div class="drawer-header">
              <div class="drawer-logo">
                <div class="camera-logo-large">
                  <div class="lens-aperture-large"></div>
                  <div class="camera-body-large"></div>
                </div>
                <div class="brand-info">
                  <h2 class="brand-name">Uncle Eruted</h2>
                  <p class="brand-subtitle">Professional Photography</p>
                </div>
              </div>
              <button class="close-button" @click="closeMenu">
                <X class="w-6 h-6" />
              </button>
            </div>

            <!-- Navigation Menu -->
            <nav class="drawer-nav">
              <div class="nav-section">
                <h3 class="section-title">Main Navigation</h3>
                <div class="nav-links-grid">
                  <a 
                    v-for="item in navigationItems" 
                    :key="item.path"
                    :href="item.path"
                    class="drawer-nav-link"
                    :class="{ 'active': currentPath === item.path }"
                    @click="navigateToAndClose(item.path)"
                  >
                    <component :is="item.icon" class="link-icon" />
                    <span class="link-text">{{ item.label }}</span>
                  </a>
                </div>
              </div>

              <div class="nav-section">
                <h3 class="section-title">Quick Actions</h3>
                <div class="quick-actions">
                  <button class="action-button primary">
                    <Calendar class="w-5 h-5" />
                    <span>Book Session</span>
                  </button>
                  <button class="action-button secondary">
                    <Phone class="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                </div>
              </div>

              <div class="nav-section">
                <h3 class="section-title">Contact Info</h3>
                <div class="contact-info">
                  <div class="contact-item">
                    <Phone class="w-5 h-5" />
                    <span>+234 807 095 3724</span>
                  </div>
                  <div class="contact-item">
                    <Mail class="w-5 h-5" />
                    <span>Okuneyetewo@gmail.com</span>
                  </div>
                  <div class="contact-item">
                    <MapPin class="w-5 h-5" />
                    <span>8, Elder Adedokun Close, Ashi, Bodija, Ibadan</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Transition>

      <!-- Backdrop -->
      <Transition name="backdrop">
        <div v-if="isMenuOpen" class="drawer-backdrop" @click="closeMenu"></div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, watch, defineComponent, h, onMounted, onUnmounted } from 'vue'
import { 
  Home, 
  Image, 
  Settings, 
  User, 
  Mail, 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MapPin 
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)
const isMenuOpen = ref(false)

const navigationItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/gallery', label: 'Gallery', icon: Image },
  { path: '/services', label: 'Services', icon: Settings },
  { path: '/about', label: 'About', icon: User },
  { path: '/contact', label: 'Contact', icon: Mail }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'unset'
}

const navigateTo = (path: string) => {
  router.push(path)
}

const navigateToAndClose = (path: string) => {
  router.push(path)
  closeMenu()
}

// Close menu when route changes
watch(currentPath, () => {
  if (isMenuOpen.value) {
    closeMenu()
  }
})

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      closeMenu()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
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

/* Menu Drawer */
.menu-drawer {
  position: fixed;
  inset: 0;
  z-index: 1001;
  display: flex;
  align-items: flex-end;
}

.drawer-content {
  background: var(--paper);
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  padding: 2rem 1.5rem 6rem 1.5rem;
}

.blueprint-grid {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, var(--ink) 1px, transparent 1px),
    linear-gradient(0deg, var(--ink) 1px, transparent 1px);
  background-size: 2rem 2rem;
  opacity: 0.03;
  pointer-events: none;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.drawer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.camera-logo-large {
  position: relative;
  width: 4rem;
  height: 4rem;
}

.lens-aperture-large {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 3px solid var(--deep);
  border-radius: 50%;
  opacity: 0.8;
}

.camera-body-large {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 8px;
  background: var(--ink);
  border-radius: 4px;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--ink);
  margin: 0;
}

.brand-subtitle {
  font-size: 0.875rem;
  color: var(--deep);
  margin: 0;
  font-weight: 500;
}

.close-button {
  background: var(--ink);
  color: var(--paper);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-button:hover {
  background: var(--deep);
  transform: scale(1.1);
}

/* Drawer Navigation */
.drawer-nav {
  position: relative;
  z-index: 1;
}

.nav-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-links-grid {
  display: grid;
  gap: 0.75rem;
}

.drawer-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(16, 36, 61, 0.02);
  border: 1px solid rgba(16, 36, 61, 0.08);
  border-radius: 0.75rem;
  text-decoration: none;
  color: var(--ink);
  transition: all 0.2s ease;
}

.drawer-nav-link:hover {
  background: rgba(16, 36, 61, 0.04);
  border-color: rgba(16, 36, 61, 0.12);
  transform: translateX(4px);
}

.drawer-nav-link.active {
  background: var(--deep);
  color: var(--paper);
  border-color: var(--deep);
}

.link-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.link-text {
  font-weight: 500;
}

/* Quick Actions */
.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button.primary {
  background: var(--ink);
  color: var(--paper);
}

.action-button.primary:hover {
  background: var(--deep);
  transform: translateY(-1px);
}

.action-button.secondary {
  background: rgba(16, 36, 61, 0.02);
  color: var(--ink);
  border: 1px solid rgba(16, 36, 61, 0.08);
}

.action-button.secondary:hover {
  background: rgba(16, 36, 61, 0.04);
  transform: translateY(-1px);
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(16, 36, 61, 0.02);
  border-radius: 0.5rem;
  color: var(--ink);
}

.contact-item span {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Backdrop */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 28, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

/* Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.drawer-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
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
