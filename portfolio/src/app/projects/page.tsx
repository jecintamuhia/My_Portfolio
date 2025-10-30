// src/app/projects/page.tsx
import { projects } from '../data/projects';
import MobileProjectShowcase from '@/components/MobileProjectShowcase';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        {projects.map((project, index) => (
          <MobileProjectShowcase 
            key={project.id} 
            project={project} 
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;