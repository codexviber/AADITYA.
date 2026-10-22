import React from 'react';
import adminGear from '../assets/brand/admin-gear.png';
import DownloadCv from './DownloadCv';

export default function Footer() {
  return (
    <footer className="border-t-4 border-red-600 bg-[#0b0b0f] px-6 py-10 text-white md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/85">Ideas → Code → Impact</p>
        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/90">
          <a className="hover:underline" href="mailto:aaditya37codex@gmail.com">Email</a>
          <a className="hover:underline" href="https://wa.me/919201109621" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="hover:underline" href="https://www.instagram.com/code.x.viber/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:underline" href="/projects">Projects</a>
          <DownloadCv className="inline-flex min-h-11 items-center gap-2 font-semibold hover:underline" />
          <a
            href="/admin"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white"
            aria-label="Admin login"
          >
            <img src={adminGear} alt="" className="h-7 w-7 object-contain" />
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-7 max-w-7xl border-t border-white/20 pt-5 text-xs text-white/70">© {new Date().getFullYear()} Aaditya. All rights reserved.</div>
    </footer>
  );
}