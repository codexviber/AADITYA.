// @ts-nocheck
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { dbRequest, isSupabaseConfigured } from '../lib_supabase';

export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [status,setStatus]=useState('');
  const onChange=(e)=>setForm({...form,[e.target.name]:e.target.value});
  async function submit(e){e.preventDefault();setStatus('Sending…');let ok=false,lastErr='';
    if(isSupabaseConfigured){try{await dbRequest('contact_messages',{method:'POST',body:{name:form.name.trim(),email:form.email.trim(),message:form.message.trim()},prefer:'return=minimal'});ok=true;}catch(err){lastErr=err.message;}}
    const key=import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if(key){try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:key,name:form.name,email:form.email,message:form.message})});const d=await r.json();if(d.success)ok=true;else lastErr=d.message||lastErr;}catch(err){lastErr=err.message||lastErr;}}
    if(ok){setStatus('Thanks! Your message has been sent.');setForm({name:'',email:'',message:''});}
    else setStatus(lastErr?'Message could not be sent. Please use email below.':'The message form is not configured yet. You can contact me using email below.');}
  const ref=useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);
  return (
    <section ref={ref} id="contact" className="relative flex min-h-screen w-full items-end overflow-hidden border-t border-gray-900 bg-[#0a0a0a] pt-32">
      <motion.div style={{ y }} className="pointer-events-none absolute left-0 top-0 z-0 flex h-full w-full flex-col items-center justify-start overflow-hidden pt-16 md:pt-12">
        <h1 className="origin-top select-none text-[15vw] font-black uppercase leading-[0.8] tracking-tighter text-white/15 md:text-[12vw]">Contact</h1>
      </motion.div>
      <div className="relative z-10 flex w-full items-end justify-end">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease: 'easeOut' }} className="flex w-full flex-col justify-between bg-[#ff2a2a] p-5 text-white sm:p-8 md:w-[85%] md:p-16 lg:w-[75%]">
          <div className="mb-8 text-xs uppercase tracking-[0.16em] opacity-90 sm:tracking-[0.2em] md:mb-20">Reach Us</div>
          <form onSubmit={submit} className="flex w-full flex-col gap-7 md:gap-14">
            <input name="name" type="text" value={form.name} onChange={onChange} required placeholder="Your Name" className="w-full border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl" />
            <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email" className="w-full border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl" />
            <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="Type your message here" className="w-full resize-none border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl" />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white">Send message ↗</button>
            </div>
            {status && <p className="text-sm font-semibold" role="status">{status}</p>}
          </form>
          <div className="mt-10 flex flex-col gap-2 text-sm text-red-50 sm:flex-row sm:flex-wrap sm:gap-x-8"><span>India</span><a className="break-all hover:underline" href="mailto:aaditya37codex@gmail.com">aaditya37codex@gmail.com</a><a className="hover:underline" href="https://www.instagram.com/code.x.viber/" target="_blank" rel="noreferrer">Instagram · @code.x.viber</a></div>
        </motion.div>
      </div>
    </section>
  );
}
