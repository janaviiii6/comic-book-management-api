const { ComicBook } = require('../models');

const comicBookController = {
    
    // Fetch all comic book list
    getAllComicBooks: async (req,res) => {
        try{
            const comicBooks = await ComicBook.findAll();
            res.json(comicBooks);
        } catch(err) {
            console.error("Error fetching comic books:", err);
            res.status(500).json({ err: 'Failed to fetch comic books' });
        }
    },

    //Fetch comic book by id
    getComicBookById: async (req,res) => {

        const id = req.params.id;
        console.log(id);
        try{
            const comicBook = await ComicBook.findByPk(id);
            if(comicBook) {
                res.json(comicBook);
            } else {
                res.status(404).json({err: `Comic book by ${id} not found`});   
            }
        } catch(err) {
            console.error("Error fetching comic book by id:",err);
            res.status(500).json({ err: 'Failed to fetch comic book by id' });
        }
    }
}

module.exports = comicBookController;