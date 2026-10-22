import { o as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ThemeToggle-DUgJioMZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabaseUrl = "https://szsxgclndduhlztnfpyo.supabase.co";
var supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6c3hnY2xuZGR1aGx6dG5mcHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMzIxMTAsImV4cCI6MjA4NzkwODExMH0.FogXFGGIlZSELrILCS8J2xSHCa4u-V5o8EB_KAX2M";
function headers(token = supabaseAnonKey) {
	return {
		apikey: supabaseAnonKey,
		Authorization: `Bearer ${token}`
	};
}
async function readResponse(response) {
	const raw = await response.text();
	let data = null;
	if (raw) try {
		data = JSON.parse(raw);
	} catch {
		data = raw;
	}
	if (!response.ok) throw new Error(data?.message || data?.msg || data?.error_description || data?.error || `Request failed (${response.status})`);
	return data;
}
async function signIn(email, password) {
	const session = await readResponse(await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
		method: "POST",
		headers: {
			apikey: supabaseAnonKey,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email,
			password
		})
	}));
	const rows = await dbRequest("admin_users", {
		token: session.access_token,
		query: `select=user_id&user_id=eq.${encodeURIComponent(session.user.id)}`
	});
	if (!Array.isArray(rows) || !rows.length) {
		await fetch(`${supabaseUrl}/auth/v1/logout`, {
			method: "POST",
			headers: headers(session.access_token)
		}).catch(() => {});
		throw new Error("This login is not an approved administrator. Add the account UUID to public.admin_users in Supabase.");
	}
	return session;
}
async function signOut(token) {
	if (token) await fetch(`${supabaseUrl}/auth/v1/logout`, {
		method: "POST",
		headers: headers(token)
	}).catch(() => {});
}
async function dbRequest(table, { token, method = "GET", query = "", body, prefer } = {}) {
	const h = {
		...headers(token || supabaseAnonKey),
		"Content-Type": "application/json"
	};
	if (prefer) h.Prefer = prefer;
	return readResponse(await fetch(`${supabaseUrl}/rest/v1/${table}${query ? `?${query}` : ""}`, {
		method,
		headers: h,
		...body !== void 0 ? { body: JSON.stringify(body) } : {}
	}));
}
async function uploadPreview(file, token) {
	const name = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
	const path = `project-previews/${Date.now()}-${name}`;
	await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/portfolio-previews/${path}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": file.type || "application/octet-stream",
			"x-upsert": "true"
		},
		body: file
	}));
	return `${supabaseUrl}/storage/v1/object/public/portfolio-previews/${path}`;
}
function automaticPreviewUrl(url) {
	if (!url) return "";
	return `https://image.thum.io/get/width/1200/crop/760/noanimate/${url}`;
}
var PERSONAL_BUCKET = "personal-storage";
async function listPersonalFiles(token, userId) {
	const rows = await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/list/${PERSONAL_BUCKET}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			prefix: `${userId}/`,
			limit: 10,
			offset: 0,
			sortBy: {
				column: "name",
				order: "asc"
			}
		})
	}));
	return (Array.isArray(rows) ? rows : []).filter((x) => x.name && x.name !== ".emptyFolderPlaceholder").map((x) => ({
		...x,
		path: `${userId}/${x.name}`
	}));
}
async function uploadPersonalFile(file, token, userId, replacePath = "") {
	const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 120) || "personal-file";
	const path = replacePath || `${userId}/${Date.now()}-${safeName}`;
	await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/${PERSONAL_BUCKET}/${path}`, {
		method: replacePath ? "PUT" : "POST",
		headers: {
			...headers(token),
			"Content-Type": file.type || "application/octet-stream",
			"x-upsert": "true"
		},
		body: file
	}));
	return path;
}
async function deletePersonalFile(path, token) {
	return readResponse(await fetch(`${supabaseUrl}/storage/v1/object/${PERSONAL_BUCKET}`, {
		method: "DELETE",
		headers: {
			...headers(token),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ prefixes: [path] })
	}));
}
async function getPersonalFileUrl(path, token, download = false) {
	const data = await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/sign/${PERSONAL_BUCKET}/${path}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			expiresIn: 120,
			...download ? { download: true } : {}
		})
	}));
	return data.signedURL?.startsWith("http") ? data.signedURL : `${supabaseUrl}${data.signedURL}`;
}
async function storageList(token, prefix) {
	const rows = await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/list/${PERSONAL_BUCKET}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			prefix,
			limit: 500,
			offset: 0,
			sortBy: {
				column: "name",
				order: "asc"
			}
		})
	}));
	return Array.isArray(rows) ? rows : [];
}
async function storageUpload(token, path, file) {
	await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/${PERSONAL_BUCKET}/${path}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": file.type || "application/octet-stream",
			"x-upsert": "false"
		},
		body: file
	}));
	return path;
}
async function storageMove(token, from, to) {
	return readResponse(await fetch(`${supabaseUrl}/storage/v1/object/move`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			bucketId: PERSONAL_BUCKET,
			sourceKey: from,
			destinationKey: to
		})
	}));
}
async function uploadProjectMedia(file, token) {
	const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
	await readResponse(await fetch(`${supabaseUrl}/storage/v1/object/project-media/${path}`, {
		method: "POST",
		headers: {
			...headers(token),
			"Content-Type": file.type || "application/octet-stream",
			"x-upsert": "false"
		},
		body: file
	}));
	return `${supabaseUrl}/storage/v1/object/public/project-media/${path}`;
}
var KEY = "theme";
var read = () => typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light";
function applyTheme(mode) {
	const root = document.documentElement;
	root.classList.toggle("dark", mode === "dark");
	root.style.colorScheme = mode;
	try {
		localStorage.setItem(KEY, mode);
	} catch {}
}
function Sun() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "h-3.5 w-3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })]
	});
}
function Moon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "h-3.5 w-3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" })
	});
}
var OPTIONS = [{
	id: "light",
	label: "Light",
	Icon: Sun
}, {
	id: "dark",
	label: "Dark",
	Icon: Moon
}];
function ThemeToggle({ variant = "glass" }) {
	const [mode, setMode] = (0, import_react.useState)(read);
	(0, import_react.useEffect)(() => {
		setMode(read());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": "Color theme",
		className: `inline-flex shrink-0 items-center rounded-full p-0.5 ${variant === "bar" ? "border border-gray-200 bg-white text-gray-800 shadow-sm dark:border-white/15 dark:bg-[#16161c] dark:text-white" : "border border-white/30 bg-black/30 text-white backdrop-blur-md"}`,
		children: OPTIONS.map(({ id, label, Icon }) => {
			const active = mode === id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": active,
				onClick: () => {
					applyTheme(id);
					setMode(id);
				},
				className: `inline-flex h-11 w-11 items-center justify-center rounded-full text-[11px] font-semibold transition-colors duration-200 sm:h-9 sm:w-auto sm:gap-1.5 sm:px-3 sm:text-xs ${active ? variant === "bar" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950" : "bg-white text-gray-950" : "bg-transparent text-current/80 hover:text-current"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only sm:not-sr-only",
					children: label
				})]
			}, id);
		})
	});
}
//#endregion
export { getPersonalFileUrl as a, signOut as c, storageUpload as d, uploadPersonalFile as f, deletePersonalFile as i, storageList as l, uploadProjectMedia as m, automaticPreviewUrl as n, listPersonalFiles as o, uploadPreview as p, dbRequest as r, signIn as s, ThemeToggle as t, storageMove as u };
