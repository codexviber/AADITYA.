// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { dbRequest } from '../lib_supabase';
import CategoryTags, { CATEGORIES } from './CategoryTags';
import mark from '../assets/brand/codexviber-mark.png';
import ThemeToggle from './ThemeToggle';
export default function PublicProjectsPage(){
  const [projects,setProjects]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  const [filter,setFilter]=useState('All');
  useEffect(()=>{try{const c=new URLSearchParams(window.location.search).get('category');if(c&&CATEGORIES.some(x=>x.id===c))setFilter(c);}catch{/* ignore */}},[]);
  useEffect(()=>{
    dbRequest('projects',{query:'select=*&order=featured.desc,created_at.desc'})
      .then(rows=>setProjects(Array.isArray(rows)?rows:[]))
      .catch(e=>{
        const msg = e.message || 'Projects could not be loaded.';
        if (!msg.toLowerCase().includes('supabase') && !msg.toLowerCase().includes('configuration')) {
          setError(msg);
        }
      })
      .finally(()=>setLoading(false));
  },[]);
  const counts={All:projects.length};projects.forEach(p=>{counts[p.category]=(counts[p.category]||0)+1;});
  const order=[...CATEGORIES.map(c=>c.id),...[...new Set(projects.map(p=>p.category).filter(Boolean))].filter(c=>!CATEGORIES.some(x=>x.id===c))];
  const shown=filter==='All'?projects:projects.filter(p=>p.category===filter);
  const groups=(filter==='All'?order.map(c=>[c,projects.filter(p=>p.category===c)]):[[filter,shown]]).filter(([,l])=>l.length);
  return <main className="pg-adapt min-h-screen bg-[#0b0b0f] text-white">
    <header className="sticky top-0 z-40 border-b border-red-600/30 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 md:px-10">
        <a href="/#home" className="text-sm font-bold text-gray-900 hover:text-red-600">← Portfolio</a>
        <div className="flex items-center gap-2">
          <ThemeToggle variant="bar" />
          <a href="/#contact" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-3.5 py-2 text-sm font-bold text-white hover:bg-red-500 sm:px-4">Let’s Connect</a>
        </div>
      </div>
    </header>
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="text-xs font-black uppercase tracking-[.18em] text-red-400 sm:tracking-[.3em]">Selected work</p>
      <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">Turning ideas into <span className="text-red-500">digital reality.</span></h1>
      {!loading&&!error&&<div className="mt-10"><CategoryTags dark showAll counts={counts} active={filter} onSelect={setFilter}/></div>}
      {loading&&<p className="mt-12 text-sm text-white/60">Loading projects…</p>}
      {error&&<div className="mt-12 rounded-2xl border border-amber-700/25 bg-amber-100 p-5 text-sm leading-relaxed text-amber-950">{error}</div>}
      {!loading&&!error&&shown.length===0&&<div className="mt-12 rounded-3xl border border-dashed border-white/20 px-6 py-16 text-center"><img src={mark} alt="" className="mx-auto h-20 w-20 object-contain"/><h2 className="mt-4 text-2xl font-black">Projects are on the way.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">New projects published from the private admin dashboard will appear here with a preview, name and description.</p></div>}
      {groups.map(([cat,list])=><div key={cat} className="mt-14">{filter==='All'&&<h2 className="mb-6 flex items-baseline gap-3 border-b border-white/10 pb-3 text-2xl font-bold">{cat} <span className="text-sm font-semibold text-white/40">{list.length}</span></h2>}<div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">{list.map(p=><article key={p.id} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#101015] transition hover:-translate-y-1 hover:border-red-500/60">
        <a href={`/projects/${p.id}`} aria-label={`View ${p.title}`} className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-red-900 via-[#3b0a0f] to-black">
          {p.preview_image_url&&<img src={p.preview_image_url} alt={`${p.title} preview`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={e=>{e.currentTarget.style.display='none';}}/>}
          {!p.preview_image_url&&p.category==='Video'&&p.media_url&&<video src={`${p.media_url}#t=0.5`} muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover"/>}<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
          {(p.project_url||p.media_url)&&<span className={`absolute right-4 top-4 rounded-full bg-black/65 px-3.5 py-1.5 text-[11px] font-black tracking-widest backdrop-blur ${p.category==='Video'?'text-white':p.category==='Presentation'?'text-amber-300':'text-green-400'}`}>{p.category==='Video'?'▶ VIDEO':p.category==='Presentation'?'SLIDES':'LIVE'}</span>}
          <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-white backdrop-blur">{p.category||'Project'}</span>
        </a>
        <div className="p-6 sm:p-7"><h2 className="text-2xl font-black tracking-tight sm:text-3xl">{p.title}</h2>
          <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-red-400">{[p.category,...(Array.isArray(p.tech_stack)?p.tech_stack.slice(0,2):[])].filter(Boolean).join(' · ')}</p>
          <p className="mt-4 line-clamp-4 text-base leading-relaxed text-white/65">{p.description}</p>
          <a href={`/projects/${p.id}`} className="mt-5 inline-flex items-center gap-2 text-lg font-black text-red-400 hover:text-red-300">View <span>↗</span></a></div>
      </article>)}</div></div>)}
      <div className="mt-16 text-center"><a href="/#home" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-bold hover:bg-white/10">← Back to Aaditya’s portfolio</a></div>
    </section>
    <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40">© {new Date().getFullYear()} Aaditya · CodeXViber · Ideas → Code → Impact</footer>
  </main>;
}
