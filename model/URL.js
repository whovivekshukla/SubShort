const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  shortURL: {
    type: String,
    required: true,
  },
  longURL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("URL", urlSchema);
