import React, { useState } from 'react';
import { TeamMember } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers: TeamMember[] = [
  // Leadership
  { name: 'Anudeep Reddy', role: 'Founder-CEO', department: 'Leadership' },
  { name: 'Aravind Reddy', role: 'Co-founder & COO', department: 'Leadership' },
  // Digital Dynamos
  { name: 'Rakshith', role: 'Brand / Growth Manager', department: 'Digital Dynamos' },
  { name: 'Adhi Lakshmi', role: 'Digital Marketing Executive', department: 'Digital Dynamos' },
  { name: 'Nithin Reddy', role: 'Video Content Creator', department: 'Digital Dynamos' },
  // Design Mavericks
  { name: 'Yugender Reddy', role: 'Product Designer', department: 'Design Mavericks' },
  { name: 'Sai Santosh', role: 'Creative Strategist', department: 'Design Mavericks' },
  { name: 'Pavan Kumar', role: 'Video Editor', department: 'Design Mavericks' },
  // Syntax Team
  { name: 'Bharath', role: 'Technical Lead (Sr. Web Dev)', department: 'Syntax Team' },
  { name: 'Sahithi Reddy', role: 'Junior Web Developer', department: 'Syntax Team' },
  { name: 'Bindu Madhavi', role: 'Junior Web Developer', department: 'Syntax Team' },
  // Growth Gurus
  { name: 'Bharath', role: 'Business Development Manager', department: 'Growth Gurus' },
  { name: 'Hari', role: 'Business Development Executive', department: 'Growth Gurus' },
  { name: 'Sampath', role: 'Business Development Executive', department: 'Growth Gurus' },
  { name: 'Deepika', role: 'Customer Support', department: 'Growth Gurus' },
];

const departments = ['All', 'Leadership', 'Digital Dynamos', 'Design Mavericks', 'Syntax Team', 'Growth Gurus'];

export const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredMembers = activeTab === 'All' 
    ? teamMembers 
    : teamMembers.filter(m => m.department === activeTab);

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Meet The Team</h2>
          <p className="text-gray-400">The minds behind the magic.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === dept 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' 
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredMembers.map((member, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={member.name + member.role + idx}
                className="bg-dark-950 p-6 rounded-xl border border-gray-800 text-center hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary-500 transition-colors">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-primary-400 mt-1">{member.role}</p>
                {activeTab === 'All' && (
                    <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">{member.department}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};