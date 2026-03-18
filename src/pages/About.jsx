import '../styles/about.css';

const skills = ['Problem Solving', 'Design Systems', 'Accessibility', 'Performance'];
const techStack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Figma', 'Docker'];

const About = () => {
  return (
    <section className="about page-enter">
      <header className="section-header">
        <h1>About</h1>
        <p>Designing intuitive products where aesthetics and engineering meet.</p>
      </header>

      <div className="about-grid">
        <article className="about-panel skills-panel">
          <h2>Skills</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="hover-chip">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="about-panel stack-panel">
          <h2>Tech Stack</h2>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>

        <article className="about-panel philosophy-panel">
          <h2>Design Philosophy</h2>
          <p>
            My process balances clear interaction patterns, scalable architecture,
            and thoughtful micro-interactions to create products that feel effortless.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
