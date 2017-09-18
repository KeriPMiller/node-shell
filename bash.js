var commands = require('./commands')

process.stdout.write('prompt > ')

process.stdin.on('data', function(data){

})
var userCommand = data.toString().trim();

commands[userCommand]();
