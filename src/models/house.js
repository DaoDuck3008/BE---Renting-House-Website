"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Mỗi house có thể có nhiều rooms
      // Trong models/house.js
      House.belongsToMany(models.Room, { through: models.HouseRoom, foreignKey: 'house_id', as: 'rooms' });

      // // Mỗi house có thể có nhiều comments thông qua rooms
      // House.hasMany(models.Comment, { through: models.Room, foreignKey: 'house_id' });
      // Mối quan hệ nhiều - nhiều với Host thông qua HostHouse
      House.belongsToMany(models.Host, { through: models.HostHouse, foreignKey: 'house_id' });
    }
  }
  House.init(
    {
      house_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      house_name: DataTypes.STRING,
      address: DataTypes.STRING,
      number_of_room: DataTypes.INTEGER,
      average_rate: DataTypes.FLOAT,
      image: DataTypes.TEXT,
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "House",
      tableName: "House",
      
    }
  );
  return House;
};
