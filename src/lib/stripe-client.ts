import { loadStripe, Stripe } from '@stripe/stripe-js'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if (!publishableKey) {
  throw new Error('Stripe publishable key is not set in environment variables')
}

let stripePromise: Promise<Stripe | null> | null = null

const getStripe = () => {
  if (!stripePromise) {
    console.log('🔑 Initializing Stripe...')
    stripePromise = loadStripe(publishableKey)
      .then(stripe => {
        if (stripe) {
          console.log('✅ Stripe SDK loaded successfully')
          return stripe
        }
        console.error('❌ Stripe SDK failed to initialize')
        return null
      })
      .catch(error => {
        console.error('❌ Error loading Stripe:', error.message)
        return null
      })
  }
  return stripePromise
}

// Only export the promise
export const stripeInstance = getStripe()

// Add a way to verify the instance is working
stripeInstance.then(stripe => {
  if (stripe) {
    console.log('💳 Stripe is ready to accept payments')
  }
}) 