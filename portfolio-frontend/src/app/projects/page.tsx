

import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/data/projectsData';
import { Project } from '@/types/types';


const Projects  = () => {
  return (
    
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project :Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};



export default Projects
