const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Halo ${message.author.username}!`)
    .setDescription(`Lagi cari youtube bang dimas ya????\n Ini link youtube bang dimas jangan lupa subscribe + like + share yaaa!\nhttps://www.youtube.com/channel/UC_deVXnukSlwM4EhcD-mtww`)
    .setColor('#9CC2FF')
    .setTimestamp()
    message.channel.send({embeds: [embed]})
}
module.exports.help = {
    name: "youtube",
    aliases: ["yt", "yutub"]
}