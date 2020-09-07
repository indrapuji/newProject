'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesan_claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pesan_claim.hasOne(models.claim_kematian, { foreignKey: 'pesan_claim_id' });
      pesan_claim.hasOne(models.claim_kesehatan, { foreignKey: 'pesan_claim_id' });
      pesan_claim.hasOne(models.claim_nilai_hidup, { foreignKey: 'pesan_claim_id' });
      pesan_claim.hasOne(models.claim_pendidikan, { foreignKey: 'pesan_claim_id' });
      pesan_claim.hasOne(models.claim_perumahan, { foreignKey: 'pesan_claim_id' });
    }
  };
  pesan_claim.init({
    claim_id: DataTypes.INTEGER,
    claim_category: DataTypes.STRING,
    pesan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'pesan_claim',
  });
  return pesan_claim;
};