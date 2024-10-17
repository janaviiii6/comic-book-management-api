const { ComicBook, User } = require('../models');

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
    },

    //Create/Add comic book
    createComicBook: async(req,res) =>{
        const { 
            book_name, 
            author_name, 
            year_of_publication, 
            price, 
            discount, 
            number_of_pages, 
            book_condition, 
            description, 
            category, 
            user_id,
        } = req.body;
        console.log(req.body);

        //Validate required fields
        if(!book_name || !author_name || !year_of_publication || !price || !number_of_pages || !user_id) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        try{
            //Create comic book
            const newComicBook = await ComicBook.create({
                book_name, 
                author_name, 
                year_of_publication, 
                price, 
                discount, 
                number_of_pages, 
                book_condition, 
                description, 
                category, 
                user_id 
            });
            res.status(201).json({
                message: 'Successfully created record of comic book',
                data: newComicBook,
            });
        
        } catch(err) {
            console.error("Error creating book:",err);
            res.status(500).json({ err: 'Failed to create comic book' });
        }
    },

    updateComicBook: async(req,res) => {
        const comicBookId = req.params.id;

        const {
            book_name, 
            author_name, 
            year_of_publication, 
            price, 
            discount, 
            number_of_pages, 
            book_condition, 
            description, 
            category, 
        } = req.body;
        console.log(req.body);

        try{
            //Fetch comic book by id
            const comicBook = await ComicBook.findByPk(comicBookId);
            console.log(comicBookId);

            if(!comicBook) {
                return res.status(404).json({
                    error: `Comic book with id: ${comicBookId} not found`
                });
            }

            //Update comic book details
            const updatedComicBook = await comicBook.update({
                book_name, 
                author_name, 
                year_of_publication, 
                price, 
                discount, 
                number_of_pages, 
                book_condition, 
                description, 
                category,
            });

            res.status(200).json({
                message: 'Comic book updated successfully.',
                comicBook: updatedComicBook,
            });
        } catch(err) {
            console.error("Error updating comic book:",err);
            res.status(500).json({ error: 'Failed to update comic book' });
        }
    },

    deleteComicBook: async(req,res) => {
        const comicBookId = req.params.id;
        console.log(comicBookId);

        try{
            const comicBook = await ComicBook.findByPk(comicBookId);
            if(!comicBook)
                return res.status(404).json({ error:  `Comic book with id: ${comicBookId} not found` });

            await comicBook.destroy();

            res.status(200).json({
                message: 'Comic book deleted successfully.'
            });
        }catch(err){
            console.error("Error deleting comic book:",error);
            res.status(500).json({
                error: 'Failed to delete comci book.'
            });
        }
    }
}

module.exports = comicBookController;