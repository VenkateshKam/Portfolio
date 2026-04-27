import React, { useState } from 'react';

const projects = [
  {
    id: 'green-corner',
    title: 'Green Corner',
    category: 'E-Commerce Platform',
    type: 'Smart Plant Commerce & Plant Care Platform',
    description: 'Designed for urban users who value greenery but struggle to manage plant shopping and care within busy city life. The platform enables users to purchase plants online, explore plant care articles, and access guidance on plant diseases and maintenance - creating a complete digital ecosystem for plant lovers beyond just shopping.',
    techStack: ['React', 'Django', 'Python', 'SQL'],
    githubLink: 'https://github.com/VenkateshKam/Plant-Store---GreenCorner---Ecommerce.git',
    mainImage: '/GreenCorner/GreenCorner-1.png',
    images: [
      '/GreenCorner/GreenCorner-1.png',
      '/GreenCorner/GreenCorner-2.png',
      '/GreenCorner/GreenCorner-3.png',
      '/GreenCorner/GreenConrner-4.png',
      '/GreenCorner/GreenCorner-5.png'
    ]
  },
  {
    id: 'rev-workforce',
    title: 'RevWorkForce',
    category: 'HR Management System',
    type: 'Workforce & Organization Management Platform',
    description: 'Built to streamline internal business operations by reducing dependency on manual HR processes. The platform centralizes employee management, workflow coordination, attendance handling, and operational structure - helping organizations improve efficiency, clarity, and day-to-day execution.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'SQL'],
    githubLink: 'https://github.com/VenkateshKam/Rev-Workforce-Java.git',
    mainImage: '/RevWorkForce/HRTool-1.png',
    images: [
      '/RevWorkForce/HRTool-1.png',
      '/RevWorkForce/Hrtool-2.png',
      '/RevWorkForce/hrtool-3.png',
      '/RevWorkForce/hrtool-4.png',
      '/RevWorkForce/hrtool-5.png',
      '/RevWorkForce/hrtool-6.png',
      '/RevWorkForce/hrtool - 7.png',
      '/RevWorkForce/hrtools -8.png'
    ]
  },
  {
    id: 'task-pilot',
    title: 'TaskPilot',
    category: 'Productivity Application',
    type: 'Task & Workflow Management System',
    description: 'Created for individuals managing multiple responsibilities who need clarity in execution. The platform helps organize daily tasks, priorities, and work progression in a structured way, reducing scattered planning and improving consistency in personal productivity.',
    techStack: ['Python', 'Django', 'React', 'REST APIs', 'SQL'],
    githubLink: 'https://github.com/VenkateshKam/Task-Pilot-Django-ToDo.git',
    mainImage: '/TaskPilot/Taskpilot-2.png',
    images: [
      '/TaskPilot/Taskpilot-2.png',
      '/TaskPilot/TaskPilot-1.png',
      '/TaskPilot/TaskPilot-3.png'
    ]
  }
];

const filters = ['All', 'Python', 'Java', 'Reactjs', 'Electronjs'];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Python') return project.techStack.includes('Python');
    if (activeFilter === 'Java') return project.techStack.includes('Java');
    if (activeFilter === 'Reactjs') return project.techStack.includes('React');
    if (activeFilter === 'Electronjs') return project.techStack.includes('Electron');
    return true;
  });

  return (
    <section
      id="work"
      className="bg-black min-h-screen px-10 md:px-20 lg:px-28 flex flex-col py-10 relative"
    >
      {/* Top label */}
      <div className="flex items-center gap-5">
        <span className="text-[12px] font-light text-white/40 tracking-widest uppercase">Work</span>
        <div className="w-8 h-[0.5px] bg-white/20" />
      </div>

      {/* Middle content */}
      <div className="flex flex-col gap-6 mt-20">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-white/25 w-full max-w-4xl">
          Take a closer look at <span className="text-white">some of my works</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mb-4">
          A selection of projects that showcase my approach and attention to detail.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm md:text-base mb-8 border-b border-white/[0.08] pb-6 w-full max-w-4xl">
          {filters.map((filter, index) => {
            const isActive = activeFilter === filter;
            return (
              <React.Fragment key={filter}>
                <button 
                  onClick={() => setActiveFilter(filter)}
                  className={`hover:text-white transition-colors duration-300 flex items-center group tracking-tight ${isActive ? 'text-white font-bold' : 'text-white/40 font-normal'}`}
                >
                  {filter}
                </button>
                {index < filters.length - 1 && <span className="text-white/20">/</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Projects Grid - Using Option 3 for all */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => openModal(project)}
              onMouseMove={handleMouseMove}
              className="group cursor-none relative w-full h-[400px]"
            >
              {/* Card Background and Content Wrapper */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 border border-white/[0.08] group-hover:border-white/20 bg-black flex flex-col">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${project.id === 'green-corner' ? 'scale-[1.25] group-hover:scale-[1.35]' : 'group-hover:scale-110'}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-[12px] text-white/80 font-medium tracking-widest uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.type}</div>
                  <h3 className="text-3xl font-bold text-white/85 group-hover:text-white transition-colors duration-200 tracking-tight mb-6">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[13px] text-white/85 font-normal px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.08]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Hover Follower - Unclipped */}
              <div 
                className="pointer-events-none absolute z-50 flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[16px] font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-2xl"
                style={{
                  left: hoverPos.x,
                  top: hoverPos.y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                _view_project 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H16M16 6V12M16 6L8 14"></path>
                </svg>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-white/30 text-[13px] font-normal">
              No projects found for {activeFilter}
            </div>
          )}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-black border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/10 border border-white/[0.08] backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section (Carousel) */}
            <div className="w-full lg:w-[60%] bg-black relative group flex-shrink-0 h-[40vh] sm:h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/[0.08] flex items-center justify-center overflow-hidden">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Carousel Controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 hover:bg-white/10 border border-white/[0.08] backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/50 hover:bg-white/10 border border-white/[0.08] backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white/85' : 'w-2 bg-white/20'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-[40%] p-6 sm:p-8 lg:p-10 flex flex-col overflow-y-auto">
              <div className="mb-2 text-[12px] font-light tracking-widest text-white/40 uppercase">
                {selectedProject.category}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white/85 tracking-tight mb-2">{selectedProject.title}</h2>
              <p className="text-[15px] text-white/50 font-normal mb-6">{selectedProject.type}</p>
              
              <div className="h-[1px] w-full bg-white/[0.08] mb-6"></div>
              
              <h4 className="text-[12px] font-light text-white/40 uppercase tracking-widest mb-3">About the Project</h4>
              <p className="text-white/35 font-normal leading-relaxed text-[13px] sm:text-[15px] mb-8">
                {selectedProject.description}
              </p>

              <h4 className="text-[12px] font-light text-white/40 uppercase tracking-widest mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-black border border-white/[0.08] text-white/85 text-[13px] font-normal px-4 py-2 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.githubLink && (
                <div className="mt-auto pt-6 border-t border-white/[0.08]">
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors duration-300 text-[13px] font-light tracking-widest uppercase"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 group-hover:after:w-full">
                      Source Code
                    </span>
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">↗</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
