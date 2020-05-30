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

		let random_emoji = id_emojis[ getNum(0, id_emojis.length-1) ];

		// message.react(`${id_emojis[ getNum(0, id_emojis.length-1) ]}`);
		// start test path


		message.react('👍').then(() => message.react('👎'));

		// const filter = (reaction, user) => {
		// 	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
		// };

		// message.awaitReactions(filter , { max: 1, time: 60000, errors: ['time'] })
		// 	.then(collected => {
		// 		const reaction = collected.first();

		// 		if (reaction.emoji.name === '👍') {
		// 			// message.reply(' <3');
		// 			message.channel.send(`${mentions} <3`);
		// 		} else {
		// 			// message.reply(' лайк поставил нахуй');
		// 			message.channel.send(`${mentions} лайк поставил нахуй`);
		// 		}
		// 	})
		// 	.catch(collected => {
		// 		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
		// 	});
		// hi
		// end test path

		// console.log(random_emoji)

		if (message.channel.type === 'dm') {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${message.author}`);

		}
		else if (mentions.length > 0) {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${mentions}`).then((elem) => {
				if(random_emoji) {
					message.channel.send(`${emoji.get(random_emoji)}`);
				}
			})
			
		}
		else {

			message.channel.send(` ${test[getNum(0,test.length-1)]} ${message.author}`).then(() => {
				if(random_emoji) {
					message.channel.send(`${emoji.get(random_emoji)}`);
				}
			})

		}

	},
};