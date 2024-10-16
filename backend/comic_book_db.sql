CREATE DATABASE IF NOT EXISTS comic_book_management;

USE comic_book_management;

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role ENUM('MANAGER','USER') DEFAULT 'USER'
);

CREATE TABLE IF NOT EXISTS comic_book_details(
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    year_of_publication YEAR NOT NULL,
    price FLOAT NOT NULL,
    discount INT,
    number_of_pages INT NOT NULL,
    book_condition ENUM('NEW','USED') DEFAULT 'NEW',
    description VARCHAR(255),
    category VARCHAR(255),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, role) VALUES ('Alice Johnson', 'MANAGER'), 
                                      ('Bob Smith', 'USER'),     
                                      ('Charlie Brown', 'USER');     


INSERT INTO comic_book_details (book_name, author_name, year_of_publication, price, discount, number_of_pages, book_condition, description, category, user_id) VALUES
('The Amazing Spider-Man', 'Stan Lee', 2020, 29.99, 5, 150, 'NEW', 'A classic superhero comic.', 'superhero', 1),
('Batman: Year One', 'Frank Miller', 2019, 19.99, 0, 100, 'NEW', 'The origin story of Batman.', 'superhero', 1),
('Watchmen', 'Alan Moore', 1986, 24.99, 10, 400, 'USED', 'A deconstruction of the superhero genre.', 'graphic novel', 1),
('Sandman', 'Neil Gaiman', 1989, 39.99, 15, 500, 'NEW', 'A tale of dreams and nightmares.', 'fantasy', 1),
('Maus', 'Art Spiegelman', 1991, 22.99, 20, 300, 'NEW', 'A Pulitzer Prize-winning graphic novel.', 'biography', 1),
('The Walking Dead', 'Robert Kirkman', 2018, 15.99, 5, 120, 'USED', 'Survivors navigate a post-apocalyptic world.', 'horror', 1),
('Dune: House Atreides', 'Brian Herbert', 2020, 19.99, 10, 250, 'NEW', 'A prequel to the Dune saga.', 'sci-fi', 1),
('Adventure Time', 'Pendleton Ward', 2019, 18.99, 0, 150, 'NEW', 'Based on the popular animated series.', 'adventure', 1),
('The Secret of the Unknown', 'John Doe', 2021, 14.99, 5, 180, 'NEW', 'An intriguing mystery comic.', 'mystery', 1),
('Saga', 'Brian K. Vaughan', 2012, 22.99, 15, 300, 'NEW', 'An epic space opera.', 'sci-fi', 1);
