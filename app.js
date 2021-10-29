//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items =["Buy milk", "Buy bread"];
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

var today = new Date();

var option = {
  weekday:"long",
  day: "numeric",
  month:"long"
};

var day = today.toLocaleDateString("en-US", option);



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
