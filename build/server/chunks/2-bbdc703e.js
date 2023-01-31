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
const component = async () => (await import('./_layout.svelte-a8196a4c.js')).default;
const file = '_app/immutable/components/pages/(app)/_layout.svelte-fdcb41fa.js';
const imports = ["_app/immutable/components/pages/(app)/_layout.svelte-fdcb41fa.js","_app/immutable/chunks/index-4e57025e.js","_app/immutable/chunks/forms-b0cb80c2.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-94e6fee4.js","_app/immutable/chunks/navigation-bc9b83dc.js","_app/immutable/chunks/svelte-logo-24ddae96.js","_app/immutable/chunks/index-a96d6802.js","_app/immutable/chunks/stores-a933c578.js"];
const stylesheets = ["_app/immutable/assets/_layout-4ccba702.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=2-bbdc703e.js.map
