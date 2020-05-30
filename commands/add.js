module.exports = {
	name: 'add',
    description: 'set rofl command for bot',
    usage: '\`<your phrase>\`',
    args: true,
    cooldown: 60,
    invisible: true,
    onlyAdmin: true,
	execute(message, args) {
        const fs = require('fs');
        let json = require('../roflCommand.json');

        let string = args.join(' ');

        json.test.push(string);
        json = JSON.stringify(json, null, 2);

        try {

            fs.writeFileSync('/Users/pupkinvasa/Desktop/DiscordBot/roflCommand.json', json) // add to roflCommand new phrase
            message.channel.send('Phrase added');

        } catch (error) {

            console.log(error);
            message.channel.send(`There was an error while reloading a file roflCommand.json`);

        }
	},  
};