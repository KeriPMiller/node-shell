var commands = require('./commands');


var userCommand = 'pwd'

process.stdout.write('prompt > ')




process.stdin.on('data', function(data){

  var userCommandArray = data.toString().trim().split(" ");
  userCommand = userCommandArray.shift();
  var afterCommandData = userCommandArray.join(" ")
  commands[userCommand](afterCommandData);
  
})