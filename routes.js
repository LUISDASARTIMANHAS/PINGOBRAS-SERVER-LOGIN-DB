'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const bookmarks = require('./controllers/bookmarks.js');
const booklist = require('./controllers/booklist.js');
const about = require('./controllers/about.js');
const accounts = require ('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/bookmarks', bookmarks.index);
router.get('/bookmarks/deletebooklist/:id', bookmarks.deleteBooklist);
router.post('/bookmarks/addbooklist', bookmarks.addBooklist);

router.get('/booklist/:id', booklist.index);
router.get('/booklist/:id/deletebookmark/:bookmarkid', booklist.deleteBookmark);
router.post('/booklist/:id/addbookmark', booklist.addBookmark);

router.get('/about', about.index);

module.exports = router;


