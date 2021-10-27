const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    const args1 = args[0]
    const utility = ['utility']
    
    if(!args1) {
        const args1embed = new Discord.MessageEmbed()
        .setTitle(`Dimcord Bot Command List!`)
        .setDescription(`Halo Kawan! Dibawah ini adalah list-list command Dimcord Bot!\nGunakan \`-help <nama command>\``)
        .addFields(
            {
                name: 'Utility',
                value: `Utility Command Dimcord Bot`,
                inline: true,
            }
        )
        .setColor('#9CC2FF')
        .setTimestamp()
        return message.channel.send({embeds: [args1embed]})
    }

    if(args1.toLowerCase() == utility) {
        const utilembed = new Discord.MessageEmbed()
        .setTitle(`Utility Commands!`)
        .addFields(
            {
                name: '\`-ping\`',
                value: `Untuk mengecek ping kamu`,
                inline: true,
            },
            {
                name: '\`-tiktok\`',
                value: `Untuk mengecek tiktok bang dimas`,
                inline: true
            },
            {
                name: '\`-youtube\`',
                value: `Untuk mengecek youtube bang dimas`,
                inline: true,
            },
            {
                name: '\`-tutorial\`',
                value: `Untuk melihat tutorial apa saja yang udah di buat sama bang dimas`,
                inline: true,
            },
        )
        .setColor('#9CC2FF')
        .setTimestamp()
        return message.channel.send({embeds: [utilembed]})
    }
}

module.exports.help = {
    name: "help",
    aliases: []
}