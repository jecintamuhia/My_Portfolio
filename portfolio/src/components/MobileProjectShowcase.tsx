// src/components/MobileProjectShowcase.tsx

"use client";

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { AiFillGithub } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';

const MobileProjectShowcase = ({ project, reverse }: { project: Project; reverse?: boolean }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      // CHANGED: Increased the gap between columns for better spacing
      className={`flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32 mb-24 lg:mb-32 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-black mb-4">{project.title}</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-6 lg:mx-0 mx-auto"></div>
        <p className="text-lg text-gray-400 mb-8">{project.description}</p>
        
        <ul className="space-y-3 mb-8">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <FaCheckCircle className="text-yellow-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-slate-800 text-gray-300 font-bold py-3 px-6 rounded-lg border-2 border-slate-700 hover:border-yellow-400 hover:text-yellow-400 transition-all"
        >
          <AiFillGithub size={20} />
          <span>View Code</span>
        </a>
      </div>

      {/* Right Column: Mobile Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          {/* Phone Frame Effect */}
          <div className="bg-slate-800 rounded-[3rem] p-3 shadow-2xl border-8 border-slate-900">
            <img
              src={project.image}
              alt={`${project.title} mobile app screenshot`}
              // CHANGED: Made the image responsive and larger on big screens
              className="rounded-[2rem] w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MobileProjectShowcase;