var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var Chats = require('./api/chat/models/chatModel');
var Messages = require('./api/chat/models/messageModel');

var server = require('http').createServer(app).listen(7000);
var io = require('socket.io').listen(server);
  

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect('mongodb://localhost/Chat');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.emit('welcome', {
    asd: 'wsad'
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


var routes = require('./api/chat/routes/chatRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);