const bookshelf = require('../config/database').bookshelf;

const Lessor = bookshelf.model('Lessor', {
  tableName: 'lessorDetails'
});

module.exports = Lessor;