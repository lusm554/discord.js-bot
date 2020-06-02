module.exports = {
    name: 'say',
    description: '',
    guildOnly: true,
    execute(message, args) {
        const author = message.author.id;
        const mentions = message.mentions.users.filter(user => user.id!=author).map(user => `<@${user.id}>`);

        if(mentions.length > 0) {
            message.channel.send(`<@${author}> передал тебе: ${args.join(' ')}`);
        }
        else {
            message.channel.send(`<@${author}> ${args.join(' ')}`);
        }
    }
}