const Employee = require('./Employee');
const Projects = require('./Projects');
const Tasks = require('./Tasks');
const ProjectMembers = require('./ProjectMembers');

Employee.hasMany(Tasks, {
  foreignKey: 'employee_id',
});

Tasks.belongsTo(Employee, {
  foreignKey: "employee_id",
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
  as: 'project_member'
});

Projects.belongsToMany(Employee, {
  through: {
    model: ProjectMembers,
    unique: false
  },
  as: 'current_projects'
});

module.exports = {Employee, Projects, Tasks, ProjectMembers};