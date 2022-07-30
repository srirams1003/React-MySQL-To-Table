const bookshelf = require('../config/database').bookshelf;

const History = bookshelf.model('History', {
  tableName: 'histories'
});

module.exports = History;