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
const file = '_app/immutable/components/pages/(app)/practice/_slug_/_page.svelte-13edff82.js';
const imports = ["_app/immutable/components/pages/(app)/practice/_slug_/_page.svelte-13edff82.js","_app/immutable/chunks/index-4e57025e.js","_app/immutable/chunks/forms-b0cb80c2.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-94e6fee4.js","_app/immutable/chunks/navigation-bc9b83dc.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/index-a96d6802.js"];
const stylesheets = ["_app/immutable/assets/_page-15998172.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-1b66df4a.js.map
