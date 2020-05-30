const Discord = require('discord.js');
const { token } = require('./config.json');
const { check } = require('./handlers/handler.js');
const { getNum } = require('./functions.js');
const { activity } = require('./roflCommand.json');

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
    // const activity = [{type: 'WATCHING', status: 'idle', name: 'porn'}, 
    //             {type: 'LISTENING', status: 'online', name: 'Spotify'}, 
    //             {type: 'STREAMING', name: '<code>'},
    //             {type: 'STREAMING', name: '<life>'},
    //             {type: 'STREAMING', name: '<something>'}];
    
    // function chanheStatus(activity) {
    //     let currentActivity = activity[getNum(0, activity.length-1)];

    //     client.user.setActivity(currentActivity.name, {
    //         type: currentActivity.type,
    //         url: 'https://www.twitch.tv/loveyousomuch455',
    //     })
    // }

});
// test 

function chanheStatus(activity) {
    let currentActivity = activity[getNum(0, activity.length-1)];

    client.user.setActivity(currentActivity.name, {
        type: currentActivity.type,
        url: 'https://www.twitch.tv/loveyousomuch455',
    }) 
}

setInterval(() => {
    chanheStatus(activity);
}, (1,8e+6));

// test 

// commands 
client.on('message', message => {   
    client.user.setActivity('Spotify', {
        type: 'LISTENING',
        url: 'https://www.twitch.tv/loveyousomuch455',
    })

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