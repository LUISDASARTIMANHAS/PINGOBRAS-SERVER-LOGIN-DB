'use strict';

const logger = require('../utils/logger');
const booklists = require('../models/booklist-store.js');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to BookIt',
      Count: booklists.countBooklists(),
    };
    response.render('start', viewData);
  },
};

module.exports = start;
