var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var userinput = data.toString().trim(); // remove the newline
  if (userinput.indexOf(" ") > -1) {
    var userCommand = userinput.slice(0, userinput.indexOf(" "));
    var userPara = userinput.slice(userinput.indexOf(" ") + 1)
  } else {
    userCommand = userinput;
  }
  commands[userCommand](userPara);
  process.stdout.write('\nprompt > ');
});
