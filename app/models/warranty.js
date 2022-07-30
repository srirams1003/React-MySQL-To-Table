const bookshelf = require('../config/database').bookshelf;

const Warranty = bookshelf.model('Warranty', {
  tableName: 'warrantyDetails'
});

module.exports = Warranty;