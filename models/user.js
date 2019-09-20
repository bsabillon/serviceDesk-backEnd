const Sequelize = require('sequelize');
const database = require('../config/database');

const User = database.define('user', {
    userName: {
        type:Sequelize.STRING
    },
    userRole: {
        type:Sequelize.STRING
    },
    userEmail: {
        type:Sequelize.STRING
    },
    userPhone: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = User;