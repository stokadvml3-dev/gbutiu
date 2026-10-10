```javascript
// BOT TELEGRAM BASIC
// Install: npm install node-telegram-bot-api
// Jalankan: node bot.js

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = 'MASUKKAN_TOKEN_BOT_KAMU';

if (TOKEN === 'MASUKKAN_TOKEN_BOT_KAMU') {
    console.log('Masukkan token bot dari @BotFather!');
    process.exit(1);
}

const bot = new TelegramBot(TOKEN, {
    polling: true
});

// Perintah START
bot.onText(/\/start/, (msg) => {
    const nama = msg.from.first_name || 'Teman';

    bot.sendMessage(
        msg.chat.id,
        `Halo ${nama}! 👋\n\n` +
        `Selamat datang di bot Telegram.\n\n` +
        `Daftar perintah:\n` +
        `/start - Mulai bot\n` +
        `/help - Bantuan\n` +
        `/ping - Cek bot\n` +
        `/id - Cek ID`
    );
});

// Perintah HELP
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        '📌 DAFTAR PERINTAH\n\n' +
        '/start - Mulai bot\n' +
        '/help - Bantuan\n' +
        '/ping - Cek status bot\n' +
        '/id - Cek ID pengguna'
    );
});

// Perintah PING
bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, '🏓 Pong! Bot aktif.');
});

// Perintah ID
bot.onText(/\/id/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        `🆔 ID pengguna: ${msg.from.id}\n` +
        `💬 ID chat: ${msg.chat.id}`
    );
});

// Balas pesan biasa
bot.on('message', (msg) => {
    if (!msg.text || msg.text.startsWith('/')) return;

    bot.sendMessage(
        msg.chat.id,
        `📩 Pesan kamu: ${msg.text}`
    );
});

// Penanganan error
bot.on('polling_error', (err) => {
    console.error('Polling error:', err.message);
});

console.log('🤖 Bot Telegram berhasil dijalankan!');
```
