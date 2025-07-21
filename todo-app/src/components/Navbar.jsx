import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">✓</span>
        <h1>TaskMaster</h1>
      </div>
      <div className="navbar-menu">
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="user-profile">
          <span className="profile-icon">👤</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
