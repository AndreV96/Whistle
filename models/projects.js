const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Projects extends Model {}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    manager_id: {
      type: DataTypes.STRING,
      references: {
        model: 'manager',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'projects',
  }
);

module.exports = Projects;