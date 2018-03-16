'use strict';


var mongoose = require('mongoose');
var Chats = mongoose.model('Chats');

exports.list_all_chats = function(req, res) {
  Chats.find({}, function(err, chats) {
    if (err) res.send(err);
    res.json(chats);
  });
};

exports.create_a_chat = function(req, res) {
  var new_chat = new Chats(req.body);
  new_chat.save(function(err, chat) {
    if (err) res.send(err);
    res.json(chat);
  });
};
