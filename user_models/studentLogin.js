const mongoose = require('mongoose');

const studentLoginSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('StudentLogin', studentLoginSchema);
