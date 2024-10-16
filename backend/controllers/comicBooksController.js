const { ComicBook } = require('../models');

const comicBookController = {
    getAllComicBooks: async (req,res) => {
        try{
            const comicBooks = await ComicBook.findAll();
            res.json(comicBooks);
        } catch(err) {
            console.error("Error fetching comic books:", err);
            res.status(500).json({ err: 'Failed to fetch comic books' });
        }
    }
}
module.exports = comicBookController;