const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String },
  createdAt: { type: Date, default: Date.now },
  sales: { type: Number, default: 0 }
});

module.exports = mongoose.model('Book', BookSchema);
