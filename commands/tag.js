module.exports = {
	name: 'tag',
	description: 'bot will send you your tag or tag any members',
	usage: '\`<user>\`',
	execute(message, args) {
		if(message.mentions.users.size > 5) message.channel.send('too big request');

		if(!message.mentions.users.size) {
			return message.channel.send(message.author.tag);
		}

		const tagsList = message.mentions.users.map(user => `${user.username}#${user.discriminator}\n`);

		message.channel.send(tagsList);
	},	
};