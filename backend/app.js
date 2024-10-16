const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const comicBookRoutes = require('./routes/comicBooks');
const { sequelize } = require('./models');

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



//Testing database connection
sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.use('/comic-books',comicBookRoutes);
//Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})