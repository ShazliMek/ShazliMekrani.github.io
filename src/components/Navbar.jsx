import { useState } from 'react';
import { styles } from '../styles';
import { navLinks, profile } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const selectLink = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav aria-label="Main navigation" className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-30 bg-flashWhite/95`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="#home" className="flex items-center gap-3" onClick={() => selectLink('')} aria-label={`${profile.name}, home`}>
          <span className="flex items-center justify-center w-11 h-11 bg-eerieBlack text-flashWhite rounded-lg font-mova text-2xl">SM</span>
          <span className="text-eerieBlack font-mova text-xl sm:text-2xl tracking-wide">{profile.name}</span>
        </a>
        <ul className="list-none hidden lg:flex flex-row gap-9">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? 'text-dim' : 'text-eerieBlack'} hover:text-taupe text-[19px] font-medium font-mova uppercase tracking-[2px] nav-links`}>
              <a href={`#${nav.id}`} onClick={() => selectLink(nav.title)}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <button type="button" className="lg:hidden p-2 relative z-20" onClick={() => setToggle(!toggle)} aria-expanded={toggle} aria-controls="mobile-navigation" aria-label={toggle ? 'Close navigation' : 'Open navigation'}>
          <img src={toggle ? close : menu} alt="" className="w-7 h-7 object-contain" />
        </button>
        {toggle && (
          <div id="mobile-navigation" className="lg:hidden fixed inset-0 bg-flashWhite pt-28 px-8 pb-10 overflow-y-auto">
            <ul className="list-none flex flex-col gap-5">
              {navLinks.map((nav) => (
                <li key={nav.id} className={`${active === nav.title ? 'text-dim' : 'text-eerieBlack'} text-[clamp(2rem,8vw,4rem)] font-mova uppercase tracking-wide`}>
                  <a href={`#${nav.id}`} onClick={() => selectLink(nav.title)}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 text-dim font-poppins underline" onClick={() => setToggle(false)}>Download resume ↗</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
