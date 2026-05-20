import React from 'react';
import { Globe, MessageSquare, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Terminal size={20} className="accent-icon" />
            <span>YE HTET AUNG_Portfolio</span>
          </div>
          <p>Building high-quality digital experiences with technical precision.</p>
        </div>
        
        <div className="footer-links">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#" title="Portfolio"><Globe size={20} /></a>
            <a href="#" title="Contact"><MessageSquare size={20} /></a>
            <a href="#" title="Email"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YEHTETAUNG_Portfolio. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #060e20;
          padding: 60px 0 30px;
          border-top: 1px solid var(--outline-color);
          margin-top: 80px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .accent-icon { color: var(--primary-accent); }
        .footer-brand p {
          color: var(--text-secondary);
          max-width: 300px;
          font-size: 0.9rem;
        }
        .footer-links h4 {
          margin-bottom: 20px;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .social-icons {
          display: flex;
          gap: 20px;
        }
        .social-icons a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }
        .social-icons a:hover {
          color: var(--primary-accent);
        }
        .footer-bottom {
          grid-column: span 2;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 30px;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
