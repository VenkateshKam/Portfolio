import React, { useState } from 'react';

const ParticleBackground = () => {
  const [particles] = useState(() => {
    return Array.from({ length: 40 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1 + 'px',
      animationDuration: `${Math.random() * 30 + 30}s`,
      animationDelay: `-${Math.random() * 50}s`,
      opacity: Math.random() * 0.5 + 0.1
    }));
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute bottom-[-10px] bg-white rounded-full animate-float-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            '--particle-opacity': p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay
          }}
        />
      ))}
    </div>
  );
};

const LandingPage = () => {
  const navItems = ['Home', 'About Me', 'Experience', 'Work', 'Contact'];

  return (
    <div id="home" className="min-h-screen bg-black text-white selection:bg-white/10 overflow-x-hidden relative flex flex-col scroll-smooth">
      
      {/* Fixed Navbar - Standardized */}
      <nav className="fixed top-0 left-0 w-full pt-6 sm:pt-10 z-50 pointer-events-none">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-16 px-4 pointer-events-auto">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="relative overflow-hidden group text-[10px] sm:text-[13px] font-bold tracking-[0.2em] uppercase py-1 text-white/30 hover:text-white transition-all duration-500"
            >
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                {item}
              </span>
              <span className="absolute inset-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white" aria-hidden="true">
                {item}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col flex-grow w-full px-6 sm:px-10 md:px-20 lg:px-28 justify-center min-h-screen">
        
        {/* Universal Top Label for Home */}
        <div className="absolute top-20 sm:top-10 flex items-center gap-5">
          <span className="text-[12px] font-light text-white/40 tracking-widest uppercase">Introduction</span>
          <div className="w-8 h-[0.5px] bg-white/20" />
        </div>

        {/* Hero Content - Left Aligned for Impact */}
        <main className="max-w-5xl w-full mt-10 sm:mt-0">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Large Intro Label */}
            <div className="text-lg sm:text-3xl md:text-4xl text-white/25 font-semibold tracking-tighter mb-1">
              Hi, I am
            </div>

            {/* Impactful Name Headline - Scaled down for 100% zoom */}
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-bold leading-[1.1] sm:leading-[1] tracking-tighter text-white">
              Venkatesh K.
            </h1>
            
            {/* Role & Bio Combo */}
            <div className="max-w-2xl mt-2 space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white/80 leading-snug">
                A Fullstack Engineer
              </h2>
              
              <p className="text-base sm:text-lg text-white/40 font-medium leading-relaxed max-w-xl">
                I started with curiosity, and now obsessed with building applications that feel scalable, reliable and performant.
              </p>
            </div>
          </div>
        </main>

        {/* Scroll Indicator - Bottom Right for uniqueness */}
        <div className="absolute bottom-12 right-10 md:right-20 lg:right-28 flex flex-col items-end gap-6 group">
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-[11px] font-bold tracking-[0.3em] uppercase group-hover:text-white/40 transition-colors">
              Explore my story
            </span>
            <div className="w-12 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-white/30 transition-all duration-500" />
          </div>
          <a href="#about-me" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 transition-all duration-500">
            <svg 
              className="w-5 h-5 text-white/40 group-hover:text-white transition-all duration-500 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Cinematic Dust/Particles Background */}
      <ParticleBackground />
    </div>
  );
};

export default LandingPage;
