const express = require('express');
const comicBooksController  = require('../controllers/comicBooksController');
const router = express.Router();


//ROUTE - get all comic book list
router.get('/',comicBooksController.getAllComicBooks);


module.exports = router;