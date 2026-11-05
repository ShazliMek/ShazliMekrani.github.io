import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { profile } from '../constants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [emailPrepared, setEmailPrepared] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((previous) => ({ ...previous, [name]: value }));
    setEmailPrepared(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setEmailPrepared(true);
  };

  const fieldClass = 'bg-eerieBlack py-4 px-5 placeholder:text-taupe text-timberWolf rounded-lg outline-none border border-transparent focus:border-taupe font-medium';

  return (
    <div className="font-poppins">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadTextLight}>Contact.</h2>
          <p className="mt-5 text-taupe text-base leading-7 max-w-md">Have a software project, an engineering opportunity, or an idea to discuss? I'd love to hear from you.</p>
          <dl className="mt-8 space-y-6 text-timberWolf">
            <div><dt className="text-taupe text-sm mb-1">Email</dt><dd><a href={`mailto:${profile.email}`} className="break-all hover:text-white underline underline-offset-4">{profile.email}</a></dd></div>
            <div><dt className="text-taupe text-sm mb-1">Phone</dt><dd><a href={profile.phoneHref} className="hover:text-white">{profile.phone}</a></dd></div>
            <div><dt className="text-taupe text-sm mb-1">Based in</dt><dd>{profile.location}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-5 text-timberWolf text-sm underline underline-offset-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </div>
        </div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 0.75)} className="bg-jet p-6 sm:p-8 rounded-2xl min-w-0">
          <h3 className="text-timberWolf text-xl font-semibold">Start a conversation</h3>
          <p className="mt-2 text-taupe text-sm leading-6">This form prepares a message in your email app for you to send.</p>
          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-timberWolf text-sm">
              Your name
              <input required autoComplete="name" type="text" name="name" maxLength={100} value={form.name} onChange={handleChange} placeholder="Your name" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-timberWolf text-sm">
              Your email
              <input required autoComplete="email" type="email" name="email" maxLength={254} value={form.email} onChange={handleChange} placeholder="you@example.com" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-timberWolf text-sm">
              Your message
              <textarea required rows={6} name="message" maxLength={3000} value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." className={`${fieldClass} resize-y`} />
            </label>
            <button type="submit" className="w-fit rounded-lg bg-night text-timberWolf px-5 py-3 font-semibold hover:bg-dim transition-colors">Open email ↗</button>
            {emailPrepared && <p role="status" className="text-timberWolf text-sm leading-6">Finish sending in your email app. If it didn't open, email me directly at <a href={`mailto:${profile.email}`} className="underline break-all">{profile.email}</a>.</p>}
          </form>
        </motion.div>
      </div>
      <footer className="mt-16 border-t border-dim/40 pt-6 text-taupe text-xs flex flex-col sm:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Design adapted from <a href="https://github.com/shaqdeff/Portfolio-Template" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Shaquille Ndunda's template</a>.</p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
