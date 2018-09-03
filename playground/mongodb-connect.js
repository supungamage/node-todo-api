const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', (error, db) => {
  if(error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');

  var dbo = db.db('todo-app');

  // dbo.collection('Todos').insertOne({text: 'Something to do 1', compleated: false}, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert the todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // dbo.collection('users').insertOne({name: 'Supun', age: 35, location: 'Nawala'}, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert the user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
