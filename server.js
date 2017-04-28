var express = require("express"); //looks for the "express" library
var bodyParser = require("body-parser");

var app = express(); //initializes "express" folder (app."")
app.use(bodyParser.json());

app.get("/hello", (request, respond) =>{
respond.json({"hello": "Hello Mouminatou your shining", "Syntax": "You Wavey Baby" });

//respond.json("Wassup Server"); respond.end("");
});
//
app.post("/hello",(request, respond) =>{
console.log(request.body);
respond.sendStatus(200);
});
//listening constantly
app.listen(8080);
console.log("Server is running");