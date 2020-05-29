const Discord = require('discord.js');
const { token } = require('./config.json');
const { check } = require('./handlers/handler.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    console.log(`Bot start: ${new Date()}\n`);

    /**
     * // for bot status
     * client.user.setPresence({
     *     status: "online",  //You can show online, idle....
     *     activity: {
     *          name: "спит",  //The message shown
     *          type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
     *     }
     * });
     */

    // client.user.setPresence({
    //     status: "online",  //You can show online, idle....
    //     activity: {
    //          name: "Spotify",  //The message shown
    //          type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
    //     }
    // });

    client.user.setActivity('<code>', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/loveyousomuch455'
    })
});


// commands 
client.on('message', message => {

    // const filter = m => m.content.includes('discord');
    // const collector = message.channel.createMessageCollector(filter, { time: 15000 });
    
    // collector.on('collect', m => {
    //     console.log(`Collected ${m.content}`);
    //     console.log(`start: ${ new Date() }\n`)
    // });
    
    // collector.on('end', collected => {
    //     console.log(`Collected ${collected.size} items`);
    //     console.log(`end: ${ new Date() }\n`)
    // });


    const filter = m => m.content.startsWith('!vote');
    // Errors: ['time'] treats ending because of the time limit as an error
    message.channel.awaitMessages(filter, { max: 4, time: 6000, errors: ['time'] })
        .then(collected => console.log(collected.size))
        .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));

    try {

        return check(message);

    } catch (error) {

        console.error(error);
        message.reply('there was an error trying to execute that command!');

    }
});

client.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

module.exports = { // export module for handler.js 
    Discord: Discord,
    client: client,
}


client.login(token);