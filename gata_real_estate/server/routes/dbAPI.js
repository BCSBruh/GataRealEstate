var express = require("express");
var router = express.Router();
var dotenv = require("dotenv");
var connectDB = require("../db");
var mongoose = require("mongoose");
var path = require("path");
require("dotenv").config({ path: "./.env" });

dotenv.config();
const db = connectDB();

router.get("/", function (req, res) {
  console.log(db);
  res.send("hello");
});

module.exports = router;
