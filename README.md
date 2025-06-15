# 🗨️ WhatsChat
**Connect Instantly, Communicate Securely, Empower Collaboration**

[![Watch Demo on YouTube](https://img.shields.io/badge/Watch%20Demo-YouTube-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=-XuZeSZWVXA)

![Last Commit](https://img.shields.io/github/last-commit/Usama-Codez/WhatsChat)
![Repo Top Language](https://img.shields.io/github/languages/top/Usama-Codez/WhatsChat)
![Languages Count](https://img.shields.io/github/languages/count/Usama-Codez/WhatsChat)

---

## 📹 Demo

Watch the full walkthrough and technical explanation of WhatsChat on YouTube:

[![Watch the Demo](https://img.youtube.com/vi/-XuZeSZWVXA/0.jpg)](https://www.youtube.com/watch?v=-XuZeSZWVXA)

> 🔗 [Click here to view the full demo](https://www.youtube.com/watch?v=-XuZeSZWVXA)

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

### 🔧 Features

- ✅ Communication via WebSockets
- ✅ Encrypted Message transfers
- ✅ File version control & preview before download
- ✅ Chat with text, emojis, and file support
- ✅ Peer authentication using password or key
- ✅ Auto messages file sync and file history
- ✅ Peer can act as both client and server

---

## 🚀 Getting Started

### 🛠 Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Installation
Follow the steps to install and run WhatsChat Locally:
1. Clone the repository
```bash
git clone https://github.com/Usama-Codez/WhatsChat
```
2. Navigate to the project directory
```bash
cd WhatsChat
```
3. Install dependencies
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

## Encryption & Decryption
WhatsChat ensures secure communication by encrypting:

- Chat messages

- User authentication tokens

Encryption Features:

- End-to-end encryption between peers. For encryption I have used AES and RSA algorithms combination.

- Decryption is automatically done on the receiving side

Unauthorized access is denied without proper key exchange

🔎 You can find the encryption logic in:

```bash
utils/
├── encryption.js       # Core encryption/decryption logic
├── auth.js             # Key exchange and peer validation
```
🧠 More detailed explanation is available in the video demo:
🔗 [Watch encryption explained ->](https://www.youtube.com/watch?v=-XuZeSZWVXA)

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

