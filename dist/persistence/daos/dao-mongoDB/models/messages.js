"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagesSchema = exports.messagesCollection = void 0;
var mongoose = require("mongoose");
var messagesCollection = "messages";
exports.messagesCollection = messagesCollection;
var messagesSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  }
});
exports.messagesSchema = messagesSchema;
var messagesModel = mongoose.model(messagesCollection, messagesSchema);
module.exports = messagesModel;