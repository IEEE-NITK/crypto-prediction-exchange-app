const express = require("express");
// const http = require("http");
// const socketio = require("socket.io");
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);
const { io } = require("socket.io-client");

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is up on ${port}!`);
});
