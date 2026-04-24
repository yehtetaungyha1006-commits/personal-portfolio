import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdaybzvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page container contact-page">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header"
      >
        <h4 className="hero-tag">GET IN TOUCH</h4>
        <h1>Let's Work Together</h1>
        <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="contact-info"
        >
          <a href="mailto:yehtetaung.yha1006@gmail.com" className="info-card glass">
            <Mail className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>yehtetaung.yha1006@gmail.com</p>
            </div>
          </a>
          <div className="info-card glass">
            <MapPin className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Bangwa, Phasi Charoen, Bangkok 10160</p>
            </div>
          </div>
          <a href="tel:0915190099" className="info-card glass">
            <Phone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>091-5190099</p>
            </div>
          </a>
          <a href="https://github.com/yehtetaungyha1006-commits" target="_blank" rel="noopener noreferrer" className="info-card glass">
            <LinkIcon className="info-icon" />
            <div>
              <h3>GitHub</h3>
              <p>yehtetaungyha1006-commits</p>
            </div>
          </a>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit} 
          className="contact-form glass"
        >
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="Subject" 
              required 
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary full-width" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
        </motion.form>
      </div>

      <style jsx>{`
        .contact-page {
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .hero-tag {
          color: var(--primary-accent);
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          margin-bottom: 15px;
        }
        h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 20px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: var(--radius-md);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }
        .info-card:hover {
          background: rgba(0, 209, 255, 0.05);
          border-color: var(--primary-accent);
          transform: translateX(10px);
        }
        .info-icon {
          color: var(--primary-accent);
          width: 24px;
          height: 24px;
        }
        .info-card h3 { font-size: 1.1rem; margin-bottom: 5px; }
        .info-card p { color: var(--text-secondary); font-size: 0.9rem; }
        
        .contact-form {
          padding: 40px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        input, textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--outline-color);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-accent);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 10px rgba(0, 209, 255, 0.2);
        }
        .btn {
          padding: 16px;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0, 209, 255, 0.2);
        }
        .btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 209, 255, 0.4);
          background: var(--primary-accent);
          color: #000;
        }
        .full-width { width: 100%; }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
