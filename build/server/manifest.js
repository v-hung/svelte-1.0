const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/facebook.png","images/github.png","images/google.png","js/tinymce/icons/default/icons.min.js","js/tinymce/langs/README.md","js/tinymce/license.txt","js/tinymce/models/dom/model.min.js","js/tinymce/plugins/advlist/plugin.min.js","js/tinymce/plugins/anchor/plugin.min.js","js/tinymce/plugins/autolink/plugin.min.js","js/tinymce/plugins/autoresize/plugin.min.js","js/tinymce/plugins/autosave/plugin.min.js","js/tinymce/plugins/charmap/plugin.min.js","js/tinymce/plugins/code/plugin.min.js","js/tinymce/plugins/codesample/plugin.min.js","js/tinymce/plugins/directionality/plugin.min.js","js/tinymce/plugins/emoticons/js/emojiimages.js","js/tinymce/plugins/emoticons/js/emojiimages.min.js","js/tinymce/plugins/emoticons/js/emojis.js","js/tinymce/plugins/emoticons/js/emojis.min.js","js/tinymce/plugins/emoticons/plugin.min.js","js/tinymce/plugins/fullscreen/plugin.min.js","js/tinymce/plugins/help/plugin.min.js","js/tinymce/plugins/image/plugin.min.js","js/tinymce/plugins/importcss/plugin.min.js","js/tinymce/plugins/insertdatetime/plugin.min.js","js/tinymce/plugins/link/plugin.min.js","js/tinymce/plugins/lists/plugin.min.js","js/tinymce/plugins/media/plugin.min.js","js/tinymce/plugins/nonbreaking/plugin.min.js","js/tinymce/plugins/pagebreak/plugin.min.js","js/tinymce/plugins/preview/plugin.min.js","js/tinymce/plugins/quickbars/plugin.min.js","js/tinymce/plugins/save/plugin.min.js","js/tinymce/plugins/searchreplace/plugin.min.js","js/tinymce/plugins/table/plugin.min.js","js/tinymce/plugins/template/plugin.min.js","js/tinymce/plugins/visualblocks/plugin.min.js","js/tinymce/plugins/visualchars/plugin.min.js","js/tinymce/plugins/wordcount/plugin.min.js","js/tinymce/skins/content/dark/content.min.css","js/tinymce/skins/content/default/content.min.css","js/tinymce/skins/content/document/content.min.css","js/tinymce/skins/content/tinymce-5/content.min.css","js/tinymce/skins/content/tinymce-5-dark/content.min.css","js/tinymce/skins/content/writer/content.min.css","js/tinymce/skins/ui/oxide/content.inline.min.css","js/tinymce/skins/ui/oxide/content.min.css","js/tinymce/skins/ui/oxide/skin.min.css","js/tinymce/skins/ui/oxide/skin.shadowdom.min.css","js/tinymce/skins/ui/oxide-dark/content.inline.min.css","js/tinymce/skins/ui/oxide-dark/content.min.css","js/tinymce/skins/ui/oxide-dark/skin.min.css","js/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css","js/tinymce/skins/ui/tinymce-5/content.inline.min.css","js/tinymce/skins/ui/tinymce-5/content.min.css","js/tinymce/skins/ui/tinymce-5/skin.min.css","js/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css","js/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css","js/tinymce/skins/ui/tinymce-5-dark/content.min.css","js/tinymce/skins/ui/tinymce-5-dark/skin.min.css","js/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css","js/tinymce/themes/silver/theme.min.js","js/tinymce/tinymce.d.ts","js/tinymce/tinymce.min.js","js/tinymce.min.js","robots.txt"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".md":"text/markdown",".txt":"text/plain",".css":"text/css",".ts":"video/mp2t"},
	_: {
		entry: {"file":"_app/immutable/start-7131d7a2.js","imports":["_app/immutable/start-7131d7a2.js","_app/immutable/chunks/index-98f9187f.js","_app/immutable/chunks/singletons-11903ee4.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-12ccf7b5.js'),
			() => import('./chunks/1-a0a79e74.js'),
			() => import('./chunks/2-f894018f.js'),
			() => import('./chunks/3-7387cb42.js'),
			() => import('./chunks/4-da8f2786.js'),
			() => import('./chunks/5-f151b25b.js'),
			() => import('./chunks/6-9e8b7ca7.js'),
			() => import('./chunks/7-b3efe39b.js'),
			() => import('./chunks/8-3deac7d5.js'),
			() => import('./chunks/9-ce9e949b.js'),
			() => import('./chunks/10-5904af96.js'),
			() => import('./chunks/11-346fd810.js'),
			() => import('./chunks/12-620962ce.js'),
			() => import('./chunks/13-a4c4a3ac.js'),
			() => import('./chunks/14-3782f937.js'),
			() => import('./chunks/15-4cf31746.js'),
			() => import('./chunks/16-d96c5af5.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/v1/auth/login",
				pattern: /^\/api\/v1\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-7e97a77c.js')
			},
			{
				id: "/api/v1/auth/me",
				pattern: /^\/api\/v1\/auth\/me\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-51c9d0f0.js')
			},
			{
				id: "/api/v1/auth/oauth",
				pattern: /^\/api\/v1\/auth\/oauth\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-c5c084dd.js')
			},
			{
				id: "/api/v1/auth/refresh-token",
				pattern: /^\/api\/v1\/auth\/refresh-token\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-7677d5db.js')
			},
			{
				id: "/api/v1/messages/[roomId]",
				pattern: /^\/api\/v1\/messages\/([^/]+?)\/?$/,
				params: [{"name":"roomId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4a42dd91.js')
			},
			{
				id: "/api/v1/rooms",
				pattern: /^\/api\/v1\/rooms\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-43c822e6.js')
			},
			{
				id: "/api/v1/rooms/[roomId]",
				pattern: /^\/api\/v1\/rooms\/([^/]+?)\/?$/,
				params: [{"name":"roomId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-940feb53.js')
			},
			{
				id: "/api/v1/users",
				pattern: /^\/api\/v1\/users\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-7ed0839d.js')
			},
			{
				id: "/auth/callback/[provider]",
				pattern: /^\/auth\/callback\/([^/]+?)\/?$/,
				params: [{"name":"provider","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard/categories",
				pattern: /^\/dashboard\/categories\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/dashboard/categories/create",
				pattern: /^\/dashboard\/categories\/create\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dashboard/products",
				pattern: /^\/dashboard\/products\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/dashboard/products/create",
				pattern: /^\/dashboard\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/dashboard/quizzes",
				pattern: /^\/dashboard\/quizzes\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard/quizzes/create",
				pattern: /^\/dashboard\/quizzes\/create\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/practice/[slug]",
				pattern: /^\/practice\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-944c3396.js')
			},
			{
				id: "/(app)/static/test/[id]",
				pattern: /^\/static\/test\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/storage",
				pattern: /^\/storage\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-e3411c9e.js')
			},
			{
				id: "/storage/[filename]",
				pattern: /^\/storage\/([^/]+?)\/?$/,
				params: [{"name":"filename","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-d2261af2.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
