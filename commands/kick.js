module.exports = {
	name: 'kick',
    description: 'you can kick any member',
    guildOnly: true,
    args: true,
    usage: '<user>',
	execute(message, args) {

        if (!message.mentions.users.size && !message.mentions.everyone) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        
        const taggedUser = message.mentions.users.first();

        if (message.mentions.everyone) {
            message.reply(` я думал ты нормальный человек, а ты гнида ебаная`);
        }
        else if( taggedUser.username === 'Who?') {
            message.channel.send(`Ты кого хочешь кикнуть, хуйло?`);
        }
        else if (taggedUser.username === 'ᶠᶸᶜᵏᵧₒᵤ') {
            message.channel.send(`ахуел?`);
        } 
        else {
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
	},
};