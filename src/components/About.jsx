import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, profile, education } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        {profile.bio}
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.2, 1)} className="mt-4 text-dim text-[18px] max-w-3xl leading-[30px]">
        {profile.focus}
      </motion.p>

      <motion.div variants={fadeIn('', '', 0.3, 1)} className="mt-8 border-l-4 border-jetLight pl-6 font-poppins">
        <p className="text-eerieBlack text-xl font-semibold">{education.school}</p>
        <p className="mt-2 text-dim text-base">{education.degree}</p>
        <p className="text-dim text-base">{education.minor} · {education.graduation}</p>
        <p className="mt-2 text-jetLight text-sm font-semibold">{education.distinction}</p>
      </motion.div>

      <p className="mt-6 text-dim text-base max-w-3xl font-poppins leading-relaxed">{profile.interests}</p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
