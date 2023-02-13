const load = async ({ locals, url }) => {
  if (!locals.session) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: locals.session?.user?.id
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    }
  });
  return { user };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-bd27ca7f.js')).default;
const file = '_app/immutable/components/pages/(app)/_layout.svelte-821ce6ad.js';
const imports = ["_app/immutable/components/pages/(app)/_layout.svelte-821ce6ad.js","_app/immutable/chunks/index-98f9187f.js","_app/immutable/chunks/forms-5fa88b70.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-11903ee4.js","_app/immutable/chunks/navigation-2dc3ae2e.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/clickOutSide-179e661a.js","_app/immutable/chunks/stores-4f285500.js","_app/immutable/chunks/list_message.svelte_svelte_type_style_lang-d3fda569.js"];
const stylesheets = ["_app/immutable/assets/_layout-4ccba702.css","_app/immutable/assets/list_message-a18d5fe8.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=2-f894018f.js.map
