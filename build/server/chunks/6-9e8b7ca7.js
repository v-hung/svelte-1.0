import { r as redirect } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const load = async (event) => {
  const quiz = await prisma.quizzes.findFirst({
    include: {
      passages: {
        include: {
          group_questions: {
            include: {
              questions: true
            }
          }
        }
      }
    }
  });
  if (!quiz) {
    throw redirect(302, "/");
  }
  return {
    quiz
  };
};
const actions = {
  submit: async (event) => {
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-4a67ac66.js')).default;
const file = '_app/immutable/components/pages/(app)/practice/_slug_/_page.svelte-cef52c58.js';
const imports = ["_app/immutable/components/pages/(app)/practice/_slug_/_page.svelte-cef52c58.js","_app/immutable/chunks/index-98f9187f.js","_app/immutable/chunks/forms-5fa88b70.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-11903ee4.js","_app/immutable/chunks/navigation-2dc3ae2e.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/clickOutSide-179e661a.js"];
const stylesheets = ["_app/immutable/assets/_page-15998172.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-9e8b7ca7.js.map
