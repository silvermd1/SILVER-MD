const { cmd } = require('../lib/command')

cmd({
    pattern: "autotyping",
    desc: "Enable or disable auto typing feature",
    category: "tools",
    use: '<on/off>',
}, async (conn, mek, { text }) => {
    if (!text) return await conn.sendMessage(mek.chat, { text: "Use: .autotyping on/off" });
    if (text === "on") {
        global.autoTyping = true;
        await conn.sendMessage(mek.chat, { text: "✅ Auto typing enabled" });
    } else if (text === "off") {
        global.autoTyping = false;
        await conn.sendMessage(mek.chat, { text: "❌ Auto typing disabled" });
    } else {
        await conn.sendMessage(mek.chat, { text: "Use: .autotyping on/off" });
    }
});
