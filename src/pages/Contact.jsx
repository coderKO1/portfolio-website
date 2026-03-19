import { motion } from 'framer-motion';
import '../styles/contact.css';

const blockVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: 'easeOut' },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const Contact = () => {
  return (
    <section className="contact page-enter">
      <motion.header
        className="contact-hero"
        variants={staggerGroup}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="contact-label" variants={blockVariant}>
          Let&apos;s collaborate
        </motion.span>

        <motion.div className="contact-title-wrap" variants={blockVariant}>
          <span className="contact-bg-word" aria-hidden="true">
            CONTACT
          </span>
          <h1>
            LET&apos;S BUILD YOUR
            <br />
            NEXT DIGITAL PRODUCT.
          </h1>
        </motion.div>

        <motion.p variants={blockVariant}>
          Share your idea, product challenge, or collaboration request and I&apos;ll
          get back with a clear plan.
        </motion.p>
      </motion.header>

      <motion.form
        className="contact-form"
        onSubmit={(event) => event.preventDefault()}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />

        <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;