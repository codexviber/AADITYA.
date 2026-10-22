import "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "Website",
		label: "Websites",
		icon: "</>"
	},
	{
		id: "Admin System Website",
		label: "Admin Systems",
		icon: "⚙"
	},
	{
		id: "Presentation",
		label: "Presentations",
		icon: "▤"
	},
	{
		id: "Video",
		label: "Videos",
		icon: "▶"
	}
];
var tilt = [
	"md:rotate-2",
	"md:-rotate-2",
	"md:rotate-1",
	"md:-rotate-1",
	"md:rotate-2"
];
function CategoryTags({ counts = {}, active, onSelect, hrefFor, dark = false, showAll = false }) {
	const items = [...showAll ? [{
		id: "All",
		label: "All work",
		icon: "✦"
	}] : [], ...CATEGORIES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 lg:grid-cols-5",
		children: items.map((it, i) => {
			const on = active === it.id, n = counts[it.id];
			const shell = `group relative flex flex-col items-center rounded-[1.6rem] p-2 text-left transition duration-500 hover:-translate-y-1 hover:rotate-0 ${tilt[i % 5]} ${on ? "bg-[#ff2a2a] shadow-[0_20px_50px_rgba(255,42,42,0.35)]" : dark ? "border border-white/10 bg-[#14141a] hover:border-red-500/60" : "border border-gray-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-red-300"}`;
			const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 z-10 h-4 w-4 rounded-full border border-gray-300 bg-gradient-to-br from-gray-300 to-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-6 min-h-[108px] w-full rounded-[1.2rem] p-3 transition-colors duration-500 sm:p-4 ${on ? "bg-red-700/50 text-white" : dark ? "bg-white/5 text-white" : "bg-[#f4f4f4] text-gray-900 group-hover:bg-red-50"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-xl font-black sm:text-2xl ${on ? "text-red-100" : "text-[#ff2a2a]"}`,
						children: it.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base font-bold leading-tight sm:text-lg",
						children: it.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-1 text-xs ${on ? "text-red-100" : dark ? "text-white/50" : "text-gray-500"}`,
						children: n === void 0 ? "Explore" : `${n} ${n === 1 ? "project" : "projects"}`
					})
				]
			})] });
			return hrefFor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: hrefFor(it),
				"data-aos": "zoom-in",
				"data-aos-delay": i * 100,
				className: shell,
				children: body
			}, it.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onSelect(it.id),
				"aria-pressed": on,
				className: shell,
				children: body
			}, it.id);
		})
	});
}
//#endregion
export { CategoryTags as n, CATEGORIES as t };
