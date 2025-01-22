// models/House.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    static associate(models) {
      // Định nghĩa quan hệ với Comment thông qua CommentHouse
      House.hasMany(models.Comment, {
        // through: 'CommentHouse',
        foreignKey: 'house_id',
        as: 'comments',
      });
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
      owner_id: DataTypes.INTEGER,
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
