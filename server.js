var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  // Task = require('./api/models/todoListModel'), //created model loading here
  Chats = require('./api/chat/models/chatModel'),
  Messages = require('./api/chat/models/messageModel'),
  bodyParser = require('body-parser'),
  cors = require('cors');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect('mongodb://localhost/Chat');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var routes = require('./api/routes/todoListRoutes'); //importing route
var routes = require('./api/chat/routes/chatRoutes'); //importing route
routes(app); //register the route
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);