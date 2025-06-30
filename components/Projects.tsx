"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Define the type for a project
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string | string[];
  technologies: string[];
  link: string;
  github: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Mock-Interview-Platform",
      description: "A platform that uses AI to simulate real-time speech recognition and interview scenarios. Multi-dimensional scoring algorithm measuring verbal metrics ",
      image: "PrepWise.png", // No leading slash for GitHub Pages compatibility
      category: ["web", "AI"],
      technologies: ["Next.js", "Vapi", "MongoDB", "FireBase", "Tailwind CSS", "Gemini API", "WebAudio-API"],
      link: "#",
      github: "https://github.com/ShazliMek/AI-Interview-Prep-Platform-PrepWise",
    },
    {
      id: 2,
      title: "Ecommerce Application",
      description: "Developed a role-based e-commerce desktop application using C++. Implemented secure authentication, session management, and password hashing (SHA-256 + salt)",
      image: "EA.jpg", // No leading slash for GitHub Pages compatibility
      category: ["web", "AI"],
      technologies: ["C++", "Qt", "CMake", "SQLite" , "SHA-256 + salt"],
      link: "#",
      github: "https://github.com/ShazliMek/EcomSite",
    },
    {
      id: 3,
      title: "Stock Overflow",
      description: "Developed a fraud detection system using XGBoost and Random Forest along with a UI for real-time financial insights and stock predictions.",
      image: "SO.jpg", // No leading slash for GitHub Pages compatibility
      category: "mobile",
      technologies: ["Near-BlockChain", "XGBoost", "Random-Forest", "AWS RDS", "Neurelo"],
      link: "#",
      github: "https://github.com/Panizghi/StockOverflow",
    },
    {
      id: 4,
      title: "Interactive Virtual Pet Game",
      description: "Designed and implemented a virtual pet application with Java Swing, Built save/load features with JSON, multi-screen navigation (5+ screens)",
      image: "VPG.png", // No leading slash for GitHub Pages compatibility
      category: "ai",
      technologies: ["Java", "JavaSwing", "JavaFx", "JUnit", "JSON"],
      link: "#",
      github: "https://github.com/ShazliMek/Interactive_Virtual_Pet_Game",
    },
    {
      id: 5,
      title: "Face Detection Application",
      description: "This project is a sophisticated face detection application built with Python and OpenCV that can detect and highlight faces, eyes, and full bodies in real-time video or static images.",
      image: "FD.png", // No leading slash for GitHub Pages compatibility
      category: "https://github.com/ShazliMek/Python-Face-Detector",
      technologies: ["Python", "OpenCV", "NumPy", "Haar Cascade Classifiers"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Coming Soon",
      description: "Coming Soon",
      image: "",
      category: [],
      technologies: [],
      link: "#",
      github: "#",
    },
    
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" },
    { name: "AI", value: "ai" },
    { name: "IoT", value: "iot" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => {
        // Handle both string and array categories
        if (Array.isArray(project.category)) {
          return project.category.includes(activeFilter);
        } else {
          return project.category === activeFilter;
        }
      });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 relative"
          >
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-500"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
          >
            Check out some of my recent work that showcase my skills and expertise
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover-scale"
            >
              {/* Project image */}
              <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onLoad={() => {
                    console.log(`✅ Image loaded successfully: ${project.title} (${project.image})`);
                  }}
                  onError={(e) => {
                    // Log detailed information about the failing image
                    console.error(`❌ Image failed to load for project: ${project.title}`, {
                      originalPath: project.image,
                      href: typeof window !== 'undefined' ? window.location.href : 'SSR',
                    });
                    
                    // Try with a different path based on environment
                    const imgElement = e.currentTarget;
                    let newPath;
                    
                    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
                      // GitHub Pages - try with absolute URL
                      newPath = `./${project.image}`; // relative path for GitHub Pages
                      console.log(`🔄 Trying relative path: ${newPath}`);
                      imgElement.src = newPath;
                    } else {
                      // Local development - try with placeholder
                      newPath = 'placeholder.jpg';
                      console.log(`🔄 Trying placeholder: ${newPath}`);
                      imgElement.src = newPath;
                    }
                    
                    // If placeholder also fails, show a fallback div
                    imgElement.onerror = () => {
                      console.error(`Placeholder image also failed to load: ${newPath}`);
                      imgElement.style.display = 'none';
                      const parent = imgElement.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-primary-500/20">
                            <p class="font-bold text-gray-500 dark:text-gray-300">${project.title}</p>
                          </div>
                        `;
                      }
                    };
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-primary-500/10 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <a 
                    href={project.link} 
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full font-medium flex items-center transition-all duration-300"
                  >
                    Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.github}
                    aria-label="View GitHub repository" 
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full transition-all duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Removed hover overlay with buttons as requested */}
            </motion.div>
          ))}
        </div>
        
        {/* View more button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a 
            href="#" 
            className="border border-primary-500 text-primary-500 hover:bg-primary-500/10 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
