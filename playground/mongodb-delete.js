const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (error, db) => {
  if(error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');

  var dbo = db.db('todo-app');

  //deleteMany
  // dbo.collection('Todos').deleteMany({text: 'Something to do 2'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // dbo.collection('Todos').deleteOne({text: 'Something to do 3'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  dbo.collection('Todos').findOneAndDelete({text: 'Something to do 4'}).then((result) => {
    console.log(result);
  });

  //db.close();
});
