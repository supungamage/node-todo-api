var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dbURL = 'mongodb://root:123abc@ds149252.mlab.com:49252/todo-app';

if(process.env.PORT === 3000) {
  dbURL = 'mongodb://localhost:27017/TodoApp';
}

mongoose.connect(dbURL, { useNewUrlParser: true });

module.exports = {mongoose};
