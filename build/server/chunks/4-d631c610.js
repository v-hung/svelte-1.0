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
const file = '_app/immutable/components/pages/(app)/_page.svelte-1e88767d.js';
const imports = ["_app/immutable/components/pages/(app)/_page.svelte-1e88767d.js","_app/immutable/chunks/index-4e57025e.js"];
const stylesheets = ["_app/immutable/assets/_page-f0590e67.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-d631c610.js.map
