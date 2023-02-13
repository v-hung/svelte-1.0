import ioClient from "socket.io-client";
import { PUBLIC_BASE_URL } from "$env/static/public"
const ENDPOINT = "http://localhost:5173";

const socket = ioClient(PUBLIC_BASE_URL)

export const io = socket