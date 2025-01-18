"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Mỗi comment thuộc về một room
      Comment.belongsTo(models.Room, { foreignKey: 'room_id', as: 'comments' });

    }
  }
  Comment.init(
    {
      rater_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
