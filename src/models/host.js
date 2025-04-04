"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Host.hasMany(models.House, {
        foreignKey: "owner_id", // Cột trong bảng House
        as: "houses", // Alias để truy vấn
        onDelete: "CASCADE", // Xóa Host thì House cũng bị xóa
      });
    }
  }
  Host.init(
    {
      host_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      createAt: {
        type: DataTypes.DATE,
        field: "createdAt", // Cột thực tế trong DB
      },
    },
    {
      sequelize,
      modelName: "Host",
    }
  );
  return Host;
};
