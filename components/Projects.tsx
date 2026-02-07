import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'Land Adda',
    description: 'Connects genuine land sellers with buyers, offering expert guidance and a transparent, seamless experience in land transactions.',
    image: 'https://www.digitalwin.in/images/landadda%20mockup.webp',
    link: '#',
  },
  {
    title: 'Vasavi White Lotus',
    description: 'Luxury villa plots at Balanagar near Shadnagar. A premium 50-acre community featuring top-tier amenities and excellent connectivity.',
    image: 'https://www.digitalwin.in/images/vasavi.webp',
    link: '#',
  },
  {
    title: 'Anvita High Nine',
    description: 'Luxurious 2 & 3 BHK apartments and sky villas in Tellapur. Designed for happiness with unparalleled sports and leisure amenities.',
    image: 'https://www.digitalwin.in/images/high9.webp',
    link: '#',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects That Made a Difference</h2>
          <p className="text-xl text-gray-400">
            A showcase of real solutions we've built — smart, impactful, and crafted to solve real-world challenges.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg text-white hover:bg-white hover:text-black transition-colors"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};