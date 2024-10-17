const express = require('express');
const comicBooksController  = require('../controllers/comicBooksController');
const checkManagerRole = require('../middleware/checkManagerRole');
const router = express.Router();


//ROUTE - get all comic book list
router.get('/',comicBooksController.getAllComicBooks);

//ROUTE - get a single comic book details
router.get('/:id',comicBooksController.getComicBookById);

//ROUTE - create comic book 
router.post('/',checkManagerRole,comicBooksController.createComicBook);

//ROUTE - update comic book by id
router.put('/:id',checkManagerRole,comicBooksController.updateComicBook);

//ROUTE - delete comic book by id
router.delete('/:id',checkManagerRole,comicBooksController.deleteComicBook);

module.exports = router;