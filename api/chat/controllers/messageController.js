'use strict';

var mongoose = require('mongoose');
var Messages = mongoose.model('Messages');


exports.list_all_messages_for_chat = function(req, res) {
  Messages.find().where('chatId').equals(req.params.chatId).exec( function(err, chats) {
    if (err) res.send(err);
    res.json(chats);
  });
};

exports.create_a_message = function(req, res) {
  var new_message = new Messages(req.body);
  new_message.save(function(err, messages) {
    if (err) res.send(err);
    res.json(messages);
  });
};

exports.delete_a_message = function(req, res) {
    Messages.remove({
    _id: req.query.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};