import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="page container thank-you-page">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass thank-you-card"
      >
        <div className="success-icon-wrapper">
          <CheckCircle size={60} className="success-icon" />
        </div>
        <h1>Message Received!</h1>
        <p>Thank you for reaching out. I've received your message and will get back to you as soon as possible.</p>
        
        <div className="thank-you-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <ArrowLeft size={18} /> Send Another
          </Link>
        </div>
      </motion.div>

      <style jsx>{`
        .thank-you-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          padding-top: 100px;
        }
        .thank-you-card {
          padding: 60px;
          text-align: center;
          max-width: 600px;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .success-icon-wrapper {
          width: 100px;
          height: 100px;
          background: rgba(0, 209, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
        }
        .success-icon {
          color: var(--primary-accent);
          filter: drop-shadow(0 0 10px var(--primary-accent));
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
        }
        .thank-you-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .btn {
          padding: 12px 24px;
          font-weight: 600;
        }
        @media (max-width: 576px) {
          .thank-you-actions {
            flex-direction: column;
          }
          .thank-you-card {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
