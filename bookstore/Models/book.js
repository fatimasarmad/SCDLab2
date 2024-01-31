const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true, unique:true }
    
});

const book = mongoose.model('book', bookSchema);
module.exports = book;