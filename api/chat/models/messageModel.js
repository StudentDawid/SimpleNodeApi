'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatMessageSchema = new Schema({
  chatId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: 'Kindly enter the message'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Messages', ChatMessageSchema);