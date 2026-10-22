// @ts-nocheck
import React from 'react';
import { Download } from 'lucide-react';

export const CV_HREF = '/Aaditya-Srivastava-CV.pdf';
export const CV_FILE = 'Aaditya-Srivastava-CV.pdf';

export default function DownloadCv({ className = '', children = 'Download CV' }) {
  return (
    <a href={CV_HREF} download={CV_FILE} className={className}>
      <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}
