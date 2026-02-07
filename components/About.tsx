import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
                src="https://picsum.photos/600/400?grayscale" 
                alt="Digital Win Team Office" 
                className="rounded-2xl shadow-2xl border border-gray-800"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Trust & Co.</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Elevate Your Brand Today
            </p>
            <p className="mt-4 text-lg text-gray-400">
              At Digital Win Technologies, we bring over 8 years of expertise to redefine digital marketing. 
              We blend creativity with technology to transform your ventures.
            </p>
            <p className="mt-4 text-lg text-gray-400">
              From innovative social media management to captivating drone shoots and personalized advertising strategies, 
              we are the partners you can trust for long-term growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};