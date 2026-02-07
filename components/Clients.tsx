import React from 'react';
import { Award, ShieldCheck, Star } from 'lucide-react';

const clients = [
  'Anvita', 'Fileasy', 'Connect Thrive', 'Kapil', 'AvizAcademy', 
  'Aniva', 'Nandanavanam', 'Praneeth', 'GR Mayoora', 'Inception Hub', 
  'Brigade Public School', 'Samskruthi', 'Tripura', 'Vasavi', 'Vaishnavi'
];

export const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-dark-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-orange-500/20 w-24 h-24 rounded-full blur-2xl"></div>
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Startup India Certified</h3>
                <p className="text-gray-400 text-sm">Honored for our contributions to India's startup ecosystem through innovation and excellence. DPIIT Certified.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-500/20 w-24 h-24 rounded-full blur-2xl"></div>
                <Award className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Best Digital Marketing Agency</h3>
                <p className="text-gray-400 text-sm">Indian Icon Awards - Best Real Estate Digital Marketing Agency 2025 for excellence in lead generation.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500/20 w-24 h-24 rounded-full blur-2xl"></div>
                <Star className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Accreditations</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Google Partner Badge</li>
                    <li>• Clutch Top Agency 2020</li>
                    <li>• Sortlist Verified Agency</li>
                </ul>
            </div>
        </div>

        {/* Clients Marquee */}
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Our Valuable Clients</h2>
            <p className="text-blue-500 font-semibold mt-2">30+ Satisfied Clients</p>
        </div>

        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-950 to-transparent z-10"></div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-70">
                {clients.map((client, index) => (
                    <span key={index} className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">
                        {client}
                    </span>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};