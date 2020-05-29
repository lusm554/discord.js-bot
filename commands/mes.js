module.exports = {
    name: 'mes',
    description: 'try sending "соси" to bot and mention it',
    onlyAdmin: true,
    execute(message, args) {
        // message.channel.send('гаденыш'+' :rainbow_flag:')
        const client = message.mentions.users.get('713523159126769716');

        if(client) {
            if(args.includes('соси')) {
                message.channel.send('рот ебал',{split: true})
                .then(() => {
                    message.channel.send(' уебище');
                })
            }
        }
    }
}