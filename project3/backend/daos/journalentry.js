const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
    },
    card_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'CardID'
    },
    entry_title: {
      type: String,
      required: true,
    },
    entry_description: {
      type: String,
      required: true,
    },
    entry_text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },  
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('JournalEntry', journalEntrySchema);