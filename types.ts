import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: 'Leadership' | 'Digital Dynamos' | 'Design Mavericks' | 'Syntax Team' | 'Growth Gurus';
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}