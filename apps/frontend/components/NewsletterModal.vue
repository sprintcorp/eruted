<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="closeModal"
      ></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-md glass-effect rounded-2xl p-8 border border-accent-500/20">
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 w-8 h-8 bg-accent-500/20 hover:bg-accent-500/40 rounded-full flex items-center justify-center transition-colors"
        >
          <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Camera Icon -->
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center animate-pulse-glow">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-white mb-2">Stay in the Frame!</h3>
          <p class="text-white/70 text-sm leading-relaxed">
            Subscribe to our newsletter for exclusive photography tips, special offers, and behind-the-scenes content from Uncle Eruted Photography.
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input
              v-model="form.email"
              type="email"
              placeholder="Enter your email address"
              required
              class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name (optional)"
              class="w-full px-4 py-3 bg-white/10 border border-accent-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div class="flex items-center space-x-2">
            <input
              v-model="form.marketingConsent"
              type="checkbox"
              id="marketing-consent"
              class="w-4 h-4 text-accent-400 bg-white/10 border-accent-500/30 rounded focus:ring-accent-400 focus:ring-2"
            />
            <label for="marketing-consent" class="text-white/70 text-sm">
              I agree to receive marketing communications
            </label>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </span>
            <span v-else>Subscribe Now</span>
          </button>
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
          <div v-if="isSuccess" class="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-green-400 text-sm font-medium">
                Successfully subscribed! Welcome to the Uncle Eruted Photography family.
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
          <div v-if="error" class="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
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
  </Transition>
</template>

<script setup lang="ts">
interface NewsletterForm {
  email: string
  name: string
  marketingConsent: boolean
}

const props = defineProps<{
  isVisible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const form = ref<NewsletterForm>({
  email: '',
  name: '',
  marketingConsent: false
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')

const closeModal = () => {
  emit('close')
  resetForm()
}

const resetForm = () => {
  form.value = {
    email: '',
    name: '',
    marketingConsent: false
  }
  isSuccess.value = false
  error.value = ''
}

const handleSubmit = async () => {
  if (!form.value.email) return

  isSubmitting.value = true
  error.value = ''

  try {
    // TODO: Implement API call to backend
    // await $fetch('/api/newsletter/subscribe', {
    //   method: 'POST',
    //   body: form.value
    // })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    isSuccess.value = true
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      closeModal()
    }, 3000)
    
  } catch (err) {
    error.value = 'Failed to subscribe. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
