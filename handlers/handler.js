module.exports = {
    check(message) {
        const fs = require('fs');
        const path = require('path');
        const { Discord, client} = require('../index.js');
        // const { prefix } = require('../config.json'); // for heroku
        const prefix = process.env.prefix;
        const { execute: ch_mn} = require('./mentions.js');
    
        client.commands = new Discord.Collection(); // create collection for commands 
        const cooldowns = new Discord.Collection(); // create collection for cooldowns of commands 
        const path_to_commands = path.normalize(`./commands`);

        const commandFiles = fs.readdirSync(path_to_commands).filter(file => file.endsWith('.js')); // get all command files

        for (const file of commandFiles) {
            const path_to_file = path.normalize(`../commands/${file}`);
            const command = require(path_to_file); // get command
        
            // set a new item in the Collection
            // with the key as the command name and the value as the exported module
            client.commands.set(command.name, command);
        }

        // start message path

        const args = message.content.slice(prefix.length).split(/ +/); // get arguments from the message
        const commandName = args.shift().toLowerCase(); // get name of command


        if( ch_mn(message, args, commandName) && commandName=='test' ) {
            return message.reply(' куда летишь молодой?');
        }
 
    
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // get command file


        if (!command) return; // check for command 

    
        // if(command.invisible) return; // check for invisible



        if (command.onlyAdmin) { // check for property inlyAdmin in file

            if(message.author.id != '257541382627917825') {
                return message.reply('you cannot use this command.');
            }
    
        }
    
        if (command.guildOnly && message.channel.type !== 'text') { // check for type of channel 
            return message.reply('I can\'t execute that command inside DMs!');
        }
    
        if (command.args && !args.length) { // check for arguments of message
    
            let reply = `You didn't provide any arguments, ${message.author}!`;
    
            if (command.usage) { // check for usage property of file
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }
            
            return message.channel.send(reply);



        }

        // spam protection
        if (!cooldowns.has(command.name)) { 
            cooldowns.set(command.name, new Discord.Collection());
        }
        
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;
        
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }
        else {
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        }


        try {

            command.execute(message, args, commandName);
            
        } catch (error) {

            console.error(error);
            message.reply('there was an error trying to execute that command!');

        }
    }
}
