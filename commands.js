
'use strict';

const fs = require('fs');

module.exports = {
  pwd: function(args) {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },
  date: function(args) {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function(args){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
      });
  },
  echo: function(args){
    const output = args
    .split(' ')
    .map(function (arg) {
      return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
    })
    .join(' ');
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  },
  cat: function (args) {
    var filenames = args.split(' ');
    var texts = []
    var count = 0;
    filenames.forEach(function(filename, i) {
      fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        texts[i] = data;
        count++;
        if (count === filenames.length){
          process.stdout.write(texts.join(' '));
          process.stdout.write('\nprompt > ');
        }
      });
    });
  },
  head: function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var headData = data.split("\n").slice(0,4).join("\n");
      process.stdout.write(texts.join(' '));
      process.stdout.write('\nprompt > ');
    });
  },
  tail: function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var tailData = data.split("\n").slice(-5).join("\n");
      process.stdout.write(texts.join(' '));
      process.stdout.write('\nprompt > ');
    });
  },
  sort: function(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var lines = data.split("\n").sort().join("\n")
      console.log(lines);
    });
    process.stdout.write('\nprompt > ');
  }
}
