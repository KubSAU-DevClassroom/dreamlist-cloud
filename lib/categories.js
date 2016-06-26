var db = require("../db");

exports.categories = function (callback) {
  db.connection.collection("categories").
    find({}).
    toArray(callback);
};

exports.addCategory = function (data, callback) {
  db.connection.collection("categories").insert({
    _id: new db.ObjectId(data._id),
    created:  new types.Timestamp(data.created),
    modified: new types.Timestamp(data.modified),
    name: data.name || "Not specified",
    userId: new types.ObjectId(data.userId),
    color: new types.Color(data.color)
  }, callback);
};

exports.updateCategory = function (data, callback) {
  db.connection.collection("categories").update({
    name: "Kasha2"
  },{
    $set: {
      modified: new types.Timestamp(data.modified),
      name: data.name,
      color: new types.Color(data.color)
    }
  }, callback);
};

exports.removeCategory = function (data, callback) {
  db.connection.collection("categories").remove({
    _id: new db.ObjectId(data._id)
  }, callback);
};
