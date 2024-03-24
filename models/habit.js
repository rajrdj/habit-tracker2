const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: String,
  statuses: [String], // Array to store status for each day
});

module.exports = mongoose.model('Habit', habitSchema);
