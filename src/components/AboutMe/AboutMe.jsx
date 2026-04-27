import React, { useEffect, useState, useRef, useMemo } from 'react';

const AboutMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const frameCount = 100;
  const imagesContainerRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);

  useEffect(() => {
    // High-performance animation loop for Lerp and Cross-Fade
    let animationFrame;
    const update = () => {
      const diff = targetProgress.current - smoothProgress.current;
      if (Math.abs(diff) > 0.0001) {
        smoothProgress.current += diff * 0.06; // Ultra-smooth momentum
        setScrollProgress(smoothProgress.current);

        if (imagesContainerRef.current) {
          const frames = imagesContainerRef.current.children;
          const totalFrames = frameCount;
          
          const scaledProgress = smoothProgress.current * (totalFrames - 1);
          const baseIndex = Math.floor(scaledProgress);
          const nextIndex = Math.min(baseIndex + 1, totalFrames - 1);
          const fraction = scaledProgress - baseIndex;
          
          for (let i = 0; i < frames.length; i++) {
            if (i === baseIndex) {
              frames[i].style.opacity = (1 - fraction).toString();
            } else if (i === nextIndex) {
              frames[i].style.opacity = fraction.toString();
            } else {
              frames[i].style.opacity = '0';
            }
          }
        }
      }
      animationFrame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-me');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let progress = -rect.top / (rect.height - windowHeight);
        progress = Math.max(0, Math.min(1, progress));
        targetProgress.current = progress;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate overall section opacity (fades in at start, out at end) - Capped at 0.75 for "more visible" effect
  const sectionOpacity = (scrollProgress < 0.1 ? scrollProgress * 7.5 : scrollProgress > 0.9 ? (1 - scrollProgress) * 7.5 : 0.75);

  const ImageSequence = useMemo(() => (
    <div 
      ref={imagesContainerRef}
      className="relative w-56 h-96 md:w-64 md:h-[30rem] overflow-hidden rounded-2xl"
      style={{
        // Nice impressive form: Gradient mask to fade top/bottom
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      {[...Array(frameCount)].map((_, i) => (
        <img
          key={i}
          src={`/climb_sequence/climbing.mp4_${i.toString().padStart(3, '0')}.jpg`}
          className="absolute top-0 left-0 w-full h-[110%] object-cover transition-none pointer-events-none"
          style={{ 
            objectPosition: '35% top',
            opacity: i === 0 ? 1 : 0,
            willChange: 'opacity',
            filter: 'brightness(0.9) contrast(1.1)', // Brighter and more visible
          }}
          alt={`Climb frame ${i}`}
        />
      ))}
    </div>
  ), [frameCount]);

  return (
    <section id="about-me" className="min-h-[400vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

        {/* Top label */}
        <div className="flex flex-col px-10 md:px-20 lg:px-28 pt-10">
          <div className="flex items-center gap-5">
            <span className="text-[12px] font-light text-white/40 tracking-widest uppercase">About Me</span>
            <div className="w-8 h-[0.5px] bg-white/20" />
          </div>
          <h2 className="mt-20 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-white/25 w-full max-w-4xl">
            This is how my journey <br />
            continues <span className="text-white">forward</span>.
          </h2>
        </div>

        {/* Main content - Wider layout to allow further left placement */}
        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-full px-4 items-center gap-10 md:gap-20">

            {/* Left - Animation with Fade effect - Shifted Further Left */}
            <div 
              className="w-full md:w-1/2 h-full relative flex items-center justify-start md:pl-0 transition-opacity duration-500"
              style={{ opacity: sectionOpacity }}
            >
              {ImageSequence}
            </div>

            {/* Right - Text blocks */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center relative z-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

              {[
                { id: '01', title: 'Exploring', text: 'During my Bachelors, I explored programming and development from core to advanced on my own, believing that real direction comes from building and discovering your strengths.', range: [0, 0.25] },
                { id: '02', title: 'Learning & Building', text: 'I attended intensive training bootcamps to build a stronger grip on development, which opened doors to internships where I transformed learning into real-time projects.', range: [0.25, 0.50] },
                { id: '03', title: 'Where I Am Now', text: 'Currently a Software Engineer at Cognizant building enterprise-grade Full Stack applications with Java, while simultaneously leveraging my Python expertise to design smart, AI-driven features.', range: [0.50, 0.75] },
                { id: '04', title: 'Evolving', text: 'With Full Stack and Python expertise, I\'m now evolving into a Full-Stack AI Engineer focusing on LLMs, RAG, and Agentic AI to turn ideas into powerful tools.', range: [0.75, 1.0] }
              ].map((item, index) => (
                <div 
                  key={item.id}
                  className={`transition-all duration-700 absolute w-full max-w-xl ${scrollProgress >= item.range[0] && scrollProgress < item.range[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                >
                  <div className="py-10 md:py-12 relative border-y border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/30 font-mono text-sm tracking-widest">{item.id}</span>
                      <h3 className="text-3xl md:text-4xl text-white/90 font-bold tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-xl md:text-[22px] text-white/80 leading-relaxed font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;