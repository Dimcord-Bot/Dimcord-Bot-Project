const client = require("../index").client
client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
    
    if (message.author.bot) return
    const content = message.content.toLowerCase();
    if(content.startsWith('salam kenal')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.startsWith('salam')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.startsWith('salken')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.startsWith('salken semua')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.endsWith('salken')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.endsWith('salken semua')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    

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