import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, FileText } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: 'Software Development',
      issuer: 'Certification Authority',
      date: 'April 28, 2025',
      description: 'Comprehensive certification covering C#, JavaScript, HTML, and Database Design.',
      pdfUrl: '/certificates/software%20development%20certificate.pdf'
    },
    {
      title: 'Python Programming',
      issuer: 'Certification Authority',
      date: 'February 11, 2026',
      description: 'Advanced Python programming certification covering data structures and algorithms.',
      pdfUrl: '/certificates/certificate%20python.pdf'
    },
    {
      title: 'PMI Certification',
      issuer: 'Project Management Institute',
      date: 'March 11, 2025',
      description: 'Professional certification in project management principles and practices.',
      pdfUrl: '/certificates/PMI%20Certificate.pdf'
    },
    {
      title: 'Creative Problem Solving',
      issuer: 'Certification Authority',
      date: 'February 11, 2026',
      description: 'Certification in creative thinking and strategic problem-solving techniques.',
      pdfUrl: '/certificates/Creative%20Problem%20Solving%20Certificate.pdf'
    },
    {
      title: 'Generative AI',
      issuer: 'Certification Authority',
      date: 'February 11, 2026',
      description: 'Specialization in generative AI models, prompt engineering, and AI applications.',
      pdfUrl: '/certificates/Generative%20AI%20Certificate.pdf'
    },
    {
      title: 'Database Systems',
      issuer: 'Certification Authority',
      date: 'November 26, 2025',
      description: 'In-depth certification in database design, SQL, and data management.',
      pdfUrl: '/certificates/Database%20Certificate.pdf'
    },
    {
      title: 'Professional Communication',
      issuer: 'Siam University',
      date: 'March 30, 2026',
      description: 'Certification in effective workplace communication and Thai language skills.',
      pdfUrl: '/certificates/Professional%20Communication%20Certificate.pdf'
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'Certification Authority',
      date: 'February 11, 2026',
      description: 'Fundamental and advanced principles of AI and Machine Learning.',
      pdfUrl: '/certificates/AI%20Certificate.pdf'
    }
  ];

  return (
    <div className="page container certificates-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header"
      >
        <h4 className="hero-tag">CREDENTIALS</h4>
        <h1>Certificates & Credentials</h1>
        <p>A collection of my academic and professional achievements.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="resume-highlight-section glass"
      >
        <div className="resume-icon-box">
          <FileText size={48} className="resume-icon" />
        </div>
        <div className="resume-info">
          <h2>My Resume</h2>
          <p>Detailed overview of my experience, education, and technical expertise.</p>
        </div>
        <div className="resume-actions">
          <a href="/yehtetaung_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary resume-btn">
            Download PDF <FileText size={18} />
          </a>
        </div>
      </motion.div>

      <div className="certificates-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="cert-card glass"
          >
            <div className="cert-icon">
              <Award size={32} />
            </div>
            <div className="cert-info">
              <span className="cert-date">{cert.date}</span>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
              <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .certificates-page {
          padding-top: 140px;
          padding-bottom: 80px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .header-actions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }
        .hero-tag {
          color: var(--primary-accent);
          letter-spacing: 0.2em;
          .stat-item:last-child {
            border-bottom: none;
          }
        }
        @media (max-width: 768px) {
          .resume-highlight-section {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }
          .resume-icon-box {
            margin: 0 auto;
          }
        }
        h1 { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 20px; }
        
        .resume-highlight-section {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 40px;
          border-radius: var(--radius-lg);
          margin-bottom: 80px;
          border: 1px solid var(--primary-accent);
          background: linear-gradient(135deg, rgba(0, 209, 255, 0.05) 0%, rgba(23, 31, 51, 0.8) 100%);
        }
        .resume-icon-box {
          width: 80px;
          height: 80px;
          background: rgba(0, 209, 255, 0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-accent);
        }
        .resume-info {
          flex: 1;
        }
        .resume-info h2 {
          margin-bottom: 10px;
          font-size: 1.8rem;
        }
        .resume-info p {
          color: var(--text-secondary);
        }
        .resume-btn {
          padding: 15px 35px;
          font-size: 1.1rem;
          box-shadow: 0 0 20px rgba(0, 209, 255, 0.3);
        }
        .resume-btn:hover {
          box-shadow: 0 0 30px rgba(0, 209, 255, 0.5);
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        .cert-card {
          padding: 30px;
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cert-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-accent);
          box-shadow: 0 10px 30px rgba(0, 209, 255, 0.1);
        }
        .cert-icon {
          color: var(--primary-accent);
        }
        .cert-date {
          font-size: 0.8rem;
          color: var(--primary-accent);
          font-weight: 600;
          margin-bottom: 10px;
          display: block;
        }
        .cert-info h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }
        .cert-issuer {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 15px;
          font-size: 0.95rem;
        }
        .cert-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }
        .cert-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--primary-accent);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .cert-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Certificates;
