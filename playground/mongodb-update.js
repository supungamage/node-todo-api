const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (error, db) => {
  if(error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');

  var dbo = db.db('todo-app');

  dbo.collection('Todos').findOneAndUpdate(
    {_id: new ObjectID('5b7e75fe2c3a4691e853fd73')},
    {$set: {compleated: true}},
    {returnOriginal: false}).then((result) => {
      console.log(result);
    })

  //db.close();
});
