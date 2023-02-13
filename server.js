// server.js
import http from "http"
import { handler } from './build/handler.js' // <- Import SvelteKit handlers
import injectSocketIO from "./src/lib/server/socket-handler.js" // The SocketIO stuff (see next step)
import express from 'express'
const PATH = 4173

const app = express()
const server = http.createServer(app)

// Inject SocketIO
injectSocketIO(server)

// SvelteKit handlers
app.use(handler)

server.listen(PATH, () => {
  console.log(`Running on http://localhost:${PATH}`);
})