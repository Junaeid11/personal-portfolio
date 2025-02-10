
import { projects } from '@/data/projectsData';
import Image from 'next/image';
import React from 'react';

const ProjectPage = () => {
  if (projects.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 ">
          <div className="mb-4">
            <Image
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
