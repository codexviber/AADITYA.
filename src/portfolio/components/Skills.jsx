// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { category: 'Frontend & UI', description: 'Building responsive, interactive interfaces and web experiences.', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'], colSpan: 'md:col-span-2 lg:col-span-2', bgColor: 'bg-red-50/60', borderColor: 'border-red-100' },
    { category: 'Server-side Development', description: 'Building application logic and server-side features.', skills: ['Node.js', 'API integration', 'Supabase', 'Full-stack web development'], colSpan: 'md:col-span-2 lg:col-span-1', bgColor: 'bg-blue-50/60', borderColor: 'border-blue-100' },
    { category: 'AI & Creative Technology', description: 'Using AI tools thoughtfully in creative development workflows.', skills: ['AI-assisted development', 'AI-powered applications', 'Website animation', 'UI/UX design'], colSpan: 'md:col-span-2 lg:col-span-1', bgColor: 'bg-purple-50/60', borderColor: 'border-purple-100' },
    { category: 'Presentations & Tools', description: 'Design, documents and the tools that keep projects moving.', skills: ['Presentation design', 'Pitch decks', 'VS Code', 'Git', 'Figma'], colSpan: 'md:col-span-2 lg:col-span-2', bgColor: 'bg-green-50/60', borderColor: 'border-green-100' },
  ];

  return (
    <section id="skills" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs  text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-100 shadow-sm">
              Technical Stack
            </span>
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Tools of the <span className="text-[#ff2a2a]">Trade</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
            A curated selection of modern technologies and frameworks I use to build scalable, high-performance digital solutions.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:auto-rows-[minmax(280px,auto)]">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative ${group.colSpan} ${group.bgColor} border ${group.borderColor} flex flex-col justify-between overflow-hidden rounded-[1.6rem] p-6 transition-all duration-500 will-change-transform hover:shadow-2xl sm:rounded-[2rem] md:p-10`}
            >
              {/* Subtle hover reveal gradient */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 mb-10">
                <h3 className="text-2xl md:text-3xl  text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {group.category}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed  max-w-sm">
                  {group.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 text-sm text-gray-700 bg-white border border-black/5 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1 hover:text-[#ff2a2a] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;