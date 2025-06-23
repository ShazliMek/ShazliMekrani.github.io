"use client";

import { motion } from "framer-motion";
// Adjust the import path to correctly point to the types file
import { TechStackData } from '../data/techStackTypes';
import techStackData from '../data/techStack.json';
// Import icons
import { FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss, SiFigma, SiFirebase, SiGraphql } from 'react-icons/si';

const TechStack = () => {
  const { technologies, categories } = techStackData as TechStackData;

  // Icon mapping for technologies
  const getIconForTech = (techName: string) => {
    switch(techName) {
      case "JavaScript": return <FaJs className="w-8 h-8 text-yellow-400" />;
      case "TypeScript": return <SiTypescript className="w-8 h-8 text-blue-500" />;
      case "React": return <FaReact className="w-8 h-8 text-blue-400" />;
      case "Next.js": return <SiNextdotjs className="w-8 h-8" />;
      case "Node.js": return <FaNodeJs className="w-8 h-8 text-green-600" />;
      case "Express": return <SiExpress className="w-8 h-8" />;
      case "MongoDB": return <SiMongodb className="w-8 h-8 text-green-500" />;
      case "PostgreSQL": return <SiPostgresql className="w-8 h-8 text-blue-600" />;
      case "Redux": return <SiRedux className="w-8 h-8 text-purple-600" />;
      case "Tailwind CSS": return <SiTailwindcss className="w-8 h-8 text-cyan-500" />;
      case "Figma": return <SiFigma className="w-8 h-8 text-pink-500" />;
      case "Git": return <FaGit className="w-8 h-8 text-orange-600" />;
      case "Docker": return <FaDocker className="w-8 h-8 text-blue-500" />;
      case "AWS": return <FaAws className="w-8 h-8 text-orange-400" />;
      case "Firebase": return <SiFirebase className="w-8 h-8 text-orange-500" />;
      case "GraphQL": return <SiGraphql className="w-8 h-8 text-pink-600" />;
      default: return <span className="text-2xl text-primary-500 font-bold">{techName.charAt(0)}</span>;
    }
  };

  // Duplicate the technologies for the continuous scroll effect
  const scrollItems = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 relative"
          >
            My Tech Stack
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-500"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        {/* Scrolling tech stack */}
        <div className="relative w-full py-6 overflow-x-hidden">
          <div className="tech-scroll">
            {scrollItems.map((tech, index) => (
              <div
                key={index}
                className="group inline-flex flex-col items-center mx-8 transition-transform duration-300 hover:scale-110"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-3 bg-white dark:bg-gray-800 rounded-full shadow-md p-4 hover-glow">
                  {getIconForTech(tech.name)}
                </div>
                <p className="text-sm font-medium opacity-80 group-hover:opacity-100 group-hover:text-primary-500 transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional tech categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover-scale transition-all duration-300">
              <div className="rounded-full bg-primary-500/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  {category.name === "Frontend" && (
                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM3.5 4.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v11.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V4.25z" clipRule="evenodd" />
                  )}
                  {category.name === "Backend" && (
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  )}
                  {category.name === "Tools & DevOps" && (
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-xs bg-primary-500/10 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
