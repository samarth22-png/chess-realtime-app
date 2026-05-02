const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();

let players = {
  white: null,
  black: null,
};

let currentPlayer = "w";

// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// route
app.get("/", (req, res) => {
  res.render("index", { title: "Chess Game" });
});


// 🔥 SOCKET LOGIC
io.on("connection", function (socket) {
  console.log("User connected:", socket.id);

  // ✅ send current board state to new user
  socket.emit("boardState", chess.fen());

  // ✅ assign roles
  if (!players.white) {
    players.white = socket.id;
    socket.emit("playerRole", "w");
  } else if (!players.black) {
    players.black = socket.id;
    socket.emit("playerRole", "b");
  } else {
    socket.emit("spectatorRole");
  }

  // ✅ handle moves
  socket.on("move", function (move) {
    try {

      // 🚫 block spectators
      if (
        socket.id !== players.white &&
        socket.id !== players.black
      ) return;

      // 🚫 block wrong turn
      if (chess.turn() === "w" && socket.id !== players.white) return;
      if (chess.turn() === "b" && socket.id !== players.black) return;

      const result = chess.move(move);

      if (result) {
        currentPlayer = chess.turn();

        // ✅ send move + updated board
        io.emit("move", move);
        io.emit("boardState", chess.fen());
      } else {
        console.log("Invalid move:", move);
        socket.emit("invalidMove", move);
      }

    } catch (err) {
      console.error("Error:", err);
      socket.emit("invalidMove", move);
    }
  });

  // ✅ handle disconnect
  socket.on("disconnect", function () {
    console.log("User disconnected:", socket.id);

    if (socket.id === players.white) {
      players.white = null;
    } else if (socket.id === players.black) {
      players.black = null;
    }
  });

});


// 🚀 START SERVER
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
let currentPort = DEFAULT_PORT;
const MAX_PORT_RETRIES = 5;
let retryCount = 0;

function startServer(port) {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    retryCount += 1;
    if (retryCount <= MAX_PORT_RETRIES) {
      const nextPort = currentPort + 1;
      console.warn(`Port ${currentPort} is already in use. Trying port ${nextPort}...`);
      currentPort = nextPort;
      startServer(currentPort);
    } else {
      console.error(`All ports from ${DEFAULT_PORT} to ${currentPort} are in use. Please stop another process or set a different PORT.`);
      process.exit(1);
    }
  } else {
    console.error("Server error:", err);
    process.exit(1);
  }
});

startServer(currentPort);