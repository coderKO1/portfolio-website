import { useState } from 'react';
import ExperiencePopup from '../components/ExperiencePopup';
import mypicture from '../images/mypicture.jpg';
import '../styles/home.css';

const Home = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <section className="home page-enter">
        <div className="profile-wrapper">
          <img
            src={mypicture}
            alt="profile"
            className="profile-image"
          />
        </div>

        <div className="hero-content">
          <h1>Software Developer</h1>
          <p>
            I craft performant digital experiences with React, Node.js, fintech
            systems expertise, and a strong UI/UX focus.
          </p>

          <button
            className="experience-trigger"
            onClick={() => setShowExperience(true)}
          >
            Experience
          </button>
        </div>
      </section>

      <ExperiencePopup
        isOpen={showExperience}
        onClose={() => setShowExperience(false)}
      />
    </>
  );
};

export default Home;