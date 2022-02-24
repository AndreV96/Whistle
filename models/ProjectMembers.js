const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectMembers extends Model {}

ProjectMembers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'projects',
        key: 'id',
        unique: false,
      }
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
        unique: false,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project_members'
  }
);

module.exports = ProjectMembers;