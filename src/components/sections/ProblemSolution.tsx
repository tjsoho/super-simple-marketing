"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 lg:py-32  backdrop-blur-sm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand/20 via-transparent to-dark-teal/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dark-teal/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="inline-block text-dark-teal text-sm font-bold tracking-wider uppercase mb-4 
                         bg-dark-teal/10 px-4 py-1 rounded-full"
            >
              THE PROBLEM (with a SOLUTION)
            </h2>

            <h3 className="text-3xl lg:text-5xl font-bold text-dark-teal mb-8">
              Feeling Lost in the Marketing Maze?
            </h3>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-dark-teal/80 mb-8 leading-relaxed">
                Feeling overwhelmed by{" "}
                <span className="font-semibold text-dark-teal">
                  endless content creation
                </span>
                , wasting precious hours on marketing that doesn&apos;t shift
                the needle? Most business owners avoid multi-platform
                marketing—it&apos;s simply{" "}
                <span className="font-semibold text-dark-teal">
                  TOO time-consuming
                </span>
                . Instead their marketing is based on guesswork and a hope-based
                strategy.
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-dark-teal/20 to-transparent my-8" />

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="relative w-64 h-64 mx-auto">
                    <Image
                      src="/images/strategy.jpg"
                      alt="A simpler way to market your business"
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                      style={{ objectPosition: "center 50%" }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-teal/10 to-transparent" />
                  </div>
                </div>
                <p className="lg:w-1/2 text-xl lg:text-2xl text-dark-teal font-medium italic leading-relaxed text-left">
                  But what if there&apos;s a simpler, incredibly effective
                  method?{" "}
                  <span className="block mt-2 text-dark-teal/90">
                    A strategy you can master in 20 minutes and start using
                    today, freeing up hours each week?
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center relative"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-teal/5 to-transparent -z-10" />

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-8">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <h3 className="text-3xl lg:text-4xl font-bold text-dark-teal mb-8 inline-block text-left">
                    Introducing the{" "}
                    <span className="relative">
                      Content Waterfall Method
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-dark-teal/40 to-dark-teal/0" />
                    </span>
                  </h3>

                  <p className="text-lg lg:text-xl text-dark-teal/80 leading-relaxed text-left">
                    Learn the proven strategy used by major brands—a method that{" "}
                    <span className="font-semibold text-dark-teal">
                      repurposes ONE piece of high-quality content
                    </span>{" "}
                    across all your platforms.{" "}
                    <span className="block mt-4 font-medium">
                      Consistent messaging, boosted brand visibility, and time
                      back in your pocket for what you love.
                    </span>
                  </p>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="relative w-72 h-72 mx-auto">
                    <Image
                      src="/images/dance.jpg"
                      alt="Content Waterfall Method"
                      fill
                      className="object-cover rounded-2xl shadow-lg"
                      style={{ objectPosition: "center 50%" }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-teal/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
