const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Halo ${message.author.username}!`)
    .setDescription(`Lagi cari tiktoknya bang dimas ya????\n Ini link tiktok bang dimas jangan lupa follow + like + share yaaa!\nhttps://www.tiktok.com/@dimasmiftah`)
    .setColor('#9CC2FF')
    .setTimestamp()
    message.channel.send({embeds: [embed]})
}
module.exports.help = {
    name: "tiktok",
    aliases: ["tt"]
}