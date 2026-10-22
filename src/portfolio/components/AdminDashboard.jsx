// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { dbRequest } from '../lib_supabase';
export default function AdminDashboard({ token, projects, setTab }) {
  const [msgs, setMsgs] = useState(null), [note, setNote] = useState('');
  useEffect(() => { dbRequest('contact_messages', { token, query: 'select=id,is_read' }).then(r => setMsgs(Array.isArray(r) ? r : [])).catch(() => setMsgs([])); }, [token]);
  const live = projects.filter(p => p.published !== false).length, unread = (msgs || []).filter(m => !m.is_read).length;
  const backup = async () => {
    try {
      const m = await dbRequest('contact_messages', { token, query: 'select=*&order=created_at.desc' });
      const blob = new Blob([JSON.stringify({ exported_at: new Date().toISOString(), projects, messages: m }, null, 2)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `codexviber-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click(); URL.revokeObjectURL(a.href);
      setNote('Backup downloaded. Keep it somewhere private — it includes visitor messages.');
    } catch (e) { setNote(e.message || 'Backup failed. Please try again.'); }
  };
  const Card = ({ label, value, sub, to }) => <button onClick={() => setTab(to)} className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-red-300"><p className="text-xs font-black uppercase tracking-widest text-slate-500">{label}</p><p className="mt-2 text-4xl font-black text-red-700">{value}</p><p className="mt-1 text-sm text-slate-600">{sub}</p></button>;
  const Act = ({ label, onClick }) => <button onClick={onClick} className="rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-800">{label}</button>;
  return <section className="space-y-6"><div><h2 className="text-2xl font-black">Dashboard</h2><p className="text-sm text-slate-600">Private overview of your portfolio.</p></div>
    <div className="grid gap-4 sm:grid-cols-3"><Card label="Projects" value={projects.length} sub={`${live} live · ${projects.length - live} hidden`} to="mine" /><Card label="Messages" value={msgs ? msgs.length : '…'} sub={`${unread} unread`} to="messages" /><Card label="Documents & files" value="→" sub="PDF generator and private storage" to="docs" /></div>
    <div className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-black">Quick actions</h3><div className="mt-4 flex flex-wrap gap-3"><Act label="+ Add project" onClick={() => setTab('add')} /><Act label="Upload file" onClick={() => setTab('storage')} /><Act label="View messages" onClick={() => setTab('messages')} /><Act label="Download backup" onClick={backup} /></div>{note && <p className="mt-4 text-sm text-slate-700" role="status">{note}</p>}</div></section>;
}
