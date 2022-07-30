const bookshelf = require('../config/database').bookshelf;

const Category = bookshelf.model('Category', {
  tableName: 'categories',
  types() {
    return this.hasMany("Type")
  }
}, {dependents: ['types']});

module.exports = Category;