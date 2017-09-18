const commands = require('./commands');
const chalk = require('chalk');

const prompt = chalk.blue('\nprompt > ');


var userCommand = 'pwd'

process.stdout.write(prompt);




process.stdin.on('data', function(data) {

  const tokens = data.toString().trim().split(" ");
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' ');


  commands[cmd](args);
  process.stdout.write(prompt);
})
