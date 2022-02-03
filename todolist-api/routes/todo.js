var express = require("express");
var router = express.Router();
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

router.get("/", function (req, res, next) {
  res.send(db.get("todos").value());
});

router.post("/", function (req, res, next) {
  res.send("CREATE");
});

router.put("/{id}", function (req, res, next) {
  res.send("UPDATE");
});

router.delete("/{id}", function (req, res, next) {
  res.send("DELETE");
});

module.exports = router;
