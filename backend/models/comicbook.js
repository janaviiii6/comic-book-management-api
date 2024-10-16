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
    },
    author_name:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_of_publication: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    number_of_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_condition:  {
      type: DataTypes.ENUM,
      values: ['NEW','USED'],
      defaultValue: 'NEW'
    },
    description:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category:  {
      type: DataTypes.STRING,
      allowNull: false,
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