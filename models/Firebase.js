const mongoose = require('mongoose');

const Firebase = new mongoose.Schema(
  {
    userid: { type: String },
    employeeID: { type: String },
    employeeName: { type: String },
    token: { type: String },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Firebase', Firebase);
