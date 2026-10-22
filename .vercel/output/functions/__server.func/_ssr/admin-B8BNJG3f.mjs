import { o as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getPersonalFileUrl, c as signOut, d as storageUpload, f as uploadPersonalFile, i as deletePersonalFile, l as storageList, m as uploadProjectMedia, n as automaticPreviewUrl, o as listPersonalFiles, p as uploadPreview, r as dbRequest, s as signIn, t as ThemeToggle, u as storageMove } from "./ThemeToggle-DUgJioMZ.mjs";
import { t as codexviber_mark_default } from "./codexviber-mark-BVWJriAv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B8BNJG3f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminMessages({ token }) {
	const [rows, setRows] = (0, import_react.useState)([]), [q, setQ] = (0, import_react.useState)(""), [show, setShow] = (0, import_react.useState)("all"), [err, setErr] = (0, import_react.useState)(""), [loading, setLoading] = (0, import_react.useState)(true);
	const load = (0, import_react.useCallback)(async () => {
		try {
			const r = await dbRequest("contact_messages", {
				token,
				query: "select=*&order=created_at.desc"
			});
			setRows(Array.isArray(r) ? r : []);
			setErr("");
		} catch (e) {
			setErr(e.message || "Messages could not be loaded. Run the latest supabase-setup.sql.");
		} finally {
			setLoading(false);
		}
	}, [token]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	const markRead = async (m, v) => {
		try {
			await dbRequest("contact_messages", {
				token,
				method: "PATCH",
				query: `id=eq.${encodeURIComponent(m.id)}`,
				body: { is_read: v },
				prefer: "return=minimal"
			});
			await load();
		} catch (e) {
			setErr(e.message);
		}
	};
	const del = async (m) => {
		if (!window.confirm(`Delete the message from ${m.name}? This cannot be undone.`)) return;
		try {
			await dbRequest("contact_messages", {
				token,
				method: "DELETE",
				query: `id=eq.${encodeURIComponent(m.id)}`
			});
			await load();
		} catch (e) {
			setErr(e.message);
		}
	};
	const list = rows.filter((m) => (show === "all" || (show === "unread" ? !m.is_read : m.is_read)) && (!q || `${m.name} ${m.email} ${m.message}`.toLowerCase().includes(q.toLowerCase())));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search name, email or message",
					className: "min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-red-500"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: show,
					onChange: (e) => setShow(e.target.value),
					className: "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "unread",
							children: "Unread"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "read",
							children: "Read"
						})
					]
				})]
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-red-50 p-3 text-sm text-red-700",
				children: err
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-slate-500",
				children: "Loading messages…"
			}),
			!loading && !err && list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500",
				children: "No messages found."
			}),
			list.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `rounded-2xl border bg-white p-4 ${m.is_read ? "border-slate-200" : "border-red-300"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-black text-slate-900",
							children: [
								m.name,
								" ",
								!m.is_read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white",
									children: "NEW"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${m.email}`,
							className: "text-sm text-red-700 hover:underline",
							children: m.email
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: new Date(m.created_at).toLocaleString()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700",
						children: m.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${m.email}?subject=Re: your message`,
								className: "rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700",
								children: "Reply"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => markRead(m, !m.is_read),
								className: "rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50",
								children: m.is_read ? "Mark unread" : "Mark read"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => del(m),
								className: "rounded-full border border-red-300 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-50",
								children: "Delete"
							})
						]
					})
				]
			}, m.id))
		]
	});
}
function AdminDashboard({ token, projects, setTab }) {
	const [msgs, setMsgs] = (0, import_react.useState)(null), [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		dbRequest("contact_messages", {
			token,
			query: "select=id,is_read"
		}).then((r) => setMsgs(Array.isArray(r) ? r : [])).catch(() => setMsgs([]));
	}, [token]);
	const live = projects.filter((p) => p.published !== false).length, unread = (msgs || []).filter((m) => !m.is_read).length;
	const backup = async () => {
		try {
			const m = await dbRequest("contact_messages", {
				token,
				query: "select=*&order=created_at.desc"
			});
			const blob = new Blob([JSON.stringify({
				exported_at: (/* @__PURE__ */ new Date()).toISOString(),
				projects,
				messages: m
			}, null, 2)], { type: "application/json" });
			const a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = `codexviber-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
			a.click();
			URL.revokeObjectURL(a.href);
			setNote("Backup downloaded. Keep it somewhere private — it includes visitor messages.");
		} catch (e) {
			setNote(e.message || "Backup failed. Please try again.");
		}
	};
	const Card = ({ label, value, sub, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setTab(to),
		className: "rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-red-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-widest text-slate-500",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-4xl font-black text-red-700",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-600",
				children: sub
			})
		]
	});
	const Act = ({ label, onClick }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: "rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-800",
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black",
				children: "Dashboard"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-slate-600",
				children: "Private overview of your portfolio."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Projects",
						value: projects.length,
						sub: `${live} live · ${projects.length - live} hidden`,
						to: "mine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Messages",
						value: msgs ? msgs.length : "…",
						sub: `${unread} unread`,
						to: "messages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Documents & files",
						value: "→",
						sub: "PDF generator and private storage",
						to: "docs"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-black",
						children: "Quick actions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
								label: "+ Add project",
								onClick: () => setTab("add")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
								label: "Upload file",
								onClick: () => setTab("storage")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
								label: "View messages",
								onClick: () => setTab("messages")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
								label: "Download backup",
								onClick: backup
							})
						]
					}),
					note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-slate-700",
						role: "status",
						children: note
					})
				]
			})
		]
	});
}
var MAX = 20971520;
var OK = [
	"pdf",
	"png",
	"jpg",
	"jpeg",
	"webp",
	"gif",
	"doc",
	"docx",
	"xls",
	"xlsx",
	"ppt",
	"pptx",
	"txt",
	"csv",
	"zip",
	"md"
];
var ext = (n) => (n.split(".").pop() || "").toLowerCase();
var clean = (s) => s.trim().replace(/[^a-zA-Z0-9._ -]/g, "").replace(/\s+/g, "-").slice(0, 80);
var size = (b) => !b ? "" : b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`;
var btn = "rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:border-red-400 hover:text-red-700";
function AdminFiles({ token, userId, root = "", title, hint, presets = [] }) {
	const [folder, setFolder] = (0, import_react.useState)(""), [rows, setRows] = (0, import_react.useState)([]), [busy, setBusy] = (0, import_react.useState)(false), [msg, setMsg] = (0, import_react.useState)(""), [err, setErr] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)(""), [sort, setSort] = (0, import_react.useState)("name");
	const cur = `${`${userId}/${root ? root + "/" : ""}`}${folder ? folder + "/" : ""}`;
	const load = (0, import_react.useCallback)(async () => {
		setBusy(true);
		setErr("");
		try {
			setRows(await storageList(token, cur));
		} catch (e) {
			setErr(e.message || "Could not load files.");
		} finally {
			setBusy(false);
		}
	}, [token, cur]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	const items = (0, import_react.useMemo)(() => {
		let r = rows.filter((x) => x.name && x.name !== ".keep" && x.name !== ".emptyFolderPlaceholder" && !(root === "" && folder === "" && x.name === "documents"));
		if (q) r = r.filter((x) => x.name.toLowerCase().includes(q.toLowerCase()));
		const dirs = r.filter((x) => !x.id), files = r.filter((x) => x.id);
		const by = sort === "new" ? (a, b) => new Date(b.created_at) - new Date(a.created_at) : sort === "size" ? (a, b) => (b.metadata?.size || 0) - (a.metadata?.size || 0) : (a, b) => a.name.localeCompare(b.name);
		return [...dirs.sort((a, b) => a.name.localeCompare(b.name)), ...files.sort(by)];
	}, [
		rows,
		q,
		sort,
		root,
		folder
	]);
	const run = async (fn, ok) => {
		setBusy(true);
		setMsg("");
		setErr("");
		try {
			await fn();
			setMsg(ok);
			await load();
		} catch (e) {
			setErr(e.message || "Something went wrong. Please try again.");
			setBusy(false);
		}
	};
	const upload = async (e) => {
		const files = [...e.target.files];
		e.target.value = "";
		const bad = files.find((f) => !OK.includes(ext(f.name)) || f.size > MAX);
		if (bad) {
			setErr(`"${bad.name}" was not uploaded. Allowed: ${OK.join(", ")} up to 20 MB.`);
			return;
		}
		run(async () => {
			for (const f of files) await storageUpload(token, `${cur}${Date.now()}-${clean(f.name) || "file"}`, f);
		}, `${files.length} file(s) uploaded.`);
	};
	const newFolder = (name) => {
		const n = clean(name);
		if (!n) return;
		run(() => storageUpload(token, `${cur}${n}/.keep`, new Blob([""], { type: "text/plain" })), `Folder "${n}" created.`);
	};
	const open = async (x, dl) => {
		try {
			window.open(await getPersonalFileUrl(`${cur}${x.name}`, token, dl), "_blank", "noopener,noreferrer");
		} catch (e) {
			setErr(e.message || "Could not open this file.");
		}
	};
	const rename = (x) => {
		const n = clean(prompt("New file name (keep the extension):", x.name.replace(/^\d{10,}-/, "")) || "");
		if (!n) return;
		if (ext(n) !== ext(x.name)) {
			setErr("Keep the same file extension.");
			return;
		}
		run(() => storageMove(token, `${cur}${x.name}`, `${cur}${n}`), "File renamed.");
	};
	const del = (x) => {
		if (!confirm(`Delete "${x.name}" permanently?`)) return;
		run(() => deletePersonalFile(`${cur}${x.name}${x.id ? "" : "/.keep"}`, token), "Deleted.");
	};
	const crumbs = folder ? folder.split("/") : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-black",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-600",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-1 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "font-bold text-red-700 hover:underline",
					onClick: () => setFolder(""),
					children: root ? "All documents" : "All files"
				}), crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-slate-400",
					children: "/"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "font-bold text-red-700 hover:underline",
					onClick: () => setFolder(crumbs.slice(0, i + 1).join("/")),
					children: c
				})] }, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search here",
					"aria-label": "Search files",
					className: "min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-red-500"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: sort,
					onChange: (e) => setSort(e.target.value),
					"aria-label": "Sort files",
					className: "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "name",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "new",
							children: "Newest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "size",
							children: "Largest"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "cursor-pointer rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-800",
						children: ["Upload files", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							multiple: true,
							className: "hidden",
							onChange: upload,
							disabled: busy
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: btn,
						onClick: () => newFolder(prompt("Folder name:") || ""),
						disabled: busy,
						children: "+ New folder"
					}),
					!folder && presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: btn,
						onClick: () => newFolder(p),
						disabled: busy,
						children: ["+ ", p]
					}, p))
				]
			}),
			busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-slate-500",
				role: "status",
				children: "Working…"
			}),
			msg && !err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold text-green-700",
				role: "status",
				children: msg
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold text-red-700",
				role: "alert",
				children: err
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 divide-y divide-slate-100",
				children: [!busy && items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-8 text-center text-sm text-slate-500",
					children: "Nothing here yet. Upload a file or create a folder."
				}), items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [x.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-bold",
							children: x.name.replace(/^\d{10,}-/, "")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "truncate text-sm font-black text-red-700 hover:underline",
							onClick: () => setFolder(folder ? `${folder}/${x.name}` : x.name),
							children: ["📁 ", x.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: x.id ? `${size(x.metadata?.size)} · ${new Date(x.created_at).toLocaleDateString()}` : "Folder"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [x.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: btn,
								onClick: () => open(x, false),
								children: "Preview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: btn,
								onClick: () => open(x, true),
								children: "Download"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: btn,
								onClick: () => rename(x),
								children: "Rename"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: btn,
							onClick: () => del(x),
							children: "Delete"
						})]
					})]
				}, x.name))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-xs text-slate-500",
				children: "Private: only your signed-in admin account can open these files. Links expire after two minutes."
			})
		]
	});
}
var inp = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-red-500";
function AdminDocuments({ api, logoMark }) {
	const { docTypes, commonFields, templateFields, documentHtml, initialDocForm, buildPdf, openPrint } = api;
	const { shared, perDoc } = (0, import_react.useMemo)(() => {
		const count = {};
		docTypes.forEach((t) => (templateFields[t.id] || []).forEach((f) => {
			count[f.key] = (count[f.key] || 0) + 1;
		}));
		const used = /* @__PURE__ */ new Set(), shared = [], perDoc = {};
		docTypes.forEach((t) => {
			perDoc[t.id] = [];
			(templateFields[t.id] || []).forEach((f) => {
				if (count[f.key] > 1) {
					if (!used.has(f.key)) {
						used.add(f.key);
						shared.push(f);
					}
				} else perDoc[t.id].push(f);
			});
		});
		return {
			shared,
			perDoc
		};
	}, [docTypes, templateFields]);
	const [form, setForm] = (0, import_react.useState)(() => docTypes.reduce((a, t) => ({
		...initialDocForm(t.id),
		...a
	}), {}));
	const [busy, setBusy] = (0, import_react.useState)(false), [msg, setMsg] = (0, import_react.useState)(""), [err, setErr] = (0, import_react.useState)("");
	const set = (k, v) => setForm((o) => ({
		...o,
		[k]: v
	}));
	const Field = ({ f, req }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block text-sm font-semibold text-slate-700 ${f.type === "textarea" ? "md:col-span-2" : ""}`,
		children: [
			f.label,
			req && " *",
			f.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: f.rows || 3,
				value: form[f.key] ?? "",
				onChange: (e) => set(f.key, e.target.value),
				placeholder: f.placeholder,
				required: req,
				className: inp
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: f.type || "text",
				value: form[f.key] ?? "",
				onChange: (e) => set(f.key, e.target.value),
				placeholder: f.placeholder,
				required: req,
				className: inp
			}),
			f.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs font-normal text-slate-500",
				children: f.hint
			})
		]
	});
	const chosen = docTypes;
	const submit = async (e) => {
		e.preventDefault();
		setErr("");
		setMsg("");
		if (!chosen.length) {
			setErr("Select at least one document to include.");
			return;
		}
		setBusy(true);
		const htmls = chosen.map((t) => documentHtml(t.id, form));
		try {
			await buildPdf(htmls, `CodeXViber-${(form.clientName || "Client").replace(/[^a-zA-Z0-9-]+/g, "-")}-Documents.pdf`, logoMark);
			setMsg(`One PDF with ${chosen.length} document(s) was downloaded. Nothing is saved anywhere.`);
		} catch {
			setErr("Could not create the PDF directly, so the print views were opened instead.");
			htmls.forEach((h) => openPrint(h));
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "max-w-4xl space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-black",
				children: "Client documents — fill once, one PDF"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-600",
				children: "Answer everything on this page. One PDF is created with all five documents (Invoice, Onboarding, Contract, Discovery Call, Proposal). Nothing is saved."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-2xl border border-slate-200 bg-white p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [
						...commonFields,
						...shared,
						...docTypes.flatMap((t) => perDoc[t.id])
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						f,
						req: !!f.required
					}, f.key))
				})
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-red-700",
				role: "alert",
				children: err
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-green-700",
				role: "status",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: busy,
				className: "rounded-full bg-red-700 px-7 py-3 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-60",
				children: busy ? "Creating PDF…" : "Create one PDF with all documents ↓"
			})
		]
	});
}
function ProjectPreview({ form, image, editingId, mediaName }) {
	const [bad, setBad] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setBad(false);
	}, [image]);
	const tech = form.tech_stack.split(",").map((s) => s.trim()).filter(Boolean);
	const url = form.project_url.trim();
	const Block = ({ n, t, x }) => x.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[10px] font-black uppercase tracking-[.25em] text-red-400",
			children: [
				n,
				" · ",
				t
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 whitespace-pre-line text-sm text-white/80",
			children: x
		})]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6",
		"aria-label": "Live preview of the project page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-lg font-black",
					children: ["Preview page ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-slate-500",
						children: "· updates as you type"
					})]
				}), editingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `/projects/${editingId}`,
					target: "_blank",
					rel: "noreferrer",
					className: "text-sm font-bold text-red-700 hover:underline",
					children: "Open the live page ↗"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-2xl bg-[#0b0b0f] p-5 text-white sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] font-black uppercase tracking-[.25em] text-red-400",
						children: [form.category || "Project", " · Case study"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-2 text-2xl font-black tracking-tight sm:text-3xl",
						children: form.title.trim() || "Your project title"
					}),
					image && !bad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "Website preview",
						onError: () => setBad(true),
						className: "mt-4 w-full rounded-xl border border-white/10 object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-4 text-center text-sm text-white/60",
						children: url ? "Creating the website screenshot… this can take a few seconds. Or upload an image above." : "Add the website link and a screenshot appears here automatically."
					}),
					(form.category === "Video" || form.category === "Presentation") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold",
						children: [
							form.category === "Video" ? "▶ Video" : "▤ Presentation",
							": ",
							mediaName || "no file selected yet"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-white/80",
						children: form.description.trim() || "Your description appears here."
					}),
					tech.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "01",
						t: "The problem",
						x: form.problem || ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "02",
						t: "What I built",
						x: form.solution || ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						n: "03",
						t: "Results",
						x: form.results || ""
					}),
					url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-5 inline-block rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold",
						children: "Visit live project ↗"
					})
				]
			}),
			!form.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-semibold text-amber-700",
				children: "This project is hidden — visitors will not see this page until you tick Published."
			})
		]
	});
}
function AdminSettings({ session, onSignOut }) {
	const Row = ({ k, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap justify-between gap-2 border-b border-slate-100 py-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-slate-600",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "break-all font-bold",
			children: v
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-3xl space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-slate-200 bg-white p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black",
					children: "Settings & Security"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Signed in as",
							v: session.user?.email || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Admin ID",
							v: session.user?.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Access",
							v: "Authorised administrators only (admin_users table)"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onSignOut,
					className: "mt-5 rounded-full bg-red-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-red-800",
					children: "Sign out"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-black text-slate-900",
				children: "How access is protected"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 list-disc space-y-2 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sign-in is checked by Supabase Auth, and the database and storage rules also check the admin list." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"To add or remove an administrator, edit the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "admin_users" }),
						" table in Supabase."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Only the public anon key is in this site. Never put a service-role key in the code." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Private files use a private bucket with short-lived links. Use the dashboard’s backup button regularly." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sign out on shared computers." })
				]
			})]
		})]
	});
}
var inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-400 focus:ring-4 focus:ring-cyan-100";
var primaryBtn = "inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50";
var projectBlank = {
	media_url: "",
	published: true,
	problem: "",
	solution: "",
	results: "",
	title: "",
	project_url: "",
	description: "",
	category: "Website",
	preview_image_url: "",
	tech_stack: "",
	featured: false
};
var categories = [
	"Website",
	"Admin System Website",
	"Presentation",
	"Video"
];
var docTypes = [
	{
		id: "invoice",
		title: "Invoice",
		subtitle: "Services, quantities, rates, totals and payment terms",
		icon: "₹"
	},
	{
		id: "onboarding",
		title: "Onboarding",
		subtitle: "Client intake, access, workflow and next steps",
		icon: "↗"
	},
	{
		id: "contract",
		title: "Contract",
		subtitle: "Scope, deliverables, responsibilities and signatures",
		icon: "§"
	},
	{
		id: "discovery",
		title: "Discovery Call",
		subtitle: "Goals, audience, challenges and action points",
		icon: "◎"
	},
	{
		id: "proposal",
		title: "Proposal",
		subtitle: "Objectives, plan, timeline, package and investment",
		icon: "✦"
	}
];
var commonFields = [
	{
		key: "clientName",
		label: "Client / business name",
		required: true,
		placeholder: "Client name"
	},
	{
		key: "projectName",
		label: "Project name",
		required: true,
		placeholder: "Project or engagement name"
	},
	{
		key: "clientEmail",
		label: "Client email",
		type: "email",
		placeholder: "client@example.com"
	},
	{
		key: "clientPhone",
		label: "Client phone / WhatsApp",
		placeholder: "Client contact number"
	},
	{
		key: "documentDate",
		label: "Document date",
		type: "date",
		required: true
	},
	{
		key: "preparedBy",
		label: "Prepared by",
		defaultValue: "Aaditya · CodeXViber",
		required: true
	}
];
var templateFields = {
	invoice: [
		{
			key: "invoiceNumber",
			label: "Invoice number",
			defaultValue: "CXV-001"
		},
		{
			key: "dueDate",
			label: "Payment due date",
			type: "date"
		},
		{
			key: "items",
			label: "Invoice line items",
			type: "textarea",
			rows: 5,
			required: true,
			placeholder: "Website development | 1 | 15000\nUI design | 1 | 5000",
			hint: "One line per service: Description | Quantity | Rate. Amounts are calculated automatically in INR."
		},
		{
			key: "taxPercent",
			label: "Tax (%)",
			type: "number",
			defaultValue: "0"
		},
		{
			key: "upfrontTerms",
			label: "Upfront payment",
			placeholder: "e.g. 50% (₹10,000)"
		},
		{
			key: "finalTerms",
			label: "Remaining payment",
			placeholder: "e.g. 50% before final delivery"
		},
		{
			key: "paymentMethods",
			label: "Accepted payment methods",
			type: "textarea",
			rows: 2,
			defaultValue: "UPI / Bank transfer (as agreed)"
		},
		{
			key: "notes",
			label: "Notes / additional terms",
			type: "textarea",
			rows: 3,
			placeholder: "Scope and revision notes"
		}
	],
	onboarding: [
		{
			key: "businessIntro",
			label: "Brief introduction to the business",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "goals",
			label: "Project goals",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "accountAccess",
			label: "Accounts / access needed",
			type: "textarea",
			rows: 3,
			placeholder: "Website, domain, hosting, social accounts…"
		},
		{
			key: "brandAssets",
			label: "Brand assets",
			type: "textarea",
			rows: 2,
			placeholder: "Logo, colours, fonts, examples…"
		},
		{
			key: "requirements",
			label: "Requirements / preferences",
			type: "textarea",
			rows: 3
		},
		{
			key: "communicationChannel",
			label: "Primary communication channel",
			placeholder: "Email / WhatsApp / Slack"
		},
		{
			key: "responseTime",
			label: "Expected response time",
			placeholder: "e.g. within 24 hours"
		},
		{
			key: "timeline",
			label: "Initial timeline",
			type: "textarea",
			rows: 2
		},
		{
			key: "nextSteps",
			label: "Next steps",
			type: "textarea",
			rows: 3
		}
	],
	contract: [
		{
			key: "scope",
			label: "Scope of work",
			type: "textarea",
			rows: 4,
			required: true
		},
		{
			key: "deliverables",
			label: "Deliverables",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "timeline",
			label: "Timeline and milestones",
			type: "textarea",
			rows: 3
		},
		{
			key: "revisions",
			label: "Revision policy",
			type: "textarea",
			rows: 2,
			placeholder: "Number of included revision rounds"
		},
		{
			key: "upfrontTerms",
			label: "Upfront payment terms",
			type: "textarea",
			rows: 2,
			required: true
		},
		{
			key: "finalTerms",
			label: "Remaining payment terms",
			type: "textarea",
			rows: 2,
			required: true
		},
		{
			key: "paymentMethods",
			label: "Accepted payment methods",
			placeholder: "UPI / bank transfer / other"
		},
		{
			key: "ownership",
			label: "Ownership and usage rights",
			type: "textarea",
			rows: 3
		},
		{
			key: "termination",
			label: "Cancellation / termination terms",
			type: "textarea",
			rows: 3
		},
		{
			key: "clientSignName",
			label: "Client signatory name"
		},
		{
			key: "agencySignName",
			label: "Agency signatory name",
			defaultValue: "Aaditya · CodeXViber"
		}
	],
	discovery: [
		{
			key: "businessOverview",
			label: "Business overview",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "targetAudience",
			label: "Target audience",
			type: "textarea",
			rows: 2
		},
		{
			key: "currentApproach",
			label: "Current situation / what is working",
			type: "textarea",
			rows: 3
		},
		{
			key: "challenges",
			label: "Challenges and pain points",
			type: "textarea",
			rows: 3
		},
		{
			key: "goals",
			label: "Goals and desired outcomes",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "successMeasures",
			label: "How will success be measured?",
			type: "textarea",
			rows: 2
		},
		{
			key: "meetingDate",
			label: "Meeting date / time",
			placeholder: "Date and time"
		},
		{
			key: "duration",
			label: "Estimated duration",
			defaultValue: "30–40 minutes"
		},
		{
			key: "format",
			label: "Meeting format",
			defaultValue: "Google Meet / Zoom / Phone"
		},
		{
			key: "preparation",
			label: "Information to prepare",
			type: "textarea",
			rows: 2
		},
		{
			key: "nextSteps",
			label: "Next steps",
			type: "textarea",
			rows: 3
		}
	],
	proposal: [
		{
			key: "overview",
			label: "Proposal overview",
			type: "textarea",
			rows: 4,
			required: true
		},
		{
			key: "objectives",
			label: "Objectives",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "scope",
			label: "Scope of work",
			type: "textarea",
			rows: 4,
			required: true
		},
		{
			key: "deliverables",
			label: "Deliverables",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "timeline",
			label: "Timeline",
			type: "textarea",
			rows: 3
		},
		{
			key: "packageName",
			label: "Package name",
			placeholder: "Basic / Standard / Premium / Custom"
		},
		{
			key: "investment",
			label: "Investment / total price",
			placeholder: "e.g. ₹25,000"
		},
		{
			key: "paymentTerms",
			label: "Payment terms",
			type: "textarea",
			rows: 3,
			required: true
		},
		{
			key: "process",
			label: "Process and feedback",
			type: "textarea",
			rows: 3
		},
		{
			key: "assumptions",
			label: "Assumptions / exclusions",
			type: "textarea",
			rows: 3
		},
		{
			key: "nextSteps",
			label: "Next steps",
			type: "textarea",
			rows: 2
		}
	]
};
function initialDocForm(type = "invoice") {
	const common = {
		clientName: "",
		projectName: "",
		clientEmail: "",
		clientPhone: "",
		documentDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		preparedBy: "Aaditya · CodeXViber"
	};
	const specific = Object.fromEntries((templateFields[type] || []).map((field) => [field.key, field.defaultValue ?? ""]));
	if (type === "invoice") {
		if (!specific.invoiceNumber) specific.invoiceNumber = "CXV-001";
		if (!specific.taxPercent) specific.taxPercent = "0";
	}
	return {
		...common,
		...specific
	};
}
function Field({ field, value, onChange }) {
	const props = {
		id: field.key,
		name: field.key,
		value: value ?? "",
		required: Boolean(field.required),
		onChange: (e) => onChange(field.key, e.target.value),
		placeholder: field.placeholder || "",
		className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-red-400 focus:ring-4 focus:ring-cyan-100"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: field.key,
		className: "block text-sm font-semibold text-slate-700",
		children: [
			field.label,
			field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				...props,
				rows: field.rows || 3
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...props,
				type: field.type || "text"
			}),
			" ",
			field.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs font-normal leading-relaxed text-slate-400",
				children: field.hint
			})
		]
	});
}
function h(value) {
	return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;").replaceAll("\n", "<br>");
}
function lineItems(text) {
	return String(text || "").split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
		const parts = line.split("|").map((s) => s.trim());
		const qty = Number(parts[1] || 1);
		const rate = Number(String(parts[2] || "0").replace(/[₹,$\s]/g, ""));
		return {
			description: parts[0] || "Service",
			qty: Number.isFinite(qty) ? qty : 1,
			rate: Number.isFinite(rate) ? rate : 0,
			amount: (Number.isFinite(qty) ? qty : 1) * (Number.isFinite(rate) ? rate : 0)
		};
	});
}
function currency(n) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 2
	}).format(Number(n) || 0);
}
function documentHtml(type, form) {
	const template = docTypes.find((x) => x.id === type);
	const commonRows = commonFields.map((f) => `<div class="meta"><span>${h(f.label)}</span><strong>${h(form[f.key] || "—")}</strong></div>`).join("");
	let body = "";
	if (type === "invoice") {
		const items = lineItems(form.items);
		const subtotal = items.reduce((sum, x) => sum + x.amount, 0);
		const tax = subtotal * Math.max(0, Number(form.taxPercent) || 0) / 100;
		const total = subtotal + tax;
		body += `<section><h2>Invoice details</h2><div class="meta-grid"><div class="meta"><span>Invoice number</span><strong>${h(form.invoiceNumber || "—")}</strong></div><div class="meta"><span>Due date</span><strong>${h(form.dueDate || "—")}</strong></div></div><table><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>${items.map((x) => `<tr><td>${h(x.description)}</td><td>${x.qty}</td><td>${h(currency(x.rate))}</td><td>${h(currency(x.amount))}</td></tr>`).join("")}</tbody></table><div class="totals"><div><span>Subtotal</span><strong>${h(currency(subtotal))}</strong></div><div><span>Tax (${h(form.taxPercent || "0")}%)</span><strong>${h(currency(tax))}</strong></div><div class="grand"><span>Total due</span><strong>${h(currency(total))}</strong></div></div></section>`;
		body += section("Payment terms", [
			["Upfront payment", form.upfrontTerms],
			["Remaining payment", form.finalTerms],
			["Accepted methods", form.paymentMethods],
			["Notes", form.notes]
		]);
	} else {
		const groups = {
			onboarding: [
				["Welcome and overview", form.businessIntro],
				["Goals", form.goals],
				["What we need from you", form.accountAccess],
				["Brand assets", form.brandAssets],
				["Requirements", form.requirements],
				["Communication", `Primary channel: ${form.communicationChannel || "—"}\nResponse time: ${form.responseTime || "—"}`],
				["Timeline", form.timeline],
				["Next steps", form.nextSteps]
			],
			contract: [
				["Agreement and scope", form.scope],
				["Deliverables", form.deliverables],
				["Timeline", form.timeline],
				["Revisions", form.revisions],
				["Payment terms", `Upfront: ${form.upfrontTerms || "—"}\nRemaining payment: ${form.finalTerms || "—"}\nAccepted methods: ${form.paymentMethods || "—"}`],
				["Ownership and usage", form.ownership],
				["Termination", form.termination]
			],
			discovery: [
				["Overview", form.businessOverview],
				["Target audience", form.targetAudience],
				["Current situation", form.currentApproach],
				["Challenges", form.challenges],
				["Goals and desired outcomes", form.goals],
				["Success measures", form.successMeasures],
				["Call details", `Date / time: ${form.meetingDate || "—"}\nDuration: ${form.duration || "—"}\nFormat: ${form.format || "—"}`],
				["Preparation", form.preparation],
				["Next steps", form.nextSteps]
			],
			proposal: [
				["Overview", form.overview],
				["Objectives", form.objectives],
				["Scope of work", form.scope],
				["Deliverables", form.deliverables],
				["Timeline", form.timeline],
				["Investment", `Package: ${form.packageName || "—"}\nPrice: ${form.investment || "—"}`],
				["Payment terms", form.paymentTerms],
				["Process and feedback", form.process],
				["Assumptions and exclusions", form.assumptions],
				["Next steps", form.nextSteps]
			]
		};
		body += (groups[type] || []).map(([title, value]) => value?.trim() ? `<section><h2>${h(title)}</h2><p>${h(value)}</p></section>` : "").join("");
		if (type === "contract") body += `<section class="signatures"><h2>Signatures</h2><p>By signing below, both parties confirm that they have reviewed and accepted the terms in this document.</p><div class="signature-grid"><div><div class="signature-line"></div><strong>${h(form.clientSignName || form.clientName || "Client")}</strong><span>Client signature / date</span></div><div><div class="signature-line"></div><strong>${h(form.agencySignName || "Aaditya · CodeXViber")}</strong><span>Service provider signature / date</span></div></div></section>`;
	}
	if (type === "invoice") body += `<section class="signatures"><p class="thanks">Thank you for your business.</p></section>`;
	const subtitle = type === "invoice" ? "Payment request and itemised breakdown" : type === "onboarding" ? "Project intake and getting started" : type === "contract" ? "Scope, deliverables, and terms of service" : type === "discovery" ? "Client discovery discussion guide" : "Project approach and investment";
	return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${h(template.title)} - ${h(form.clientName || "Client")}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>
    @page{size:A4;margin:16mm 17mm 18mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#172033;font-size:10pt;line-height:1.45;-webkit-print-color-adjust:exact;print-color-adjust:exact}.watermark{position:fixed;z-index:0;left:50%;top:43%;transform:translate(-50%,-50%);width:240px;height:240px;opacity:.075;pointer-events:none}.watermark img{width:100%;height:100%;object-fit:contain}.page-footer{position:fixed;z-index:2;bottom:-11mm;left:0;right:0;border-top:1px solid #dce4ee;padding-top:4mm;display:flex;justify-content:space-between;color:#768399;font-size:8pt}.paper>*:not(.watermark){position:relative;z-index:1}.brand-head{display:flex;align-items:center;gap:14px;border-bottom:3px solid #111b3d;padding-bottom:13px;margin-bottom:22px}.brand-head img{width:64px;height:54px;object-fit:contain}.brand-name{font-size:17pt;font-weight:800;color:#0d1632;letter-spacing:-.4px}.brand-line{font-size:8pt;color:#68758a;letter-spacing:1.2px;text-transform:uppercase;margin-top:2px}.tagline{color:#007e9b;font-size:8pt;font-weight:700;margin-top:3px}.doc-head{margin-bottom:18px}.kicker{font-size:8pt;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:#007e9b}.doc-title{font-size:27pt;font-weight:800;letter-spacing:-.7px;margin:3px 0 2px;color:#101a36}.subtitle{margin:0;color:#69758b;font-size:10pt}.meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;background:#f4f7fb;border:1px solid #e1e7f0;border-radius:9px;padding:12px 14px;margin:16px 0 21px}.meta{margin:3px 0;min-width:0}.meta span{display:block;color:#718096;font-size:8pt;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px}.meta strong{font-weight:700;overflow-wrap:anywhere}section{margin:18px 0;break-inside:auto}section h2{break-after:avoid}h2{font-size:12pt;margin:0 0 7px;padding-bottom:5px;border-bottom:1px solid #dce4ee;color:#14213e}p{margin:4px 0;white-space:normal;overflow-wrap:anywhere}.meta-grid p{margin:0}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:9pt;break-inside:auto}thead{display:table-header-group}tr{break-inside:avoid}th{background:#101a36;color:white;text-align:left;padding:9px 8px}td{border-bottom:1px solid #e3e8f0;padding:8px}th:nth-child(2),td:nth-child(2){text-align:center}th:nth-child(n+3),td:nth-child(n+3){text-align:right}.totals{margin-left:auto;max-width:250px}.totals div{display:flex;justify-content:space-between;gap:20px;padding:5px 0}.grand{border-top:2px solid #101a36;font-size:12pt;font-weight:bold;color:#101a36;margin-top:5px}.signatures{break-inside:avoid;margin-top:30px}.signature-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:35px}.signature-line{border-bottom:1px solid #6d778a;height:34px;margin-bottom:8px}.signature-grid span{display:block;font-size:8pt;color:#788398;margin-top:4px}.thanks{text-align:center;color:#007e9b;font-size:13pt;font-weight:bold;margin-top:20px}.note{font-size:8pt;color:#6e7b91;margin-top:18px}a{color:inherit}@media screen{body{background:#e8edf5;padding:18px}.paper{position:relative;isolation:isolate;max-width:800px;min-height:1120px;margin:0 auto;background:white;padding:60px 65px;box-shadow:0 15px 45px #0d17331c}.page-footer{position:absolute;bottom:23px;left:65px;right:65px}.download-bar{position:sticky;top:0;z-index:10;max-width:800px;margin:0 auto 12px;background:#101a36;color:white;padding:12px 16px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;gap:12px}.download-bar button{background:#6ee7f9;color:#051126;border:0;border-radius:20px;padding:10px 16px;font-weight:bold;cursor:pointer}}@media print{body{background:white;padding:0}.download-bar{display:none}.paper{padding:0;min-height:0;max-width:none;box-shadow:none}.page-footer{position:fixed;bottom:-11mm}section{break-inside:avoid}.meta-grid{break-inside:avoid}}
    </style></head><body><div class="download-bar"><span>Preview · ${h(template.title)} · answers are not saved</span><button onclick="window.print()">Download / Save as PDF ↓</button></div><div class="paper"><div class="watermark"><img src="${codexviber_mark_default}" alt=""></div><header class="brand-head"><img src="${codexviber_mark_default}" alt="CodeXViber logo"><div><div class="brand-name">Aaditya · CodeXViber</div><div class="brand-line">Creative Tech Solutions</div><div class="tagline">Ideas → Code → Impact</div></div></header><div class="doc-head"><div class="kicker">CodeXViber · ${h(template.title)}</div><h1 class="doc-title">${h(template.title)}</h1><p class="subtitle">${h(subtitle)}</p></div><div class="meta-grid">${commonRows}</div>${body}<p class="note">Prepared by ${h(form.preparedBy || "Aaditya · CodeXViber")}. Please review all details and terms before approving or signing this document.</p><div class="page-footer"><span>Aaditya · CodeXViber</span><span>Ideas → Code → Impact</span></div></div><script>window.addEventListener('load',()=>{const imgs=[...document.images];Promise.all(imgs.map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r;}))).then(()=>{if(new URLSearchParams(location.search).has('autoprint'))setTimeout(()=>window.print(),350);});});<\/script></body></html>`;
}
function section(title, rows) {
	const present = rows.filter(([, v]) => v && String(v).trim());
	if (!present.length) return "";
	return `<section><h2>${h(title)}</h2>${present.map(([label, value]) => `<p><strong>${h(label)}:</strong> ${h(value)}</p>`).join("")}</section>`;
}
async function buildPdf(htmls, filename, logoUrl) {
	const list = Array.isArray(htmls) ? htmls : [htmls];
	const [{ jsPDF }, { default: html2canvas }] = await Promise.all([import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())), import("../_libs/html2canvas.mjs").then((n) => (n.n(), n.t))]);
	const logo = await new Promise((res) => {
		const im = new Image();
		im.onload = () => {
			const c = document.createElement("canvas");
			c.width = im.naturalWidth;
			c.height = im.naturalHeight;
			c.getContext("2d").drawImage(im, 0, 0);
			res({
				data: c.toDataURL("image/png"),
				r: im.naturalHeight / im.naturalWidth
			});
		};
		im.onerror = () => res(null);
		im.src = logoUrl;
	});
	const pdf = new jsPDF({
		unit: "pt",
		format: "a4"
	});
	const W = pdf.internal.pageSize.getWidth(), H = pdf.internal.pageSize.getHeight();
	let first = true;
	for (const html of list) {
		const frame = document.createElement("iframe");
		frame.style.cssText = "position:fixed;left:-10000px;top:0;width:794px;height:1123px;border:0;";
		document.body.appendChild(frame);
		try {
			const d = frame.contentDocument;
			d.open();
			d.write(html);
			d.close();
			await new Promise((r) => setTimeout(r, 400));
			await Promise.all([...d.images].map((i) => i.complete ? 1 : new Promise((r) => {
				i.onload = i.onerror = r;
			})));
			d.querySelectorAll(".download-bar,.watermark").forEach((n) => n.remove());
			const paper = d.querySelector(".paper") || d.body;
			frame.style.height = `${paper.scrollHeight + 40}px`;
			const canvas = await html2canvas(paper, {
				scale: 2,
				backgroundColor: "#ffffff",
				useCORS: true,
				windowWidth: 794
			});
			const ratio = W / canvas.width, pageH = Math.floor(H / ratio);
			for (let y = 0; y < canvas.height; y += pageH) {
				const sh = Math.min(pageH, canvas.height - y), c = document.createElement("canvas");
				c.width = canvas.width;
				c.height = sh;
				const g = c.getContext("2d");
				g.fillStyle = "#fff";
				g.fillRect(0, 0, c.width, c.height);
				g.drawImage(canvas, 0, y, canvas.width, sh, 0, 0, canvas.width, sh);
				if (!first) pdf.addPage();
				first = false;
				pdf.addImage(c.toDataURL("image/jpeg", .95), "JPEG", 0, 0, W, sh * ratio);
				if (logo) {
					pdf.saveGraphicsState();
					pdf.setGState(new pdf.GState({ opacity: .06 }));
					const w = W * .55;
					pdf.addImage(logo.data, "PNG", (W - w) / 2, (H - w * logo.r) / 2, w, w * logo.r);
					pdf.restoreGraphicsState();
				}
			}
		} finally {
			frame.remove();
		}
	}
	pdf.save(filename);
}
function openPrint(html) {
	const win = window.open("", "_blank");
	if (!win) {
		alert("Your browser blocked the document preview. Please allow pop-ups for this website, then try again.");
		return false;
	}
	win.opener = null;
	win.document.open();
	win.document.write(html);
	win.document.close();
	return true;
}
function AdminApp() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loginError, setLoginError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("dashboard");
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [pq, setPq] = (0, import_react.useState)("");
	const [psort, setPsort] = (0, import_react.useState)("featured");
	const sortProjects = (l) => [...l].sort(psort === "az" ? (a, b) => a.title.localeCompare(b.title) : psort === "new" ? (a, b) => new Date(b.created_at) - new Date(a.created_at) : psort === "old" ? (a, b) => new Date(a.created_at) - new Date(b.created_at) : () => 0);
	const [pcat, setPcat] = (0, import_react.useState)("All");
	const [personalFiles, setPersonalFiles] = (0, import_react.useState)([]);
	const [personalUpload, setPersonalUpload] = (0, import_react.useState)(null);
	const [personalBusy, setPersonalBusy] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)(projectBlank);
	const [previewFile, setPreviewFile] = (0, import_react.useState)(null);
	const [mediaFile, setMediaFile] = (0, import_react.useState)(null);
	const [docType, setDocType] = (0, import_react.useState)("invoice");
	const [docForm, setDocForm] = (0, import_react.useState)(() => initialDocForm("invoice"));
	const [generatedDocs, setGeneratedDocs] = (0, import_react.useState)([]);
	const fetchProjects = (0, import_react.useCallback)(async (token) => {
		const rows = await dbRequest("projects", {
			token,
			query: "select=*&order=featured.desc,created_at.desc"
		});
		setProjects(Array.isArray(rows) ? rows : []);
	}, []);
	const fetchPersonalFiles = (0, import_react.useCallback)(async (token) => {
		if (!session?.user?.id) return;
		const rows = await listPersonalFiles(token, session.user.id);
		setPersonalFiles(rows.slice(0, 2));
	}, [session?.user?.id]);
	(0, import_react.useEffect)(() => {
		if (session && tab === "storage") fetchPersonalFiles(session.access_token).catch((e) => setNotice(e.message || "Could not load personal files."));
	}, [
		session,
		tab,
		fetchPersonalFiles
	]);
	const savePersonalFile = async () => {
		if (!personalUpload || !session) return;
		setPersonalBusy(true);
		setNotice("");
		try {
			if (personalFiles.length >= 2) throw new Error("Personal Storage allows only two files. Delete or replace a file first.");
			await uploadPersonalFile(personalUpload, session.access_token, session.user.id);
			setPersonalUpload(null);
			await fetchPersonalFiles(session.access_token);
			setNotice("File uploaded to your private Personal Storage.");
		} catch (e) {
			setNotice(e.message || "Upload failed.");
		} finally {
			setPersonalBusy(false);
		}
	};
	const replacePersonalFile = async (path, file) => {
		if (!file || !session) return;
		setPersonalBusy(true);
		try {
			await uploadPersonalFile(file, session.access_token, session.user.id, path);
			await fetchPersonalFiles(session.access_token);
			setNotice("Personal file replaced.");
		} catch (e) {
			setNotice(e.message || "Replace failed.");
		} finally {
			setPersonalBusy(false);
		}
	};
	const removePersonalFile = async (path) => {
		if (!session || !confirm("Delete this personal file permanently?")) return;
		setPersonalBusy(true);
		try {
			await deletePersonalFile(path, session.access_token);
			await fetchPersonalFiles(session.access_token);
			setNotice("Personal file deleted.");
		} catch (e) {
			setNotice(e.message || "Delete failed.");
		} finally {
			setPersonalBusy(false);
		}
	};
	const viewPersonalFile = async (path, download = false) => {
		try {
			const url = await getPersonalFileUrl(path, session.access_token, download);
			window.open(url, "_blank", "noopener,noreferrer");
		} catch (e) {
			setNotice(e.message || "Could not open this file.");
		}
	};
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem("aaditya-admin-session");
		if (!raw || false) return;
		try {
			const saved = JSON.parse(raw);
			if (!saved.access_token || !saved.user?.id) return;
			(async () => {
				try {
					if (!(await dbRequest("admin_users", {
						token: saved.access_token,
						query: `select=user_id&user_id=eq.${encodeURIComponent(saved.user.id)}`
					})).length) throw new Error("This account is not configured as an administrator.");
					await fetchProjects(saved.access_token);
					setSession(saved);
				} catch (e) {
					localStorage.removeItem("aaditya-admin-session");
					setLoginError(e.message || "Please sign in again.");
				}
			})();
		} catch {
			localStorage.removeItem("aaditya-admin-session");
		}
	}, [fetchProjects]);
	const login = async (e) => {
		e.preventDefault();
		setBusy(true);
		setLoginError("");
		try {
			const s = await signIn(email.trim(), password);
			await fetchProjects(s.access_token);
			localStorage.setItem("aaditya-admin-session", JSON.stringify(s));
			setSession(s);
			setPassword("");
			setNotice("Signed in. Your project dashboard is ready.");
		} catch (err) {
			setLoginError(err.message || "Unable to sign in.");
		} finally {
			setBusy(false);
		}
	};
	const logout = async () => {
		setBusy(true);
		await signOut(session?.access_token);
		localStorage.removeItem("aaditya-admin-session");
		setSession(null);
		setProjects([]);
		setBusy(false);
	};
	const updateForm = (key, value) => setForm((old) => ({
		...old,
		[key]: value
	}));
	const pickMedia = (f) => {
		if (!f) {
			setMediaFile(null);
			return;
		}
		const v = form.category === "Video";
		if (!(v ? /\.(mp4|webm)$/i : /\.pdf$/i).test(f.name)) {
			setNotice(v ? "Please choose an MP4 or WebM video." : "Please choose a PDF file.");
			return;
		}
		if (f.size > (v ? 100 : 50) * 1048576) {
			setNotice(`That file is too large. Maximum ${v ? 100 : 50} MB.`);
			return;
		}
		setNotice("");
		setMediaFile(f);
	};
	const saveProject = async (e) => {
		e.preventDefault();
		setBusy(true);
		setNotice("");
		try {
			if (!isSite && !mediaFile && !form.media_url) {
				setNotice(form.category === "Video" ? "Please upload a video first." : "Please upload your presentation PDF first.");
				setBusy(false);
				return;
			}
			let media = form.media_url || "";
			if (mediaFile) media = await uploadProjectMedia(mediaFile, session.access_token);
			let image = form.preview_image_url.trim();
			if (previewFile) image = await uploadPreview(previewFile, session.access_token);
			if (!image && isSite && form.project_url.trim()) image = automaticPreviewUrl(form.project_url.trim());
			const body = {
				title: form.title.trim(),
				project_url: isSite ? form.project_url.trim() : "",
				media_url: isSite ? "" : media,
				description: form.description.trim(),
				category: form.category,
				preview_image_url: image,
				tech_stack: form.tech_stack.split(",").map((s) => s.trim()).filter(Boolean),
				featured: !!form.featured,
				published: !!form.published,
				problem: form.problem.trim(),
				solution: form.solution.trim(),
				results: form.results.trim()
			};
			if (editingId) {
				await dbRequest("projects", {
					token: session.access_token,
					method: "PATCH",
					query: `id=eq.${encodeURIComponent(editingId)}`,
					body,
					prefer: "return=minimal"
				});
				setNotice("Project updated.");
			} else {
				await dbRequest("projects", {
					token: session.access_token,
					method: "POST",
					query: "select=*",
					body,
					prefer: "return=representation"
				});
				setNotice("Project published to the public gallery.");
			}
			await fetchProjects(session.access_token);
			setForm(projectBlank);
			setPreviewFile(null);
			setMediaFile(null);
			setEditingId("");
			setTab("mine");
		} catch (err) {
			setNotice(err.message || "Project could not be saved.");
		} finally {
			setBusy(false);
		}
	};
	const startEdit = (p) => {
		setForm({
			title: p.title || "",
			project_url: p.project_url || "",
			description: p.description || "",
			category: p.category || "Website",
			preview_image_url: p.preview_image_url || "",
			tech_stack: Array.isArray(p.tech_stack) ? p.tech_stack.join(", ") : "",
			featured: !!p.featured,
			published: p.published !== false,
			media_url: p.media_url || "",
			problem: p.problem || "",
			solution: p.solution || "",
			results: p.results || ""
		});
		setEditingId(p.id);
		setPreviewFile(null);
		setTab("add");
		setNotice("Editing project: " + p.title);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const deleteProject = async (p) => {
		if (!window.confirm(`Delete “${p.title}” from the public gallery?`)) return;
		setBusy(true);
		try {
			await dbRequest("projects", {
				token: session.access_token,
				method: "DELETE",
				query: `id=eq.${encodeURIComponent(p.id)}`
			});
			await fetchProjects(session.access_token);
			setNotice("Project deleted.");
		} catch (e) {
			setNotice(e.message || "Delete failed.");
		} finally {
			setBusy(false);
		}
	};
	const isSite = ["Website", "Admin System Website"].includes(form.category);
	const visiblePreview = form.preview_image_url.trim() || automaticPreviewUrl(form.project_url.trim());
	[...commonFields, ...templateFields[docType]];
	const updateDoc = (key, value) => setDocForm((old) => ({
		...old,
		[key]: value
	}));
	const generateDocument = async () => {
		const html = documentHtml(docType, docForm);
		const chosen = docTypes.find((t) => t.id === docType);
		const rec = {
			id: crypto.randomUUID?.() || `${Date.now()}`,
			title: `${chosen.title} · ${docForm.clientName || "Client"}`,
			type: docType,
			createdAt: (/* @__PURE__ */ new Date()).toLocaleString(),
			html
		};
		setGeneratedDocs((old) => [rec, ...old].slice(0, 8));
		setNotice("Creating your PDF…");
		try {
			await buildPdf(html, `${chosen.title}-${docForm.clientName || "Client"}`.replace(/[^a-zA-Z0-9-]+/g, "-") + ".pdf", codexviber_mark_default);
			setNotice("PDF downloaded. It is not saved anywhere.");
		} catch (e) {
			setNotice("Could not create the PDF directly, so the print view was opened instead.");
			openPrint(html);
		}
	};
	const downloadAgain = (rec) => openPrint(rec.html);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#f3f5fa] px-4 py-10 text-slate-900 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mb-8 inline-block text-sm text-slate-500 hover:text-red-700",
				children: "← Back to portfolio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-slate-200 border-t-4 border-t-red-600 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[.22em] text-red-700",
							children: "Private workspace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl font-black tracking-tight",
							children: "Admin login"
						})]
					}),
					loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "alert",
						className: "mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700",
						children: loginError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: login,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: ["Administrator email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									autoComplete: "username",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: inputClass,
									placeholder: "Your admin email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-semibold",
								children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									required: true,
									autoComplete: "current-password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: inputClass,
									placeholder: "Your password"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `${primaryBtn} w-full`,
								disabled: busy || false,
								children: [busy ? "Signing in…" : "Sign in securely", " ↗"]
							})
						]
					}),
					false,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs leading-relaxed text-slate-400",
						children: "For security, the admin password is not embedded in this website. Create your own administrator user in Supabase and authorize its user UUID."
					})
				]
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f3f5fa] text-slate-900 md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "bg-[#b91c1c] px-4 py-4 text-white md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:px-5 md:py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "mb-5 flex items-center gap-3 md:mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: codexviber_mark_default,
						className: "h-11 w-11 object-contain",
						alt: "CodeXViber"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
						className: "block text-lg",
						children: [
							"Aaditya ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-300",
								children: "×"
							}),
							" CodeXViber"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "text-[10px] uppercase tracking-[.2em] text-white/45",
						children: "Admin Studio"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 hidden text-[10px] uppercase tracking-[.2em] text-white/35 md:block",
					children: "Workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex gap-2 overflow-x-auto md:flex-col md:overflow-visible",
					children: [[
						{
							id: "dashboard",
							label: "Dashboard",
							icon: "⌂"
						},
						{
							id: "add",
							label: editingId ? "Edit project" : "Add Project",
							icon: "+"
						},
						{
							id: "mine",
							label: "My Projects",
							icon: "▦"
						},
						{
							id: "messages",
							label: "Messages",
							icon: "✉"
						},
						{
							id: "docs",
							label: "Documents / PDF",
							icon: "▤"
						},
						{
							id: "storage",
							label: "Personal Storage",
							icon: "▣"
						},
						{
							id: "settings",
							label: "Settings & Security",
							icon: "⚙"
						}
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setTab(x.id);
							setNotice("");
						},
						className: `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm ${tab === x.id ? "bg-red-300 font-bold text-slate-950" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-5 text-center text-lg",
							children: x.icon
						}), x.label]
					}, x.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/",
						target: "_blank",
						rel: "noreferrer",
						className: "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-5 text-center",
							children: "↗"
						}), "Preview Website"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto hidden border-t border-white/10 pt-5 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "break-all text-xs text-white/55",
						children: ["Signed in: ", session.user?.email]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: logout,
						disabled: busy,
						className: "mt-4 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white/75 hover:bg-white/10",
						children: "Sign out"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "min-w-0 flex-1 px-4 py-6 sm:px-6 md:ml-64 md:px-10 md:py-10 lg:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 flex flex-wrap items-end justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-xs font-bold uppercase tracking-[.23em] text-red-700",
								children: "CodeXViber · Control panel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-black tracking-tight md:text-4xl",
								children: tab === "add" ? editingId ? "Edit project" : "Add a project" : tab === "mine" ? "My Projects" : tab === "storage" ? "Personal Storage" : "Document Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500",
								children: "Manage public projects and create client-ready PDFs."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/",
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold hover:border-red-300",
							children: "Preview public site ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, { className: "border border-slate-300 text-slate-700" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid max-w-lg grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: "Published projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-3xl font-black",
							children: projects.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-200 bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-500",
							children: "Documents made this session"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-3xl font-black",
							children: generatedDocs.length
						})]
					})]
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "status",
					className: "mb-5 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed",
					children: notice
				}),
				tab === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: saveProject,
					className: "max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black",
								children: editingId ? "Update project details" : "Project details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-slate-500",
								children: "Add your URL and a description. The URL is used to make a website screenshot preview; some websites may block screenshot services, so you can upload your own preview image."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold",
									children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: form.category,
										onChange: (e) => {
											updateForm("category", e.target.value);
											setMediaFile(null);
										},
										className: inputClass,
										children: categories.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: x }, x))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold",
									children: ["Project name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.title,
										onChange: (e) => updateForm("title", e.target.value),
										className: inputClass,
										placeholder: "e.g. CodeXViber Website",
										required: true
									})]
								}),
								form.category === "Video" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold md:col-span-2",
									children: [
										"Upload video (MP4 or WebM, up to 100 MB)",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "video/mp4,video/webm",
											onChange: (e) => pickMedia(e.target.files[0]),
											className: inputClass
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs font-normal text-slate-500",
											children: mediaFile ? `Selected: ${mediaFile.name}` : form.media_url ? "A video is already saved. Choose a file only to replace it." : "No video selected yet."
										})
									]
								}),
								form.category === "Presentation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold md:col-span-2",
									children: [
										"Upload presentation (PDF, up to 50 MB)",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "application/pdf,.pdf",
											onChange: (e) => pickMedia(e.target.files[0]),
											className: inputClass
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs font-normal text-slate-500",
											children: mediaFile ? `Selected: ${mediaFile.name}` : form.media_url ? "A file is already saved. Choose a file only to replace it." : "Tip: export your PowerPoint as a PDF first."
										})
									]
								}),
								isSite && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold md:col-span-2",
									children: ["Project URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "url",
										required: true,
										value: form.project_url,
										onChange: (e) => updateForm("project_url", e.target.value),
										className: inputClass,
										placeholder: "https://your-project.com"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold md:col-span-2",
									children: ["Project description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: form.description,
										onChange: (e) => updateForm("description", e.target.value),
										className: inputClass,
										rows: "4",
										placeholder: "What does the project do? What did you build?",
										required: true
									})]
								}),
								isSite && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-5 block text-sm font-semibold text-slate-700",
										children: ["Case study · The problem (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: "3",
											value: form.problem,
											onChange: (e) => setForm({
												...form,
												problem: e.target.value
											}),
											className: "mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-red-500",
											placeholder: "What did the client need?"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-5 block text-sm font-semibold text-slate-700",
										children: ["Case study · What I built (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: "3",
											value: form.solution,
											onChange: (e) => setForm({
												...form,
												solution: e.target.value
											}),
											className: "mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-red-500",
											placeholder: "How did you solve it?"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-5 block text-sm font-semibold text-slate-700",
										children: ["Case study · Results (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: "3",
											value: form.results,
											onChange: (e) => setForm({
												...form,
												results: e.target.value
											}),
											className: "mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-red-500",
											placeholder: "What changed after launch?"
										})]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold",
									children: [
										"Technology stack",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.tech_stack,
											onChange: (e) => updateForm("tech_stack", e.target.value),
											className: inputClass,
											placeholder: "React, Tailwind CSS, Node.js"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "mt-1 block font-normal text-slate-400",
											children: "Separate technologies with commas."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold",
									children: ["Preview image URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "url",
										value: form.preview_image_url,
										onChange: (e) => updateForm("preview_image_url", e.target.value),
										className: inputClass,
										placeholder: "Optional hosted screenshot URL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold md:col-span-2",
									children: ["Or upload a screenshot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*",
										onChange: (e) => setPreviewFile(e.target.files?.[0] || null),
										className: `${inputClass} file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-50 file:px-3 file:py-2 file:font-bold file:text-cyan-800`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2",
									children: visiblePreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-slate-200 bg-slate-50 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-2 text-xs font-bold uppercase tracking-widest text-slate-500",
												children: "Live preview image · best effort"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: visiblePreview,
												alt: "Website screenshot preview",
												className: "max-h-64 w-full rounded-xl object-cover object-top",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs text-slate-500",
												children: "If no screenshot appears, upload one above or paste an image URL. The project link itself is saved separately."
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500",
										children: "Enter a website URL to see a preview attempt here."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: form.featured,
										onChange: (e) => updateForm("featured", e.target.checked),
										className: "h-4 w-4 accent-red-700"
									}), " Feature this project near the top of the public gallery."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: form.published,
										onChange: (e) => updateForm("published", e.target.checked),
										className: "h-4 w-4 accent-red-700"
									}), " Published — show this project on the public portfolio (untick to hide it)."]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectPreview, {
							form,
							image: visiblePreview,
							editingId,
							mediaName: mediaFile ? mediaFile.name : form.media_url ? "saved file" : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: primaryBtn,
								disabled: busy,
								children: [busy ? "Saving…" : editingId ? "Save changes" : "Publish project", " ↗"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600",
								onClick: () => {
									setForm(projectBlank);
									setEditingId("");
									setPreviewFile(null);
								},
								children: "Clear"
							})]
						})
					]
				}),
				tab === "storage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminFiles, {
					token: session.access_token,
					userId: session.user.id,
					title: "Personal Storage",
					hint: "Private files and project documents. Organise them in folders; preview, download, rename or delete."
				}),
				tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSettings, {
					session,
					onSignOut: logout
				}),
				tab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {
					token: session.access_token,
					projects,
					setTab
				}),
				tab === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMessages, { token: session.access_token }),
				tab === "mine" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4",
					children: [projects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: pq,
								onChange: (e) => setPq(e.target.value),
								placeholder: "Search projects",
								className: "min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-red-500"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: pcat,
								onChange: (e) => setPcat(e.target.value),
								className: "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm",
								children: ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: psort,
								onChange: (e) => setPsort(e.target.value),
								"aria-label": "Sort projects",
								className: "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "featured",
										children: "Featured first"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "new",
										children: "Newest"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "old",
										children: "Oldest"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "az",
										children: "A–Z"
									})
								]
							})
						]
					}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black",
								children: "No published projects yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-md text-sm text-slate-500",
								children: "Add a project with its title, link, preview image, and description. Publishing makes it appear in the public project gallery."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setTab("add"),
								className: `${primaryBtn} mt-5`,
								children: "Add first project +"
							})
						]
					}) : sortProjects(projects.filter((p) => (pcat === "All" || p.category === pcat) && (!pq || `${p.title} ${p.description || ""} ${(p.tech_stack || []).join(" ")}`.toLowerCase().includes(pq.toLowerCase())))).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[210px_1fr] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "relative block aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-950 via-red-800 to-fuchsia-800",
							href: p.project_url || "#",
							target: p.project_url ? "_blank" : void 0,
							rel: "noreferrer",
							children: [p.preview_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.preview_image_url,
								alt: `${p.title} preview`,
								className: "absolute inset-0 h-full w-full object-cover",
								onError: (e) => e.currentTarget.style.display = "none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-2 left-2 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white",
								children: p.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase tracking-widest text-red-700",
										children: p.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-black",
										children: p.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `/projects/${p.id}`,
												target: "_blank",
												rel: "noreferrer",
												className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold hover:border-red-300",
												children: "Preview page ↗"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => startEdit(p),
												className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold hover:border-red-400",
												children: "Edit"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => deleteProject(p),
												disabled: busy,
												className: "rounded-lg border border-red-100 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50",
												children: "Delete"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-slate-500",
									children: p.description
								}),
								p.project_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: p.project_url,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-2 inline-block max-w-full truncate text-sm font-semibold text-red-700 underline",
									children: p.project_url
								})
							]
						})]
					}, p.id))]
				}),
				tab === "storage-legacy" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black",
								children: "Personal Storage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate-500",
								children: "Private to your admin account. Store up to two files; PDFs and images can be previewed. Files are not public."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-bold",
									children: ["Upload a personal file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										onChange: (e) => setPersonalUpload(e.target.files?.[0] || null),
										className: inputClass,
										disabled: personalBusy || personalFiles.length >= 2
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-slate-500",
									children: [personalFiles.length, "/2 files used. To add a third file, delete one first."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: savePersonalFile,
									disabled: !personalUpload || personalBusy || personalFiles.length >= 2,
									className: `${primaryBtn} mt-4`,
									children: [personalBusy ? "Working…" : "Upload file", " ↑"]
								})
							]
						}),
						personalFiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-slate-50 p-5 text-sm text-slate-500",
							children: "No personal files uploaded yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: personalFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl",
										children: String(file.name).match(/\.(png|jpe?g|gif|webp)$/i) ? "▧" : "▤"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "break-all font-bold",
											children: file.name.replace(/^\d+-/, "")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400",
											children: file.metadata?.size ? `${(file.metadata.size / 1024).toFixed(1)} KB` : "Private file"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold",
												onClick: () => viewPersonalFile(file.path, false),
												children: "View ↗"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold",
												onClick: () => viewPersonalFile(file.path, true),
												children: "Download ↓"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold",
												children: ["Replace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													className: "hidden",
													onChange: (e) => replacePersonalFile(file.path, e.target.files?.[0])
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "rounded-lg border border-red-100 px-3 py-2 text-xs font-bold text-red-600",
												onClick: () => removePersonalFile(file.path),
												children: "Delete"
											})
										]
									})
								]
							}, file.path))
						})
					]
				}),
				tab === "docs-old" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid grid-cols-2 gap-3 lg:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black",
									children: "Choose a document"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-slate-500",
									children: "Answer the questions to create a branded, print-ready PDF."
								})]
							}),
							docTypes.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setDocType(d.id);
									setDocForm((old) => ({
										...initialDocForm(d.id),
										clientName: old.clientName || "",
										projectName: old.projectName || "",
										clientEmail: old.clientEmail || "",
										clientPhone: old.clientPhone || "",
										documentDate: old.documentDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
										preparedBy: old.preparedBy || "Aaditya · CodeXViber"
									}));
									setNotice("");
								},
								className: `flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition ${docType === d.id ? "border-red-400 bg-blue-50 ring-2 ring-blue-100" : "border-slate-200 bg-white hover:border-slate-300"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl font-black ${docType === d.id ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700"}`,
									children: d.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block",
									children: d.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs leading-relaxed text-slate-500",
									children: d.subtitle
								})] })]
							}, d.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-xs leading-relaxed text-cyan-950",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Privacy:" }), " document answers stay in this page’s memory only. They are not inserted into Supabase and are cleared when the page is refreshed or closed. The PDF carries the CodeXViber mark as a light watermark on each printed page."]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							generateDocument();
						},
						className: "rounded-3xl border border-slate-200 bg-white p-5 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[.2em] text-red-700",
										children: "Document questionnaire"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-1 text-2xl font-black",
										children: ["Generate ", docTypes.find((x) => x.id === docType)?.title]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-slate-500",
										children: "Fill the fields below. The generated document opens in a new tab; choose “Download / Save as PDF” and then “Save as PDF” in the print dialog."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 grid gap-4 sm:grid-cols-2",
								children: commonFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									field: f,
									value: docForm[f.key] ?? f.defaultValue ?? "",
									onChange: updateDoc
								}, f.key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 border-t border-slate-100 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mb-4 text-sm font-black uppercase tracking-widest text-slate-600",
									children: [docTypes.find((x) => x.id === docType)?.title, " details"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: templateFields[docType].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: f.type === "textarea" ? "sm:col-span-2" : "",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											field: f,
											value: docForm[f.key] ?? f.defaultValue ?? "",
											onChange: updateDoc
										})
									}, f.key))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: primaryBtn,
									children: "Generate & download PDF ↓"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50",
									onClick: () => setDocForm(initialDocForm(docType)),
									children: "Clear answers"
								})]
							})
						]
					})]
				}),
				tab === "docs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDocuments, {
					logoMark: "/assets/codexviber-mark-D3Oha4ri.png",
					api: {
						docTypes,
						commonFields,
						templateFields,
						documentHtml,
						initialDocForm,
						buildPdf,
						openPrint
					}
				}),
				tab === "docs-old" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-7 rounded-2xl border border-slate-200 bg-white p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-black",
							children: "Generated documents · this session"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-slate-500",
							children: "Temporary list only. Nothing here is saved in the database."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-slate-400",
							children: [generatedDocs.length, " generated"]
						})]
					}), generatedDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-500",
						children: "Your generated PDFs will show here during this session."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 divide-y divide-slate-100",
						children: generatedDocs.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: doc.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-400",
								children: doc.createdAt
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold hover:border-red-300",
								onClick: () => downloadAgain(doc),
								children: "Open / download again ↗"
							})]
						}, doc.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center justify-between border-t border-slate-200 pt-5 text-xs text-slate-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Aaditya · CodeXViber"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: logout,
						disabled: busy,
						className: "rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:text-red-600",
						children: "Sign out"
					})]
				})
			]
		})]
	});
}
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminApp, {});
}
//#endregion
export { AdminPage as component };
