'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class claim_pendidikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  claim_pendidikan.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    data1: DataTypes.STRING,
    data2: DataTypes.STRING,
    data3: DataTypes.STRING,
    data4: DataTypes.STRING,
    data5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'claim_pendidikan',
  });
  return claim_pendidikan;
};