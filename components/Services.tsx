import React from 'react';
import { Smartphone, Code, TrendingUp } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold uppercase tracking-wider mb-2">To Grow Your Business Today</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">You Need Digital Marketing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-dark-950 rounded-3xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6">
                        <Smartphone className="text-blue-400 w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Digital Marketing</h4>
                    <p className="text-gray-400 mb-6">
                        Digital marketing can significantly boost your business by enhancing your online presence through SEO, Social Media, and targeted ads.
                    </p>
                    <a href="#contact" className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Know more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-dark-950 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center mb-6">
                        <Code className="text-purple-400 w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Design & Development</h4>
                    <p className="text-gray-400 mb-6">
                        Effective design and development are crucial for creating a strong brand identity and providing a seamless user experience across all devices.
                    </p>
                    <a href="#contact" className="text-purple-400 font-medium hover:text-purple-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Know more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-dark-950 rounded-3xl p-8 border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-pink-900/50 rounded-2xl flex items-center justify-center mb-6">
                        <TrendingUp className="text-pink-400 w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Sales & Marketing</h4>
                    <p className="text-gray-400 mb-6">
                        Strategic sales and marketing efforts drive customer engagement and fuel business growth through targeted campaigns and data analysis.
                    </p>
                    <a href="#contact" className="text-pink-400 font-medium hover:text-pink-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Know more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
            <span className="px-4 py-2 border border-gray-800 rounded-full">Digital Product Design</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full">Development</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full">UI/UX Graphic Design</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full">Sales Optimization</span>
        </div>
      </div>
    </section>
  );
};