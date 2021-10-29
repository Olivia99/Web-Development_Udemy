//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var items =["Buy milk", "Buy bread"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

var day = date.getDay();


res.render("list", {day:day, newItem: items});

});

app.post("/", function(req, res){

var item = req.body.todoItem;

items.push(item);
console.log(items);
res.redirect("/");


});

app.listen (3000, function(){
  console.log("Server started on port 3000");
});
