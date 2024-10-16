'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('comic_book_details',[
        {
          book_name: 'Spider-Man: Homecoming',
          author_name: 'Dan Slott',
          year_of_publication: 2017,
          price: 19.99,
          discount: 10,
          number_of_pages: 120,
          book_condition: 'NEW',
          description: 'A young Spider-Man faces new challenges.',
          category: 'superhero',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_name: 'Batman: The Killing Joke',
          author_name: 'Alan Moore',
          year_of_publication: 1988,
          price: 15.99,
          discount: 5,
          number_of_pages: 64,
          book_condition: 'USED',
          description: 'A dark tale exploring the Joker\'s origin.',
          category: 'superhero',
          user_id: 1, 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_name: 'Watchmen',
          author_name: 'Alan Moore',
          year_of_publication: 1986,
          price: 25.00,
          discount: 0,
          number_of_pages: 416,
          book_condition: 'NEW',
          description: 'A complex tale of superheroes and moral dilemmas.',
          category: 'sci-fi',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_name: 'Maus', 
          author_name: 'Art Spiegelman',
          year_of_publication: 1991,
          price: 22.99,
          discount: 20,
          number_of_pages: 300,
          book_condition: 'NEW',
          description: 'A Pulitzer Prize-winning graphic novel.',
          category: 'biography',
          user_id: 1, 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_name: 'The Walking Dead',
          author_name: 'Robert Kirkman',
          year_of_publication: 1988,
          price: 15.99,
          discount: 5,
          number_of_pages: 64,
          book_condition: 'USED',
          description: 'Survivors navigate a post-apocalyptic world.',
          category: 'horror',
          user_id: 1, 
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comic_book_details', null, {});
  }
};
