// models/Comment.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // Định nghĩa quan hệ với House thông qua CommentHouse
      Comment.belongsToMany(models.House, {
        through: 'CommentHouse',
        foreignKey: 'comment_id',
        as: 'houses',
      });
    }
  }
  Comment.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rater_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      house_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "House",
          key: "house_id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: false,
    }
  );
  return Comment;
};
