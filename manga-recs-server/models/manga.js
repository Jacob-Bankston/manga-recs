'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define('Manga', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    chapters: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING,
    years: DataTypes.STRING,
    imgurl: DataTypes.STRING
  }, {});
  Manga.associate = function(models) {
    // associations can be defined here
  };
  return Manga;
};