var todos = require("../lib/todo");

exports.retrieveToDo = function (req, res) {
  todos.retrieveToDo({
  }, function (err, todo) {
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true,
      data: todo
    });
  });
};

exports.addToDo = function (req, res) {
  todos.addToDo({
    created: Date(),
    modified: Date(),
    name: "todotodotodotodo",
    place: "North Pool",
    status: "NOT YET",
    categoryId: 1,
    finishDate: Date("24.12.2012"),
    notifyTime: 10
  },function (err, todo){
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true
    });
  });
};

exports.filterCategory = function (req, res) {
  todos.filterCategory({
    categoryId: 1
  }, function (err, todo) {
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true,
      data: todo
    });
  });
};

exports.updateToDo = function (req, res) {
  todos.updateToDo({
    modified: Date(),
    name: "scooby do",
    place: "Alaska",
    status: "here",
    categoryId: 2,
    finishDate: Date("13.12.2015"),
    notifyTime: 10
  },
    function (err, todo){
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true
    });
  });
};
