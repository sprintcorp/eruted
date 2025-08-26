<template>
  <div class="contact-page">
    <!-- Enhanced Hero Section with Photography Theme -->
    <section class="hero-section relative py-24 overflow-hidden">
      <!-- Background Photography Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"></div>
      
      <!-- Floating Photography Motifs -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="floating-motif motif-1">
          <div class="camera-icon">📷</div>
        </div>
        <div class="floating-motif motif-2">
          <div class="lens-icon">🔍</div>
        </div>
        <div class="floating-motif motif-3">
          <div class="light-icon">💡</div>
        </div>
        <div class="floating-motif motif-4">
          <div class="star-icon">⭐</div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <!-- Enhanced Title with Photography Elements -->
          <div class="title-container">
            <h1 class="text-5xl lg:text-7xl font-bold text-slate-900 mb-4">
              Get in <span class="text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text">Touch</span>
            </h1>
            
            <!-- Photography Equipment Visual -->
            <div class="equipment-visual mt-6">
              <div class="camera-setup">
                <div class="camera-body">
                  <div class="lens-aperture"></div>
                  <div class="viewfinder"></div>
                  <div class="flash"></div>
                </div>
                <div class="light-rays">
                  <div class="ray ray-1"></div>
                  <div class="ray ray-2"></div>
                  <div class="ray ray-3"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Description -->
          <div class="description-container">
            <p class="text-xl lg:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Have a question or want to discuss your photography needs? We'd love to hear from you. 
              <span class="font-semibold text-slate-800">Reach out and let's start creating beautiful memories together.</span>
            </p>
            
            <!-- Contact Quick Actions -->
            <div class="quick-actions mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:Okuneyetewo@gmail.com" class="quick-action-btn email-btn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Us
              </a>
              <a href="tel:+2348070953724" class="quick-action-btn phone-btn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                <p class="text-slate-200 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We typically respond within 24 hours.
                </p>
              </div>

              <div class="modern-card p-8">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        v-model="form.name"
                        type="text"
                        id="name"
                        required
                        class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label for="email" class="block text-white font-medium mb-2">Email Address *</label>
                      <input
                        v-model="form.email"
                        type="email"
                        id="email"
                        required
                        class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="phone" class="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      id="phone"
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>

                  <div>
                    <label for="subject" class="block text-white font-medium mb-2">Subject *</label>
                    <input
                      v-model="form.subject"
                      type="text"
                      id="subject"
                      required
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label for="message" class="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      v-model="form.message"
                      id="message"
                      rows="6"
                      required
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your photography needs, ask questions, or share your vision..."
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <span v-if="isSubmitting" class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                      <span v-else>Send Message</span>
                    </button>
                  </div>
                </form>

                <!-- Success Message -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-300 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <div v-if="isSuccess" class="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-green-400 text-sm font-medium">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </span>
                    </div>
                  </div>
                </Transition>

                <!-- Error Message -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-300 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <div v-if="error" class="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <div class="flex items-center space-x-2">
                      <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-red-400 text-sm font-medium">
                        {{ error }}
                      </span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold text-white mb-4">Contact Information</h2>
                <p class="text-slate-200 leading-relaxed">
                  Here are the different ways you can reach us. We're always happy to help with any questions about our photography services.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-6">
                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p class="text-slate-200 mb-2">Send us a detailed message anytime</p>
                      <a href="mailto:Okuneyetewo@gmail.com" class="text-slate-300 hover:text-slate-200 font-medium transition-colors">
                        Okuneyetewo@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <p class="text-slate-200 mb-2">Speak with us directly</p>
                      <a href="tel:+2348070953724" class="text-slate-300 hover:text-slate-200 font-medium transition-colors">
                        +234 807 095 3724
                      </a>
                    </div>
                  </div>
                </div>

                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p class="text-slate-200 mb-2">Schedule an in-person consultation</p>
                      <p class="text-slate-200">
                        8, Elder Adedokun Close<br>
                        Ashi, Bodija<br>
                        Ibadan, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="modern-card p-6">
                <h3 class="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div class="space-y-2 text-slate-200">
                  <div class="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment Only</span>
                  </div>
                </div>
                <p class="text-slate-300 text-sm mt-4">
                  * Evening and weekend sessions available by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-slate-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
              Find Our <span class="text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text">Studio</span>
            </h2>
            <p class="text-xl text-slate-200 max-w-3xl mx-auto">
              Located in the heart of the creative district, our studio is easily accessible and provides the perfect environment for your photography sessions.
            </p>
          </div>

          <div class="modern-card p-8">
            <!-- Google Maps Container -->
            <div class="relative">
                          <div id="map" class="w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-slate-600/20 to-slate-700/20 flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-24 h-24 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <h3 class="text-2xl font-bold mb-2">Studio Location</h3>
                <p class="text-slate-200 mb-4">8, Elder Adedokun Close, Ashi, Bodija, Ibadan</p>
                <a 
                  href="https://maps.google.com/?q=8+Elder+Adedokun+Close+Ashi+Bodija+Ibadan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M4 14h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Navigation -->
    <MobileNav />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MobileNav from '~/components/MobileNav.vue'

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')

// Methods
const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) {
    error.value = 'Please fill in all required fields.'
    return
  }

  isSubmitting.value = true
  error.value = ''
  isSuccess.value = false

  try {
    // TODO: Implement API call to backend
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form.value
    // })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSuccess.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (err) {
    error.value = 'Failed to send message. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Contact Page Styles */
.contact-page {
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Enhanced Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%);
}

/* Floating Photography Motifs */
.floating-motif {
  position: absolute;
  animation: float 6s ease-in-out infinite;
}

.motif-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.motif-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.motif-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.motif-4 {
  top: 30%;
  right: 25%;
  animation-delay: 1s;
}

.floating-motif .camera-icon,
.floating-motif .lens-icon,
.floating-motif .light-icon,
.floating-motif .star-icon {
  font-size: 2rem;
  opacity: 0.1;
  filter: blur(1px);
}

/* Equipment Visual */
.equipment-visual {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.camera-setup {
  position: relative;
  width: 120px;
  height: 80px;
}

.camera-body {
  width: 100px;
  height: 60px;
  background: linear-gradient(135deg, #1E293B, #334155);
  border-radius: 12px;
  position: relative;
  box-shadow: 0 8px 32px rgba(30, 41, 59, 0.3);
}

.lens-aperture {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0F172A, #1E40AF);
  border-radius: 50%;
  border: 3px solid #475569;
}

.viewfinder {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 8px;
  background: #F59E0B;
  border-radius: 4px;
  box-shadow: 0 0 8px #F59E0B;
}

.flash {
  position: absolute;
  top: -8px;
  left: 8px;
  width: 16px;
  height: 12px;
  background: #EF4444;
  border-radius: 6px;
}

.light-rays {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.ray {
  width: 2px;
  height: 20px;
  background: linear-gradient(to top, #FBBF24, transparent);
  margin: 0 auto 4px;
  animation: rayGlow 2s ease-in-out infinite;
}

.ray-1 { animation-delay: 0s; }
.ray-2 { animation-delay: 0.5s; }
.ray-3 { animation-delay: 1s; }

/* Quick Action Buttons */
.quick-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.quick-action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.email-btn {
  background: linear-gradient(135deg, #475569, #334155);
  color: white;
}

.phone-btn {
  background: linear-gradient(135deg, #1E293B, #0F172A);
  color: white;
}

.quick-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Modern Card */
.modern-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes rayGlow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .title-container h1 {
    font-size: 3rem;
  }
  
  .quick-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .quick-action-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}
</style>
