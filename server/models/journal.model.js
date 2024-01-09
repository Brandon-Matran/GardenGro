// models/journal.model.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Journal = sequelize.define('Journal', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Journal;
};
