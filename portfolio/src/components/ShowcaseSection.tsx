// src/components/ShowcaseSection.tsx
import { projects } from '../app/data/projects';
import { FaQuoteLeft, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const featuredProject = projects[0];




const ShowcaseSection = () => {
  return (
    <section className="w-full lg:w-1/2 bg-gray-100 p-8 lg:p-16 flex flex-col justify-center">
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 inline-block border-b-4 border-yellow-400 pb-1">
          Featured Project
        </h3>
        <div className="mt-4">
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">{featuredProject.title}</h4>
          <p className="text-gray-600 mb-4">{featuredProject.description}</p>
          <a href="/projects" className="text-yellow-600 font-semibold hover:underline">
            View Full Project &rarr;
          </a>
        </div>
      </div>
      <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
        <p className="text-gray-700 italic mb-4 text-lg">
          "Jecinta's ability to manage the full development lifecycle, from user research to deployment, was instrumental to our project's success. Her work on the credit scoring model brought incredible value to our users."
        </p>
        <p className="text-gray-900 font-semibold">- Project Manager, AgriTech Initiative</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
        <p className="text-gray-600 mb-6">I'm always open to discussing new opportunities and interesting problems.</p>
        <div className="flex space-x-4">
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-yellow-600 text-2xl transition-colors">
            <FaEnvelope />
          </a>
           <a href="https://www.linkedin.com/in/jecinta-wanjiru-7a3894355/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fgithub.com%2Fjecintamuhia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;