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
const file = '_app/immutable/components/pages/dashboard/_layout.svelte-76278adf.js';
const imports = ["_app/immutable/components/pages/dashboard/_layout.svelte-76278adf.js","_app/immutable/chunks/index-98f9187f.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/stores-4f285500.js","_app/immutable/chunks/singletons-11903ee4.js","_app/immutable/chunks/forms-5fa88b70.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/navigation-2dc3ae2e.js","_app/immutable/chunks/clickOutSide-179e661a.js"];
const stylesheets = ["_app/immutable/assets/_layout-967f6d93.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=3-7387cb42.js.map
