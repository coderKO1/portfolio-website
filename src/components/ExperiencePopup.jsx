import babcock from "../images/babcock.jpg";
import swiftlogo from "../images/swiftlogo.jpg";
import ubalogo from "../images/ubalogo.png";
import osekemi from "../images/osekemi.jpg";
import "../styles/experience-popup.css";

const experiences = [
  {
    company: "United Bank for Africa",
    role: "Graduate Trainee",
    years: "December 2025 - Present",
    logo: ubalogo,
  },
  {
    company: "Swift Networks Limited",
    role: "Network Engineer",
    years: "January 2024 - March 2025",
    logo: swiftlogo,
  },
  {
    company: "Babcock University",
    role: "Software Developer",
    years: "May 2022 - May 2023",
    logo: babcock,
  },
  {
    company: "Osekemi Properties Limited",
    role: "Technology Intern",
    years: "January 2022 - June 2022",
    logo: osekemi,
  },
];

const ExperiencePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="experience-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 id="experience-title">Experience</h2>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.company}>
              
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>

              <div className="experience-info">
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
                <span>{exp.years}</span>
              </div>

            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePopup;