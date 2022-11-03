'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const about = require('./controllers/about.js');
const accounts = require ('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/about', about.index);

module.exports = router;


