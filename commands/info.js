// command for update
module.exports = {
    name: 'info',
	description: 'get info about bot and his code',
	// onlyAdmin: true,
    execute(message, args) {
		const Discord = require('discord.js');

		const exampleEmbed = {
			color: '#ff00f4',
			title: 'Rofl bot',
			url: 'https://github.com/loveyousomuch554',
			author: {
				// name: 'Some name',
				icon_url: 'https://i.imgur.com/viTH3hM.jpg',
				url: 'https://discord.js.org',
			},
			description: 'For fun with your gays (friends)',
			thumbnail: {
				url: 'https://i.imgur.com/viTH3hM.jpg',
			},
			fields: [
				// {
				// 	name: '\u200b',
				// 	value: '\u200b',
				// 	inline: true,
				// },
				// {
				// 	name: 'Info about rofl bot',
				// 	value: '<link>',
				// },
				// {
				// 	name: '\u200b',
				// 	value: '\u200b',
				// 	inline: false,
				// },
				{
					name: 'All commands bot',
					value: '!help',
					inline: false,
				},
				{
					name: 'You can add a rofl bot to your server!',
					value: 'https://discord.com/api/oauth2/authorize?client_id=713523159126769716&permissions=3155968&scope=bot',
					inline: false,
				},
				{
					name: 'GitHub',
					value: 'https://github.com/loveyousomuch554',
					inline: false,
				},
			],
			timestamp: new Date(),
			footer: {
				text: 'it`s footer',
				icon_url: 'https://i.imgur.com/viTH3hM.jpg',
			},
		};


		message.channel.send({embed: exampleEmbed});
    }
}