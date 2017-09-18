var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(process.mainModule.filename)
    process.stdout.write('\nprompt > ')
  },
  date: function() {
    process.stdout.write(Date())
    process.stdout.write('\nprompt > ')
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) {
        throw err;
      }
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n")
      })
      process.stdout.write('prompt > ');
    })
  }
}
