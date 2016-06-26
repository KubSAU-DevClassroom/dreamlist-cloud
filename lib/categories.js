var db = require("../db");
exports.categories = function (callback) {
  db.connection.collection("categories").
  find({
    //data.userID || "Not specified";
  }).
  toArray(callback);
};

exports.addCategory = function (data, callback) {
  db.connection.collection("categories").insert({
    _id: new db.ObjectId(data._id),
    created:  new Date(data.created),
    modified: new Date(data.modified),
    name: data.name || "Not specified",
    userId: new db.ObjectId(data.userId),
    color: data.color
  }, callback);
};

exports.updateCategory = function (data, callback) {
  db.connection.collection("categories").update({
    name: "Kasha2"
  },{
    $set: {
      modified: new Date(data.modified),
      name: data.name,
      color: data.color
    }
  }, callback);
};

exports.removeCategory = function (data, callback) {
  db.connection.collection("categories").remove({
    _id: new db.ObjectId(data._id)
  }, callback);
};
