import React from 'react';
import '../../styles/ThemeToggle.css';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`theme-toggle baumans-family ${darkMode ? 'dark' : 'light'}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeToggle;
