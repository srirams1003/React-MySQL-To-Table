const bookshelf = require('../config/database').bookshelf;

const License = bookshelf.model('License', {
  tableName: 'licenses'
});

module.exports = License;