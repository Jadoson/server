const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
import QuizGame from "./quiz";
const app = express();
const server = createServer(app);
// This needs to match the client url of the running app instance
const clientAppUrl = "http://localhost:5173";
let serverOptions = {};
if (process.env.NODE_ENV !== "production") {
 serverOptions = {
 ...serverOptions,
 cors: {
 origin: clientAppUrl, // cors is enabled for socketed
connections on localhost:5173
 },
 }
}
const io = new Server(server, serverOptions);
const game = new QuizGame();
// ******************************
// Listen on the port for events
// ******************************
server.listen(4000, () => {
 console.log("🔌 Server is running on port 4000");
});