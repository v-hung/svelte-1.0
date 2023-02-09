import ioClient from "socket.io-client";
const ENDPOINT = "http://localhost:5173";

const socket = ioClient(ENDPOINT, {token: 'df'})

export const io = socket