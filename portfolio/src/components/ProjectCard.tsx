// src/components/ProjectCard.tsx

"use client"; // Keep this for framer-motion

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
    
      whileHover={{ 
        borderColor: '#facc15', // Tailwind yellow-400
        boxShadow: '0 10px 30px rgba(250, 204, 21, 0.2)' // Yellow glow
      }}
      className="bg-slate-800 rounded-lg border-2 border-slate-700 overflow-hidden flex flex-col transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="text-xs bg-slate-700 text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links Section */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <AiFillGithub size={22} />
            <span className="font-semibold">Code</span>
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <AiOutlineExport size={22} />
              <span className="font-semibold">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;