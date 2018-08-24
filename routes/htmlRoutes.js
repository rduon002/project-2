let db = require("../models");

let path = require("path");

module.exports = function(app) {
  // Load index page
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/search", function(req, res) {
  res.sendFile(path.join(__dirname, "../search.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});
};