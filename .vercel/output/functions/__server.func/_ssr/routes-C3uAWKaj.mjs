import { o as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Download } from "../_libs/lucide-react.mjs";
import { r as dbRequest, t as ThemeToggle } from "./ThemeToggle-DUgJioMZ.mjs";
import { n as CategoryTags } from "./CategoryTags-BzxL6PLy.mjs";
import { a as motion, i as useMotionValueEvent, n as useTransform, o as AnimatePresence, r as useScroll, t as useSpring } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C3uAWKaj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Preloader() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), 5e3);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { y: 0 },
		exit: { y: "-100%" },
		transition: {
			duration: .9,
			ease: [
				.76,
				0,
				.24,
				1
			]
		},
		className: "fixed inset-0 z-[100000] flex h-screen w-full items-center justify-center overflow-hidden bg-red-600",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-full px-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "relative text-[12vw] font-black leading-none sm:text-7xl md:text-8xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white/25",
					children: "AADITYA."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: { clipPath: "inset(0 100% 0 0)" },
					animate: { clipPath: "inset(0 0% 0 0)" },
					transition: {
						duration: 3.6,
						delay: .3,
						ease: [
							.65,
							0,
							.35,
							1
						]
					},
					className: "absolute inset-0 text-white",
					children: "AADITYA."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scaleX: 0,
					opacity: 0
				},
				animate: {
					scaleX: 1,
					opacity: 1
				},
				transition: {
					duration: .7,
					delay: .35
				},
				className: "mx-auto mt-5 h-[3px] w-32 origin-left rounded-full bg-white/90"
			})]
		})
	}, "preloader") });
}
var CV_HREF = "/Aaditya-Srivastava-CV.pdf";
var CV_FILE = "Aaditya-Srivastava-CV.pdf";
function DownloadCv({ className = "", children = "Download CV" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: CV_HREF,
		download: CV_FILE,
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
			className: "h-4 w-4 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
/** Eased in-page scrolling. Cancels if the visitor scrolls themselves. */
function bindSmoothAnchors() {
	let raf = 0;
	const cancel = () => {
		if (raf) cancelAnimationFrame(raf);
		raf = 0;
	};
	const scrollToY = (y) => {
		cancel();
		const target = Math.max(0, y);
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			window.scrollTo(0, target);
			return;
		}
		const start = window.scrollY;
		const dist = target - start;
		if (Math.abs(dist) < 2) return;
		const duration = Math.min(1100, Math.max(560, Math.abs(dist) * .48));
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
		const anchor = event.target.closest?.("a[href]");
		if (!anchor) return;
		const href = anchor.getAttribute("href") || "";
		if (!href.startsWith("#")) return;
		const id = decodeURIComponent(href.slice(1));
		if (!id || id === "home") {
			event.preventDefault();
			scrollToY(0);
			history.replaceState(null, "", "#home");
			return;
		}
		const el = document.getElementById(id);
		if (!el) return;
		event.preventDefault();
		const y = el.getBoundingClientRect().top + window.scrollY - 84;
		scrollToY(y);
		history.replaceState(null, "", `#${id}`);
	};
	document.addEventListener("click", onClick);
	window.addEventListener("wheel", cancel, { passive: true });
	window.addEventListener("touchstart", cancel, { passive: true });
	return () => {
		cancel();
		document.removeEventListener("click", onClick);
		window.removeEventListener("wheel", cancel);
		window.removeEventListener("touchstart", cancel);
	};
}
var Navbar = () => {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40);
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => bindSmoothAnchors(), []);
	const navLinks = [
		"Home",
		"About",
		"Expertise",
		"Skills",
		"Projects",
		"Contact"
	];
	const topText = isOpen || !isScrolled ? "text-white" : "text-gray-900 dark:text-white";
	const themeVariant = isOpen || !isScrolled ? "glass" : "bar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: `fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isOpen ? "bg-[#ff2a2a] py-4" : isScrolled ? "bg-white/70 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f14]/80 dark:shadow-[0_4px_30px_rgba(0,0,0,0.24)]" : "bg-transparent py-5"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-black/10 dark:bg-white/10",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-[#ff2a2a]",
					style: { width: `${progress * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 md:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#home",
							onClick: () => setIsOpen(false),
							className: `truncate text-xl tracking-tight transition-colors duration-500 sm:text-2xl ${topText}`,
							children: ["AADITYA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#ff2a2a]",
								children: "."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden space-x-7 xl:flex xl:space-x-8",
						children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${link.toLowerCase()}`,
							className: `group relative text-sm tracking-wide transition-colors duration-500 ${isScrolled ? "text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white" : "text-white/80 hover:text-white"}`,
							children: [link, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-[2px] w-0 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" })]
						}, link))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3 md:gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { variant: themeVariant }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center space-x-4 xl:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/projects",
										className: `rounded-full border px-5 py-2 text-sm transition-all duration-500 ${isScrolled ? "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 dark:border-white/20 dark:text-gray-200 dark:hover:border-white dark:hover:text-white" : "border-white/30 text-white hover:border-white hover:bg-white/10"}`,
										children: "All Projects"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										className: `rounded-full px-6 py-2.5 text-sm transition-all duration-500 ${isScrolled ? "bg-gray-900 text-white shadow-none hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.25)] dark:bg-white dark:text-gray-900 dark:hover:bg-[#ff2a2a] dark:hover:text-white" : "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black"}`,
										children: "Let’s Connect"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: `inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all duration-500 ${isScrolled ? "border border-gray-300 text-gray-800 hover:border-gray-900 hover:text-gray-900 dark:border-white/20 dark:text-gray-100 dark:hover:border-white" : "border border-white/40 text-white hover:bg-white/10"}` })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIsOpen(!isOpen),
								className: `p-2 transition-colors duration-500 focus:outline-none xl:hidden ${topText}`,
								"aria-label": "Toggle navigation drawer menu",
								"aria-expanded": isOpen,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "h-6 w-6",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: "2.5",
										d: "M6 18L18 6M6 6l12 12"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: "2.5",
										d: "M4 6h16M4 12h16M4 18h16"
									})
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute left-0 top-full w-full transition-all duration-500 ease-in-out xl:hidden ${isOpen ? "max-h-[calc(100svh-4.5rem)] overflow-y-auto bg-[#ff2a2a] py-6 opacity-100 shadow-2xl" : "pointer-events-none max-h-0 overflow-hidden opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col space-y-4 px-6",
					children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${link.toLowerCase()}`,
						onClick: () => setIsOpen(false),
						className: "border-b border-white/10 pb-2.5 text-base text-white transition-colors hover:text-black",
						children: link
					}, link)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-black/15 px-6 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#ff2a2a]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/projects",
								className: "w-full rounded-full border border-white/50 px-6 py-3 text-center text-white transition-all duration-300 hover:bg-white hover:text-[#ff2a2a]",
								children: "All Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: () => setIsOpen(false),
								className: "w-full rounded-full bg-white px-6 py-3 text-center text-[#ff2a2a] shadow-xl transition-all duration-300 hover:bg-gray-950 hover:text-white",
								children: "Let’s Connect"
							})
						]
					})]
				})
			})
		]
	});
};
var hero_video_default = "/assets/hero-video-Cpa3aZGY.mp4";
var hero_poster_default = "/assets/hero-poster-Buia8FCm.jpg";
function Hero() {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		import("../_libs/aos.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((mod) => {
			if (cancelled) return;
			mod.default.init({
				duration: 900,
				once: true,
				easing: "ease-out"
			});
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[100svh] w-full overflow-x-clip bg-[#991b1b]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true,
				preload: "metadata",
				poster: hero_poster_default,
				className: "absolute inset-0 z-0 h-full w-full object-cover",
				"aria-label": "CodeXViber animated logo backdrop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: hero_video_default,
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-10 bg-gradient-to-r from-[#450a0a]/80 via-[#450a0a]/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 md:px-12 md:pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-aos": "fade-up",
							className: "mb-5 max-w-full text-[11px] font-bold uppercase leading-relaxed tracking-[0.16em] text-red-300 sm:text-xs sm:tracking-[0.22em] md:text-sm",
							children: "CodeXViber · Ideas → Code → Impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							"data-aos": "fade-up",
							"data-aos-delay": "80",
							className: "mb-6 text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl",
							children: [
								"Hi, I’m Aaditya.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-red-300 via-white to-rose-400 bg-clip-text text-transparent",
									children: "Founder & Developer"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-aos": "fade-up",
							"data-aos-delay": "160",
							className: "mb-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg",
							children: "I turn ideas into digital reality with modern websites, animated experiences, AI-powered tools, presentations, and creative technology."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-aos": "fade-up",
							"data-aos-delay": "240",
							className: "flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/projects",
									className: "inline-flex min-h-12 items-center justify-center rounded-full bg-red-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-white",
									children: "View Projects ↗"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15",
									children: "Let’s Connect"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold text-white/70 sm:gap-x-5 sm:text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Website Development" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-rose-400",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI Solutions" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-rose-400",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Creative Technology" })
							]
						})
					]
				})
			})
		]
	});
}
var aaditya_photo_default = "/assets/aaditya-photo-C0D_I5uT.jpg";
var react_default = "/assets/react-B5AuDlLT.png";
var node_default = "/assets/node-DDVzcsZP.png";
var mongodb_default = "/assets/mongodb-ChmKJekG.png";
var About = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full min-w-0 max-w-6xl flex-col items-start gap-12 md:flex-row md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex w-full min-w-0 shrink-0 flex-col items-center md:mt-0 md:w-[350px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "drop-bounce",
						className: "relative flex justify-center w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-2 bg-black/30 rounded-full shadow-inner" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: aaditya_photo_default,
										alt: "Aaditya Srivastava",
										className: "w-full h-full object-cover"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 text-center text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl tracking-tight sm:text-3xl",
							children: "Aaditya Srivastava"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-red-50",
							children: "Founder of CodeXViber"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-aos": "fade-left",
					"data-aos-delay": "200",
					className: "relative z-20 mt-8 min-w-0 flex-1 text-white md:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 text-3xl text-black sm:text-4xl md:text-5xl",
							children: "Hello!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-8 max-w-3xl text-base leading-relaxed text-red-50 sm:text-lg",
							children: [
								"Hi, my name is ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1 text-lg font-bold uppercase tracking-wide text-black sm:text-xl",
									children: "Aaditya Srivastava"
								}),
								", founder of CodeXViber — a developer and creator who builds modern websites, AI-powered tools and presentations that turn ideas into digital reality."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-6 sm:gap-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									"data-aos": "zoom-in",
									"data-aos-delay": "300",
									src: react_default,
									alt: "React",
									className: "h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									"data-aos": "zoom-in",
									"data-aos-delay": "450",
									src: node_default,
									alt: "Node.js",
									className: "h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									"data-aos": "zoom-in",
									"data-aos-delay": "600",
									src: mongodb_default,
									alt: "MongoDB",
									className: "h-16 w-16 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20 md:h-24 md:w-24"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 1200 120",
					preserveAspectRatio: "none",
					className: "w-full h-12 md:h-20 fill-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-16 h-16",
					fill: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse",
				style: { animationDelay: "1s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-20 h-20",
					fill: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" })
				})
			})
		]
	});
};
var TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
	const ref = (0, import_react.useRef)(null);
	const [isActive, setIsActive] = (0, import_react.useState)(false);
	useMotionValueEvent(pathLength, "change", (latest) => {
		if (!ref.current || !containerRef.current) return;
		const cardRect = ref.current.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();
		const cardTopRelativeToContainer = cardRect.top - containerRect.top;
		const containerHeight = containerRect.height;
		const triggerY = cardTopRelativeToContainer + 50;
		const lineTipY = latest * containerHeight;
		if (lineTipY >= triggerY && !isActive) setIsActive(true);
		else if (lineTipY < triggerY && isActive) setIsActive(false);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"data-aos": aosType || "fade-up",
		"data-aos-delay": aosDelay,
		className: `w-full max-w-[19rem] rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-700 z-10 sm:max-w-xs ${className} ${isActive ? "bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]" : "bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 bg-gray-800 rounded-full opacity-20" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-8 flex min-h-[200px] w-full flex-col rounded-[1.5rem] p-5 transition-colors duration-700 sm:min-h-[220px] sm:p-8 ${isActive ? "bg-red-700/50" : "bg-[#f4f4f4]"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-xl  mb-2 font-serif italic transition-colors duration-700 ${isActive ? "text-red-200" : "text-gray-400"}`,
					children: number
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: `text-2xl  mb-3 tracking-tight transition-colors duration-700 ${isActive ? "text-white" : "text-gray-900"}`,
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm leading-relaxed  transition-colors duration-700 ${isActive ? "text-red-100" : "text-gray-500"}`,
					children: text
				})
			]
		})]
	});
};
var Expertise = () => {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"]
	});
	const pathLength = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 20,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "expertise",
		ref: containerRef,
		className: "bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto relative md:h-[1350px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-aos": "fade-up",
					className: "md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600  mb-8 shadow-sm bg-white",
							children: "My Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "relative mb-6 text-3xl leading-[1.1] tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl",
							children: ["Creative Tech Solutions for a Smarter Tomorrow", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "absolute -bottom-10 right-10 w-12 h-12 text-gray-800",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: "2",
									d: "M14 5l7 7m0 0l-7 7m7-7H3",
									className: "hidden"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-gray-500 text-base md:text-lg max-w-sm  leading-relaxed",
							children: "Combining web development, design, AI and creative technology to turn ideas into useful, polished digital experiences."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0",
					viewBox: "0 0 1000 1350",
					preserveAspectRatio: "none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200",
							fill: "none",
							stroke: "#cbd5e1",
							strokeWidth: "2",
							strokeDasharray: "8 10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
							id: "path-mask",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d: "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200",
								fill: "none",
								stroke: "white",
								strokeWidth: "20",
								style: { pathLength }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200",
							fill: "none",
							stroke: "black",
							strokeWidth: "2",
							strokeDasharray: "8 10",
							mask: "url(#path-mask)",
							className: "drop-shadow-sm"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0",
					viewBox: "0 0 4 100",
					preserveAspectRatio: "none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 2,0 L 2,100",
							fill: "none",
							stroke: "#cbd5e1",
							strokeWidth: "4",
							strokeDasharray: "4 6",
							vectorEffect: "non-scaling-stroke"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
							id: "path-mask-mobile",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d: "M 2,0 L 2,100",
								fill: "none",
								stroke: "white",
								strokeWidth: "4",
								style: { pathLength },
								vectorEffect: "non-scaling-stroke"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 2,0 L 2,100",
							fill: "none",
							stroke: "black",
							strokeWidth: "4",
							strokeDasharray: "4 6",
							mask: "url(#path-mask-mobile)",
							vectorEffect: "non-scaling-stroke"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCard, {
							number: "01",
							title: "Website Development",
							text: "Modern, responsive business websites, portfolios and animated landing pages built with React, Next.js and Tailwind CSS around each client’s goals.",
							className: "md:absolute md:top-[10px] md:right-[5%] md:rotate-6 lg:right-[10%]",
							aosType: "fade-left",
							aosDelay: "100",
							pathLength,
							containerRef
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCard, {
							number: "02",
							title: "Presentation Design",
							text: "Clear, visually engaging pitch decks and presentations that communicate ideas with structure, story and strong visual hierarchy.",
							className: "md:absolute md:top-[450px] md:left-[5%] md:-rotate-6 lg:left-[10%]",
							aosType: "fade-right",
							aosDelay: "200",
							pathLength,
							containerRef
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCard, {
							number: "03",
							title: "AI Agent Solutions",
							text: "AI-assisted workflows and practical AI-powered tools that streamline repetitive tasks and make everyday work easier.",
							className: "md:absolute md:top-[700px] md:right-[5%] md:rotate-3 lg:right-[15%]",
							aosType: "fade-left",
							aosDelay: "300",
							pathLength,
							containerRef
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCard, {
							number: "04",
							title: "Robotics & Automation",
							text: "Exploring robotics, connected components and automation projects, plus technical setup that keeps digital products running smoothly.",
							className: "md:absolute md:top-[1050px] md:left-[15%] md:-rotate-3 lg:left-[25%]",
							aosType: "fade-right",
							aosDelay: "400",
							pathLength,
							containerRef
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-aos": "fade-in",
							"data-aos-delay": "600",
							className: "hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6",
							children: "Turning ideas into reality!"
						})
					]
				})
			]
		})
	});
};
var Skills = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "relative w-full bg-white py-24 md:py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-7xl mx-auto px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				className: "mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block text-xs  text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-100 shadow-sm",
					children: "Technical Stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl",
					children: [
						"Tools of the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff2a2a]",
							children: "Trade"
						}),
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-500 max-w-md text-base md:text-lg leading-relaxed",
					children: "A curated selection of modern technologies and frameworks I use to build scalable, high-performance digital solutions."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:auto-rows-[minmax(280px,auto)]",
				children: [
					{
						category: "Frontend & UI",
						description: "Building responsive, interactive interfaces and web experiences.",
						skills: [
							"HTML",
							"CSS",
							"JavaScript",
							"React",
							"Next.js",
							"Tailwind CSS"
						],
						colSpan: "md:col-span-2 lg:col-span-2",
						bgColor: "bg-red-50/60",
						borderColor: "border-red-100"
					},
					{
						category: "Server-side Development",
						description: "Building application logic and server-side features.",
						skills: [
							"Node.js",
							"API integration",
							"Supabase",
							"Full-stack web development"
						],
						colSpan: "md:col-span-2 lg:col-span-1",
						bgColor: "bg-blue-50/60",
						borderColor: "border-blue-100"
					},
					{
						category: "AI & Creative Technology",
						description: "Using AI tools thoughtfully in creative development workflows.",
						skills: [
							"AI-assisted development",
							"AI-powered applications",
							"Website animation",
							"UI/UX design"
						],
						colSpan: "md:col-span-2 lg:col-span-1",
						bgColor: "bg-purple-50/60",
						borderColor: "border-purple-100"
					},
					{
						category: "Presentations & Tools",
						description: "Design, documents and the tools that keep projects moving.",
						skills: [
							"Presentation design",
							"Pitch decks",
							"VS Code",
							"Git",
							"Figma"
						],
						colSpan: "md:col-span-2 lg:col-span-2",
						bgColor: "bg-green-50/60",
						borderColor: "border-green-100"
					}
				].map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95,
						y: 20
					},
					whileInView: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: idx * .1
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					className: `group relative ${group.colSpan} ${group.bgColor} border ${group.borderColor} flex flex-col justify-between overflow-hidden rounded-[1.6rem] p-6 transition-all duration-500 will-change-transform hover:shadow-2xl sm:rounded-[2rem] md:p-10`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl md:text-3xl  text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300",
								children: group.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gray-600 text-sm md:text-base leading-relaxed  max-w-sm",
								children: group.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 flex flex-wrap gap-2.5",
							children: group.skills.map((skill, sIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-4 py-2 text-sm text-gray-700 bg-white border border-black/5 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1 hover:text-[#ff2a2a] transition-all duration-300 cursor-default",
								children: skill
							}, sIdx))
						})
					]
				}, idx))
			})]
		})]
	});
};
function Projects() {
	const [counts, setCounts] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		dbRequest("projects", { query: "select=category" }).then((rows) => {
			if (!Array.isArray(rows)) return;
			const c = { All: rows.length };
			rows.forEach((r) => {
				c[r.category] = (c[r.category] || 0) + 1;
			});
			setCounts(c);
		}).catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-aos": "fade-up",
					className: "mb-12 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-6 inline-block rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#ff2a2a]",
							children: "Selected work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-6xl",
							children: ["Turning ideas into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#ff2a2a]",
								children: "digital reality."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-gray-500 md:text-lg",
							children: "Pick a category to see my work. Each one opens on its own page."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTags, {
					counts,
					hrefFor: (it) => `/projects?category=${encodeURIComponent(it.id)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-aos": "fade-up",
					className: "mt-14 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/projects",
						className: "inline-flex items-center gap-3 rounded-full bg-[#ff2a2a] px-8 py-4 text-sm text-white shadow-[0_10px_25px_rgba(255,42,42,0.25)] transition hover:-translate-y-0.5 hover:bg-gray-900",
						children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "↗"
						})]
					})
				})
			]
		})
	});
}
var values = [
	{
		icon: "↗",
		title: "Fast Delivery",
		text: "Clear milestones and practical planning to keep work moving forward."
	},
	{
		icon: "◇",
		title: "Quality Code",
		text: "Responsive layouts, maintainable components, and care for the details."
	},
	{
		icon: "✦",
		title: "Creative Ideas",
		text: "A visual direction tailored to each client instead of one generic template."
	},
	{
		icon: "∞",
		title: "Long-Term Support",
		text: "Help with updates, maintenance, improvements, and the next phase of your product."
	}
];
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "values",
		className: "bg-white px-5 py-16 sm:px-6 md:px-12 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-black uppercase tracking-[.18em] text-rose-600 sm:tracking-[.25em]",
						children: "The CodeXViber approach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl",
						children: ["Small details. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent",
							children: "Real impact."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-gray-500",
						children: "I aim to make technology approachable, useful, and visually memorable."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-gray-200 bg-white shadow-sm p-6 transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 text-2xl font-black text-white",
							children: v.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-black text-gray-900",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-gray-500",
							children: v.text
						})
					]
				}, v.title))
			})]
		})
	});
}
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("");
	const onChange = (e) => setForm({
		...form,
		[e.target.name]: e.target.value
	});
	async function submit(e) {
		e.preventDefault();
		setStatus("Sending…");
		let ok = false, lastErr = "";
		try {
			await dbRequest("contact_messages", {
				method: "POST",
				body: {
					name: form.name.trim(),
					email: form.email.trim(),
					message: form.message.trim()
				},
				prefer: "return=minimal"
			});
			ok = true;
		} catch (err) {
			lastErr = err.message;
		}
		if (ok) {
			setStatus("Thanks! Your message has been sent.");
			setForm({
				name: "",
				email: "",
				message: ""
			});
		} else setStatus(lastErr ? "Message could not be sent. Please use WhatsApp or email below." : "The message form is not configured yet. You can contact me using WhatsApp or email below.");
	}
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "contact",
		className: "relative flex min-h-screen w-full items-end overflow-hidden border-t border-gray-900 bg-[#0a0a0a] pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			className: "pointer-events-none absolute left-0 top-0 z-0 flex h-full w-full flex-col items-center justify-start overflow-hidden pt-16 md:pt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "origin-top select-none text-[15vw] font-black uppercase leading-[0.8] tracking-tighter text-white/15 md:text-[12vw]",
				children: "Contact"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 flex w-full items-end justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 50
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "flex w-full flex-col justify-between bg-[#ff2a2a] p-5 text-white sm:p-8 md:w-[85%] md:p-16 lg:w-[75%]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 text-xs uppercase tracking-[0.16em] opacity-90 sm:tracking-[0.2em] md:mb-20",
						children: "Reach Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "flex w-full flex-col gap-7 md:gap-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								type: "text",
								value: form.name,
								onChange,
								required: true,
								placeholder: "Your Name",
								className: "w-full border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								value: form.email,
								onChange,
								required: true,
								placeholder: "Email",
								className: "w-full border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								value: form.message,
								onChange,
								required: true,
								rows: 4,
								placeholder: "Type your message here",
								className: "w-full resize-none border-b border-white/60 bg-transparent pb-3 text-base text-white outline-none placeholder:text-white/80 focus:border-white sm:text-xl md:text-2xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white",
									children: "Send message ↗"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919201109621?text=Hi%20Aaditya%2C%20I%27d%20like%20to%20discuss%20a%20project",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-6 py-3 text-center text-sm font-bold transition hover:bg-white/15",
									children: "Chat on WhatsApp ↗"
								})]
							}),
							status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								role: "status",
								children: status
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-2 text-sm text-red-50 sm:flex-row sm:flex-wrap sm:gap-x-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "India" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "break-all hover:underline",
								href: "mailto:aaditya37codex@gmail.com",
								children: "aaditya37codex@gmail.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:underline",
								href: "https://www.instagram.com/code.x.viber/",
								target: "_blank",
								rel: "noreferrer",
								children: "Instagram · @code.x.viber"
							})
						]
					})
				]
			})
		})]
	});
}
var admin_gear_default = "/assets/admin-gear-COjbBiEV.png";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t-4 border-red-600 bg-[#0b0b0f] px-6 py-10 text-white md:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-white/85",
				children: "Ideas → Code → Impact"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Footer links",
				className: "flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "hover:underline",
						href: "mailto:aaditya37codex@gmail.com",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "hover:underline",
						href: "https://wa.me/919201109621",
						target: "_blank",
						rel: "noreferrer",
						children: "WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "hover:underline",
						href: "https://www.instagram.com/code.x.viber/",
						target: "_blank",
						rel: "noreferrer",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "hover:underline",
						href: "/projects",
						children: "Projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: "inline-flex min-h-11 items-center gap-2 font-semibold hover:underline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/admin",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white",
						"aria-label": "Admin login",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: admin_gear_default,
							alt: "",
							className: "h-7 w-7 object-contain"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-7 max-w-7xl border-t border-white/20 pt-5 text-xs text-white/70",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Aaditya. All rights reserved."
			]
		})]
	});
}
var steps = [
	[
		"01",
		"Idea",
		"We talk goals, audience and scope."
	],
	[
		"02",
		"Design",
		"You see the look and flow before any code."
	],
	[
		"03",
		"Build",
		"Fast, responsive, clean code with regular updates."
	],
	[
		"04",
		"Launch",
		"Go live, then I stay for fixes and growth."
	]
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "bg-[#f7f7f7] px-5 py-16 text-gray-900 sm:px-6 md:px-12 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ff2a2a] sm:tracking-[.25em]",
					children: "How I work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-8 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:mb-10 md:text-5xl",
					children: ["Idea → Design → Build → ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#ff2a2a]",
						children: "Launch."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: steps.map(([n, t, x]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-gray-200 bg-white shadow-sm p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-black tracking-widest text-[#ff2a2a]",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-black",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-gray-500",
								children: x
							})
						]
					}, n))
				})
			]
		})
	});
}
function HireStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t-4 border-red-600 bg-[#14141a] px-5 py-5 text-white sm:px-6 md:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 inline-block h-2 w-2 rounded-full bg-green-400" }), "Available for new projects"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCv, { className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold hover:bg-white/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://wa.me/919201109621?text=Hi%20Aaditya%2C%20I%27d%20like%20to%20discuss%20a%20project",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-bold hover:bg-red-500",
					children: "Hire me on WhatsApp ↗"
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HireStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
