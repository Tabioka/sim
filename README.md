# 🚀 Advanced Discord Bot - 200+ Commands

![Discord Bot](https://img.shields.io/badge/Discord-Bot-blue.svg)
![License](https://img.shields.io/github/license/yourusername/your-bot-repo)
![Stars](https://img.shields.io/github/stars/yourusername/your-bot-repo?style=social)
![Issues](https://img.shields.io/github/issues/yourusername/your-bot-repo)

An advanced Discord bot with over 200 commands, including moderation, music, economy, fun, utility, and more!

## 🌟 Features

✅ **Moderation** - Kick, ban, mute, warn, slowmode, and more.
✅ **Music** - Play songs from YouTube, Spotify, SoundCloud.
✅ **Economy** - Virtual currency, daily rewards, shop system.
✅ **Fun** - Memes, trivia, games, random jokes.
✅ **Utility** - Weather, server stats, user info, reminders.
✅ **Customizable** - Supports prefixes, custom command responses.
✅ **Logging** - Tracks message deletions, edits, and user joins.
✅ **AI-Powered** - Chatbot with OpenAI integration.

---

## 🔧 Installation

### 1️⃣ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [Discord.js](https://discord.js.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (for economy & logging)
- [FFmpeg](https://ffmpeg.org/) (for music features)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/your-bot-repo.git
cd your-bot-repo
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Configuration
1. Copy the `.env.example` file and rename it to `.env`:
```sh
cp .env.example .env
```
2. Edit `.env` with your bot token and other credentials:
```sh
DISCORD_TOKEN=your-bot-token
MONGO_URI=your-mongodb-uri
PREFIX=!
```

### 5️⃣ Start the Bot
```sh
npm start
```

---

## 🎮 Commands

Use `!help` to see all available commands. Categories include:

| Category   | Commands Count |
|------------|---------------|
| Moderation | 20+ |
| Fun        | 50+ |
| Utility    | 30+ |
| Music      | 25+ |
| Economy    | 40+ |
| AI & Chat  | 10+ |

Examples:
```sh
!ban @user Reason
!play Despacito
!weather New York
!balance
```

---

## 🛠️ Troubleshooting

**Q: The bot won’t start!**  
A: Ensure your `.env` file is correctly set up and all dependencies are installed.

**Q: Commands aren't working!**  
A: Check if the bot has the correct permissions in the server.

**Q: Music isn't playing!**  
A: Make sure FFmpeg is installed and the bot has access to a voice channel.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss.

1. Fork the repo
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a pull request

---

## 📞 Contact
- GitHub: [@yourusername](https://github.com/Tabioka)
- Discord: `tabioka#0000`
