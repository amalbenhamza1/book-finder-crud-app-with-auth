const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  createdAt: {
    type: String
  },
  
  user_id: {
    type: String
    
  },
  
});


module.exports = Book = mongoose.model('book', BookSchema);