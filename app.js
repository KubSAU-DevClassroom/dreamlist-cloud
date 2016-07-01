var express = require("express");
var path = require("path");
var app = express();
var db = require("./db");
var settings = require("./settings");

if (!process.env.NODE_ENV)
  process.env.NODE_ENV = "development";
console.log("running in", process.env.NODE_ENV, "mode");
db.init(settings[process.env.NODE_ENV].db);

app.use(function (req, res, next) {
  console.log(req.method + " " + req.url);
  next();
});

var routes = require("./routes");

app.get("/categories", function (req, res) {
  routes.categories.retrieveCategories(req, res);
});

app.post("/categories/add", function (req, res) {
  routes.categories.addCategory(req, res);
});

app.post("/categories/remove", function (req, res) {
  routes.categories.removeCategory(req,res);
});

app.post("/categories/update", function (req, res) {
  routes.categories.updateCategory(req,res);
});

app.get("/me", function (req, res) {
  routes.profile.retrieveProfile(req,res);
});

app.post("/me/add", function (req, res) {
  routes.profile.addProfile(req,res);
});

app.post("/me/update", function (req, res) {
  routes.profile.updateProfile(req,res);
});

app.use("/", express.static(path.join(__dirname, "/static")));

app.listen(settings[process.env.NODE_ENV].db.port);
