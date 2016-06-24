var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
exports.ObjectId = mongo.ObjectId;
exports.connection = null;

exports.init = function (settings, callback) {
  // Use connect method to connect to the Server
  MongoClient.connect(settings.url, function(err, db) {
    if (err) return console.log(err);
    exports.connection = db;
    callback && callback();
    console.log("Connected correctly to server");
  });
};





// var disk = {
//   mydbDriver: function() {
//     var module = {
//       exports: {
//
//       }
//     };
//     module.exports.n = 1;
//     return module;
//   }
// };
//
// var RAM = {};
//
// function require2(name) {
//     if (name in RAM) {
//       return RAM[name];
//     } else {
//       var m = disk[name]();
//       RAM[name] = m;
//       return m;
//     }
// }
//
// var m1 = require2("mydbDriver");
// var m2 = require2("mydbDriver");
//
// console.log(m1 == m2);
