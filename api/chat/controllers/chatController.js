'use strict';


var mongoose = require('mongoose');
var Chats = mongoose.model('Chats');
var Messages = mongoose.model('Messages');

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

exports.delete_a_chat = function(req, res) {
  var id = req.query.id;
  Chats.remove({
    _id: id
  }, function(err, task) {
    if (err)
      res.send(err);
      Messages.remove({
        chatId: id
      }, function(err, task) {
        if (err)
          res.send(err);
        res.json({ message: 'Chat successfully deleted' });
    });
  });
};