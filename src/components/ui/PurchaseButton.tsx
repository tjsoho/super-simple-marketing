import { useState } from 'react'
import { PaymentModal } from './PaymentModal'

interface PurchaseButtonProps {
  courseId: string;
  price: number;
}

export function PurchaseButton({ courseId, price }: PurchaseButtonProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePurchase = async () => {
    if (!email) {
      setError('Please enter your email')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address')
      }
      
      setIsModalOpen(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setIsLoading(false)
  }

  return (
    <>
      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded"
          disabled={isLoading}
          aria-label="Email address"
        />
        {error && (
          <p className="text-red-500 text-sm" role="alert">{error}</p>
        )}
        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          aria-busy={isLoading}
          type="button"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            `Purchase for $${price}`
          )}
        </button>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        courseId={courseId}
        email={email}
        price={price}
      />
    </>
  )
}