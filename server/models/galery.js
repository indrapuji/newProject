'use strict';
module.exports = (sequelize, DataTypes) => {
  const Galery = sequelize.define('Galery', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Galery.associate = function(models) {
    // associations can be defined here
  };
  return Galery;
};