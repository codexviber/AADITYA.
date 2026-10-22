// @ts-nocheck
import React from 'react';
import stackImage from '../assets/about/aaditya-photo.jpg';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col items-start gap-12 md:flex-row md:gap-16">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="mt-12 flex w-full min-w-0 shrink-0 flex-col items-center md:mt-0 md:w-[350px]">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Aaditya Srivastava" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        <div className="mt-10 text-center text-white"><p className="text-2xl tracking-tight sm:text-3xl">Aaditya Srivastava</p><p className="mt-1 text-red-50">Founder of CodeXViber</p></div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="relative z-20 mt-8 min-w-0 flex-1 text-white md:mt-0">
          
          <h2 className="mb-4 text-3xl text-black sm:text-4xl md:text-5xl">Hello!</h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-red-50 sm:text-lg">
            Hi, my name is <span className="mx-1 text-lg font-bold uppercase tracking-wide text-black sm:text-xl">Aaditya Srivastava</span>, founder of CodeXViber — a developer and creator who builds modern websites, AI-powered tools and presentations that turn ideas into digital reality.
          </p>

          {/* Horizontal Skills Row (Transparent & Large) */}
          <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10">
            <img 
              data-aos="zoom-in" data-aos-delay="300"
              src={reactImage} 
              alt="React" 
              className="h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24" 
            />
            <img 
              data-aos="zoom-in" data-aos-delay="450"
              src={nodeImage} 
              alt="Node.js" 
              className="h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24" 
            />
            <img 
              data-aos="zoom-in" data-aos-delay="600"
              src={mongoImage} 
              alt="MongoDB" 
              className="h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24" 
            />
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
