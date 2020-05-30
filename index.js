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
<<<<<<< HEAD
    })
=======
    });
>>>>>>> master
});


// commands 
client.on('message', message => {   

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