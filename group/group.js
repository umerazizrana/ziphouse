
const Sequelize = require('sequelize')
//Connect DB
const sequelize = require('../db/pg')


const Group = sequelize.define('group', {

    // attributes

    groupName: {

        type: Sequelize.STRING,

        allowNull: false

    },

    groupDescription: {

        type: Sequelize.STRING

        // allowNull defaults to true

    }

}, {

    // options

});

// Note: using `force: true` will drop the table if it already exists

Group.sync({ force: false }) // Now the `users` table in the database corresponds to the model definition

module.exports = Group;