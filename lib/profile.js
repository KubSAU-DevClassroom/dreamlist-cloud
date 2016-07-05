var db = require("../db");

exports.addProfile = function (data, callback) {
  db.connection.collection("users").insert({
    created:  new Date(),
    modified: new Date(),
    name: data.name || "Not specified",
    description: data.description,
    avatar: data.avatar
  }, callback);
};

exports.updateProfile = function (data, callback) {
  db.connection.collection("users").insert({
    modified: new Date(),
    name: data.name || "Not specified"
  }, callback);
};
