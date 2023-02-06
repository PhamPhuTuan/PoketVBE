const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    name: { type: String},
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MessageSchema", MessageSchema);