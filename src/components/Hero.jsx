import { motion } from 'framer-motion';
import { styles } from '../styles';
import { profile } from '../constants';
import { bwmap, worldmap } from '../assets';

const Hero = () => (
  <section id="home" className="relative w-full h-screen min-h-[680px] overflow-hidden">
    <img src={bwmap} alt="" className="absolute inset-0 w-full h-full hidden sm:block object-cover" />
    <img src={worldmap} alt="" className="absolute inset-0 w-full h-full sm:hidden object-cover" />
    <div className="absolute inset-0 sm:bg-hero bg-hero-mobile" />

    <div className={`relative ${styles.paddingX} max-w-7xl mx-auto pt-[20vh] sm:pt-[23vh]`}>
      <div className="max-w-[640px]">
        <p className="text-dim font-poppins text-lg sm:text-2xl font-medium">Hi, I'm</p>
        <h1 className="text-eerieBlack font-mova uppercase text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.98] tracking-[2px] mt-3">
          {profile.firstName}<br />{profile.lastName}
        </h1>
        <p className="mt-5 text-eerieBlack text-xl sm:text-2xl font-poppins font-semibold">{profile.role}</p>
        <p className="mt-3 text-jetLight text-base sm:text-lg font-poppins leading-relaxed max-w-[420px]">{profile.introduction}</p>
        <div className="mt-7 flex flex-wrap gap-4 font-poppins text-sm font-semibold">
          <a href="#projects" className="rounded-lg bg-eerieBlack text-flashWhite px-5 py-3 hover:bg-dim transition-colors">View my work</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-jetLight bg-flashWhite/90 text-eerieBlack px-5 py-3 hover:bg-platinum transition-colors">My resume ↗</a>
        </div>
      </div>
    </div>

    <div aria-hidden="true" className="absolute right-[5vw] bottom-[14vh] hidden lg:block text-[clamp(8rem,18vw,20rem)] leading-none font-mova text-timberWolf opacity-20">SM</div>

    <a href="#about" aria-label="Scroll to about Shazli" className="absolute bottom-7 left-1/2 -translate-x-1/2">
      <div className="w-[30px] h-[52px] rounded-3xl border-[3px] border-french flex justify-center items-start p-2">
        <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-2 h-2 rounded-full bg-taupe" />
      </div>
    </a>
  </section>
);

export default Hero;
