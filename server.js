//<<-----------------MODULARIZED EXPRESS APPLICATION----------------->>

const express = require('express');// Require the Express Module
const app = express();// Create an Express App
app.use(express.static( __dirname + '/public/dist/public/' ));

const bodyParser = require('body-parser');// Require body-parser (to receive post data from clients)

// Integrate body-parser for JSON
app.use(bodyParser.json());

// Require Mongoose and connect to mongo database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt_exam_2');
// Use native promises
mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})