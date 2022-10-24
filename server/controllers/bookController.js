const Book = require('../models/bookModel');

module.exports = {
    getAllBooks :  (req,res) => {
        Book.find()
        .then(books => res.status(200).json(books))
        .catch(err => {res.status(500).json(err)})
        },
        addBook : (req, res) => {
            const {
              title,
              author,
              createdAt,
              user_id
            } = req.body;
            const newBook = new Book({
              title: title,
              author: author,
              createdAt: createdAt,
              user_id: user_id
            });
            newBook.save().then(book => res.json(book));
          },
          deleteBook : (req, res) => {
            Book.findById(req.params.id)
              .then(book => book.remove().then(() => res.json({success: true})))
              .catch(err => res.status(404).json({success: false}));
          },
          updateBook: (req, res) => {
            Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
                  if (err) return res.status(500).send(err);
                  return res.send(book);
              }
            );
          }

}



