"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Mỗi room thuộc về một house
      Room.belongsTo(models.House, { foreignKey: 'house_id' });
      // Mỗi room có thể có nhiều comments
      Room.hasMany(models.Comment, { foreignKey: 'room_id' });
    }
  }
  Room.init(
    {
      area: DataTypes.INTEGER,
      cost: DataTypes.INTEGER,
      average_rate: DataTypes.FLOAT,
      utilities: DataTypes.JSON,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
