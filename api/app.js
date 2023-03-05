var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.post("/submit", (req,res)=>{
  console.log(req.body);
  res.send();
});

function handleSubmit(req, res) {


  // console.log(res);
  // console.log("test");
  res.send();
  console.log(res.body);
  
  return { result: { percentage: 87, URLisScam: true, BodyisSpam: true } };
}
app.listen(3005);
console.log("Server listening on port 3005");
