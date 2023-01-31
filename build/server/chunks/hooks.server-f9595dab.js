import { v as verifyToken, s as signToken } from './jwt-de383078.js';
import { p as prisma } from './prismadb-a6fac679.js';
import 'jsonwebtoken';
import './private-ddb7fb3a.js';
import '@prisma/client';

const refreshToken = async (refresh_token) => {
  const refresh_token_db = await prisma.verificationToken.findFirst({
    where: {
      token: refresh_token,
      expires: {
        gte: new Date()
      }
    }
  });
  if (!refresh_token_db) {
    return null;
  }
  const decoded = await verifyToken(refresh_token);
  const user = await prisma.user.findUnique({
    where: {
      id: decoded?.id || "0"
    },
    select: {
      id: true
    }
  });
  if (!user) {
    return null;
  }
  const token = await signToken(user);
  return {
    user,
    token
  };
};
const handle = async ({ event, resolve }) => {
  const token = event.request.headers.get("authorization")?.split(" ")[1] || event.cookies.get("token") || "token";
  const decoded = await verifyToken(token);
  if (decoded) {
    event.locals.session = {
      user: decoded,
      expires: new Date(decoded.exp * 1e3).toISOString()
    };
  } else {
    const refresh_token = event.cookies.get("refresh_token") || "refresh_token";
    const data_refresh_token = await refreshToken(refresh_token);
    if (data_refresh_token) {
      console.log("refresh_token");
      event.locals.session = {
        user: data_refresh_token.user,
        expires: new Date(new Date().getTime() + 36e5).toISOString()
      };
      event.cookies.set("token", data_refresh_token.token, { path: "/", httpOnly: true, maxAge: 3600 });
    } else {
      event.locals.session = null;
    }
  }
  if (event.url.pathname.split("/")[1] == "dashboard" && event.locals.session == null) {
    return new Response("Redirect", { status: 303, headers: { Location: "/auth/login" } });
  }
  const response = await resolve(event);
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-f9595dab.js.map
