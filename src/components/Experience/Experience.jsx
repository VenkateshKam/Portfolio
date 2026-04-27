import React from 'react';

const Experience = () => {
  const timeline = [
    { company: 'SachiTech',     role: 'Web Developer Intern', date: 'July 2023 → Sep 2023' },
    { company: 'PySpiders',     role: 'Technical Training',   date: 'July 2024 → Dec 2024' },
    { company: 'Robowaves',     role: 'Web Developer Intern', date: 'Dec 2024 → Apr 2025'  },
    { company: 'Diginnovators', role: 'Web Engineer',         date: 'Sep 2025 → Dec 2025'  },
    { company: 'Cognizant',     role: 'Software Engineer',    date: 'Dec 2025 → Now'        },
  ];

  return (
    <section
      id="experience"
      className="bg-black h-screen px-10 md:px-20 lg:px-28 flex flex-col justify-between py-10"
    >
      {/* Top label */}
      <div className="flex items-center gap-5">
        <span className="text-[12px] font-light text-white/40 tracking-widest uppercase">Experience</span>
        <div className="w-8 h-[0.5px] bg-white/20" />
      </div>

      {/* Middle content */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.25] tracking-tight text-white/25 w-full max-w-4xl">
          I have{' '}
          <span className="text-white">8+ months of experience</span>,{' '}
          I'm building not just applications, here I am building a successful{' '}
          <span className="text-white">engineering mindset</span>{' '}
          every day.
        </h2>

        <div className="w-full flex justify-end">
          <div className="w-[52%]">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 items-center py-[32px] border-b border-white/[0.08] group cursor-default ${
                  i === 0 ? 'border-t border-white/[0.08]' : ''
                }`}
              >
                <span className="text-[15px] font-bold text-white/85 group-hover:text-white transition-colors duration-200 tracking-tight">
                  {item.company}
                </span>
                <span className="text-[13px] font-normal text-white/35">
                  {item.role}
                </span>
                <span className="text-[13px] font-normal text-white/30 text-right">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div />
    </section>
  );
};

export default Experience;