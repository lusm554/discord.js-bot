module.exports = {
    name: 'everyone',
    description: 'just try it, use without '/!'/',
    cooldown: 500,
    invisible: false,
	execute(message, args) {
        const {client} = require('../index.js');

        if(args.length>0) return;

        const {test} = require('../roflCommand.json');
        const {getNum} = require('../functions.js');

        let word = test[getNum(0, test.length-1)];



        const emoji = client.emojis.cache;
		const id_emojis = emoji.map(emoji => emoji.id);

        let random_emoji = id_emojis[getNum(0, id_emojis.length-1)];
        
        if (message.channel.type === 'dm') return;
        

        message.channel.send(`${word} ${emoji.get(random_emoji)}`);
    }
}