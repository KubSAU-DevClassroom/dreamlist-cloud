var db = require("../db");

exports.retrieveToDo = function (data, callback) {
  db.connection.collection("todos").
    find({}).
    toArray(callback);
};

exports.addToDo = function (data, callback) {
  db.connection.collection("todos").insert({
    created: Date(),
    modified: Date(),
    name: data.name,
    place: data.place,
    status: data.status,
    categoryId: data.category,
    finishDate: data.finishDate,
    notifyTime: data.notifyTime
  }, callback);
};

exports.updateToDo = function (data, callback) {
  db.connection.collection("todos").update({
    name: "todotodotodotodo"
  },{
    $set: {
      modified: Date(),
      name: data.name,
      place: data.place,
      status: data.status,
      categoryId: data.category,
      finishDate: data.finishDate,
      notifyTime: data.notifyTime
    }
  }, callback);
};
