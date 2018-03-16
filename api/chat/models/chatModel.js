'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChatSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the chat'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Chats', ChatSchema);