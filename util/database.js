const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Nixon12345', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;