module.exports.run = async (client, message, args, prefix) => {
    message.reply({ content: 'Ping?', allowedMentions: { repliedUser: false }})
    .then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`**API:** ${Math.round(client.ws.ping)}ms\n**Gateway:** ${ping}ms`)
    })
}

module.exports.help = {
    name: "ping",
    aliases: []
}