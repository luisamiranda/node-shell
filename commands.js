var fs = require('fs');

module.exports = {
  pwd: function(str) {
    process.stdout.write(process.cwd());
  },
  date: function(str) {
    process.stdout.write("Mon Jan 16 10:43:59 EST 2017");
  },
  ls: function(str){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
      });
  },
  echo: function(str){
    // if (str === "$PATH") {
    //   fs.realpath(str, 'utf8', (err,data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });
  // } else {
    process.stdout.write(str);
  // }
  },
  cat: function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  },
  head: function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var headData = data.split("\n").slice(0,5).join("\n");
      console.log(headData);
    });
  },
  tail: function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var tailData = data.split("\n").slice(-6).join("\n");
      console.log(tailData);
    });
  },
  sort: function(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) throw err;
      var lines = data.split("\n").sort().join("\n")
      console.log(lines);
    });
  }
}
