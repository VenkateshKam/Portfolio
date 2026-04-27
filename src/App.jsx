import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <LandingPage />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

