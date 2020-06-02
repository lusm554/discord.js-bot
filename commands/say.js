exports.module = {
    name: 'say',
    description: '',
    exexute(message, args) {
        const mentions = message.mentions.users.map(user => `<@${user.id}>`);
        const author = message.author.id;

        if(message.channel.type === 'dm') return;

        message.channel.send(`${author} передал тебе: ${args.join(' ')}`);
    }
}