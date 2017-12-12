'use strict';
const userstore = require('../models/user-store');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('booklist', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const user = request.body;
    user.id = uuid();
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },
  
  authenticate(request, response) {
    const user = userstore.getUserByPassword(request.body.password);

    if (user) {
      if(user.password == request.body.password){
        logger.info('Passwords match!');
      }
      response.cookie('booklist', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/bookmarks');
    } 
  
    else {
      response.redirect('/login');
    }
  },

  getCurrentUser (request) {
    const userEmail = request.cookies.booklist;
    return userstore.getUserByEmail(userEmail);
  }
}

module.exports = accounts;
