const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b9202ad6cb3907d34440421';

console.log(ObjectID.isValid(id));

Todo.find({
  _id: id
}).then((todos) => {
  console.log('find todos', todos)
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('findOne todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('cannot find id');
  }
  console.log('findOne todo', todo);
});
