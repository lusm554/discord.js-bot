module.exports = {
	name: 'server',
	aliases: ['channel'],
	guildOnly: true,
	description: 'get info about server',
	execute(message, args) {	
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
	},
};