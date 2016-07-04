var db = require("../db");

exports.retrieveProfile = function (data, callback) {
  db.connection.collection("users").
    find({}).
    toArray(callback);
};

exports.addProfile = function (data, callback) {
  db.connection.collection("users").insert({
    userId: 123,
    created:  new Date(),
    modified: new Date(),
    name: data.name || "Not specified",
    description: data.description,
    avatar: data.avatar
  }, callback);
};

exports.updateProfile = function (data, callback) {
  db.connection.collection("users").update({
    name: "Kasha"
  },{
    $set: {
      modified: Date(),
      name: data.name,
      description: data.description,
      avatar: data.avatar
    }
  }, callback);
};
