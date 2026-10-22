// @ts-nocheck
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { storageList, storageUpload, storageMove, deletePersonalFile, getPersonalFileUrl } from '../lib_supabase';
const MAX = 20 * 1024 * 1024;
const OK = ['pdf','png','jpg','jpeg','webp','gif','doc','docx','xls','xlsx','ppt','pptx','txt','csv','zip','md'];
const ext = n => (n.split('.').pop() || '').toLowerCase();
const clean = s => s.trim().replace(/[^a-zA-Z0-9._ -]/g, '').replace(/\s+/g, '-').slice(0, 80);
const size = b => !b ? '' : b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`;
const btn = 'rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-red-400 hover:text-red-700';
export default function AdminFiles({ token, userId, root = '', title, hint, presets = [] }) {
  const [folder, setFolder] = useState(''), [rows, setRows] = useState([]), [busy, setBusy] = useState(false), [msg, setMsg] = useState(''), [err, setErr] = useState('');
  const [q, setQ] = useState(''), [sort, setSort] = useState('name');
  const base = `${userId}/${root ? root + '/' : ''}`, cur = `${base}${folder ? folder + '/' : ''}`;
  const load = useCallback(async () => {
    setBusy(true); setErr('');
    try { setRows(await storageList(token, cur)); } catch (e) { setErr(e.message || 'Could not load files.'); } finally { setBusy(false); }
  }, [token, cur]);
  useEffect(() => { load(); }, [load]);
  const items = useMemo(() => {
    let r = rows.filter(x => x.name && x.name !== '.keep' && x.name !== '.emptyFolderPlaceholder' && !(root === '' && folder === '' && x.name === 'documents'));
    if (q) r = r.filter(x => x.name.toLowerCase().includes(q.toLowerCase()));
    const dirs = r.filter(x => !x.id), files = r.filter(x => x.id);
    const by = sort === 'new' ? (a, b) => new Date(b.created_at) - new Date(a.created_at) : sort === 'size' ? (a, b) => (b.metadata?.size || 0) - (a.metadata?.size || 0) : (a, b) => a.name.localeCompare(b.name);
    return [...dirs.sort((a, b) => a.name.localeCompare(b.name)), ...files.sort(by)];
  }, [rows, q, sort, root, folder]);
  const run = async (fn, ok) => { setBusy(true); setMsg(''); setErr(''); try { await fn(); setMsg(ok); await load(); } catch (e) { setErr(e.message || 'Something went wrong. Please try again.'); setBusy(false); } };
  const upload = async e => {
    const files = [...e.target.files]; e.target.value = '';
    const bad = files.find(f => !OK.includes(ext(f.name)) || f.size > MAX);
    if (bad) { setErr(`"${bad.name}" was not uploaded. Allowed: ${OK.join(', ')} up to 20 MB.`); return; }
    run(async () => { for (const f of files) await storageUpload(token, `${cur}${Date.now()}-${clean(f.name) || 'file'}`, f); }, `${files.length} file(s) uploaded.`);
  };
  const newFolder = name => { const n = clean(name); if (!n) return; run(() => storageUpload(token, `${cur}${n}/.keep`, new Blob([''], { type: 'text/plain' })), `Folder "${n}" created.`); };
  const open = async (x, dl) => { try { window.open(await getPersonalFileUrl(`${cur}${x.name}`, token, dl), '_blank', 'noopener,noreferrer'); } catch (e) { setErr(e.message || 'Could not open this file.'); } };
  const rename = x => { const n = clean(prompt('New file name (keep the extension):', x.name.replace(/^\d{10,}-/, '')) || ''); if (!n) return; if (ext(n) !== ext(x.name)) { setErr('Keep the same file extension.'); return; } run(() => storageMove(token, `${cur}${x.name}`, `${cur}${n}`), 'File renamed.'); };
  const del = x => { if (!confirm(`Delete "${x.name}" permanently?`)) return; run(() => deletePersonalFile(`${cur}${x.name}${x.id ? '' : '/.keep'}`, token), 'Deleted.'); };
  const crumbs = folder ? folder.split('/') : [];
  return <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    <h2 className="text-xl font-black">{title}</h2><p className="mt-1 text-sm text-slate-600">{hint}</p>
    <div className="mt-4 flex flex-wrap items-center gap-1 text-sm"><button className="font-bold text-red-700 hover:underline" onClick={() => setFolder('')}>{root ? 'All documents' : 'All files'}</button>{crumbs.map((c, i) => <React.Fragment key={i}><span className="text-slate-400">/</span><button className="font-bold text-red-700 hover:underline" onClick={() => setFolder(crumbs.slice(0, i + 1).join('/'))}>{c}</button></React.Fragment>)}</div>
    <div className="mt-4 flex flex-wrap gap-3"><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search here" aria-label="Search files" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-red-500" />
      <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort files" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm"><option value="name">Name</option><option value="new">Newest</option><option value="size">Largest</option></select></div>
    <div className="mt-4 flex flex-wrap items-center gap-2"><label className="cursor-pointer rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-800">Upload files<input type="file" multiple className="hidden" onChange={upload} disabled={busy} /></label>
      <button className={btn} onClick={() => newFolder(prompt('Folder name:') || '')} disabled={busy}>+ New folder</button>{!folder && presets.map(p => <button key={p} className={btn} onClick={() => newFolder(p)} disabled={busy}>+ {p}</button>)}</div>
    {busy && <p className="mt-4 text-sm text-slate-500" role="status">Working…</p>}{msg && !err && <p className="mt-4 text-sm font-semibold text-green-700" role="status">{msg}</p>}{err && <p className="mt-4 text-sm font-semibold text-red-700" role="alert">{err}</p>}
    <ul className="mt-5 divide-y divide-slate-100">{!busy && items.length === 0 && <li className="py-8 text-center text-sm text-slate-500">Nothing here yet. Upload a file or create a folder.</li>}
      {items.map(x => <li key={x.name} className="flex flex-wrap items-center justify-between gap-3 py-3"><div className="min-w-0">{x.id ? <p className="truncate text-sm font-bold">{x.name.replace(/^\d{10,}-/, '')}</p> : <button className="truncate text-sm font-black text-red-700 hover:underline" onClick={() => setFolder(folder ? `${folder}/${x.name}` : x.name)}>📁 {x.name}</button>}<p className="text-xs text-slate-500">{x.id ? `${size(x.metadata?.size)} · ${new Date(x.created_at).toLocaleDateString()}` : 'Folder'}</p></div>
        <div className="flex flex-wrap gap-2">{x.id && <><button className={btn} onClick={() => open(x, false)}>Preview</button><button className={btn} onClick={() => open(x, true)}>Download</button><button className={btn} onClick={() => rename(x)}>Rename</button></>}<button className={btn} onClick={() => del(x)}>Delete</button></div></li>)}</ul>
    <p className="mt-5 text-xs text-slate-500">Private: only your signed-in admin account can open these files. Links expire after two minutes.</p></section>;
}
