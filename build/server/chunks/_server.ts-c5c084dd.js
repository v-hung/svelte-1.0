import { j as json, e as error } from './index2-e4abb57b.js';
import { G as GITHUB_ID } from './private-ddb7fb3a.js';

const POST = async ({ request, url }) => {
  const body = await request.json();
  let provider = body.provider || "";
  let redirect_uri = "";
  if (provider == "github") {
    redirect_uri = `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}`;
  }
  if (redirect_uri) {
    return json({
      redirect_uri
    });
  } else {
    throw error(400, "Can not find provider");
  }
};

export { POST };
//# sourceMappingURL=_server.ts-c5c084dd.js.map
