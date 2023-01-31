import { e as error, r as redirect } from './index2-e4abb57b.js';
import { G as GITHUB_ID, a as GITHUB_SECRET } from './private-ddb7fb3a.js';
import { p as prisma } from './prismadb-a6fac679.js';
import { s as signToken } from './jwt-de383078.js';
import '@prisma/client';
import 'jsonwebtoken';

const load = async ({ locals, url, params, cookies }) => {
  if (params.provider == "github") {
    let formData = new FormData();
    formData.append("client_id", GITHUB_ID);
    formData.append("client_secret", GITHUB_SECRET);
    formData.append("code", url.searchParams.get("code"));
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "post",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });
    const result = await res.json();
    if (result.error) {
      throw error(404, result.error);
    }
    const account = await getUserGithub(result?.access_token);
    if (!account)
      throw error(404, "Account Not found");
    const account_user = await upsertAccountUser({ account, result, provider: params.provider });
    const token = await signToken(account_user?.user);
    const refresh_token = await signToken(account_user?.user, "60d");
    var expires_refresh_token = new Date();
    expires_refresh_token.setDate(expires_refresh_token.getDate() + 60);
    await prisma.verificationToken.create({
      data: {
        identifier: account_user?.user?.id,
        token: refresh_token,
        expires: expires_refresh_token
      }
    });
    cookies.set("token", token, { path: "/", httpOnly: true, maxAge: 3600 });
    cookies.set("refresh_token", refresh_token, { path: "/", httpOnly: true, maxAge: 2592e3 });
    throw redirect(302, url.searchParams.get("redirect_url") || "/dashboard");
  }
};
const getUserGithub = async (access_token) => {
  return new Promise((res) => {
    fetch("https://api.github.com/user", {
      headers: {
        "Authorization": "Bearer " + access_token
      }
    }).then((res2) => res2.json()).then((result) => res(result)).catch((e) => res(null));
  });
};
const upsertAccountUser = async ({ account, result, provider }) => {
  try {
    const account_user = await prisma.account.upsert({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId: account?.id.toString()
        }
      },
      update: {},
      create: {
        type: "oauth",
        provider,
        providerAccountId: account?.id.toString(),
        access_token: result?.access_token,
        token_type: result?.token_type,
        scope: result?.scope,
        user: {
          create: {
            email: account?.email,
            name: account?.name,
            image: account?.avatar_url
          }
        }
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            image: true
          }
        }
      }
    });
    return account_user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=8-3deac7d5.js.map
