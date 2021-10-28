const client = require("../index").client
client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
    
    if (message.author.bot) return
    const content = message.content.toLowerCase();
    if(content.includes('salam kenal')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.includes('assalamualaikum')){
    message.channel.send(`Waalaikumsalam ${message.author}`)
    }
    if(content.includes('waalaikumsalam')){
    message.channel.send(`Assalamualaikum ${message.author}`)
    }
    if(content.includes('salken')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }
    if(content.includes('salken semua')){
    message.channel.send(`Salam kenal juga ${message.author}!`)
    }

    let prefix = "-";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    let commands = client.commands.get(cmd.toLowerCase().slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.toLowerCase().slice(prefix.length)));
    if(commands) {
        if(!message.content.toLowerCase().includes(prefix)) return
        commands.run(client, message, args, prefix);
    };
});