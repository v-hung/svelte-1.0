import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';

const myPlugin = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // custom handle request...
      console.log('jojo')
    })
  },
})


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
    // vite: {
    //   plugins: [
    //     {
    //       name: 'sveltekit-socket-io',
    //       configureServer(server) {
    //         const io = new Server(server.httpServer);

    //         // Socket.IO stuff goes here                

    //         console.log('SocketIO injected');
    //       }
    //     }
    //   ]
    // },

	},
  // plugins: [
  //   {
  //     name: 'sveltekit-socket-io',
  //     configureServer(server) {
  //       const io = new Server(server.httpServer);

  //       // Socket.IO stuff goes here                

  //       console.log('SocketIO injected');
  //     }
  //   },
  //   {
  //     name: 'log-request-middleware',
  //     configureServer(server) {
  //       server.middlewares.use((req, res, next) => {
  //         console.log(`Got request ${req.url}`);
  //         next();
  //       });
  //     }
  //   },
  //   myPlugin()
  // ]
};

export default config;
