
const Sequelize = require('sequelize')
//Connect DB
const sequelize = require('../db/pg')


/*
//below URI is for test only
const sequelize = new Sequelize('postgres://postgres:oracle@192.168.100.229:5432/zhomes')

sequelize.authenticate().then(() => {

    console.log('Connection has been established successfully.');

}).catch(err => {

    console.error('Unable to connect to the database:', err);

}); */
//ﬁrst argument (‘user’) as the table name that is to be created in the database


const User = sequelize.define('user', {

    // attributes

    firstName: {

        type: Sequelize.STRING,

        allowNull: false

    },

    lastName: {

        type: Sequelize.STRING

        // allowNull defaults to true

    }

}, {

    // options

});

// Note: using `force: true` will drop the table if it already exists

User.sync({ force: false }) // Now the `users` table in the database corresponds to the model definition

module.exports = User;