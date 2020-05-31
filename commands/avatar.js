module.exports = {
    name: 'avatar',
    description: 'you can get url your avatar or any member',
    aliases: ['icon','pfp'],
    usage: '\`<mentions user or nothing>\`',
    cooldown: 10,
    execute(message, args) {
        if(message.mentions.users.size > 5) message.channel.send('too big request');

		if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        

        // if mention more them one
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    

        message.channel.send(avatarList);
	},
};