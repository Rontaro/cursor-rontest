import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">My React App</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to My React App</h1>
          <p>A modern, responsive web application built with React</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Modern Design</h3>
            <p>Clean and responsive UI that works on all devices</p>
          </div>
          <div className="feature-card">
            <h3>Fast Performance</h3>
            <p>Optimized for speed and smooth user experience</p>
          </div>
          <div className="feature-card">
            <h3>Easy Deployment</h3>
            <p>Deployed on GitHub Pages for easy access</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
