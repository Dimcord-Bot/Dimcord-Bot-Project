const client = require("../index").client
client.on('ready', async () => {
    client.user.setPresence({ activities: [{ name: `Dimcord Server`, type: "WATCHING"}], status: 'idle' })
    console.log(`${client.user.tag} is online!`)
})
