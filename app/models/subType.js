const bookshelf = require('../config/database').bookshelf;

const SubType = bookshelf.model('SubType', {
  tableName: 'subTypes'
});

module.exports = SubType;