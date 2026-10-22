// @ts-nocheck
import React from 'react';
export default function AdminSettings({ session, onSignOut }) {
  const Row = ({ k, v }) => <div className="flex flex-wrap justify-between gap-2 border-b border-slate-100 py-3 text-sm"><span className="font-semibold text-slate-600">{k}</span><span className="break-all font-bold">{v}</span></div>;
  return <section className="max-w-3xl space-y-6"><div className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-black">Settings &amp; Security</h2>
    <div className="mt-4"><Row k="Signed in as" v={session.user?.email || '—'} /><Row k="Admin ID" v={session.user?.id} /><Row k="Access" v="Authorised administrators only (admin_users table)" /></div>
    <button onClick={onSignOut} className="mt-5 rounded-full bg-red-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-red-800">Sign out</button></div>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700"><h3 className="font-black text-slate-900">How access is protected</h3><ul className="mt-3 list-disc space-y-2 pl-5"><li>Sign-in is checked by Supabase Auth, and the database and storage rules also check the admin list.</li><li>To add or remove an administrator, edit the <b>admin_users</b> table in Supabase.</li><li>Only the public anon key is in this site. Never put a service-role key in the code.</li><li>Private files use a private bucket with short-lived links. Use the dashboard’s backup button regularly.</li><li>Sign out on shared computers.</li></ul></div></section>;
}
