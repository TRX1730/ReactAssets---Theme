import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '15px 25px',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: theme === 'light' ? '#2d3748' : '#f7fafc',
        color: theme === 'light' ? '#fff' : '#2d3748',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600',
        transition: 'all 0.4s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '300px'
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};