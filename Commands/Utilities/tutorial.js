const Discord = require('discord.js')
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {
    const list = ['list']
    const spotify = ['spotify']
    const windows = ['windows']
    const mac = ('mac')
    const args2 = args.slice(1).join(" ")
    const args1 = args[0]
    const Button = new MessageActionRow()
    .addComponents(
    new MessageButton()
    .setStyle('LINK')
    .setLabel('Tutorial')
    .setURL("https://dimasmiftah.notion.site/tutorial-spotify-aesthetic-18e05824f4624e22a4354d9358efc65f"))

    if(!args1) {
        const args1embed = new Discord.MessageEmbed()
        .setTitle(`Halo Kawan!`)
        .setDescription(`Lagi cari tutorial yang di buat sama bang dimas yaa??\nPakai command -tutorial list buat check list tutorial apa aja tutorial yang di buat bang dimas.`)
        .setColor('#9CC2FF')
        .setTimestamp()
        return message.channel.send({embeds: [args1embed]})
    }

    if(args1.toLowerCase() == list && !args2) {
        
        const listembed = new Discord.MessageEmbed()
        .setTitle(`Halo Kawan!`)
        .setColor('#9CC2FF')
        .setDescription(`Berikut list tutorial yang pernah di buat bang dimas.`)
        .setTimestamp()
        .addFields(
            {
                name: 'Tutorial Spotify Aesthetic',
                value: `-tutorial spotify buat liat tutorial spotify aesthetic.\nNanti ada di list tutorial spotify buat Windows & Mac`,
                inline: true,
            }
        )
        return message.channel.send({embeds: [listembed]})
    } 
    
    if(args1.toLowerCase() == spotify && !args2) {
        const spotifyembed = new Discord.MessageEmbed()
        .setTitle(`Halo Kawan!`)
        .setColor('#9CC2FF')
        .setTimestamp()
        .addFields(
            {
                name: 'Tutorial Spotify Aesthetic (Windows)',
                value: `-tutorial spotify windows untuk melihat tutorial di windows`,
                inline: true,
            },
            {
                name: 'Tutorial Spotify Aesthetic (Mac)',
                value: `-tutorial spotify macos untuk melihat tutorial di mac`,
                inline: true,
            },
        )
        return message.channel.send({embeds: [spotifyembed]})
    }
    
    if(args1.toLowerCase() == spotify && args2.toLowerCase() == windows) {
        const window1 = new Discord.MessageEmbed()
        .setTitle(`Halo Kawan!`)
        .setDescription(`Buat tutorial windows link nya di tekan yang "Here"/pencet button tutorial. Jika ad pertanyaan bisa bertanya di <#900290679454957574>`)
        .addField(`Link di bawah`, `[**Here**](https://dimasmiftah.notion.site/tutorial-spotify-aesthetic-18e05824f4624e22a4354d9358efc65f)`)
        .setColor('#9CC2FF')
        .setTimestamp()
        return message.channel.send({embeds: [window1], components: [Button]})

    } 
    
    if(args1.toLowerCase() == spotify && args2.toLowerCase() == mac) {
        const mac1 = new Discord.MessageEmbed()
        .setColor('#9CC2FF')
        .setTimestamp()
        .setTitle(`Halo Kawan!`)
        .setDescription(`Buat tutorial mac link nya ditekan yang "Here"/pencet button tutorial. Jika ad pertanyaan bisa bertanya di <#900290679454957574>`)
        .addField(`Link di bawah`, `[**Here**](https://dimasmiftah.notion.site/tutorial-spotify-aesthetic-18e05824f4624e22a4354d9358efc65f)`)
        return message.channel.send({embeds: [mac1], components: [Button]})
    }
    
}


module.exports.help = {
    name: "tutorial",
    aliases: ["tutor"]
}