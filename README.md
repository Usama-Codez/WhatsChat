# WhatsChat 🗨️
**Connect Instantly, Communicate Securely, Empower Collaboration**

![Last Commit](https://img.shields.io/github/last-commit/Usama-Codez/WhatsChat)
![Repo Top Language](https://img.shields.io/github/languages/top/Usama-Codez/WhatsChat)
![Languages Count](https://img.shields.io/github/languages/count/Usama-Codez/WhatsChat)

---

## 🚀 Overview
**WhatsChat** is a web app platform, for peer-to-peer communication built with Node.js, Express, and Socket.io. It supports:

- 🔄 Instant messaging (WebSocket)
- 🔐 Peer authentication
- 🧩 File sharing (with previews, version control, and sync)
- 💬 Chat with text message or voice, emojis, attachment
- 🛠️ Hybrid P2P + Central Server architecture

> Ideal for learning real-time systems, secure communication, and collaborative applications.

---

## 📦 Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- JavaScript / HTML / CSS
- JSON
- Markdown

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🔧 Features

- ✅ Communication via WebSockets
- ✅ Encrypted Message transfers
- ✅ File version control & preview before download
- ✅ Chat with text, emojis, and file support
- ✅ Peer authentication using password or key
- ✅ Auto messages file sync and file history
- ✅ Join/Leave/Query/Publish operations
- ✅ Multiple uploads/downloads simultaneously
- ✅ Peer can act as both client and server

---

## 🚀 Getting Started

### 🛠 Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Usama-Codez/WhatsChat
```
# 2. Navigate to the project directory
```bash
cd WhatsChat
```
# 3. Install dependencies
```bash
npm install
```

## Usage
Start the server:
```bash
npm start
```

Peers can join using default address:
```bash
http://localhost:3000
```

## 🧪 Testing
WhatsChat uses Mocha and Chai for testing.

Run tests using:
```bash
npm test
```

## 🗂️ Project Structure
WhatsChat/
├── server.js           # Central server
├── client.js           # Peer client code
├── /p2p-files/         # Shared file directory per peer
├── /public/            # HTML/CSS UI
├── /utils/             # Encryption, Sync, and Auth utilities
├── package.json
└── README.md

## 🔒 Security Features
1. 🔐 End-to-End Encryption for text messages

2. 🔑 Peer Authentication before each connection

3. 🛡️ Multi-Factor Authentication (future enhancement)

4. 🕵️‍♂️ Intrusion Detection System for file flooding (planned)

## 📈 Future Enhancements
- Load Balancing via central server
- Failover backup server
- Peer metrics dashboard
- File integrity verification with hashes

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### 🙋‍♂️ Developed By
Usama Akram
---

