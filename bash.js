var commands = require('./commands');


var userCommand = 'pwd'

process.stdout.write('prompt > ')


process.stdin.on('data', function(data){
  userCommand =  data.toString().trim();
  commands[userCommand]();

})
