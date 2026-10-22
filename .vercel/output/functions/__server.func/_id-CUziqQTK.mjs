import { o as __toESM } from "./_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-C8IsunO8.mjs";
import { r as dbRequest, t as ThemeToggle } from "./_ssr/ThemeToggle-DUgJioMZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CUziqQTK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Block = ({ n, title, text }) => text ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "mt-10",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-xs font-black uppercase tracking-[.25em] text-red-400",
		children: [
			n,
			" · ",
			title
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 whitespace-pre-line text-base leading-relaxed text-white/80 md:text-lg",
		children: text
	})]
}) : null;
function CaseStudyPage({ id: idProp } = {}) {
	const id = idProp || (typeof window !== "undefined" ? window.location.pathname.split("/").filter(Boolean).pop() : "");
	const [p, setP] = (0, import_react.useState)(null), [err, setErr] = (0, import_react.useState)(""), [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		dbRequest("projects", { query: `select=*&id=eq.${encodeURIComponent(id)}` }).then((r) => Array.isArray(r) && r[0] ? setP(r[0]) : setErr("Project not found.")).catch((e) => setErr(e.message || "Could not load project."));
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pg-adapt min-h-screen bg-[#0b0b0f] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-red-600/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/projects",
					className: "text-sm font-semibold text-white/80 hover:text-red-400",
					children: "← All projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { variant: "glass" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "inline-flex min-h-11 items-center rounded-full bg-red-600 px-3.5 py-2 text-sm font-bold hover:bg-red-500",
						children: "Let’s Connect"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 py-12 md:py-20",
			children: [
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/70",
					children: err
				}),
				!p && !err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/60",
					children: "Loading…"
				}),
				p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-black uppercase tracking-[.18em] text-red-400 sm:tracking-[.25em]",
						children: [p.category || "Project", " · Case study"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 break-words text-3xl font-black tracking-tight sm:text-4xl md:text-6xl",
						children: p.title
					}),
					p.category === "Video" && p.media_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: p.media_url,
						poster: p.preview_image_url || void 0,
						controls: true,
						playsInline: true,
						preload: "metadata",
						className: "mt-8 w-full rounded-3xl border border-white/10 bg-black"
					}) : p.category === "Presentation" && p.media_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `${p.title} presentation`,
							src: p.media_url,
							className: "aspect-[4/3] w-full rounded-3xl border border-white/10 bg-white"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.media_url,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-3 inline-block text-sm font-bold text-red-400 hover:underline",
							children: "Open presentation in a new tab ↗"
						})]
					}) : p.preview_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.preview_image_url,
						alt: `${p.title} screenshot`,
						className: "mt-8 w-full rounded-3xl border border-white/10 object-cover",
						onError: (e) => {
							e.currentTarget.style.display = "none";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg leading-relaxed text-white/80",
						children: p.description
					}),
					Array.isArray(p.tech_stack) && p.tech_stack.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: p.tech_stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80",
							children: t
						}, t))
					}),
					p.project_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-[.25em] text-red-400",
							children: "Live website preview"
						}), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `${p.title} live preview`,
							src: p.project_url,
							loading: "lazy",
							sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
							className: "mt-3 aspect-[16/10] w-full rounded-2xl border border-white/10 bg-white"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-white/60",
							children: "If this stays blank, the website does not allow embedding. Use “Visit live project” instead."
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLive(true),
							className: "mt-3 rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/10",
							children: "Load live preview ▶"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "01",
						title: "The problem",
						text: p.problem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "02",
						title: "What I built",
						text: p.solution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "03",
						title: "Results",
						text: p.results
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap gap-3",
						children: [p.project_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.project_url,
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold hover:bg-red-500",
							children: "Visit live project ↗"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919201109621?text=Hi%20Aaditya%2C%20I%20saw%20your%20project%20and%20want%20something%20similar",
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold hover:bg-white/10",
							children: "Want something similar?"
						})]
					})
				] })
			]
		})]
	});
}
var ProjectView = CaseStudyPage;
function ProjectPage() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectView, { id });
}
//#endregion
export { ProjectPage as component };
