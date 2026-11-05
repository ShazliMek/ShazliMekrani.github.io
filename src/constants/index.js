import {
  frontend, backend, ux, prototyping, javascript, typescript, html, css,
  reactjs, tailwind, nodejs, git, docker, postgresql,
  c, csharp, cplusplus, java, python, go,
} from '../assets';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Shazli Mekrani',
  firstName: 'Shazli',
  lastName: 'Mekrani',
  role: 'Software Engineer',
  email: 'mekranishazli@gmail.com',
  phone: '+1 (519) 701-8419',
  phoneHref: 'tel:+15197018419',
  location: 'London, Ontario, Canada',
  github: 'https://github.com/ShazliMek',
  linkedin: 'https://www.linkedin.com/in/shazlim/',
  resume: asset('Shazli_Mekrani_Resume.pdf'),
  introduction: 'Founder, Student, Learner',
  bio: "I'm a Computer Science student at Western University, pursuing an Honours Specialization in Computer Science with a Minor in Software Engineering. My work spans full-stack development, AI and machine learning, data engineering, and production automation.",
  focus: "As a Founding Technical Engineer at Homni, I build CRM software and AI-powered intake workflows for mobility equipment dealers. My experience also includes manufacturing automation at Lumentum, AI infrastructure at DIWO, and research into Canadian medical device access with Ivey Business School and Intrepid Data Solutions.",
  interests: "Outside of engineering, you'll find me in the gym, reading, playing tennis, or exploring new technologies.",
};

export const education = {
  school: 'Western University',
  degree: 'Honours Specialization in Computer Science',
  minor: 'Minor in Software Engineering',
  graduation: 'Expected graduation: 2027',
  distinction: "Dean's Honour List 2024/25 · 3.9 GPA",
};

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'work', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

const services = [
  { title: 'Full-Stack Development', icon: frontend },
  { title: 'AI & Machine Learning', icon: ux },
  { title: 'Data Engineering', icon: backend },
  { title: 'Software Automation', icon: prototyping },
];

const technologies = [
  // Add new 3D icons here after importing their images from ../assets.
  { name: 'C', icon: c },
  { name: 'C#', icon: csharp },
  { name: 'C++', icon: cplusplus },
  { name: 'Java', icon: java },
  { name: 'Python', icon: python },
  { name: 'Go', icon: go },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: reactjs },
  { name: 'Node.js', icon: nodejs },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Git', icon: git },
  { name: 'Docker', icon: docker },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'C#', 'Go', 'SQL / SQLite', 'R', 'Perl', 'HTML', 'CSS'],
  },
  {
    title: 'Web & Desktop',
    skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'Django', 'FastAPI', 'REST APIs', '.NET Core', 'WPF', 'Qt', 'Java Swing', 'JavaFX', 'Tailwind CSS'],
  },
  {
    title: 'AI & Data',
    skills: ['Pandas', 'OpenCV', 'scikit-learn', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Databricks', 'PostgreSQL', 'MongoDB', 'Gemini API', 'Vapi'],
  },
  {
    title: 'Cloud & Developer Tools',
    skills: ['Azure', 'AWS', 'GCP', 'Docker', 'Git', 'GitHub', 'Linux', 'Firebase', 'Vercel', 'Visual Studio', 'Jira', 'CMake', 'QMake'],
  },
];

const experiences = [
  {
    title: 'Data Engineer & Researcher',
    company_name: 'Ivey Business School & Intrepid Data Solutions',
    initials: 'I',
    iconBg: '#333333',
    date: 'September 2026 – Present',
    location: 'London, ON, Canada',
    team: '',
    points: [
      'Building a data platform to uncover hidden delays in Canadian medical device access.',
      'Benchmarking Health Canada, the FDA, and EU regulators across Class II–IV devices and all 13 Canadian provinces and territories.',
    ],
  },
  {
    title: 'Founding Technical Engineer',
    company_name: 'Homni',
    initials: 'H',
    iconBg: '#333333',
    date: 'July 2026 – Present',
    location: 'Toronto, ON, Canada',
    team: 'Office of the CTO',
    points: [
      'Built a full-stack CRM with React, TypeScript, Express, and PostgreSQL to centralize client records, sales pipelines, rentals, and renovation workflows for mobility equipment dealers.',
      'Developed an AI intake pipeline using Whisper and Claude to transcribe calls, extract client information, and flag ambiguous updates for human review.',
      'Integrated Twilio voice and SMS with Google and Microsoft email services, linking communications to shared conversation histories.',
      'Implemented authenticated APIs with organization-scoped sessions and role context to protect customer data across dealer accounts.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Lumentum',
    initials: 'L',
    iconBg: '#333333',
    date: 'January 2026 – August 2026',
    location: 'Ottawa, ON, Canada',
    team: 'Software Engineering Tools and Infrastructure Team',
    points: [
      'Developed production automation software for OCS manufacturing, improving station reliability, test repeatability, and operator efficiency.',
      'Created drivers for pressure monitoring systems and stepper motor controllers, reducing production test cycle time by 70%.',
      'Supported the migration from SVN to GitHub to improve collaboration, maintainability, and CI/CD readiness.',
      'Authored technical documentation and incorporated developer feedback to improve onboarding and adoption of internal engineering tools.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'Lumentum',
    initials: 'L',
    iconBg: '#333333',
    date: 'September 2025 – December 2025',
    location: 'Ottawa, ON, Canada',
    team: 'Process Automation Software Team',
    points: [
      'Developed internal .NET libraries, databases, and automation frameworks for production engineering and OCS process automation.',
      'Automated ETL pipelines for production test data used by 10+ cross-functional teams, improving operational efficiency by 20%.',
      'Built tooling, automation scripts, and release pipelines to improve software infrastructure reliability and developer productivity.',
    ],
  },
  {
    title: 'AI/ML Intern',
    company_name: 'DIWO',
    initials: 'D',
    iconBg: '#333333',
    date: 'May 2025 – August 2025',
    location: 'Northville, MI, USA',
    team: '',
    points: [
      'Implemented a Python MCP server for asynchronous message routing, cutting latency by 15%.',
      'Containerized server and machine learning modules with Docker and AWS ECS for consistent deployments.',
      'Authored API documentation and coordinated inference endpoint integration across teams.',
    ],
  },
];

const projects = [
  {
    id: 'prepwise',
    name: 'PrepWise',
    subtitle: 'AI Mock Interview Platform',
    description: 'An AI-powered interview platform with voice conversations, dynamic questions, and multi-dimensional feedback. Built with Firebase authentication, Gemini, and Vapi.',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'Vapi', 'Firebase', 'MongoDB'],
    image: asset('images/prepwise.png'),
    repo: 'https://github.com/ShazliMek/AI-Interview-Prep-Platform-PrepWise',
    demo: 'https://ai-interview-prep-platform-prep-wis.vercel.app',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce App',
    subtitle: 'Role-Based Desktop Application',
    description: 'A C++ desktop shopping application with role-based access, secure authentication, session management, and salted SHA-256 password hashing.',
    tags: ['C++', 'Qt', 'CMake', 'SQLite'],
    image: asset('images/ecommerce.jpg'),
    repo: 'https://github.com/ShazliMek/EcomSite',
  },
  {
    id: 'stockoverflow',
    name: 'StockOverflow',
    subtitle: 'Fraud Detection & Stock Predictions',
    description: 'Financial insights and fraud detection with XGBoost and Random Forest. Improved model accuracy from 93% to 98% through K-fold cross-validation and integrated NEAR blockchain smart contracts.',
    tags: ['Python', 'XGBoost', 'Random Forest', 'Rust', 'NEAR'],
    image: asset('images/stock-overflow.jpg'),
    repo: 'https://github.com/Panizghi/StockOverflow',
  },
  {
    id: 'virtual-pet',
    name: 'Virtual Pet Game',
    subtitle: 'Interactive Java Application',
    description: 'A virtual pet game built with Java Swing, featuring JSON save and load support, navigation across more than five screens, and JUnit testing.',
    tags: ['Java', 'Java Swing', 'JavaFX', 'JUnit', 'JSON'],
    image: asset('images/virtual-pet.png'),
    repo: 'https://github.com/ShazliMek/Interactive_Virtual_Pet_Game',
  },
  {
    id: 'face-detection',
    name: 'Face Detection',
    subtitle: 'Computer Vision Application',
    description: 'A Python and OpenCV application that detects and highlights faces, eyes, and full bodies in real-time video and static images using Haar cascade classifiers.',
    tags: ['Python', 'OpenCV', 'NumPy', 'Haar Cascades'],
    image: asset('images/face-detection.png'),
    repo: 'https://github.com/ShazliMek/Python-Face-Detector',
  },
];

export { services, technologies, experiences, projects };
