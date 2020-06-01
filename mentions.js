module.exports = {
    name: 'check_mention',
    description: '',
    invisible: true,
    execute(message, args, commandName) {
        const { client } = require('./index.js');

        const mention = message.mentions.users.map(user => user.id).includes(client.user.id); 


        return mention;
    }
}