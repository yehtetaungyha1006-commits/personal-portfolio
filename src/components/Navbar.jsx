import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Terminal size={24} className="accent-icon" />
          <span>DevPortfolio</span>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          z-index: 1000;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .accent-icon {
          color: var(--primary-accent);
        }
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
        }
        .nav-links a:hover, .nav-links a.active {
          color: var(--primary-accent);
        }
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-accent);
          box-shadow: 0 0 10px var(--primary-accent);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
