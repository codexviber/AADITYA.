// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { dbRequest, isSupabaseConfigured } from '../lib_supabase';
import CategoryTags from './CategoryTags';
export default function Projects() {
  const [counts, setCounts] = useState({});
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    dbRequest('projects', { query: 'select=category' }).then(rows => {
      if (!Array.isArray(rows)) return;
      const c = { All: rows.length }; rows.forEach(r => { c[r.category] = (c[r.category] || 0) + 1; }); setCounts(c);
    }).catch(() => {});
  }, []);
  return <section id="projects" className="relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32">
    <div className="mx-auto max-w-6xl">
      <div data-aos="fade-up" className="mb-12 max-w-2xl"><span className="mb-6 inline-block rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#ff2a2a]">Selected work</span>
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-6xl">Turning ideas into <span className="text-[#ff2a2a]">digital reality.</span></h2>
        <p className="mt-5 text-base leading-relaxed text-gray-500 md:text-lg">Pick a category to see my work. Each one opens on its own page.</p></div>
      <CategoryTags counts={counts} hrefFor={it => `/projects?category=${encodeURIComponent(it.id)}`} />
      <div data-aos="fade-up" className="mt-14 text-center"><a href="/projects" className="inline-flex items-center gap-3 rounded-full bg-[#ff2a2a] px-8 py-4 text-sm text-white shadow-[0_10px_25px_rgba(255,42,42,0.25)] transition hover:-translate-y-0.5 hover:bg-gray-900">View Projects <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>;
}
