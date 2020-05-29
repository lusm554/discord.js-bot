module.exports = {
	name: 'test',
	description: "rofl command",
	execute(message, args) {
		const {client} = require('../index.js');

		const {test} = require('../roflCommand.json');
		const {getNum} = require('../functions.js');

		const mentions = message.mentions.users.map(user => `<@${user.id}>`);

		const emoji = client.emojis.cache;
		const id_emojis = emoji.map(emoji => emoji.id);

		let random_emoji = id_emojis[getNum(0, id_emojis.length-1)];


		if (message.channel.type === 'dm') {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${message.author}`);

		}
		else if (mentions.length > 0) {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${mentions}`).then(() => {
				message.channel.send(`${emoji.get(random_emoji)}`);
			})
			
		}
		else {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${message.author}`).then(() => {
				message.channel.send(`${emoji.get(random_emoji)}`);
			})

		}

	},
};