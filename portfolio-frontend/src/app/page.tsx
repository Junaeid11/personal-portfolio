"use client";

import { motion } from "framer-motion";
import Image from "next/image";;
import logo from "@/assets/Professional LinkedIn Profile Picture.png";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projectsData";

const skills = [
  { name: 'HTML', proficiency: 90, color: 'bg-orange-500' },
  { name: 'CSS', proficiency: 85, color: 'bg-blue-500' },
  { name: 'JavaScript', proficiency: 80, color: 'bg-yellow-500' },
  { name: 'React', proficiency: 90, color: 'bg-teal-500' },
  { name: 'Next.js', proficiency: 80, color: 'bg-black' },
  { name: 'Tailwind CSS', proficiency: 85, color: 'bg-pink-500' },
  { name: 'Node.js', proficiency: 75, color: 'bg-green-600' },
  { name: 'Express.js', proficiency: 70, color: 'bg-gray-800' },
  { name: 'MongoDB', proficiency: 70, color: 'bg-green-700' },
  { name: 'JWT Authentication', proficiency: 80, color: 'bg-indigo-600' },
];

export default function HeroBanner() {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[rgb(220,236,216)]  text-gray-800  overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 opacity-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full h-full  bg-cover bg-center blur-sm"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center relative z-10 text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={logo}
              alt="Junaeid Ahmed"
              width={500}
              height={500}
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl p-6"
          >
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-lg">
              <span className="text-green-800">Hi,</span> I&apos;m Junaeid Ahmed Tanim
            </h1>
            <p className="py-6 text-lg">
              A passionate <span className="font-bold text-red-400">Full Stack Developer</span> and <span className="font-bold text-red-400">Power Engineer</span>. I love building scalable web applications and solving real-world problems with technology.
            </p>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255, 0, 0, 0.8)" }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
               Resume
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 w-full max-w-2xl"
        >
        

        </motion.div>

      </div>
      <div className="text-center mt-12 p-8 bg-gradient-to-br rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-red-500 mb-8 ">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
              className="flex items-center justify-center space-x-4"
            >
              <div className="w-full">
                <h3 className="text-lg font-medium dark:text-white mb-4">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${skill.color}`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
      <div className="flex justify-center">
        <motion.a
          href="/projects"

          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255, 0, 0, 0.8)" }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          View All
        </motion.a>
      </div>
    </div>


  );
}


