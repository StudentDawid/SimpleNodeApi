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
  var id = req.query.id;
  var id2 = req.body.id;
    Messages.remove({
    _id: id ? id : id2
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};