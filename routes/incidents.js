const express = require('express');
const router = express.Router();
const appServices = require('../applicationServices/incidentApplicationServices');
const db = require('../config/database');
const bodyParser = require('body-parser');
const Incident = require('../models/incident');


router.post('/add',appServices.addIncident);
router.get('/',appServices.getIncidents);
router.get('/byId/:id?',appServices.getIncidentById);
router.get('/byName/:name?',appServices.getIncidentByName);
//router.put('/update/:id?',appServices.updatePokemon);
router.delete('/delete/:id?',appServices.deleteIncident);


module.exports = router;