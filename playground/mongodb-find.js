const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (error, db) => {
  if(error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to mongodb server');

  var dbo = db.db('todo-app');

  // dbo.collection('Todos').find({_id: new ObjectID('5b7e7674e6a99290d0397f23')}).toArray().then((doc) => {
  //   console.log('Fetching Todos...');
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data', err)
  // });

  dbo.collection('users').find({name: 'Supun'}).toArray().then((doc) => {
    console.log('Fetching Users...');
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data', err)
  });

  //db.close();
});
