import React from 'react';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { useTheme } from './hooks/useTheme.js';

const AppContent = () => {
  const { themes: currentTheme } = useTheme();

  const safeTheme = currentTheme || {
    background: '#ffffff',
    text: '#333333',
    card: '#f8f9fa',
    border: '#dee2e6',
    primary: '#007bff'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: safeTheme.background,
      color: safeTheme.text,
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      

      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px'
      }}>
        
       
        <div style={{ textAlign: 'center', width: '100%' }}>
          
          
       
          <p style={{
            fontSize: '1rem',
            opacity: 0.8,
            margin: 0,
            lineHeight: '1.5'
          }}>
            Beautiful dark/light mode toggle
          </p>
        </div>

     
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ThemeToggle />
        </div>


        <div style={{
          padding: '35px 25px',
          backgroundColor: safeTheme.card,
          borderRadius: '20px',
          border: `1px solid ${safeTheme.border}`,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          width: '100%',
          textAlign: 'center'
        }}>
          
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: '600',
            margin: '0 0 15px 0'
          }}>
            Features
          </h2>
          <p style={{
            fontSize: '0.95rem',
            opacity: 0.8,
            margin: '0 0 25px 0',
            lineHeight: '1.6'
          }}>
            Smooth transitions • Persistent settings • Mobile friendly • Easy to customize
          </p>
          
       
        </div>

       
        <div style={{
          opacity: 0.6,
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
        
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;