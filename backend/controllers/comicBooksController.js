const { ComicBook, User } = require('../models');

const comicBookController = {
    
    // Fetch all comic book list
    getAllComicBooks: async (req,res) => {
        const { book,author,year,price,condition,category,sortBy,order,page=1,limit=10 } = req.query;
        // console.log(req.query);
        const whereClause = {};

        if(book) {
            whereClause.book_name = book;
        }
        if(author){
            whereClause.author_name = author;
        }
        if(year){
            whereClause.year_of_publication = year;
        }
        if(price){
            whereClause.price = price;
        }
        if(condition){
            whereClause.book_condition = condition;
        }
        if(category){
            whereClause.category = category;
        }

        const validSortFields = ['book_name','author_name','year_of_publication','price','book_condition','category'];
        if(sortBy && !validSortFields.includes(sortBy)){
            return res.status(400).json({ error: `Invalid sort field: ${sortBy}` });   
        }

        const orderBy = [];
        if(sortBy){
            orderBy.push([sortBy,order ? order.toUpperCase() : 'ASC'])
        }

        try{
            const comicBooks = await ComicBook.findAndCountAll({
                where: whereClause,
                order: orderBy,
                limit: parseInt(limit,10),
                offset: (page-1) * limit
            });
            res.status(200).json({
                message: 'Successfully fetched all comic book',
                data: comicBooks.rows,
                total: comicBooks.count,
                page,
                totalPages: Math.ceil(comicBooks.count / limit),
            });
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
            //Handle Sequelize validation errors
            if(err.name === 'SequelizeValidationError') {
                const errors = err.errors.map(e => e.message);
                return res.status(400).json({ errors });
            }
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
            //Handle Sequelize validation errors
            if(err.name === 'SequelizeValidationError') {
                const errors = err.errors.map(e => e.message);
                return res.status(400).json({ errors });
            }
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