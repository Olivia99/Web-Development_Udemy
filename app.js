//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
var items =["Buy milk", "Buy bread"];
var works = [];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

var day = date.getDay();


res.render("list", {listTitle:day, list: items});

});

app.get("/works", function(req, res){
  res.render("list", {listTitle:"Work List", list: works});
});

app.post("/", function(req, res){
  console.log(req.body);

var item = req.body.todoItem;

if(req.body.submit === "Work"){
  works.push(item);
  res.redirect("/works");
}else if(req.body.submit){
  items.push(item);
res.redirect("/");}



});

app.listen (3000, function(){
  console.log("Server started on port 3000");
});
