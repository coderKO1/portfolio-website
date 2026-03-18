import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact page-enter">
      <header className="section-header">
        <h1>Contact</h1>
        <p>Let&apos;s collaborate on your next product experience.</p>
      </header>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
