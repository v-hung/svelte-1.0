import './prismadb-d61ddf89.js';
import '@prisma/client';

const load = async (event) => {
  return {
    products: new Array(10).fill(0)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-962018f0.js')).default;
const file = '_app/immutable/components/pages/dashboard/products/_page.svelte-d767ba42.js';
const imports = ["_app/immutable/components/pages/dashboard/products/_page.svelte-d767ba42.js","_app/immutable/chunks/index-b5eff4e7.js","_app/immutable/chunks/stores-46f7d7bf.js","_app/immutable/chunks/singletons-9fb824a4.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=7-85fd9719.js.map
