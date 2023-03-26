require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const ejs=require("ejs");
const morgan=require("morgan");
const mongoose = require("mongoose");
//const session=require("express-session");
//const passport=require("passport");
//onst passportLocalMongoose=require("passport-local-mongoose");
var cors = require('cors');

//port
const port = process.env.PORT || 9000;

app.listen(port,function(){
    console.log("Server started on port 9000");
});