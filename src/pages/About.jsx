import { motion } from 'framer-motion';
import { experiences } from '../components/ExperiencePopup';
import react from '../images/react.svg';
import node from '../images/node.svg';
import typescript from '../images/typescript.svg';
import postgre from '../images/postgre.svg';
import figma from '../images/figma.png';
import tailwind from '../images/tailwind.png';
import python from '../images/python.jpg';

import html from '../images/html.png';
import git from '../images/github.png';
import '../styles/about.css';

const stack = [
  {
    name: 'React',
    description: 'Frontend Framework',
    icon: react,
  },
  {
    name: 'Node.js',
    description: 'Backend Runtime',
    icon: node,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript',
    icon: typescript,
  },
  {
    name: 'PostgreSQL',
    description: 'Relational Database',
    icon: postgre,
  },
  {
    name: 'Figma',
    description: 'Product Design Tool',
    icon: figma,
  },
  {
    name: 'Python',
    description: 'Product Design Tool',
    icon: python,
  },
  {
    name: 'Git',
    description: 'Product Design Tool',
    icon: git,
  },
  {
    name: 'Tailwind',
    description: 'Containerization Platform',
    icon: tailwind,
  },
  {
    name: 'Html',
    description: 'Containerization Platform',
    icon: html,
  },
  
];

const introVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <section className="about page-enter">
      <motion.header
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={introVariant}
      >
       

        <motion.div className="about-title-wrap" initial="hidden" animate="visible" variants={introVariant}>
          <span className="about-bg-word" aria-hidden="true">
            PROFILE
          </span>
          <h1>
            BUILDING CLEAN DIGITAL
            <br />
            PRODUCTS WITH PURPOSE
          </h1>
        </motion.div>

        <motion.p initial="hidden" animate="visible" variants={introVariant}>
        I’m Ifeoluwa Olusoga.

I’m a developer passionate about building clean and user-friendly digital experiences. I enjoy turning ideas into real products that people can interact with.

For me, it’s not just about writing code, it’s about creating solutions that are simple, effective, and meaningful.

I’m constantly learning, improving, and growing as a software engineer while working on impactful projects.
        </motion.p>
      </motion.header>

      <motion.article className="about-panel about-stack-panel" initial="hidden" animate="visible" variants={introVariant}>
        <h2>Core Stack</h2>

        <div className="stack-flow">
          {stack.map((item, index) => (
            <motion.div
              key={item.name}
              className={`stack-card scatter-${(index % 6) + 1}`}
              initial="hidden"
              animate="visible"
              variants={introVariant}
              whileHover={{ y: -4 }}
            >
              <div className="stack-card-icon">
                <img
                  src={item.icon}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="stack-card-text">
                <h3>{item.name}</h3>
                <p>{item.description || 'Technology stack item'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.article>

      <motion.article className="about-panel experience-section" initial="hidden" animate="visible" variants={introVariant}>
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              className="experience-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className="experience-logo-wrap">
                <img src={item.logo} alt={item.company} />
              </div>

              <div className="experience-copy">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-description">{item.description}</p>
              </div>

              <span className="experience-date">{item.years}</span>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </section>
  );
};

export default About;