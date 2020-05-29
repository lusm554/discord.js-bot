module.exports = {
    name: 'timer',
    description: 'timer for meetings',
    usage: '`<amount of minutes>` `<mention user>`',
    args: true,
    guildOnly: true,
    cooldown: 1800000,
    execute(message, args) {
        if(isNaN(args[0])) return message.reply('enter the amount of minutes');

        const {client} = require('../index.js');
        const {getNum} = require('../functions.js');
        
        const mentions = message.mentions.users.map(user => `<@${user.id}>`);

        const emoji = client.emojis.cache;
		const id_emojis = emoji.map(emoji => emoji.id);

        let random_emoji = id_emojis[getNum(0, id_emojis.length-1)];


        let seconds = args[0]*60000;

        message.channel.send(`timer set to ${args[0]} minutes`);

        setTimeout(() => {
            if(mentions.length > 0) {
                message.channel.send(`вы где уебки? ${mentions} ${emoji.get(random_emoji)}`);
            }
            else {
                message.channel.send(`вы где уебки? @everyone ${emoji.get(random_emoji)}`);
            }
        }, seconds);

    }
}