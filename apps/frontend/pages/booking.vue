<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-primary-900 to-primary-800">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 class="text-5xl lg:text-6xl font-bold text-white">
            Book Your <span class="text-gradient">Session</span>
          </h1>
          <p class="text-xl lg:text-2xl text-white/80 leading-relaxed">
            Ready to create beautiful memories? Let's plan your perfect photography session. 
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-float"></div>
        <div class="absolute top-40 right-20 w-16 h-16 bg-accent-400/30 rounded-full animate-float-delayed"></div>
        <div class="absolute bottom-20 left-20 w-12 h-12 bg-accent-600/25 rounded-full animate-float-slow"></div>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="py-20 bg-primary-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Form -->
            <div class="lg:col-span-2">
              <div class="modern-card p-8">
                <h2 class="text-3xl font-bold text-white mb-8">Session Details</h2>
                
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Personal Information -->
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

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="phone" class="block text-white font-medium mb-2">Phone Number *</label>
                      <input
                        v-model="form.phone"
                        type="tel"
                        id="phone"
                        required
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label for="eventDate" class="block text-white font-medium mb-2">Event Date *</label>
                      <input
                        v-model="form.eventDate"
                        type="date"
                        id="eventDate"
                        required
                        :min="minDate"
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <!-- Session Details -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="eventType" class="block text-white font-medium mb-2">Session Type *</label>
                      <select
                        v-model="form.eventType"
                        id="eventType"
                        required
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select session type</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="event">Event Photography</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="commercial">Commercial Photography</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label for="location" class="block text-white font-medium mb-2">Location</label>
                      <input
                        v-model="form.location"
                        type="text"
                        id="location"
                        class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
                        placeholder="Where will the session take place?"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="budget" class="block text-white font-medium mb-2">Budget Range</label>
                    <select
                      v-model="form.budget"
                      id="budget"
                      class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="over-5000">Over $5,000</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-white font-medium mb-2">Tell Us About Your Vision *</label>
                    <textarea
                      v-model="form.message"
                      id="message"
                      rows="6"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your vision, special requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-6">
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
                        Sending Request...
                      </span>
                      <span v-else>Send Booking Request</span>
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
                        Thank you! Your booking request has been sent successfully. We'll get back to you within 24 hours.
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

            <!-- Sidebar -->
            <div class="space-y-8">
              <!-- What to Expect -->
              <div class="modern-card p-6">
                <h3 class="text-xl font-bold text-white mb-4">What to Expect</h3>
                <ul class="space-y-3 text-white/80 text-sm">
                  <li class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Response within 24 hours</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom quote based on your needs</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <div class="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional consultation</span>
                  </li>
                </ul>
              </div>

              <!-- Session Types -->
              <div class="modern-card p-6">
                <h3 class="text-xl font-bold text-white mb-4">Session Types</h3>
                <div class="space-y-3">
                  <div v-for="session in sessionTypes" :key="session.type" class="flex items-center justify-between">
                    <span class="text-white/80 text-sm">{{ session.name }}</span>
                    <span class="text-accent-400 text-sm font-medium">{{ session.duration }}</span>
                  </div>
                </div>
              </div>

              <!-- Contact Info -->
              <div class="modern-card p-6">
                <h3 class="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div class="space-y-3 text-sm">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <span class="text-white/70">Okuneyetewo@gmail.com</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <span class="text-white/70">+234 807 095 3724</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-primary-800">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked <span class="text-gradient">Questions</span>
            </h2>
            <p class="text-xl text-white/70 max-w-3xl mx-auto">
              Got questions about our photography services? Here are some common ones to help you get started.
            </p>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="faq.id"
              class="modern-card p-6 animate-fade-in"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <button
                @click="toggleFaq(faq.id)"
                class="w-full flex items-center justify-between text-left"
              >
                <h3 class="text-lg font-semibold text-white">{{ faq.question }}</h3>
                <svg 
                  class="w-5 h-5 text-accent-400 transition-transform duration-300"
                  :class="{ 'rotate-180': openFaqs.includes(faq.id) }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="openFaqs.includes(faq.id)" class="mt-4 pt-4 border-t border-accent-500/20">
                  <p class="text-white/70 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  location: '',
  budget: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')
const openFaqs = ref([1]) // First FAQ open by default

// Computed properties
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// Session types
const sessionTypes = [
  { type: 'portrait', name: 'Portrait Session', duration: '1-2 hours' },
  { type: 'event', name: 'Event Coverage', duration: '2-8 hours' },
  { type: 'wedding', name: 'Wedding Photography', duration: '8-12 hours' },
  { type: 'commercial', name: 'Commercial Shoot', duration: '4-8 hours' }
]

// FAQ data
const faqs = [
  {
    id: 1,
    question: 'How far in advance should I book my session?',
    answer: 'We recommend booking at least 2-4 weeks in advance for portrait sessions and 6-12 months for weddings and major events to ensure availability.'
  },
  {
    id: 2,
    question: 'What should I wear for my photo session?',
    answer: 'We\'ll provide a detailed style guide based on your session type. Generally, solid colors work well, and we recommend avoiding busy patterns or logos.'
  },
  {
    id: 3,
    question: 'How long does it take to receive my photos?',
    answer: 'Portrait sessions typically take 1-2 weeks, events take 2-3 weeks, and weddings take 4-6 weeks. We\'ll provide a specific timeline when you book.'
  },
  {
    id: 4,
    question: 'Do you travel for sessions?',
    answer: 'Yes! We\'re happy to travel for sessions. Travel fees may apply for locations outside our standard service area, which we\'ll discuss during consultation.'
  },
  {
    id: 5,
    question: 'What if the weather is bad on my session date?',
    answer: 'For outdoor sessions, we\'ll reschedule if the weather is unfavorable. We want to ensure you get the best possible results from your session.'
  }
]

// Methods
const toggleFaq = (id) => {
  const index = openFaqs.value.indexOf(id)
  if (index > -1) {
    openFaqs.value.splice(index, 1)
  } else {
    openFaqs.value.push(id)
  }
}

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.eventDate || !form.value.eventType || !form.value.message) {
    error.value = 'Please fill in all required fields.'
    return
  }

  isSubmitting.value = true
  error.value = ''
  isSuccess.value = false

  try {
    // TODO: Implement API call to backend
    // await $fetch('/api/bookings', {
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
      eventDate: '',
      eventType: '',
      location: '',
      budget: '',
      message: ''
    }
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (err) {
    error.value = 'Failed to send booking request. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
