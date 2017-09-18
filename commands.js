module.exports = {
  pwd: function(){
    process.stdout.write(process.mainModule.filename)
    process.stdout.write('\nprompt > ')
  }
  date: function(){
    process.stdout.write(Date())
    process.stdout.write('\nprompt > ')
  }
}
