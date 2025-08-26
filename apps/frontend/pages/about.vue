<template>
  <div class="about-page">
    <!-- Hero Section - Enhanced Layout -->
    <section class="hero-section">
      <!-- Photography Equipment Background -->
      <div class="equipment-bg">
        <div class="equipment-motif motif-1"></div>
        <div class="equipment-motif motif-2"></div>
        <div class="equipment-motif motif-3"></div>
        <div class="equipment-motif motif-4"></div>
        <div class="equipment-motif motif-5"></div>
        <div class="equipment-motif motif-6"></div>
      </div>

      <div class="hero-content">
        <div class="hero-grid">
          <!-- Left Column -->
          <div class="hero-left animate-fade-in">
            <div class="hero-text">
              <h1 class="hero-title">
                <span class="title-line">About</span>
                <span class="title-line highlight">Uncle Eruted</span>
              </h1>
              <p class="hero-description">
                Professional photographer with over 5 years of experience capturing life's most precious moments.
              </p>
            </div>
          </div>

          <!-- Right Column - Wider Image -->
          <div class="hero-right animate-slide-up">
            <div class="hero-image-container">
              <div class="photography-frame-wide">
                <img 
                  src="https://res.cloudinary.com/sprintcorp/image/upload/v1756135410/eruted/eruted_uzwmuq.jpg"
                  alt="Uncle Eruted - Professional Photographer"
                  class="hero-image-wide"
                />
                <div class="frame-overlay">
                  <div class="pro-badge">
                    <div class="badge-icon">⭐</div>
                    <span class="badge-text">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section - Paper Background -->
    <section class="section story-section bg-slate-50">
      <div class="container">
        <div class="story-content">
          <div class="story-text animate-fade-in">
            <h2 class="section-title text-slate-900">My Story</h2>
            <p class="story-description text-slate-800">
              Photography has been my passion since childhood. I started with a simple point-and-shoot camera, 
              capturing everyday moments that others might overlook. Over the years, I've developed a unique 
              perspective that combines technical expertise with artistic vision.
            </p>
            <p class="story-subtext text-slate-700">
              Every photograph tells a story, and I believe in capturing not just images, but emotions, 
              connections, and the essence of the moment. Whether it's a wedding, a portrait session, 
              or a corporate event, my goal is to create images that will be treasured for generations.
            </p>
          </div>

          <div class="story-image animate-slide-up">
            <div class="svg-animation-container">
              <!-- Animated Photography SVG -->
              <svg class="photography-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <!-- Camera Body -->
                <rect class="camera-body" x="150" y="100" width="100" height="80" rx="15" fill="#1E293B" stroke="#475569" stroke-width="2"/>
                
                <!-- Camera Lens -->
                <circle class="camera-lens" cx="200" cy="140" r="25" fill="#0F172A" stroke="#64748B" stroke-width="3"/>
                <circle class="lens-inner" cx="200" cy="140" r="18" fill="#1E40AF"/>
                <circle class="lens-aperture" cx="200" cy="140" r="12" fill="#3B82F6"/>
                
                <!-- Viewfinder -->
                <rect class="viewfinder" x="220" y="110" width="15" height="12" rx="3" fill="#F59E0B"/>
                
                <!-- Flash -->
                <rect class="flash" x="130" y="90" width="20" height="15" rx="5" fill="#EF4444"/>
                
                <!-- Shutter Button -->
                <circle class="shutter-btn" cx="200" cy="70" r="8" fill="#374151"/>
                
                <!-- Light Rays -->
                <g class="light-rays">
                  <line class="ray ray-1" x1="50" y1="50" x2="80" y2="80" stroke="#FBBF24" stroke-width="3" opacity="0.8"/>
                  <line class="ray ray-2" x1="60" y1="40" x2="90" y2="70" stroke="#F59E0B" stroke-width="2" opacity="0.6"/>
                  <line class="ray ray-3" x1="70" y1="30" x2="100" y2="60" stroke="#F97316" stroke-width="2" opacity="0.4"/>
                </g>
                
                <!-- Floating Particles -->
                <circle class="particle particle-1" cx="80" cy="120" r="2" fill="#60A5FA"/>
                <circle class="particle particle-2" cx="320" cy="80" r="1.5" fill="#34D399"/>
                <circle class="particle particle-3" cx="90" cy="200" r="1" fill="#A78BFA"/>
                <circle class="particle particle-4" cx="310" cy="220" r="1.5" fill="#F472B6"/>
                
                <!-- Photography Icons -->
                <g class="photo-icons">
                  <circle class="icon-bg icon-1" cx="80" cy="60" r="20" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2"/>
                  <text class="icon-text" x="80" y="65" text-anchor="middle" fill="#374151" font-size="12">📸</text>
                  
                  <circle class="icon-bg icon-2" cx="320" cy="60" r="20" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2"/>
                  <text class="icon-text" x="320" y="65" text-anchor="middle" fill="#374151" font-size="12">💡</text>
                  
                  <circle class="icon-bg icon-3" cx="80" cy="240" r="20" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2"/>
                  <text class="icon-text" x="80" y="245" text-anchor="middle" fill="#374151" font-size="12">🎯</text>
                  
                  <circle class="icon-bg icon-4" cx="320" cy="240" r="20" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2"/>
                  <text class="icon-text" x="320" y="245" text-anchor="middle" fill="#374151" font-size="12">⚡</text>
                </g>
              </svg>
              
              <!-- Animation Overlay Text -->
              <div class="svg-overlay">
                <div class="svg-badge">
                  <div class="svg-icon">🎬</div>
                  <span class="svg-text">Live Animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section - Paper-100 Background -->
    <section class="section values-section bg-white">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title text-slate-900">My Values</h2>
          <p class="section-subtitle text-slate-700">The principles that guide my photography and business</p>
        </div>

        <div class="values-grid">
          <div class="value-card animate-slide-up" style="animation-delay: 0.1s;">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">Excellence</h3>
            <p class="value-description">
              Every shot is crafted with attention to detail, ensuring the highest quality in every image.
            </p>
          </div>

          <div class="value-card animate-slide-up" style="animation-delay: 0.2s;">
            <div class="value-icon">💝</div>
            <h3 class="value-title">Authenticity</h3>
            <p class="value-description">
              I capture real moments and genuine emotions, creating authentic memories that reflect the truth.
            </p>
          </div>

          <div class="value-card animate-slide-up" style="animation-delay: 0.3s;">
            <div class="value-icon">🚀</div>
            <h3 class="value-title">Innovation</h3>
            <p class="value-description">
              Constantly exploring new techniques and creative approaches to deliver unique perspectives.
            </p>
          </div>

          <div class="value-card animate-slide-up" style="animation-delay: 0.4s;">
            <div class="value-icon">🤝</div>
            <h3 class="value-title">Partnership</h3>
            <p class="value-description">
              Working closely with clients to understand their vision and bring it to life through photography.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section - Deep Background -->
    <section class="section experience-section bg-slate-900 text-white">
      <div class="container">
        <div class="experience-content">
          <div class="experience-text animate-fade-in">
            <h2 class="section-title">Experience & Expertise</h2>
            <p class="experience-description">
              With over 5 years in professional photography, I've had the privilege of working with 
              diverse clients and capturing countless special moments across various photography genres.
            </p>
            
            <div class="expertise-list">
              <div class="expertise-item">
                <div class="expertise-icon">📸</div>
                <div class="expertise-text">Portrait Photography</div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">💒</div>
                <div class="expertise-text">Wedding Photography</div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">🎥</div>
                <div class="expertise-text">Event Videography</div>
              </div>
              <div class="expertise-item">
                <div class="expertise-icon">🏢</div>
                <div class="expertise-text">Corporate Events</div>
              </div>
            </div>
          </div>

          <div class="experience-stats animate-slide-up">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">500+</div>
                <div class="stat-text">Happy Clients</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">1000+</div>
                <div class="stat-text">Photos Captured</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">50+</div>
                <div class="stat-text">Events Covered</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">5+</div>
                <div class="stat-text">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Section - Paper Background -->
    <section class="section equipment-section bg-slate-50">
      <div class="container">
        <div class="section-header animate-fade-in">
          <h2 class="section-title text-slate-900">Professional Equipment</h2>
          <p class="section-subtitle text-slate-700">State-of-the-art gear for exceptional results</p>
        </div>

        <div class="equipment-grid">
          <div class="equipment-card animate-scale-in" style="animation-delay: 0.1s;">
            <div class="equipment-icon">📷</div>
            <h3 class="equipment-title">Cameras</h3>
            <p class="equipment-description">
              Professional DSLR and mirrorless cameras with high-resolution sensors for stunning image quality.
            </p>
          </div>

          <div class="equipment-card animate-scale-in" style="animation-delay: 0.2s;">
            <div class="equipment-icon">🔍</div>
            <h3 class="equipment-title">Lenses</h3>
            <p class="equipment-description">
              Premium prime and zoom lenses covering wide-angle to telephoto for versatile shooting.
            </p>
          </div>

          <div class="equipment-card animate-scale-in" style="animation-delay: 0.3s;">
            <div class="equipment-icon">💡</div>
            <h3 class="equipment-title">Lighting</h3>
            <p class="equipment-description">
              Professional lighting equipment including strobes, continuous lights, and modifiers.
            </p>
          </div>

          <div class="equipment-card animate-scale-in" style="animation-delay: 0.4s;">
            <div class="equipment-icon">🎥</div>
            <h3 class="equipment-title">Video Gear</h3>
            <p class="equipment-description">
              High-quality video cameras, stabilizers, and audio equipment for professional videography.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - Ink Background -->
    <section class="section cta-section bg-slate-800 text-white">
      <div class="container">
        <div class="cta-content animate-fade-in">
          <div class="cta-icon">🌟</div>
          <h2 class="cta-title">Ready to Work Together?</h2>
          <p class="cta-description">
            Let's discuss your photography needs and create something beautiful together. 
            I'm here to bring your vision to life.
          </p>
          <div class="cta-buttons">
            <button class="btn-primary">Book Consultation</button>
            <button class="btn-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Navigation -->
    <MobileNav />
  </div>
</template>

<script setup>
import MobileNav from '~/components/MobileNav.vue'
</script>

<style scoped>
/* About Page - Fixed Design System */
.about-page {
  background: white;
  color: #0F172A;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section - Modern Compact Layout */
.hero-section {
  position: relative;
  min-height: 60vh;
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 1.5rem 2rem;
  margin-top: 80px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(100, 116, 139, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(148, 163, 184, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.equipment-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.equipment-motif {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: #64748B;
  animation: organicFlow 20s ease-in-out infinite;
}

.motif-1 {
  width: 300px;
  height: 300px;
  top: 5%;
  left: -150px;
  animation-delay: 0s;
}

.motif-2 {
  width: 200px;
  height: 200px;
  top: 20%;
  right: -100px;
  animation-delay: 5s;
}

.motif-3 {
  width: 150px;
  height: 150px;
  bottom: 15%;
  left: 5%;
  animation-delay: 10s;
}

.motif-4 {
  width: 180px;
  height: 180px;
  bottom: 25%;
  right: 10%;
  animation-delay: 15s;
}

.motif-5 {
  width: 120px;
  height: 120px;
  top: 60%;
  left: 15%;
  animation-delay: 8s;
}

.motif-6 {
  width: 100px;
  height: 100px;
  top: 40%;
  right: 20%;
  animation-delay: 12s;
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-left {
  text-align: left;
}

.hero-text {
  margin-bottom: 1.5rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.title-line {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  color: #0F172A;
}

.title-line.highlight {
  background: linear-gradient(135deg, #0F172A, #1E293B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  max-width: 32rem;
}

.hero-right {
  display: flex;
  justify-content: center;
}

.hero-image-container {
  position: relative;
}

.photography-frame {
  position: relative;
  width: 100%;
  max-width: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(10, 15, 28, 0.15);
}

.photography-frame-wide {
  position: relative;
  width: 100%;
  max-width: 40rem;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(10, 15, 28, 0.15);
  transition: all 0.3s ease;
}

.photography-frame-wide:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 80px rgba(10, 15, 28, 0.2);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hero-image-wide {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 500px;
  max-height: 550px;
}

.frame-overlay {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.pro-badge {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 36, 61, 0.3);
  border-radius: 2rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0F172A;
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.1);
}

.badge-icon {
  font-size: 1rem;
}

/* SVG Animation Container */
.svg-animation-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(10, 15, 28, 0.15);
  overflow: hidden;
}

.photography-svg {
  width: 100%;
  height: 100%;
}

/* SVG Animation Elements */
.camera-body {
  animation: cameraFloat 3s ease-in-out infinite;
}

.camera-lens {
  animation: lensRotate 4s linear infinite;
}

.lens-inner {
  animation: lensPulse 2s ease-in-out infinite;
}

.lens-aperture {
  animation: apertureBlink 1.5s ease-in-out infinite;
}

.viewfinder {
  animation: viewfinderGlow 2s ease-in-out infinite;
}

.flash {
  animation: flashBlink 3s ease-in-out infinite;
}

.shutter-btn {
  animation: shutterPress 2.5s ease-in-out infinite;
}

/* Light Rays Animation */
.ray-1 {
  animation: rayMove1 4s ease-in-out infinite;
}

.ray-2 {
  animation: rayMove2 4s ease-in-out infinite;
  animation-delay: 1s;
}

.ray-3 {
  animation: rayMove3 4s ease-in-out infinite;
  animation-delay: 2s;
}

/* Floating Particles */
.particle-1 {
  animation: particleFloat1 6s ease-in-out infinite;
}

.particle-2 {
  animation: particleFloat2 8s ease-in-out infinite;
  animation-delay: 1s;
}

.particle-3 {
  animation: particleFloat3 7s ease-in-out infinite;
  animation-delay: 2s;
}

.particle-4 {
  animation: particleFloat4 9s ease-in-out infinite;
  animation-delay: 3s;
}

/* Icon Animations */
.icon-1 {
  animation: iconBounce 3s ease-in-out infinite;
}

.icon-2 {
  animation: iconBounce 3s ease-in-out infinite;
  animation-delay: 0.5s;
}

.icon-3 {
  animation: iconBounce 3s ease-in-out infinite;
  animation-delay: 1s;
}

.icon-4 {
  animation: iconBounce 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

/* SVG Overlay */
.svg-overlay {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.svg-badge {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.2);
}

.svg-icon {
  font-size: 1rem;
}

.svg-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Section Styles */
.section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #0F172A;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #475569;
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto;
}

/* Story Section - Modern Compact */
.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.story-text {
  text-align: left;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(226, 232, 240, 0.5);
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
}

.story-description, .story-subtext {
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.story-image {
  display: flex;
  justify-content: center;
}

.story-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(10, 15, 28, 0.06);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
  border-color: #CBD5E1;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0 0 1rem 0;
}

.value-description {
  color: #475569;
  line-height: 1.6;
}

/* Experience Section */
.experience-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.experience-text {
  text-align: left;
}

.experience-description {
  font-size: 1.125rem;
  color: #E2E8F0;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.expertise-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
}

.expertise-icon {
  font-size: 2rem;
  color: white;
}

.expertise-text {
  color: #E2E8F0;
  font-weight: 600;
  font-size: 1rem;
}

.experience-stats {
  display: flex;
  justify-content: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 0.5rem;
}

.stat-text {
  color: #E2E8F0;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Equipment Section */
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.equipment-card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(10, 15, 28, 0.06);
}

.equipment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
  border-color: #CBD5E1;
}

.equipment-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.equipment-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0 0 1rem 0;
}

.equipment-description {
  color: #475569;
  line-height: 1.6;
}

/* CTA Section */
.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
}

.cta-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 3.5rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: white;
  color: #0F172A;
  box-shadow: 0 8px 32px rgba(10, 15, 28, 0.08);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(10, 15, 28, 0.15);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Animation keyframes */
@keyframes organicFlow {
  0%, 100% { 
    transform: translateX(0) translateY(0) rotate(0deg) scale(1); 
  }
  25% { 
    transform: translateX(10px) translateY(-5px) rotate(2deg) scale(1.02); 
  }
  50% { 
    transform: translateX(-5px) translateY(10px) rotate(-1deg) scale(0.98); 
  }
  75% { 
    transform: translateX(15px) translateY(5px) rotate(3deg) scale(1.01); 
  }
}

/* SVG Animation Keyframes */
@keyframes cameraFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes lensRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes lensPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes apertureBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes viewfinderGlow {
  0%, 100% { filter: drop-shadow(0 0 5px #F59E0B); }
  50% { filter: drop-shadow(0 0 15px #F59E0B); }
}

@keyframes flashBlink {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@keyframes shutterPress {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.9); }
}

@keyframes rayMove1 {
  0%, 100% { transform: translateX(0) translateY(0); opacity: 0.8; }
  50% { transform: translateX(10px) translateY(-10px); opacity: 1; }
}

@keyframes rayMove2 {
  0%, 100% { transform: translateX(0) translateY(0); opacity: 0.6; }
  50% { transform: translateX(8px) translateY(-8px); opacity: 0.9; }
}

@keyframes rayMove3 {
  0%, 100% { transform: translateX(0) translateY(0); opacity: 0.4; }
  50% { transform: translateX(6px) translateY(-6px); opacity: 0.7; }
}

@keyframes particleFloat1 {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(-5px) translateX(10px); }
  75% { transform: translateY(-15px) translateX(5px); }
}

@keyframes particleFloat2 {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-8px) translateX(-5px); }
  50% { transform: translateY(-12px) translateX(-10px); }
  75% { transform: translateY(-6px) translateX(-5px); }
}

@keyframes particleFloat3 {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-6px) translateX(8px); }
  50% { transform: translateY(-10px) translateX(15px); }
  75% { transform: translateY(-4px) translateX(8px); }
}

@keyframes particleFloat4 {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-12px) translateX(-8px); }
  50% { transform: translateY(-8px) translateX(-15px); }
  75% { transform: translateY(-14px) translateX(-8px); }
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-left {
    text-align: center;
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .experience-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .expertise-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
    min-height: 60vh;
  }
  
  .title-line {
    font-size: 2.5rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .equipment-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* Touch-friendly interactions */
@media (hover: none) and (pointer: coarse) {
  .value-card:hover,
  .equipment-card:hover {
    transform: none;
  }
  
  .btn-primary:hover,
  .btn-secondary:hover {
    transform: none;
  }
}
</style>
