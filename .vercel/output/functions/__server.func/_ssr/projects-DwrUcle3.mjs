import { o as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as dbRequest, t as ThemeToggle } from "./ThemeToggle-DUgJioMZ.mjs";
import "./codexviber-mark-BVWJriAv.mjs";
import { n as CategoryTags, t as CATEGORIES } from "./CategoryTags-BzxL6PLy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DwrUcle3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PublicProjectsPage() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		try {
			const c = new URLSearchParams(window.location.search).get("category");
			if (c && CATEGORIES.some((x) => x.id === c)) setFilter(c);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		dbRequest("projects", { query: "select=*&order=featured.desc,created_at.desc" }).then((rows) => setProjects(Array.isArray(rows) ? rows : [])).catch((e) => {
			const msg = e.message || "Projects could not be loaded.";
			if (!msg.toLowerCase().includes("supabase") && !msg.toLowerCase().includes("configuration")) setError(msg);
		}).finally(() => setLoading(false));
	}, []);
	const counts = { All: projects.length };
	projects.forEach((p) => {
		counts[p.category] = (counts[p.category] || 0) + 1;
	});
	const order = [...CATEGORIES.map((c) => c.id), ...[...new Set(projects.map((p) => p.category).filter(Boolean))].filter((c) => !CATEGORIES.some((x) => x.id === c))];
	const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);
	const groups = (filter === "All" ? order.map((c) => [c, projects.filter((p) => p.category === c)]) : [[filter, shown]]).filter(([, l]) => l.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pg-adapt min-h-screen bg-[#0b0b0f] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-red-600/30 bg-white/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 md:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#home",
						className: "text-sm font-bold text-gray-900 hover:text-red-600",
						children: "← Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { variant: "bar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#contact",
							className: "inline-flex min-h-11 items-center rounded-full bg-red-600 px-3.5 py-2 text-sm font-bold text-white hover:bg-red-500 sm:px-4",
							children: "Let’s Connect"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-[.18em] text-red-400 sm:tracking-[.3em]",
						children: "Selected work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl",
						children: ["Turning ideas into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-500",
							children: "digital reality."
						})]
					}),
					!loading && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTags, {
							dark: true,
							showAll: true,
							counts,
							active: filter,
							onSelect: setFilter
						})
					}),
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 text-sm text-white/60",
						children: "Loading projects…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 rounded-2xl border border-amber-700/25 bg-amber-100 p-5 text-sm leading-relaxed text-amber-950",
						children: error
					}),
					!loading && !error && shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-3xl border border-dashed border-white/20 px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/codexviber-mark-D3Oha4ri.png",
								alt: "",
								className: "mx-auto h-20 w-20 object-contain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-2xl font-black",
								children: "Projects are on the way."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60",
								children: "New projects published from the private admin dashboard will appear here with a preview, name and description."
							})
						]
					}),
					groups.map(([cat, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14",
						children: [filter === "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-6 flex items-baseline gap-3 border-b border-white/10 pb-3 text-2xl font-bold",
							children: [
								cat,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-white/40",
									children: list.length
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-7 md:grid-cols-2 xl:grid-cols-3",
							children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#101015] transition hover:-translate-y-1 hover:border-red-500/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/projects/${p.id}`,
									"aria-label": `View ${p.title}`,
									className: "relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-red-900 via-[#3b0a0f] to-black",
									children: [
										p.preview_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.preview_image_url,
											alt: `${p.title} preview`,
											loading: "lazy",
											className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}),
										!p.preview_image_url && p.category === "Video" && p.media_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: `${p.media_url}#t=0.5`,
											muted: true,
											playsInline: true,
											preload: "metadata",
											className: "absolute inset-0 h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
										(p.project_url || p.media_url) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `absolute right-4 top-4 rounded-full bg-black/65 px-3.5 py-1.5 text-[11px] font-black tracking-widest backdrop-blur ${p.category === "Video" ? "text-white" : p.category === "Presentation" ? "text-amber-300" : "text-green-400"}`,
											children: p.category === "Video" ? "▶ VIDEO" : p.category === "Presentation" ? "SLIDES" : "LIVE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-white backdrop-blur",
											children: p.category || "Project"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl font-black tracking-tight sm:text-3xl",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs font-bold uppercase tracking-[.18em] text-red-400",
											children: [p.category, ...Array.isArray(p.tech_stack) ? p.tech_stack.slice(0, 2) : []].filter(Boolean).join(" · ")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 line-clamp-4 text-base leading-relaxed text-white/65",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `/projects/${p.id}`,
											className: "mt-5 inline-flex items-center gap-2 text-lg font-black text-red-400 hover:text-red-300",
											children: ["View ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
										})
									]
								})]
							}, p.id))
						})]
					}, cat)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#home",
							className: "inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-bold hover:bg-white/10",
							children: "← Back to Aaditya’s portfolio"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-white/10 px-5 py-6 text-center text-xs text-white/40",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Aaditya · CodeXViber · Ideas → Code → Impact"
				]
			})
		]
	});
}
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicProjectsPage, {});
}
//#endregion
export { ProjectsPage as component };
