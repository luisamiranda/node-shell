const commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var tokens = data.toString().trim().split(' ');
  var cmd = tokens[0];
  var args = tokens.slice(1).join(' ');

  if (commands[cmd]){commands[cmd](args)}
  else process.stderr.write('command not found' + cmd)

});
