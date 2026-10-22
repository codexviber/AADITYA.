// @ts-nocheck
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/** Smooth scroll with Lenis + eased anchor jumps. Cancels if the visitor scrolls themselves. */
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Keep existing anchor binding but use Lenis for scroll
  let rafId = 0;
  const cancel = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    lenis.stop();
  };

  const scrollToY = (y) => {
    cancel();
    lenis.start();
    lenis.scrollTo(y, {
      duration: Math.min(1.1, Math.max(0.56, Math.abs(y - window.scrollY) * 0.00048)),
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
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
    lenis.destroy();
    document.removeEventListener('click', onClick);
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
  };
}

// Backward compat
export function bindSmoothAnchors() {
  return initSmoothScroll();
}
