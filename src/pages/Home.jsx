import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/IMG_1554.jpeg';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h4 className="hero-tag">PERSONAL PORTFOLIO</h4>
              <h1 className="hero-title">
                I'M <span className="accent">YEHTETAUNG</span> <br />
                A University Student
              </h1>
              <p className="hero-description">
                I am a third-year IT student at <span className="highlight">Siam University</span>.
                Moving from Myanmar to study in Thailand has been an incredible journey,
                teaching me not only how to code but also how to adapt and communicate
                effectively in a multicultural environment.
              </p>
              <p className="hero-description">
                I am deeply passionate about turning complex logic into functional applications using
                <span className="highlight">C#</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">HTML</span>.
                Currently seeking an internship to contribute to real-world projects and grow
                on my path to becoming a professional developer.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch <ArrowRight size={18} />
                </Link>
                <Link to="/certificates" className="btn btn-secondary">
                  View Credentials
                </Link>
                <a href="/yehtetaung_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FileText size={18} /> My Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hero-image-container"
            >
              <div className="hero-image glass">
                <img src={heroImage} alt="YEHTETAUNG" className="hero-img-el" />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-stats glass"
          >
            <div className="stat-item">
              <Code size={24} className="stat-icon" />
              <h3>Be A Full-Stack Developer</h3>
              <p>My Goal</p>
            </div>
            <div className="stat-item">
              <Database size={24} className="stat-icon" />
              <h3>500+</h3>
              <p>Learning Hours/ Self-study Hours</p>
            </div>
            <div className="stat-item">
              <Globe size={24} className="stat-icon" />
              <h3>3.70</h3>
              <p>GPAX</p>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 209, 255, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 60px;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1/1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          position: relative;
          transition: all 0.5s ease;
        }
        .hero-image:hover {
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
        .hero-image:hover .image-overlay {
          background: linear-gradient(to bottom, transparent, rgba(0, 209, 255, 0.2));
        }
        .hero-img-el {
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
          font-weight: 600;
          letter-spacing: 0.2em;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 24px;
        }
        .accent {
          color: var(--primary-accent);
          position: relative;
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          max-width: 650px;
          line-height: 1.7;
          text-align: justify;
        }
        .highlight {
          color: var(--primary-accent);
          font-weight: 600;
        }
        .hero-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .btn {
          padding: 12px 28px;
          border-radius: var(--radius-md);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background-color: var(--primary-accent);
          color: var(--bg-color);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 209, 255, 0.4);
        }
        .btn-secondary {
          border: 1px solid var(--outline-color);
          color: var(--text-primary);
        }
        .btn-secondary:hover {
          background: var(--surface-color);
          border-color: var(--primary-accent);
        }
        .btn-outline {
          border: 1px solid var(--primary-accent);
          color: var(--primary-accent);
        }
        .btn-outline:hover {
          background: rgba(0, 209, 255, 0.1);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 30px;
          border-radius: var(--radius-lg);
          margin-top: 40px;
        }
        .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid var(--outline-color);
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stat-icon {
          color: var(--primary-accent);
          margin-bottom: 15px;
        }
        .stat-item h3 {
          font-size: 2rem;
          margin-bottom: 5px;
        }
        .stat-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-image-container {
            order: -1;
            margin-bottom: 40px;
          }
          .hero-description {
            margin: 0 auto 40px;
          }
          .hero-actions {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .stat-item {
            border-right: none;
            border-bottom: 1px solid var(--outline-color);
            padding-bottom: 20px;
          }
          .stat-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
