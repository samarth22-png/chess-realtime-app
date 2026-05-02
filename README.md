# ♟️ Real-Time Multiplayer Chess Game

A real-time multiplayer chess application built using **Node.js**, **Express**, and **Socket.io**. This project allows two players to play chess live while others can join as spectators, with instant move synchronization and strict game validation.

---

## 🚀 Live Features

* ♟️ Real-time multiplayer gameplay using Socket.io
* 👥 Automatic role assignment (White / Black / Spectator)
* 🔄 Live board synchronization using FEN (Forsyth–Edwards Notation)
* ✅ Move validation powered by chess.js
* 🚫 Prevents invalid and unauthorized moves
* 🔌 Handles player disconnection dynamically
* ⚡ Instant updates across all connected clients

---

## 🧠 How It Works

1. First user joins → assigned **White**
2. Second user joins → assigned **Black**
3. Additional users → become **Spectators**
4. Moves are validated using **chess.js**
5. Board state is broadcasted using **Socket.io**

---

## 🛠️ Tech Stack

| Category   | Technology          |
| ---------- | ------------------- |
| Backend    | Node.js, Express.js |
| Realtime   | Socket.io           |
| Game Logic | Chess.js            |
| Frontend   | EJS, Tailwind CSS   |

---

## 📂 Project Structure

```
chess-realtime-app/
│
├── app.js
├── package.json
├── views/
│   └── index.ejs
├── public/
│   ├── js/
│   └── css/
├── README.md
```

---

## ▶️ Run Locally

```bash
git clone https://github.com/samarth22-png/chess-realtime-app.git
cd chess-realtime-app
npm install
npx nodemon app.js
```

Open in browser:

```
http://localhost:3000
```

---

## 🔥 Key Highlights

* Built a **real-time system** using WebSockets
* Implemented **turn-based validation logic**
* Designed **multi-user synchronization architecture**
* Ensured **secure move handling and game integrity**

---

## 🎯 Future Improvements

* ♟️ Drag-and-drop chess UI
* ⏱️ Game timer (Blitz mode)
* 🔐 User authentication
* 🧑‍🤝‍🧑 Matchmaking system
* 📜 Move history & replay

---



## 👨‍💻 Author

**Samarth Agarwal**
3rd Year @ VIT Bhopal
Aspiring Data Scientist & Full Stack Developer

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to contribute!
