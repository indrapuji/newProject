'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};