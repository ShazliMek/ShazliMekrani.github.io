import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, skillGroups } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 text-center" key={technology.name}>
            <div className="h-28" role="img" aria-label={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
            <p className="mt-2 text-timberWolf font-poppins text-sm">{technology.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-8 font-poppins">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-timberWolf font-semibold text-lg mb-3">{group.title}</h3>
            <p className="text-taupe text-sm leading-7">{group.skills.join(' · ')}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
