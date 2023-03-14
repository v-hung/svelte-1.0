import { f as fail, r as redirect } from './index2-e4abb57b.js';
import { c as client } from './prismadb-d61ddf89.js';
import bcrypt from 'bcrypt';
import { r as removeSpace } from './validator-edcfa16f.js';
import { s as signToken } from './jwt-ee429d29.js';
import '@prisma/client';
import 'jsonwebtoken';
import './private-a9b5a848.js';

const prerender = false;
const load = async ({ locals }) => {
  if (!locals.session)
    return null;
  const user = await client.user.findUnique({
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
const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    let email = removeSpace(data.get("email") || ""), password = data.get("password") || "", remember = data.get("remember") || false;
    const user_data = await client.user.findUnique({
      where: {
        email
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        password: true
      }
    });
    if (!user_data) {
      return fail(400, { email, error: "Email not found" });
    }
    if (!await bcrypt.compare(password, user_data.password || "")) {
      return fail(400, { email, error: "Password is corrected" });
    }
    const user = {
      id: user_data.id,
      name: user_data.name,
      email: user_data.email,
      image: user_data.image
    };
    const token = await signToken(user);
    const refresh_token = await signToken(user, remember ? "60d" : "1d");
    var expires_refresh_token = new Date();
    expires_refresh_token.setDate(expires_refresh_token.getDate() + (remember ? 60 : 1));
    await client.verificationToken.create({
      data: {
        identifier: user.id,
        token: refresh_token,
        expires: expires_refresh_token
      }
    });
    cookies.set("token", token, { path: "/", httpOnly: true, maxAge: 3600 });
    cookies.set("refresh_token", refresh_token, { path: "/", httpOnly: true, maxAge: remember ? 2592e3 : 86400 });
    throw redirect(302, url.searchParams.get("redirect_url") || "/dashboard");
  },
  register: async (event) => {
  },
  logout: async (event) => {
    const refresh_token = event.cookies.get("refresh_token");
    await client.verificationToken.deleteMany({
      where: {
        token: refresh_token
      }
    });
    event.cookies.delete("token", { path: "/" });
    event.cookies.delete("refresh_token", { path: "/" });
    event.locals.session = null;
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
  prerender: prerender
});

const index = 4;
const component = async () => (await import('./_page.svelte-5415be4c.js')).default;
const file = '_app/immutable/components/pages/auth/login/_page.svelte-7c1f660a.js';
const imports = ["_app/immutable/components/pages/auth/login/_page.svelte-7c1f660a.js","_app/immutable/chunks/index-b5eff4e7.js","_app/immutable/chunks/forms-119fef2c.js","_app/immutable/chunks/parse-f0c618df.js","_app/immutable/chunks/singletons-9fb824a4.js","_app/immutable/chunks/navigation-1415e2f5.js","_app/immutable/chunks/svelte-logo-24ddae96.js"];
const stylesheets = ["_app/immutable/assets/_page-9f110145.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-8af6e39b.js.map
