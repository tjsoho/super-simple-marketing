"use client";
import { useState, useEffect } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Dialog } from "@headlessui/react";
import { stripeInstance } from "@/lib/stripe-client";
import Image from "next/image";
// import { source } from 'framer-motion/client'

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  price: number;
}

interface CourseDetails {
  title: string;
  price: number;
}

export function PaymentModal({
  isOpen,
  onClose,
  courseId,
  price,
}: PaymentModalProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>("");
  const [error, setError] = useState<string | null>(null);
  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(
    null
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  useEffect(() => {
    console.group("💫 Payment Modal Lifecycle");
    console.log("Modal State:", { isOpen, courseId, email, price });

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error("❌ Missing Stripe publishable key");
      setError("Configuration error");
      return;
    }
    if (isOpen && email && validateEmail(email)) {
      console.group("🚀 Payment Intent Creation");
      console.log("Request Payload:", {
        courseId,
        email,
        amount: price * 100,
        currency: "aud",
        source: "EXTERNAL",
      });
      fetch(
        "https://www.savvybusinesshub.com/api/external/payment/create-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            courseId,
            email,
            amount: price * 100,
            currency: "aud",
            source: "EXTERNAL",
          }),
        }
      )
        .then(async (res) => {
          console.log("📥 Response Headers:", {
            contentType: res.headers.get("content-type"),
            cors: res.headers.get("access-control-allow-origin"),
          });
          const data = await res.json();
          console.log("📥 Response Data:", data);

          if (!res.ok) {
            throw new Error(data.message || "Failed to create payment intent");
          }
          return data;
        })
        .then((data) => {
          console.log(
            "✅ Client Secret:",
            data.clientSecret ? "Received" : "Missing"
          );
          setClientSecret(data.clientSecret);
          if (data.course) {
            setCourseDetails(data.course);
          }
        })
        .catch((error: Error) => {
          console.error("❌ Error:", error);
          setError(error.message);
        })
        .finally(() => {
          console.groupEnd(); // End Payment Intent Creation group
        });
    }

    return () => {
      console.groupEnd(); // End Payment Modal Lifecycle group
    };
  }, [isOpen, courseId, email, price]);

  const handleClose = () => {
    setError(null);
    onClose();
    setClientSecret(null);
  };

  const handleCloseOnCross = () => {
    onClose();
    setClientSecret(null);
  };

  if (error) {
    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50 ">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded bg-white p-6 w-full">
            <div className="text-red-600 font-medium">Error: {error}</div>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-dark-teal text-white rounded hover:bg-teal-700 transition-colors"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseOnCross}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 " aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-5xl w-full rounded bg-white max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-dark-teal to-teal-700 text-white">
            <Dialog.Title className="text-2xl font-poppins font-bold">
              Complete Your Purchase
            </Dialog.Title>
            <button
              onClick={handleCloseOnCross}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Make this div scrollable */}
          <div className="flex-1 overflow-auto">
            {/* Two Column Layout */}
            <div className="flex flex-col md:flex-row">
              {/* Left Column - Order Summary */}
              <div className="w-full md:w-2/5 p-6 bg-gray-50">
                <div className="md:sticky md:top-6">
                  <h3 className="text-lg font-karla font-bold text-gray-800 mb-6 uppercase tracking-wide">
                    Order Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-karla font-bold text-gray-700 mb-2 text-[20px] uppercase tracking-wider">
                        Masterclass Details
                      </h4>
                      <p className="font-poppins text-dark-teal font-bold text-lg italic">
                        {courseDetails?.title || "Save Time & Make Money"}
                      </p>
                      <p className="text-2xl font-poppins  text-dark-teal mt-2">
                        ${price.toFixed(2)}{" "}
                        <span className="text-base font-normal text-gray-600">
                          AUD
                        </span>
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-karla font-bold text-gray-700 mb-2 text-sm uppercase tracking-wider">
                        Your Details
                      </h4>
                      <p className="text-gray-800 font-medium text-[16px]">
                        Email: <span className="text-dark-teal">{email}</span>
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-karla font-bold text-gray-700 mb-2 text-sm uppercase tracking-wider">
                        Secure Payment
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        🔒 Your payment is secured by Stripe, a trusted payment
                        provider used by millions of businesses worldwide.
                      </p>
                      <div className="flex items-center justify-start space-x-2 pt-2 border-t border-gray-100">
                        <span className="text-gray-500 text-sm">
                          Powered by
                        </span>
                        <Image
                          src="/images/stripe-logo.png"
                          alt="Stripe"
                          width={60}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Payment Form */}
              <div className="w-full md:w-3/5 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                {/* Email Input Section */}
                {!clientSecret && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-karla font-bold text-gray-800 mb-4 text-lg">
                      Enter Your Email
                    </h4>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(null);
                      }}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 
                                placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                focus:ring-dark-teal focus:border-transparent"
                      aria-label="Email address"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2 font-medium">
                        {emailError}
                      </p>
                    )}
                  </div>
                )}

                {/* Payment Form Section */}
                {!email || emailError ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600 font-medium">
                      Please enter your email to continue
                    </p>
                  </div>
                ) : clientSecret ? (
                  <Elements
                    stripe={stripeInstance}
                    options={{
                      clientSecret,
                      appearance: {
                        theme: "stripe",
                        variables: {
                          colorPrimary: "#115e59",
                          colorBackground: "#ffffff",
                          colorText: "#374151",
                          borderRadius: "8px",
                          fontFamily: "Inter, system-ui, sans-serif",
                        },
                      },
                      loader: "auto",
                    }}
                  >
                    <CheckoutForm
                      onSuccess={onClose}
                      courseId={courseId}
                      email={email}
                      price={price}
                    />
                  </Elements>
                ) : (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-dark-teal mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">
                      Loading payment form...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

type PaymentElementChangeEvent = {
  complete: boolean;
  empty: boolean;
  error?: {
    message: string;
    type: string;
  };
};

function CheckoutForm({
  onSuccess,
  courseId,
  email,
  price,
}: {
  onSuccess: () => void;
  courseId: string;
  email: string;
  price: number;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    console.group("💳 CheckoutForm Mount");
    console.log("Dependencies:", {
      stripe: stripe ? "Loaded" : "Missing",
      elements: elements ? "Loaded" : "Missing",
    });
    console.groupEnd();
  }, [stripe, elements]);

  const handlePaymentElementReady = () => {
    console.log("✅ PaymentElement is ready");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message ?? "Payment failed");
        setProcessing(false);
        return;
      }

      const { error: paymentError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: email,
              email: email,
            },
          },
          return_url: `${window.location.origin}/thank-you?courseId=${courseId}&email=${email}`,
        },
      });

      if (paymentError) {
        setError(paymentError.message ?? "Payment failed");
      } else {
        onSuccess();
      }
    } catch (error: unknown) {
      console.error("❌ Unexpected error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-bold text-dark-teal mb-6">Payment Details</h3>

      <div className="min-h-[300px] bg-gray-50 p-4 rounded-md">
        <PaymentElement
          options={{
            layout: "tabs",
            fields: {
              billingDetails: {
                email: "auto",
              },
            },
          }}
          onReady={handlePaymentElementReady}
          onChange={(event: PaymentElementChangeEvent) => {
            console.log("💳 PaymentElement change:", event);
          }}
        />
      </div>

      {error && (
        <div className="text-red-600 font-medium bg-red-50 p-4 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-dark-teal text-white py-4 px-6 rounded-lg font-bold
                 hover:bg-teal-700 transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed
                 text-lg"
      >
        {processing ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          `Pay $${price.toFixed(2)} AUD`
        )}
      </button>
    </form>
  );
}
