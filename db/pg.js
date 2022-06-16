require('dotenv').config();
const Sequelize = require('sequelize')
//below URI is for test only
const postgresUrl = process.env.POSTGRES_URL;
const sequelize = new Sequelize(postgresUrl)

sequelize.authenticate().then(() => {

    console.log('Connection has been established successfully.');

}).catch(err => {

    console.error('Unable to connect to the database:', err);

});

module.exports = sequelize;