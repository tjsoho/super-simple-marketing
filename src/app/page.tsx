import React from 'react';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ParallaxSection from '@/components/ui/ParallaxSection';
import Hero1Experiment from '@/components/sections/Hero1Experiment';
import Section2Value from '@/components/sections/Section2Value';
import Section3Trust from '@/components/sections/Section3Trust';
import Section4Explanation from '@/components/sections/Section4Explanation';
import Section5Benefits from '@/components/sections/Section5Benefits';
import Section6Testimonials from '@/components/sections/Section6Testimonials';
import Section7CTA from '@/components/sections/Section7CTA';

/******************************************************************************
                            COMPONENT
******************************************************************************/
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main 
        className="min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, white, #4EA292, #E1CEA6, #E5E8E1)'
        }}
      >
        <div className="relative z-10">
          <Hero1Experiment />
          <ParallaxSection>
            <Section2Value />
          </ParallaxSection>
          <ParallaxSection offset={100}>
            <Section3Trust />
          </ParallaxSection>
          <ParallaxSection offset={150}>
            <Section4Explanation />
          </ParallaxSection>
          <ParallaxSection>
            <Section5Benefits />
          </ParallaxSection>
          <ParallaxSection offset={75}>
            <Section6Testimonials />
          </ParallaxSection>
          <ParallaxSection>
            <Section7CTA />
          </ParallaxSection>
        </div>
      </main>
    </>
  );
}
