module.exports = {
	name: 'time',
	description: 'bot send you current time',
	invisible: true,
	// onlyAdmin: true,
	execute(message, args) {
		const {everyone} = require('../roflCommand.json');

        function timer() {
            let date = new Date();
    
			return '```'+`${style(date.getHours())}:${style(date.getMinutes())}:${style(date.getSeconds())}`+'```';	
		}

		function style(time) {
			return time > 9 ?time : '0'+time;
		}

		message.channel.send(timer());
	},
};