import { AnimatePresence, motion } from 'framer-motion';

const SectionBubble = ({ activeSection }) => {
  return (
    <div className="section-bubble" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={activeSection}
          className="section-bubble-text"
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
        >
          {activeSection.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default SectionBubble;