const mongoose = require("mongoose");

export const messagesCollection = "messages";

export const messagesSchema = new mongoose.Schema({
  user: { type: String, require: true },
  message: { type: String, require: true },
  date: { type: String, require: true },
});

const messagesModel = mongoose.model(messagesCollection, messagesSchema);

module.exports = messagesModel;
