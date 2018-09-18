const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'secretkey');
console.log('token', token);

var databack = jwt.verify(token, 'secretkey');
console.log('databack', databack);


// var message = "test message";
// var hashMessage = SHA256(message).toString();
//
// console.log(message, hashMessage);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret-key').toString()
// };
//
// //token.data.id = 5;
// //token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(data) + 'secret-key').toString();
// if(resultHash === token.hash) {
//   console.log('Data can be trust');
// } else {
//   console.log('Data has been changed');
// }
