import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const load = async (event) => {
  const quizzes = await prisma.quizzes.findMany();
  return {
    quizzes
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-1fceef40.js')).default;
const file = '_app/immutable/components/pages/(app)/_page.svelte-430863f8.js';
const imports = ["_app/immutable/components/pages/(app)/_page.svelte-430863f8.js","_app/immutable/chunks/index-98f9187f.js"];
const stylesheets = ["_app/immutable/assets/_page-f0590e67.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-da8f2786.js.map
