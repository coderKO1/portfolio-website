import { AnimatePresence, motion } from 'framer-motion';
import babcock from '../images/babcock.jpg';
import swiftlogo from '../images/swiftlogo.jpg';
import ubalogo from '../images/ubalogo.png';
import osekemi from '../images/osekemi.jpg';
import '../styles/experience-popup.css';

export const experiences = [
  {
    company: 'United Bank for Africa',
    role: 'Graduate Trainee',
    years: 'December 2025 - Present',
    logo: ubalogo,
    description: 'Contributing to product delivery and technology operations for retail banking systems.',
  },
  {
    company: 'Swift Networks Limited',
    role: 'Network Engineer',
    years: 'January 2024 - March 2025',
    logo: swiftlogo,
    description: 'Improved network reliability and performance through proactive monitoring and support.',
  },
  {
    company: 'Babcock University',
    role: 'Software Developer',
    years: 'May 2022 - May 2023',
    logo: babcock,
    description: 'Built internal web tools and maintained user-focused interfaces for academic workflows.',
  },
  {
    company: 'Osekemi Properties Limited',
    role: 'Technology Intern',
    years: 'January 2022 - June 2022',
    logo: osekemi,
    description: 'Supported digital operations and helped optimize day-to-day technical processes.',
  },
];

const overlayMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalMotion = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
};

const ExperiencePopup = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen ? (
      <motion.div
        className="modal-overlay"
        onClick={onClose}
        variants={overlayMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.section
          className="experience-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-title"
          onClick={(e) => e.stopPropagation()}
          variants={modalMotion}
        >
          <div className="modal-head">
            <div>
              <p className="modal-kicker">Professional journey</p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <button className="modal-close" onClick={onClose} type="button">
              Close
            </button>
          </div>

          <div className="experience-list">
            {experiences.map((exp) => (
              <motion.article
                className="experience-card"
                key={exp.company}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <div className="company-logo">
                  <img src={exp.logo} alt={exp.company} />
                </div>

                <div className="experience-info">
                  <h3>{exp.role}</h3>
                  <p>{exp.company}</p>
                </div>
                <span className="experience-years">{exp.years}</span>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </motion.div>
    ) : null}
  </AnimatePresence>
);

export default ExperiencePopup;