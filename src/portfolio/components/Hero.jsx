// @ts-nocheck
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero-video.mp4';
import heroPoster from '../assets/hero-poster.jpg';
import DownloadCv from './DownloadCv';

export default function Hero() {
  useEffect(() => {
    let cancelled = false;
    import('aos').then((mod) => {
      if (cancelled) return;
      mod.default.init({ duration: 900, once: true, easing: 'ease-out' });
    });
    return () => { cancelled = true; };
  }, []);
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-x-clip bg-[#991b1b]">
      <video autoPlay loop muted playsInline preload="metadata" poster={heroPoster} className="absolute inset-0 z-0 h-full w-full object-cover" aria-label="CodeXViber animated logo backdrop">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#450a0a]/80 via-[#450a0a]/40 to-transparent" />
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 md:px-12 md:pt-32">
        <div className="w-full max-w-3xl">
          <p data-aos="fade-up" className="mb-5 max-w-full text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-red-300 sm:text-xs sm:tracking-[0.22em] md:text-sm">CodeXViber · Ideas → Code → Impact</p>
          <h1 data-aos="fade-up" data-aos-delay="80" className="mb-6 text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">Hi, I’m Aaditya.<br/><span className="bg-gradient-to-r from-red-300 via-white to-rose-400 bg-clip-text text-transparent">Founder & Developer</span></h1>
          <p data-aos="fade-up" data-aos-delay="160" className="mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">I turn ideas into digital reality with modern websites, animated experiences, AI-powered tools, presentations, and creative technology.</p>
          <div data-aos="fade-up" data-aos-delay="240" className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-white">View Projects ↗</a>
            <DownloadCv className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950" />
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">Let’s Connect</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold text-white/70 sm:gap-x-5 sm:text-sm"><span>Website Development</span><span className="text-rose-400">•</span><span>AI Solutions</span><span className="text-rose-400">•</span><span>Creative Technology</span></div>
        </div>
      </div>
    </section>
  );
}
