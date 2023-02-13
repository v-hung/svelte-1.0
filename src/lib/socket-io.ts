import ioClient from "socket.io-client";
import { PUBLIC_BASE_URL } from "$env/static/public"
const ENDPOINT = "https://svelte.viethung.fun";

const socket = ioClient(ENDPOINT)

export const io = socket