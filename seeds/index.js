const sequelize = require('../config/connection');
const {Employee, Manager, Projects, Tasks, ProjectMembers} = require("../models");

const employeeSeedData = require("./employeeSeedData.json");
const managerSeedData = require("./managerSeedData.json");
const projectsSeedData = require("./projectsSeedData.json");
const tasksSeedData = require("./tasksSeedData.json");
const projectMembersSeedData = require("./projectMembersSeedData.json");

const seedAll = async () => {
  await sequelize.sync({force: true});
  console.log('\n----- DATABASE SYNCED -----\n');

  await Employee.bulkCreate(employeeSeedData);
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await Manager.bulkCreate(managerSeedData);
  console.log('\n----- MANAGERS SEEDED -----\n');

  await Projects.bulkCreate(projectsSeedData);
  console.log('\n----- PROJECTS SEEDED -----\n');

  await Tasks.bulkCreate(tasksSeedData);
  console.log('\n----- TASKS SEEDED -----\n');

  await ProjectMembers.bulkCreate(projectMembersSeedData);
  console.log('\n----- PROJECT MEMBERS SEEDED -----\n');
  process.exit(0);
};

seedAll();