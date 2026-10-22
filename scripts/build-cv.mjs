import { writeFileSync } from 'node:fs';
import { jsPDF } from 'jspdf';

const doc = new jsPDF({ unit: 'pt', format: 'a4' });
const W = doc.internal.pageSize.getWidth();
const H = doc.internal.pageSize.getHeight();
const M = 40;
const red = [185, 28, 28];
const ink = [23, 23, 23];
const mute = [90, 90, 98];

doc.setFillColor(...red);
doc.rect(0, 0, W, 118, 'F');
doc.setFillColor(255, 255, 255);
doc.rect(0, 118, W, 6, 'F');

doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(26);
doc.text('Aaditya Srivastava', M, 48);
doc.setFont('helvetica', 'normal');
doc.setFontSize(12);
doc.text('Founder & Developer  ·  CodeXViber', M, 70);
doc.setFontSize(10);
doc.text('Ideas  →  Code  →  Impact', M, 90);

doc.setFontSize(9);
const contacts = [
  ['aaditya37codex@gmail.com', 'mailto:aaditya37codex@gmail.com'],
  ['+91 92011 09621', 'https://wa.me/919201109621'],
  ['Instagram @code.x.viber', 'https://www.instagram.com/code.x.viber/'],
  ['India', null],
];
let cx = M;
contacts.forEach(([label, url], i) => {
  if (i) {
    doc.setTextColor(255, 210, 210);
    doc.text('·', cx, 108);
    cx += 10;
  }
  doc.setTextColor(255, 255, 255);
  if (url) doc.textWithLink(label, cx, 108, { url });
  else doc.text(label, cx, 108);
  cx += doc.getTextWidth(label) + 8;
});

let y = 148;
const section = (title) => {
  doc.setTextColor(...red);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(title.toUpperCase(), M, y);
  doc.setDrawColor(...red);
  doc.setLineWidth(1);
  doc.line(M, y + 6, W - M, y + 6);
  y += 24;
};

const body = (text, size = 10.5) => {
  doc.setTextColor(...ink);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(size);
  const lines = doc.splitTextToSize(text, W - M * 2);
  doc.text(lines, M, y);
  y += lines.length * (size + 3) + 8;
};

section('Profile');
body(
  'Founder of CodeXViber. I build modern websites, animated experiences, AI-powered tools, presentations, and creative technology — turning ideas into digital reality that is useful and visually memorable.',
);

section('What I build');
const offers = [
  ['Website Development', 'Business websites, portfolios, and animated landing pages with React, Next.js, and Tailwind CSS.'],
  ['Presentation Design', 'Pitch decks with a clear story and strong visual hierarchy.'],
  ['AI Agent Solutions', 'Practical AI-powered tools and workflows that take repetitive work off the table.'],
  ['Robotics & Automation', 'Connected components, automation experiments, and the technical setup that keeps products running.'],
];
offers.forEach(([title, text]) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...ink);
  doc.text(title, M, y);
  y += 14;
  body(text, 10);
});

section('Skills');
const groups = [
  ['Frontend & UI', 'HTML, CSS, JavaScript, React, Next.js, Tailwind CSS'],
  ['Server-side', 'Node.js, API integration, Supabase, full-stack web development'],
  ['AI & creative tech', 'AI-assisted development, AI-powered applications, website animation, UI/UX design'],
  ['Presentations & tools', 'Presentation design, pitch decks, VS Code, Git, Figma'],
];
groups.forEach(([title, text]) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...ink);
  doc.text(title, M, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...mute);
  const lines = doc.splitTextToSize(text, W - M * 2 - 130);
  doc.text(lines, M + 130, y);
  y += Math.max(16, lines.length * 13) + 4;
});

y += 8;
section('How I work');
const steps = [
  ['01  Idea', 'Talk through goals, audience, and scope.'],
  ['02  Design', 'See the look and flow before any code.'],
  ['03  Build', 'Fast, responsive, clean code with regular updates.'],
  ['04  Launch', 'Go live, then stay for fixes and growth.'],
];
steps.forEach(([title, text]) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...ink);
  doc.text(title, M, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...mute);
  doc.text(text, M + 110, y);
  y += 18;
});

y += 10;
section('Approach');
body('Fast delivery with clear milestones. Quality code: responsive layouts and care for the details. A visual direction tailored to each client. Long-term support for updates, maintenance, and the next phase.', 10.5);

doc.setFillColor(...red);
doc.rect(0, H - 36, W, 36, 'F');
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Available for new projects   ·   Aaditya  ·  CodeXViber', M, H - 15);

const out = new URL('../public/Aaditya-Srivastava-CV.pdf', import.meta.url);
writeFileSync(out, Buffer.from(doc.output('arraybuffer')));
console.log('wrote', out.pathname, doc.output('arraybuffer').byteLength);
