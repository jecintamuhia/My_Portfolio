// src/data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AgriCreds',
    description: 'A digital loan application system empowering Rwandan dairy farmers with transparent access to credit, powered by a custom credit scoring algorithm.',
    image: '/Group 52 (1).svg',
    tech: ['Jetpack Compose', 'Kotlin', 'Django', 'Python', 'PostgreSQL', 'Linear Regression'],
    liveUrl: null, 
    githubUrl: 'https://github.com/your-username/agricreds-repo',
    details: 'This project improved transparency and decision-making for cooperatives.',
    artifacts: {
      report: 'https://link-to-your-report.com',
      design: 'https://link-to-your-figma.com',
      architecture: 'https://link-to-your-diagram.com',
    },
   
    features: [
      "Streamlined loan application & tracking",
      "Real-time payment processing via Mobile Money",
      "Data-driven credit scoring for fairer loans",
      "Management dashboard for cooperative officers"
    ]
  },
  {
    id: 2,
    title: 'CraftCrest',
    description: 'A dedicated platform connecting artisans with a global market, making it easy to sell customizable products and grow their business.',
    image: '/Group 642.svg', 
    tech: ['Jetpack Compose', 'Kotlin', 'Node.js', 'Express', 'MongoDB', 'Restful API'],
    liveUrl: null,
    githubUrl: 'https://github.com/akirachix/craftcrest-mobile',
    details: 'I focused on creating a user-friendly marketplace that empowers artisans.',
    artifacts: {
      report: 'https://link-to-your-report.com',
      design: 'https://link-to-your-figma.com',
      architecture: 'https://link-to-your-diagram.com',
    },
    features: [
      "Easy product creation and customization",
      "Secure integrated payment gateway",
      "Direct shop-to-customer communication",
      "Analytics dashboard for sales insights"
    ]
  }
];