// @ts-nocheck
/** Eased in-page scrolling. Cancels if the visitor scrolls themselves. */
export function bindSmoothAnchors() {
  let raf = 0;
  const cancel = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  const scrollToY = (y) => {
    cancel();
    const target = Math.max(0, y);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      window.scrollTo(0, target);
      return;
    }
    const start = window.scrollY;
    const dist = target - start;
    if (Math.abs(dist) < 2) return;
    const duration = Math.min(1100, Math.max(560, Math.abs(dist) * 0.48));
    const t0 = performance.now();
    const ease = (t) => 1 - (1 - t) ** 4;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      window.scrollTo(0, start + dist * ease(p));
      raf = p < 1 ? requestAnimationFrame(step) : 0;
    };
    raf = requestAnimationFrame(step);
  };

  const onClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest?.('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (!href.startsWith('#')) return;
    const id = decodeURIComponent(href.slice(1));
    if (!id || id === 'home') {
      event.preventDefault();
      scrollToY(0);
      history.replaceState(null, '', '#home');
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    scrollToY(y);
    history.replaceState(null, '', `#${id}`);
  };

  document.addEventListener('click', onClick);
  window.addEventListener('wheel', cancel, { passive: true });
  window.addEventListener('touchstart', cancel, { passive: true });
  return () => {
    cancel();
    document.removeEventListener('click', onClick);
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
  };
}
