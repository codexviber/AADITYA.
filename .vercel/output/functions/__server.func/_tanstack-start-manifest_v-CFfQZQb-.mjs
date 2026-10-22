//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-CFfQZQb-.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/admin",
			"/projects/$id",
			"/projects/"
		],
		preloads: ["/assets/index-DKbM3aXO.js", "/assets/rolldown-runtime-hePW80VL.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-DKbM3aXO.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		css: ["/assets/routes-PTugdkvS.css"],
		preloads: [
			"/assets/routes-K3BGTwdX.js",
			"/assets/ThemeToggle-Ce-wTg0v.js",
			"/assets/CategoryTags-BqL5wqNC.js"
		]
	},
	"/admin": {
		filePath: "/workspace/src/routes/admin.tsx",
		children: void 0,
		preloads: [
			"/assets/admin-DTuFA4ug.js",
			"/assets/ThemeToggle-Ce-wTg0v.js",
			"/assets/codexviber-mark-CuK-W9Kc.js"
		]
	},
	"/projects/$id": {
		filePath: "/workspace/src/routes/projects/$id.tsx",
		children: void 0,
		preloads: ["/assets/_id-B9JjHikQ.js", "/assets/ThemeToggle-Ce-wTg0v.js"]
	},
	"/projects/": {
		filePath: "/workspace/src/routes/projects/index.tsx",
		children: void 0,
		preloads: [
			"/assets/projects-DJPSOVb6.js",
			"/assets/ThemeToggle-Ce-wTg0v.js",
			"/assets/codexviber-mark-CuK-W9Kc.js",
			"/assets/CategoryTags-BqL5wqNC.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
