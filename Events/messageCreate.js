const client = require("../index").client
client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return

    let prefix = "-";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    let commands = client.commands.get(cmd.toLowerCase().slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.toLowerCase().slice(prefix.length)));
    if(commands) {
        if(!message.content.toLowerCase().startsWith(prefix)) return
        commands.run(client, message, args, prefix);
    };
});