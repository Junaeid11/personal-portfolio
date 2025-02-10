"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projectsData';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white text-black shadow-lg rounded-lg p-8 mt-8">
      <div className="relative mb-6 text-black">
        <Image
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover rounded-lg"
        />
        <h1 className="relative text-4xl font-extrabold text-gray-800 mt-4">{project.name}</h1>
      </div>

      <p className="text-lg mb-6">{project.description}</p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="font-medium text-gray-700">Status:</p>
          <p className="text-green-600">{project.status}</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">Completion Date:</p>
          <p className="text-red-600">{project.completionDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">

      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Technologies:</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-lg text-gray-600">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Features:</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-lg text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Challenges:</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="text-lg text-gray-600">{challenge}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Opinions:</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.opinions.map((opinion, index) => (
            <li key={index} className="text-lg text-gray-600">{opinion}</li>
          ))}
        </ul>
      </div>


      <div className="flex space-x-4 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          View GitHub
        </a>
      </div>


    </div>



  );
};

export default ProjectDetailsPage;
