<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-primary-900 to-primary-800">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 class="text-5xl lg:text-6xl font-bold text-white">
            Get in <span class="text-gradient">Touch</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 leading-relaxed">
            Have a question or want to discuss your photography needs? We'd love to hear from you. 
            Reach out and let's start creating beautiful memories together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                <p class="text-white/70 leading-relaxed">
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
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
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
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
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
                      class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
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
                      class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
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
                      class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your photography needs, ask questions, or share your vision..."
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                <p class="text-white/70 leading-relaxed">
                  Here are the different ways you can reach us. We're always happy to help with any questions about our photography services.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-6">
                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <p class="text-white/70 mb-2">Send us a detailed message anytime</p>
                      <a href="mailto:Okuneyetewo@gmail.com" class="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                        Okuneyetewo@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <p class="text-white/70 mb-2">Speak with us directly</p>
                      <a href="tel:+2348070953724" class="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                        +234 807 095 3724
                      </a>
                    </div>
                  </div>
                </div>

                <div class="modern-card p-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p class="text-white/70 mb-2">Schedule an in-person consultation</p>
                      <p class="text-white/70">
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
                <div class="space-y-2 text-white/70">
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
                <p class="text-accent-400 text-sm mt-4">
                  * Evening and weekend sessions available by appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
              Find Our <span class="text-gradient">Studio</span>
            </h2>
            <p class="text-xl text-white/70 max-w-3xl mx-auto">
              Located in the heart of the creative district, our studio is easily accessible and provides the perfect environment for your photography sessions.
            </p>
          </div>

          <div class="modern-card p-8">
            <!-- Google Maps Container -->
            <div class="relative">
              <div id="map" class="w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center">
                <div class="text-center text-white">
                  <svg class="w-24 h-24 text-accent-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <h3 class="text-2xl font-bold mb-2">Studio Location</h3>
                  <p class="text-white/70 mb-4">8, Elder Adedokun Close, Ashi, Bodija, Ibadan</p>
                  <a 
                    href="https://maps.google.com/?q=8+Elder+Adedokun+Close+Ashi+Bodija+Ibadan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

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
