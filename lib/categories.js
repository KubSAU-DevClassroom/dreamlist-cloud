var db = require("../db");

exports.categories = function (callback) {
  db.connection.collection("categories").
    find({}).
    toArray(callback);
};

exports.addCategory = function (data, callback) {
  db.connection.collection("categories").insert({
    name: data.name || "Not specified"
    created:  new Date(),
    modified: new Date(),
    name: data.name || "Not specified",
    userId: data.userId,
    color: data.color
  }, callback);
};

exports.updateCategory = function (data, callback) {
  db.connection.collection("categories").update({
    name: "Alex"
  },{
    $set: {
      name: data.name
      modified: new Date(),
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
