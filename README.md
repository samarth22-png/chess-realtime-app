# ♟️ Chess.com (Real-Time Multiplayer Chess Game)

A real-time multiplayer chess application built using **Node.js**, **Express**, and **Socket.io**. This project allows two players to play chess live while others can join as spectators.

---

## 🚀 Features

- ♟️ Real-time multiplayer gameplay using Socket.io  
- 👥 Automatic role assignment (White / Black / Spectator)  
- 🔄 Live board synchronization using FEN (Forsyth–Edwards Notation)  
- ✅ Move validation using chess.js  
- 🚫 Prevents invalid and unauthorized moves  
- 🔌 Handles player disconnects gracefully  
- 🎨 Frontend built with EJS and Tailwind CSS  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Realtime:** Socket.io  
- **Game Logic:** Chess.js  
- **Frontend:** EJS, Tailwind CSS  

---

## ⚙️ How It Works

1. First user joins → assigned **White**
2. Second user joins → assigned **Black**
3. Additional users → become **Spectators**
4. Moves are validated using Chess.js
5. Board updates are broadcasted to all users in real-time

---

## 📂 Project Structure
