var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.post("/submit", handleSubmit);

async function handleSubmit(req, res) {
  let a = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
  return { result: { percentage: 0.87, URLisScam: true, BodyisSpam: true } };
}
app.listen(3005);
console.log("Server listening on port 3005");
