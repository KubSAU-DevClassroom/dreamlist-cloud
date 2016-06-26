var db = require("../db");

exports.categories = function (callback) {
  db.connection.collection("categories").find(
    {"userId": "123" }).toArray(callback);
};

exports.addCategory = function (data, callback) {
  db.connection.collection("categories").insert({
    created:  new Date(data.created),
    modified: new Date(data.modified),
    name: data.name || "Not specified",
    userId: new db.ObjectId(),
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
