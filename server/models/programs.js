'use strict';
module.exports = (sequelize, DataTypes) => {
  const Programs = sequelize.define('Programs', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Programs.associate = function(models) {
    // associations can be defined here
  };
  return Programs;
};