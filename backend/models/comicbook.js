'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComicBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ComicBook.init({
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Book name is required,',
        },
        len: {
          args: [3],
          msg: 'Book name must be at least 3 characters',
        }
      },
    },
    author_name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Author name is required',
        },
        len: {
          args: [3],
          msg: 'Author name must be at least 3 characters',
        }
      },
    },
    year_of_publication: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Year of publication must be an integer.',
        },
        max: new Date().getFullYear(),
        min: 1900,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'Price must be a number',
        },
        min: {
          args: [0],
          msg: 'Price must be greater than zero',
        },
      }, 
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Discount mus be a number',
        },
        min: {
          args: [0],
          msg: 'Discount cannot be negative',
        },
        max: {
          args: [100],
          msg: 'Discount cannot exceed 100%',
        },
      },
    },
    number_of_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {
          msg: 'Number of pages must be a positive integer',
        },
        min: {
          args: [1],
          msg: 'Number of pages must be at least 1',
        },
      },
    },
    book_condition:  {
      type: DataTypes.ENUM,
      values: ['NEW','USED'],
      defaultValue: 'NEW',
      validate:{
        isIn:{
          args: [['NEW','USED']],
          msg: 'Book condition must be either "NEW" or "USED',
        },
      },
    },
    description:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: 'Category is required',
        },
        len: {
          args: [3],
          msg: 'Category name must be at least 3 characters',
        }
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
    },
  }, {
    sequelize,
    tableName: 'comic_book_details',
    modelName: 'ComicBook',
  });
  return ComicBook;
};