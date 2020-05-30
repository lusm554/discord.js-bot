module.exports = {
	name: 'kick',
    description: 'you can kick any member',
    guildOnly: true,
    args: true,
    usage: '<user>',
	execute(message, args) {
        const member = message.mentions.members.first();
        const roles = message.author;

        console.log(roles)
        return;

        if (!message.mentions.users.size && !message.mentions.everyone) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        
        const taggedUser = message.mentions.users.first();

        if (message.mentions.everyone) {
            return message.reply(` я думал ты нормальный человек, а ты гнида ебаная`);
        }
        else if( taggedUser.username === 'Who?') {
            return message.channel.send(`Ты кого хочешь кикнуть, хуйло?`);
        }
        else if (taggedUser.username === 'ᶠᶸᶜᵏᵧₒᵤ') {
            return message.channel.send(`ахуел?`);
        } 


        // kick member
        message.channel.send(`Do you want to kick ${member} ?`).then()
        message.react('👍').then(() => message.react('👎')); // vote to kick user

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter , { max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '👍') {

                    // member.kick();
                    message.reply(` you kicked out ${member}`);
                    
				} else {

                    message.reply(`ну и нахуй меня звали...`);
                    
				}
			})
			.catch(collected => {
				message.reply('you reacted with neither a thumbs up, nor a thumbs down. (lox)');
			});
	},
};