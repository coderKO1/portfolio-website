import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import mypicture from '../images/mypicture.jpg';
import '../styles/home.css';

const heroContainer = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <section className="home page-enter">
      <motion.div
        className="hero-content"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-label" variants={heroItem}>
          Product-focused engineer
        </motion.span>

        <motion.div className="hero-title-wrap" variants={heroItem}>
          <span className="hero-background-word" aria-hidden="true">
            BUILDER
          </span>
          <h1>
            <motion.span variants={heroItem}>SOFTWARE DEVELOPER</motion.span>
            <motion.span variants={heroItem}>&amp; ENGINEER</motion.span>
          </h1>
        </motion.div>

        <motion.p variants={heroItem}>
          I craft performant digital experiences with React, Node.js, fintech
          systems expertise, and a strong UI/UX focus.
        </motion.p>

        <motion.div className="hero-cta-row" variants={heroItem}>
          <motion.a
            href="mailto:kolawoleolusogaa@gmail.com"
            className="hero-cta hero-cta-primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope aria-hidden="true" />
            Contact Me
          </motion.a>

          <motion.a
            href="/docs/newest-cv.pdf"
            className="hero-cta hero-cta-secondary"
            download
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload aria-hidden="true" />
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="profile-wrapper"
        initial={{ opacity: 0, x: 28, scale: 0.94 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.72, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src={mypicture}
          alt="profile"
          className="profile-image"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.6, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Home;