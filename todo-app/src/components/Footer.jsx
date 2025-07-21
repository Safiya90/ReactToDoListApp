import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TaskMaster</h3>
          <p>Task Master Application</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">📱</a>
            <a href="#" className="social-icon">📧</a>
            <a href="#" className="social-icon">🌐</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Copy right with Task Master</p>
      </div>
    </footer>
  );
};

export default Footer;
