import { motion } from 'framer-motion';
import '../styles/projects.css';

const projects = [
  {
    title: 'Delifery',
    description:
      'A community-based delivery system that connects local riders with users for efficient last-mile logistics.',
    image: '/project-1.svg',
    github: 'https://github.com/coderKO1/DELIFERY.git',
  },
  {
    title: 'TaxShield',
    description:
      'A fintech tool that automates tax calculations and compliance for SMEs.',
    image: '/project-2.svg',
    github: 'https://github.com/coderKO1/UBATAXPROJECT.git',
  },
  {
    title: 'The Blog',
    description:
      'A modern blog platform with content management and interactive user features.',
    image: '/project-3.svg',
    github: 'https://github.com/coderKO1/blog-project.git',
  },
];

const projectMeta = {
  Delifery: {
    label: 'Client Project',
    tags: ['React', 'Logistics', 'Web App'],
  },
  TaxShield: {
    label: 'Fintech Product',
    tags: ['React', 'Fintech', 'Compliance'],
  },
  'The Blog': {
    label: 'Content Platform',
    tags: ['React', 'CMS', 'UX'],
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.14,
      duration: 0.52,
      ease: 'easeOut',
    },
  }),
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
  return (
    <section className="projects page-enter">
      <motion.header className="projects-hero" initial="hidden" animate="visible" variants={sectionVariant} custom={0}>
        <motion.span className="projects-kicker" variants={textItem}>
          Selected Work
        </motion.span>

        <motion.div className="projects-title-wrap" variants={textItem}>
          <span className="projects-bg-word" aria-hidden="true">
            PROJECTS
          </span>
          <h1>
            PROJECTS THAT
            <br />
            DELIVER IMPACT
          </h1>
        </motion.div>

        <motion.p variants={textItem}>
          Product-focused builds combining strong architecture, intuitive user
          experience, and measurable business outcomes.
        </motion.p>
      </motion.header>

      <div className="project-showcase-list">
        {projects.map((project, index) => {
          const meta = projectMeta[project.title];

          return (
            <motion.article
              className="project-showcase"
              key={project.title}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={index}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-visual"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.52, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
              </motion.a>

              <motion.div
                className="project-details"
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <motion.span className="project-label" variants={textItem}>
                  {meta.label}
                </motion.span>
                <motion.h2 variants={textItem}>{project.title}</motion.h2>
                <motion.p variants={textItem}>{project.description}</motion.p>

                <motion.ul className="project-tags" variants={textItem}>
                  {meta.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </motion.ul>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  variants={textItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;