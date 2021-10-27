const Discord = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    let user = message.mentions.members.first() || message.author
    message.channel.send(`Salam kenal juga ${user}!`)
}
module.exports.help = {
    name: "salam",
    aliases: []
}