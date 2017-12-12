'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const booklistStore = {

  store: new JsonStore('./models/booklist-store.json', { booklistCollection: [] }),
  collection: 'booklistCollection',

  getAllBooklists() {
    return this.store.findAll(this.collection);
  },

  getUserBooklists(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  getBooklist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addBooklist(booklist) {
    this.store.add(this.collection, booklist);
  },
  
  removeBooklist(id) {
    const booklist = this.getBooklist(id);
    this.store.remove(this.collection, booklist);
  },

  removeAllBooklists() {
    this.store.removeAll(this.collection);
  },

  addBookmark(id, bookmark) {
    const booklist = this.getBooklist(id);
    booklist.bookmarks.push(bookmark);
  },

  removeBookmark(id, bookmarkId) {
    const booklist = this.getBooklist(id);
    const bookmarks = booklist.bookmarks;
    _.remove(bookmarks, { id: bookmarkId});
  },
    
    countBooklists(){
      
    const booklists = this.getAllBooklists();
    let count      = 0;
    
    for (let i = 0; i < booklists.length; i++){      
      count += booklists[i].bookmarks.length; 
    }
    
    return count;
  }
};

module.exports = booklistStore;
