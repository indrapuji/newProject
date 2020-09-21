"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Content.init(
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Category Harus Diisi",
          },
        },
      },
      title: DataTypes.STRING,
      image_url: DataTypes.STRING,
      text: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
