'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};