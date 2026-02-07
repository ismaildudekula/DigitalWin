import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3">
                    <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Digital<span className="text-blue-500">Win</span></span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
                Connect to New Possibilities with Digital Win Technologies. Excellence in Digital Marketing, Development, and Design.
             </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Graphic Designing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Video Editing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">3D Designing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
                © Copyright 2024 Digital Win Technologies. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};