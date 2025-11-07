function isAutotypingEnabled() {
    return global.autoTyping === true;
}

async function handleAutotyping(conn, jid, state) {
    try {
        await conn.sendPresenceUpdate(state ? 'composing' : 'paused', jid);
    } catch (e) {
        console.error('Error in handleAutotyping:', e);
    }
}

module.exports = {
    isAutotypingEnabled,
    handleAutotyping
};
