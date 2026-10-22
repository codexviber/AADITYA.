// @ts-nocheck
import React, { useMemo, useState } from 'react';
const inp = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-red-500';
export default function AdminDocuments({ api, logoMark }) {
  const { docTypes, commonFields, templateFields, documentHtml, initialDocForm, buildPdf, openPrint } = api;
  const { shared, perDoc } = useMemo(() => {
    const count = {}; docTypes.forEach(t => (templateFields[t.id] || []).forEach(f => { count[f.key] = (count[f.key] || 0) + 1; }));
    const used = new Set(), shared = [], perDoc = {};
    docTypes.forEach(t => { perDoc[t.id] = []; (templateFields[t.id] || []).forEach(f => { if (count[f.key] > 1) { if (!used.has(f.key)) { used.add(f.key); shared.push(f); } } else perDoc[t.id].push(f); }); });
    return { shared, perDoc };
  }, [docTypes, templateFields]);
  const [form, setForm] = useState(() => docTypes.reduce((a, t) => ({ ...initialDocForm(t.id), ...a }), {}));
  const [busy, setBusy] = useState(false), [msg, setMsg] = useState(''), [err, setErr] = useState('');
  const set = (k, v) => setForm(o => ({ ...o, [k]: v }));
  const Field = ({ f, req }) => <label className={`block text-sm font-semibold text-slate-700 ${f.type === 'textarea' ? 'md:col-span-2' : ''}`}>{f.label}{req && ' *'}
    {f.type === 'textarea' ? <textarea rows={f.rows || 3} value={form[f.key] ?? ''} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder} required={req} className={inp} />
      : <input type={f.type || 'text'} value={form[f.key] ?? ''} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder} required={req} className={inp} />}
    {f.hint && <span className="mt-1 block text-xs font-normal text-slate-500">{f.hint}</span>}</label>;
  const chosen = docTypes;
  const submit = async e => {
    e.preventDefault(); setErr(''); setMsg('');
    if (!chosen.length) { setErr('Select at least one document to include.'); return; }
    setBusy(true);
    const htmls = chosen.map(t => documentHtml(t.id, form));
    try { await buildPdf(htmls, `CodeXViber-${(form.clientName || 'Client').replace(/[^a-zA-Z0-9-]+/g, '-')}-Documents.pdf`, logoMark); setMsg(`One PDF with ${chosen.length} document(s) was downloaded. Nothing is saved anywhere.`); }
    catch { setErr('Could not create the PDF directly, so the print views were opened instead.'); htmls.forEach(h => openPrint(h)); }
    finally { setBusy(false); }
  };
  return <form onSubmit={submit} className="max-w-4xl space-y-5">
    <div><h2 className="text-xl font-black">Client documents — fill once, one PDF</h2><p className="mt-1 text-sm text-slate-600">Answer everything on this page. One PDF is created with all five documents (Invoice, Onboarding, Contract, Discovery Call, Proposal). Nothing is saved.</p></div>
    <section className="rounded-2xl border border-slate-200 bg-white p-5"><div className="grid gap-4 md:grid-cols-2">{[...commonFields, ...shared, ...docTypes.flatMap(t => perDoc[t.id])].map(f => <Field key={f.key} f={f} req={!!f.required} />)}</div></section>
    {err && <p className="text-sm font-semibold text-red-700" role="alert">{err}</p>}{msg && <p className="text-sm font-semibold text-green-700" role="status">{msg}</p>}
    <button disabled={busy} className="rounded-full bg-red-700 px-7 py-3 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-60">{busy ? 'Creating PDF…' : 'Create one PDF with all documents ↓'}</button>
  </form>;
}
