const Sequelize = require('sequelize');
const database = require('../config/database');

const Incident = database.define('incident', {
    source: {
        type:Sequelize.STRING
    },
    technicianName: {
        type:Sequelize.STRING
    },
    requestorName: {
        type:Sequelize.STRING
    },
    callbackMethod: {
        type:Sequelize.STRING
    },
    symptomsDescription: {
        type:Sequelize.STRING
    },
    location: {
        type:Sequelize.STRING
    },
    department: {
        type:Sequelize.STRING
    },
    affectedUser: {
        type:Sequelize.STRING
    },
    affectedService: {
        type:Sequelize.STRING
    },
    incidentPriority: {
        type:Sequelize.STRING
    },
    incidentSummary:{
        type:Sequelize.STRING
    },
    incidentType: {
        type:Sequelize.STRING
    },
    incidentSubtype: {
        type:Sequelize.STRING
    },
    incidentCategory: {
        type:Sequelize.STRING
    },
    incidentStatus: {
        type:Sequelize.STRING
    },
    incidentActivity: {
        type:Sequelize.STRING
    },
    incidentResolution: {
        type:Sequelize.STRING
    },
    incidentResolutionCategory: {
        type:Sequelize.STRING
    },
    customerFeedback: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Incident;