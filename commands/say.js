exports.module = {
    name: 'say',
    description: '',
    guildOnly: true,
    exexute(message, args) {
        const mentions = message.mentions.users.map(user => `<@${user.id}>`);
        const author = message.author.id;

        message.channel.send(`${author} передал тебе: ${args.join(' ')} ${mentions}`);
    }
}