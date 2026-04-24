import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/IMG_1554.jpeg';

const About = () => {
  const skills = [
    'C# Programming', 'JavaScript (ES6+)', 'HTML & CSS',
    'Database Design', 'Web Development', 'UI/UX Design',
    'Figma & Prototyping', 'User Experience Research', 'Fast Learner'
  ];

  const languages = [
    { name: 'Burmese', level: 'Native' },
    { name: 'Thai', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' }
  ];

  return (
    <div className="page container about-page">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.02,
            rotate: -1,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.8 }}
          className="about-image-container"
        >
          <div className="about-image glass">
            <img src={profileImage} alt="YEHTETAUNG" className="about-img-el" />
            <div className="image-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-content"
        >
          <h4 className="hero-tag">ABOUT ME</h4>
          <h1>YE HTET AUNG</h1>
          <p className="subtitle">Third-year Information Technology Student at Siam University</p>



          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <div className="edu-header">
                <span className="edu-period">Jan 2025 – Present</span>
                <h4>Bachelor of Science in IT</h4>
              </div>
              <p className="edu-school">Siam University</p>
              <p className="edu-details">Major in Information Technology</p>
            </div>

            <div className="education-item">
              <div className="edu-header">
                <span className="edu-period">May 2022 – Oct 2024</span>
                <h4>Diploma in Computer Business</h4>
              </div>
              <p className="edu-school">Phetkasem Management Technological College</p>
              <p className="edu-details">Major in Digital Business Technology</p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical & Creative Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <CheckCircle2 size={18} className="skill-icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="languages-section">
            <h3>Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="lang-item">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-page {
          padding-top: 140px;
          padding-bottom: 80px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: center;
        }
        .about-image {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.5s ease;
        }
        .about-image:hover {
          border-color: var(--primary-accent);
          box-shadow: 0 0 30px rgba(0, 209, 255, 0.3);
        }
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0, 209, 255, 0.1));
          pointer-events: none;
          transition: all 0.5s ease;
        }
        .about-image:hover .image-overlay {
          background: linear-gradient(to bottom, transparent, rgba(0, 209, 255, 0.2));
        }
        .about-img-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .placeholder-img {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-color);
          color: var(--text-secondary);
          font-weight: 700;
          letter-spacing: 0.5em;
        }
        .hero-tag {
          color: var(--primary-accent);
          letter-spacing: 0.2em;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }
        h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 10px; }
        .subtitle {
          font-size: 1.2rem;
          color: var(--primary-accent);
          font-weight: 600;
          margin-bottom: 30px;
        }
        .bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
          text-align: justify;
        }
        .education-section {
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .education-section h3 {
          font-size: 1.4rem;
          margin-bottom: 25px;
          color: var(--primary-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .education-item {
          margin-bottom: 25px;
          padding-left: 20px;
          border-left: 2px solid var(--primary-accent);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        .edu-period {
          font-size: 0.85rem;
          color: var(--primary-accent);
          font-weight: 600;
        }
        .edu-school {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1.05rem;
        }
        .edu-details {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .skills-section {
          margin-top: 40px;
        }
        .skills-section h3, .languages-section h3 {
          font-size: 1.4rem;
          margin-bottom: 20px;
          color: var(--primary-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 40px;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
        }
        .skill-icon {
          color: var(--primary-accent);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .lang-item {
          background: rgba(0, 209, 255, 0.05);
          padding: 15px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(0, 209, 255, 0.1);
        }
        .lang-name {
          font-weight: 700;
          color: var(--text-primary);
        }
        .lang-level {
          font-size: 0.85rem;
          color: var(--primary-accent);
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .skills-grid, .languages-grid {
            justify-content: center;
          }
          .skill-item, .lang-item {
            justify-content: center;
          }
          .about-image {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
