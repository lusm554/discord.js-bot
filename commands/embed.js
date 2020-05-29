module.exports = {
    name: 'embed',
    description: 'you can send bot some files',
    onlyAdmin: true,
    invisible: true,
    execute(message, args) {
        const Discord = require('discord.js');

        const receivedEmbed = message.embeds[0];
        const exampleEmbed = new Discord.MessageEmbed(receivedEmbed);
        
        message.channel.send(exampleEmbed);
    }
}