const Employee = require('./Employee');
const Manager = require('./Manager');
const Projects = require('./Projects');
const Tasks = require('./Tasks');
const ProjectMembers = require('./ProjectMembers');

Employee.hasOne(Manager, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE',
});

Manager.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

Manager.hasMany(Projects, {
  foreignKey: 'manager_id',
  onDelete: 'CASCADE',
});

Projects.belongsTo(Manager, {
  foreignKey: 'manager_id',
});

Employee.hasMany(Tasks, {
  foreignKey: 'employee_id',
});

Tasks.belongsTo(Employee, {
  foreignKey: employee_id,
});

Projects.hasMany(Tasks, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE',
});

Tasks.belongsTo(Projects, {
  foreignKey: 'project_id',
});

Employee.belongsToMany(Projects, {
  through: {
    model: ProjectMembers,
    unique: false
  },
  as: 'project_members'
});

Projects.belongsToMany(Employee, {
  through: {
    model: ProjectMembers,
    unique: false
  },
  as: 'current_projects'
});

module.exports = {Employee, Manager, Projects, Tasks, ProjectMembers};