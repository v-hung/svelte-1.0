import { r as redirect } from './index2-e4abb57b.js';

const load = async ({ locals, url }) => {
  if (!locals.session) {
    throw redirect(302, "/auth/login");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: locals.session?.user?.id
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true
    }
  });
  return { user };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_layout.svelte-566d416f.js')).default;
const file = '_app/immutable/components/pages/dashboard/_layout.svelte-5aeb713b.js';
const imports = ["_app/immutable/components/pages/dashboard/_layout.svelte-5aeb713b.js","_app/immutable/chunks/index-4e57025e.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/stores-a933c578.js","_app/immutable/chunks/singletons-94e6fee4.js","_app/immutable/chunks/forms-b0cb80c2.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/navigation-bc9b83dc.js","_app/immutable/chunks/index-a96d6802.js"];
const stylesheets = ["_app/immutable/assets/_layout-967f6d93.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=3-2f051d80.js.map
