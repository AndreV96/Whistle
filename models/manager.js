const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Manager extends Model {}

Manager.init (
  {
    id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'manager',

  }
);

module.exports = Manager;