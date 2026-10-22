// @ts-nocheck
import React, { useEffect, useState } from 'react';

const KEY = 'theme';
const read = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function applyTheme(mode) {
  const root = document.documentElement;
  root.classList.toggle('dark', mode === 'dark');
  root.style.colorScheme = mode;
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* storage unavailable */
  }
}

function Sun() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function Moon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
    </svg>
  );
}

const OPTIONS = [
  { id: 'light', label: 'Light', Icon: Sun },
  { id: 'dark', label: 'Dark', Icon: Moon },
];

export default function ThemeToggle({ variant = 'glass' }) {
  const [mode, setMode] = useState(read);
  useEffect(() => {
    setMode(read());
  }, []);

  const shell =
    variant === 'bar'
      ? 'border border-gray-200 bg-white text-gray-800 shadow-sm dark:border-white/15 dark:bg-[#16161c] dark:text-white'
      : 'border border-white/30 bg-black/30 text-white backdrop-blur-md';

  return (
    <div role="group" aria-label="Color theme" className={`inline-flex shrink-0 items-center rounded-full p-0.5 ${shell}`}>
      {OPTIONS.map(({ id, label, Icon }) => {
        const active = mode === id;
        const onLightBar = variant === 'bar';
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => {
              applyTheme(id);
              setMode(id);
            }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[11px] font-semibold transition-colors duration-200 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${
              active
                ? onLightBar
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-950'
                  : 'bg-white text-gray-950'
                : 'bg-transparent text-current/80 hover:text-current'
            }`}
          >
            <Icon />
            <span className="sr-only sm:not-sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
