// @ts-nocheck
import React from 'react';
const values=[
 {icon:'↗',title:'Fast Delivery',text:'Clear milestones and practical planning to keep work moving forward.'},
 {icon:'◇',title:'Quality Code',text:'Responsive layouts, maintainable components, and care for the details.'},
 {icon:'✦',title:'Creative Ideas',text:'A visual direction tailored to each client instead of one generic template.'},
 {icon:'∞',title:'Long-Term Support',text:'Help with updates, maintenance, improvements, and the next phase of your product.'},
];
export default function Certifications(){return <section id="values" className="bg-white px-5 py-16 sm:px-6 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-10 max-w-3xl"><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-rose-600 sm:tracking-[.25em]">The CodeXViber approach</p><h2 className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Small details. <span className="bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent">Real impact.</span></h2><p className="mt-4 leading-relaxed text-gray-500">I aim to make technology approachable, useful, and visually memorable.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(v=><article key={v.title} className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 text-2xl font-black text-white">{v.icon}</span><h3 className="mt-5 text-xl font-black text-gray-900">{v.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-500">{v.text}</p></article>)}</div></div></section>}
