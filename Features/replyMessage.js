module.exports = (client) => {
    client.on("message", message => {
        const user = message.author
        function reply (ask, answer) {
            if(message.content.toLowerCase() === ask && !message.author.bot) {
                return message.channel.send(answer)
            }
        }

        reply(`salam kenal`, `Salam Kenal juga ${user}!`)

    })
}