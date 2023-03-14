import { r as redirect } from './index2-e4abb57b.js';

const load = async ({ locals, url }) => {
  console.log("hihi");
  if (!locals.session) {
    throw redirect(302, "/auth/login");
  }
  return {};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-af7be69d.js')).default;
const file = '_app/immutable/components/pages/dashboard/_layout.svelte-0cd4da9b.js';
const imports = ["_app/immutable/components/pages/dashboard/_layout.svelte-0cd4da9b.js","_app/immutable/chunks/index-b5eff4e7.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/stores-46f7d7bf.js","_app/immutable/chunks/singletons-9fb824a4.js","_app/immutable/chunks/forms-119fef2c.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/navigation-1415e2f5.js"];
const stylesheets = ["_app/immutable/assets/_layout-51cfcab0.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=2-4947ec7d.js.map
