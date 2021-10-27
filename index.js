const Discord = require('discord.js')
require('dotenv').config()
const client =  new Discord.Client({intents: 32767})
const fs = require('fs')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
module.exports.client = client;

//Command Handler & Aliases
fs.readdirSync('./Commands/').forEach(dir => {
    fs.readdir(`./Commands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) return console.log("[COMMAND HANDLER] - Can't find any commands!");
        
        jsFiles.forEach(file => {
            var fileGet = require(`./Commands/${dir}/${file}`);
            console.log(`[COMMAND HANDLER] - File ${file} was loaded ✅`)
            try {
                client.commands.set(fileGet.help.name, fileGet);
                fileGet.help.aliases.forEach(alias => {
                    client.aliases.set(alias, fileGet.help.name);
                })
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

//Event handler 
fs.readdir('./Events/', (err, files) => {
    const evFiles = files.filter(f => f.split(".").pop() === "js");
    if(evFiles.length === 0) {
        return console.log(chalk.yellow('[EVENT HANDLER] - No events were found'));
    };
    evFiles.forEach(event => {
        const eventGet = require(`./Events/${event}`);
        console.log((`[EVENT HANDLER] - File ${event} was loaded ✅`))

        try {
            client.events.set(eventGet.name, eventGet);
        } catch(err) {
            return console.log(err);
        };
    });
});

//Error Handler
const Errorhandler = require("./BotConfig/errorhandler.js");
const { features } = require('process');
const handle = new Errorhandler(client, {
    webhook: { id: '902476769960030218', token: 'j5lNvn1DqGzlPMAjRMZusMHy5cgsGiWr3DPtyh1CB8u_92ql9qXkwyRTxYJxYi2JkqYm' }
  })
  process.on('unhandledRejection', error => {
    handle.createrr(client, undefined, undefined, error)
  })

client.login(process.env.DISCORD_TOKEN)