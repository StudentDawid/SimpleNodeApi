'use strict';
module.exports = function(app) {
  var chatCtrl = require('../controllers/chatController');
  var messageCtrl = require('../controllers/messageController');

  // chat Routes
  app.route('/chats')
    .get(chatCtrl.list_all_chats)
    .post(chatCtrl.create_a_chat);

  // messages Router
  app.route('/chats/:chatId')
    .get(messageCtrl.list_all_messages_for_chat)
    .post(messageCtrl.create_a_message)
    .delete(messageCtrl.delete_a_message);
};