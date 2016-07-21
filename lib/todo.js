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
    categoryId: data.categoryId,
    finishDate: data.finishDate,
    notifyTime: data.notifyTime
  }, callback);
};
//опять косяки с гитом
exports.filterCategory = function (data, callback) {
  db.connection.collection("todos").
    find({categoryId: data.categoryId}).sort({created: -1 }).
    toArray(callback);
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
      categoryId: data.categoryId,
      finishDate: data.finishDate,
      notifyTime: data.notifyTime
    }
  }, callback);
};
