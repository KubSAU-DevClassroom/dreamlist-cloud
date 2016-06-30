var lib = require("../lib/categories");

exports.retrieveCategories = function (req, res) {
  lib.categories(function (err, categories) {
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true,
      data: categories
    });
  });
};

exports.addCategory = function (req, res) {
  lib.addCategory({
    created: Date(),
    modified: Date(),
    name: "Kasha",
    color: 'orange'
  }, function (err, result) {
    if (err) {
      res.json({
        success: false
      });
      return;
    }
    res.json({
      success: true,
      result: result.ops[0]
    });
  });
};


exports.removeCategory = function (req, res) {
    lib.removeCategory({
      _id: "576b79209026830c1a9d8d22"
    }, function (err, result) {
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

exports.updateCategory = function (req, res) {
    lib.updateCategory({
    //  modified: Date(),
      name: "Kasha2",
      color: 'green'
    }, function (err, result) {
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
