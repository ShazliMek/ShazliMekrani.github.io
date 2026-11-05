import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { projects, profile } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ project, index, active, onSelect }) => {
  const expanded = active === project.id;

  return (
    <motion.article
      variants={fadeIn('right', 'spring', index * 0.1, 0.75)}
      className={`relative min-w-0 xl:min-w-[100px] overflow-hidden card-shadow transition-[flex] duration-500 ${expanded ? 'xl:flex-[4] min-h-[500px]' : 'xl:flex-[0.6] min-h-[100px]'} xl:min-h-[500px]`}>
      <img src={project.image} alt={`${project.name} project screenshot`} loading="lazy" className="absolute inset-0 w-full h-full object-cover rounded-[24px]" />
      <div className={`absolute inset-0 rounded-[24px] ${expanded ? 'bg-gradient-to-t from-night via-night/90 to-night/10' : 'bg-night/60'}`} />

      {!expanded ? (
        <button type="button" aria-expanded="false" aria-controls={`${project.id}-details`} aria-label={`Show ${project.name}`} onClick={() => onSelect(project.id)} className="absolute inset-0 w-full text-left rounded-[24px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-silver focus-visible:-outline-offset-4">
          <span className="absolute left-6 top-9 xl:left-8 xl:top-auto xl:bottom-8 xl:-rotate-90 xl:origin-top-left whitespace-nowrap text-timberWolf font-beckman font-bold text-xl xl:text-2xl uppercase">{project.name}</span>
        </button>
      ) : (
        <div id={`${project.id}-details`} className="relative flex flex-col justify-end min-h-[500px] p-6 sm:p-8">
          <p className="text-silver text-xs uppercase tracking-wider font-poppins mb-2">{project.subtitle}</p>
          <h3 className="text-timberWolf font-beckman font-bold text-2xl sm:text-3xl uppercase break-words">{project.name}</h3>
          <p className="mt-3 text-silver text-sm leading-6 font-poppins">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => <li key={tag} className="text-silver text-xs font-poppins bg-white/10 rounded-md px-2 py-1">{tag}</li>)}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code on GitHub`} className="flex items-center gap-3 w-fit rounded-lg bg-jetLight px-4 py-3 text-timberWolf font-beckman text-sm hover:bg-dim transition-colors">
              <img src={github} alt="" className="w-6 h-6 object-contain" /> View code ↗
            </a>
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center rounded-lg border border-dim px-4 py-3 text-timberWolf font-beckman text-sm hover:bg-dim transition-colors">Live demo ↗</a>}
          </div>
        </div>
      )}
    </motion.article>
  );
};

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        From voice-powered interview practice to financial machine learning and desktop applications, these projects reflect how I turn ideas into working software.
      </motion.p>
      <div className="mt-12 flex flex-col xl:flex-row gap-5">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} active={active} onSelect={setActive} />)}
      </div>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-timberWolf font-poppins text-sm underline underline-offset-4 hover:text-white">More on GitHub ↗</a>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
