const express = require('express');
const router = express.Router();
const {getAllBooks,addBook,deleteBook,updateBook} = require('../controllers/bookController')

router.get('/getAll',getAllBooks);
router.post('/add',addBook);
router.delete('/:id',deleteBook);
router.put('/:id',updateBook)

module.exports = router