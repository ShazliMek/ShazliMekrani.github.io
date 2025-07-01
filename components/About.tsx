"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "Front End", level: 90 },
    { name: "Backend", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Game Development", level: 75 },
    { name: "DevOps", level: 85 },
    { name: "Testing and Automation", level: 65 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 relative"
          >
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary-500"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
          >
            Get to know more about me, my skills and what drives me
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m a passionate <span className="text-primary-500 font-semibold">Computer Science Student</span> with a 
              strong focus on creating responsive and user-friendly applications. With over 5 years of 
              experience in different disciplines, I specialize in building modern, efficient, and scalable solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey as a dev started in 2018 when I built my first interactive website. 
              Since then, I&apos;ve worked on numerous projects ranging from small business websites to complex 
              enterprise applications, always striving to deliver high-quality code and exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
              projects, mentoring my juniors, in the gym, reading or playing tennis.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary-500 text-primary-500 hover:bg-primary-500/10 px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary-500 to-violet-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating card with facts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover-glow"
            >
              <h4 className="text-xl font-bold mb-4 text-primary-500">Fun Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Completed 10+ projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Worked with AI/ML, Web Dev, DevOps, Game Dev</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1,000+ hours of coding</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Open source contributor</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
