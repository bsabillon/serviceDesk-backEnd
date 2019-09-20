const express = require('express');
const router = express.Router();
const appServices = require('../applicationServices/userApplicationServices');
const db = require('../config/database');
const bodyParser = require('body-parser');
const User = require('../models/user');


router.post('/add',appServices.addUser);
router.get('/',appServices.getUsers);
router.get('/byId/:id?',appServices.getUserById);
router.get('/byName/:name?',appServices.getUserByName);
//router.put('/update/:id?',appServices.updateUser);
router.delete('/delete/:id?',appServices.deleteUser);


module.exports = router;