import '../styles/projects.css';

const projects = [
  {
    title: 'Delifery',
    description: 'A community-based delivery system that connects local riders with users for efficient last-mile logistics.',
    image: '/project-1.svg',
    github: 'https://github.com/coderKO1/DELIFERY.git'
  },
  {
    title: 'TaxShield',
    description: 'A fintech tool that automates tax calculations and compliance for SMEs.',
    image: '/project-2.svg',
    github: 'https://github.com/coderKO1/UBATAXPROJECT.git'
  },
  {
    title: 'The Blog',
    description: 'A modern blog platform with content management and interactive user features.',
    image: '/project-3.svg',
    github: 'https://github.com/coderKO1/blog-project.git'
  }
];

const Projects = () => {
  return (
    <section className="projects page-enter">
      <header className="section-header">
        <h1>Projects</h1>
        <p>Selected work focused on product quality and business impact.</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <button type="button">View Project</button>
</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
