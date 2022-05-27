const Sequelize = require('sequelize');

const connecton = new Sequelize('mentesaudavel', 'root', '98428369', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connecton;