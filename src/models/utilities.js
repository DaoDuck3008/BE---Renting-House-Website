"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Utilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Utilities.belongsTo(models.House, {
        foreignKey: "house_id",
        as: "house",
      });
    }
  }
  Utilities.init(
    {
      house_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberOfBedroom: {
        type: DataTypes.INTEGER,
      },
      numberOfFloor: {
        type: DataTypes.INTEGER,
      },
      numberOfBathroom: {
        type: DataTypes.INTEGER,
      },
      security: {
        type: DataTypes.BOOLEAN,
      },
      pccc: {
        type: DataTypes.BOOLEAN,
      },
      parking: {
        type: DataTypes.BOOLEAN,
      },
      camera: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Utilities",
      timestamps: false,
    }
  );
  return Utilities;
};
