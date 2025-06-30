"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Diwo",
      position: "AI/ML Intern",
      period: "Jun 2025 - Present",
      description: "Currently working on developing AI-driven solutions to enhance user experience and automate processes. Collaborating with data scientists to implement machine learning models.",
      achievements: [
        "Successfully impemented an MCP Server",
      ],
      technologies: ["MCP", "LLMs", "Python", "React.js", "Django"]
    },
    {
      company: "The Spoke and Rim Tavern",
      position: "Line Cook",
      period: "Jan 2024 - April 2024",
      description: "Worked as in interm manager",
      achievements: [
        "Managed kitchen operations and trained 20+ staff members, maintaining a 95% customer satisfaction rate, successfully reducing operational downtime by 20%",
      ],
      technologies: ["MCP", "LLMs", "Python", "React.js", "Django"]
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 relative"
          >
            Work Experience
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-500"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
          >
            My professional journey and roles I&apos;ve excelled in
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500 shadow-md z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-scale">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-xl font-bold text-primary-500">{exp.position}</h3>
                      <span className="bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education section */}
       {/* Education section */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
  
  <div className="flex justify-center">
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-scale max-w-md w-full">
      <h4 className="text-lg font-bold text-primary-500 mb-2">Honours Specilization in Computer Science</h4>
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-semibold">Western University</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        Specializing in Web Technologies and Artificial Intelligence. Graduating with honors and on track to complete a thesis on efficient algorithms for web applications.
      </p>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Experience;
