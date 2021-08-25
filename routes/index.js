const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.local(2021, 8, 23, 8, 30).toLocaleString(DateTime.DATETIME_FULL),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.local(2021, 8, 23, 23, 30).toLocaleString(DateTime.DATETIME_FULL),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messsage Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: DateTime.now().toLocaleString(DateTime.DATETIME_FULL)
  });
  res.redirect("/");
});

module.exports = router;
