// App.js - Main application component
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'; // We'll convert your CSS to this file
import Navbar from './components/Navbar';
import Home from './components/Home';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Contact from './components/Contact';
import Typed from 'typed.js';
import Helmet from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import favicon from './assets/Prabesh_Bhandari_2.png';



function App() {


  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }

    // Initialize TypedJS
    const typed = new Typed('#element', {
      strings: ['Student', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleThemeChange = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };




 
    return (
      <Router>
        
        <HelmetProvider>
        <Helmet>
              <title>Prabesh | Home</title>
              <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
        <div className={`app-container theme-${theme}`}>
          <section className="s1">
            <div className="main-container">
              <div className="nameofmine">
                <div className="wrapper">
                  <h1 className="name">Prabesh Bhandari</h1>
                </div>
              </div>
              <div className="intro-wrapper">
                <Navbar />
                <Home theme={theme} onThemeChange={handleThemeChange} />
              </div>
            </div>
          </section>

          <section className="s2">
            <div className="main-container">
              <Expertise />
            </div>
          </section>

          <section className="education-section" id="education">
            <Education />
          </section>

          <section className="s2">
            <div className="main-container">
              <Contact />
            </div>
          </section>
        </div>
        </HelmetProvider>
      </Router>
    );
  }

export default App;
