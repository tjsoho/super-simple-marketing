'use client';
/******************************************************************************
                            IMPORTS
******************************************************************************/
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/******************************************************************************
                            INTERFACES
******************************************************************************/
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  company: string;
}

/******************************************************************************
                            COMPONENT
******************************************************************************/
const Section6Testimonials: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const testimonials: Testimonial[] = [
    {
      quote: "This strategy completely transformed how I approach content creation. I'm saving hours every week while reaching more people than ever.",
      author: "Jane Doe",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      company: "Creative Studio Co."
    },
    {
      quote: "The ROI on this has been incredible. My engagement has tripled, and I'm spending less time on social media than ever before.",
      author: "John Smith",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      company: "Tech Innovations"
    },
    {
      quote: "Finally, a marketing strategy that actually works for busy creators. This has given me back my weekends!",
      author: "Sarah Johnson",
      role: "Digital Creator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      company: "Digital Lifestyle"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" />
      
      <motion.div 
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-white uppercase mb-24 text-center">
          What Others Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/20 backdrop-blur-sm pt-12 pb-8 px-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative mt-10"
            >
              {/* Profile Image */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-dark-teal">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Author Info */}
              <div className="text-center mb-6">
                <p className="font-bold text-dark-teal text-lg">{testimonial.author}</p>
                <p className="text-teal-900 font-semibold text-sm">{testimonial.role}</p>
                <p className="text-black/70 text-sm">{testimonial.company}</p>
              </div>
              
              {/* Testimonial Content */}
              <p className="text-white font-medium text-center text-lg leading-relaxed">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Section6Testimonials; 