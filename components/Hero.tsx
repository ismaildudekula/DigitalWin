import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-300 mb-8"
        >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-sm font-medium uppercase tracking-wider">We Know What Works</span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Connect to New <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">
            Possibilities
          </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-400"
        >
          Elevate your brand, generate quality leads, and achieve unmatched success. 
          With over 8 years of expertise, Digital Win Technologies redefines digital marketing.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="px-8 py-4 rounded-full bg-white text-dark-950 font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            Explore Services
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-gray-700 text-white font-medium hover:bg-white/10 transition-colors">
            Get a Quote
          </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500"
        >
            <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Excellence in Graphic Design</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>AI-Driven Strategies</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>DPIIT Certified</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};