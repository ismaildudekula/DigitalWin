import React from 'react';
import { Brain, Users, LineChart, Zap } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    title: 'AI Driven Strategic Planning',
    description: 'Crafting clear, actionable plans for long-term success using cutting-edge AI tools.',
    icon: <Brain className="w-8 h-8 text-primary-400" />,
  },
  {
    title: 'Engagement',
    description: 'Building strong connections with your target audience through interactive campaigns.',
    icon: <Users className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Data-driven decisions empower you to make smarter, confident choices.',
    icon: <LineChart className="w-8 h-8 text-green-400" />,
  },
  {
    title: 'Innovative Digital Solutions',
    description: 'Delivering creative tech solutions for modern challenges in a rapidly evolving market.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Operate</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are committed to driving your success through comprehensive, customized strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
                key={index}
                className="bg-dark-900 p-8 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-gray-800/50 inline-block group-hover:bg-gray-800 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};