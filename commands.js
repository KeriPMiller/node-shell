var fs = require('fs');
var readline = require('readline');

module.exports = {
  pwd: function() {
    process.stdout.write(process.mainModule.filename)
  },
  date: function() {
    process.stdout.write(Date())
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) {
        throw err;
      }
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n")
      })
    })
  },
  echo: function(data){
    process.stdout.write(data)
  },
  cat: function(filename){
    fs.readFile(filename, function(err, files) {
      if (err) {
        throw err;
      }
      console.log(data);
  })},
  head: function(filename){
    const rl = readline.createInterface({
      input: fs.createReadStream(filename)
    });
    var counter = 0;

    while(counter < 5){
      rl.on('line', (line) =>{
              console.log(`${line}`);
              counter++;
      })
    }
}
  // tail: function(filename){

  // }
}
