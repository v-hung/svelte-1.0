import { sveltekit } from '@sveltejs/kit/vite';
import injectSocketIO from "./src/lib/server/socket-handler";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    sveltekit(),
    {
      name: 'sveltekit-socket-io',
      configureServer(server) {
        injectSocketIO(server.httpServer); // <- call the function here
      }
    },
  ]
};

export default config;
