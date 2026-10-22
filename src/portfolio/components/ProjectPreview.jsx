// @ts-nocheck
import React, { useEffect, useState } from 'react';
export default function ProjectPreview({ form, image, editingId, mediaName }) {
  const [bad, setBad] = useState(false);
  useEffect(() => { setBad(false); }, [image]);
  const tech = form.tech_stack.split(',').map(s => s.trim()).filter(Boolean);
  const url = form.project_url.trim();
  const Block = ({ n, t, x }) => x.trim() ? <div className="mt-4"><p className="text-[10px] font-black uppercase tracking-[.25em] text-red-400">{n} · {t}</p><p className="mt-1 whitespace-pre-line text-sm text-white/80">{x}</p></div> : null;
  return <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6" aria-label="Live preview of the project page">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h3 className="text-lg font-black">Preview page <span className="text-sm font-semibold text-slate-500">· updates as you type</span></h3>{editingId && <a href={`/projects/${editingId}`} target="_blank" rel="noreferrer" className="text-sm font-bold text-red-700 hover:underline">Open the live page ↗</a>}</div>
    <article className="overflow-hidden rounded-2xl bg-[#0b0b0f] p-5 text-white sm:p-7">
      <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-400">{form.category || 'Project'} · Case study</p>
      <h4 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{form.title.trim() || 'Your project title'}</h4>
      {image && !bad ? <img src={image} alt="Website preview" onError={() => setBad(true)} className="mt-4 w-full rounded-xl border border-white/10 object-cover" />
        : <div className="mt-4 flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-4 text-center text-sm text-white/60">{url ? 'Creating the website screenshot… this can take a few seconds. Or upload an image above.' : 'Add the website link and a screenshot appears here automatically.'}</div>}
      {(form.category==='Video'||form.category==='Presentation')&&<p className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold">{form.category==='Video'?'▶ Video':'▤ Presentation'}: {mediaName||'no file selected yet'}</p>}<p className="mt-4 text-sm leading-relaxed text-white/80">{form.description.trim() || 'Your description appears here.'}</p>
      {tech.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{tech.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold">{t}</span>)}</div>}
      <Block n="01" t="The problem" x={form.problem || ''} /><Block n="02" t="What I built" x={form.solution || ''} /><Block n="03" t="Results" x={form.results || ''} />
      {url && <span className="mt-5 inline-block rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold">Visit live project ↗</span>}
    </article>
    {!form.published && <p className="mt-3 text-xs font-semibold text-amber-700">This project is hidden — visitors will not see this page until you tick Published.</p>}
  </section>;
}
