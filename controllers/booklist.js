'use strict';

const logger = require('../utils/logger');
const booklistStore = require('../models/booklist-store');
const uuid = require('uuid');

const booklist = {
  index(request, response) {
    const booklistId = request.params.id;
    logger.debug('Booklist id = ', booklistId);
    const viewData = {
      title: 'Booklist',
      booklist: booklistStore.getBooklist(booklistId),
    };
    response.render('booklist', viewData);
  },
  
  deleteBookmark(request, response) {
    const booklistId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug(`Deleting Bookmark ${bookmarkId} from Booklist ${booklistId}`);
    booklistStore.removeBookmark(booklistId, bookmarkId);
    response.redirect('/booklist/' + booklistId);
  },
  
  addBookmark(request, response) {
    const booklistId = request.params.id;
    const booklist = booklistStore.getBooklist(booklistId);
    const newBookmark = {
      id: uuid(),
      link: request.body.link,
      website: request.body.website,
    };
    booklistStore.addBookmark(booklistId, newBookmark);
    response.redirect('/booklist/' + booklistId);
  },
};

module.exports = booklist; 
