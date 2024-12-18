import { loadStripe, Stripe } from '@stripe/stripe-js'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if (!publishableKey) {
  throw new Error('Stripe publishable key is not set in environment variables')
}

let stripePromise: Promise<Stripe | null> | null = null

const getStripe = () => {
  if (!stripePromise) {
    console.log('🔑 Initializing Stripe with key:', publishableKey.substring(0, 10) + '...')
    stripePromise = loadStripe(publishableKey).then(stripe => {
      if (stripe) {
        console.log('✅ Stripe loaded successfully')
      } else {
        console.error('❌ Failed to load Stripe')
      }
      return stripe
    }).catch(error => {
      console.error('❌ Error loading Stripe:', error)
      return null
    })
  }
  return stripePromise
}

export const stripeInstance = getStripe() 