const Discord = require('discord.js');
// const { token } = require('./config.json'); // for heroku
const token = process.env.TOKEN;
const { check } = require('./handlers/handler.js');
const { getNum } = require('./functions.js');
const { activity } = require('./roflCommand.json');
const { newsletter } = require('./handlers/newsletter.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

    // client.user.setPresence({
    //     status: "online",  //You can show online, idle....
    //     activity: {
    //          name: "Spotify",  //The message shown
    //          type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
    //     }
    // });

    client.user.setActivity('!help', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/loveyousomuch455',
    }) 
});


// commands 
client.on('message', async message => {   

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