const bookshelf = require('../config/database').bookshelf;

const Value = bookshelf.model('Value', {
  tableName: 'valueDetails'
});

module.exports = Value;