const mongoose = require('mongoose');

const teacherLoginSchema = new mongoose.Schema({
  teacherId: {
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

module.exports = mongoose.model('TeacherLogin', teacherLoginSchema);
