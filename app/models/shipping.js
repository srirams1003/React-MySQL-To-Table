const bookshelf = require('../config/database').bookshelf;

const Shipping = bookshelf.model('Shipping', {
  tableName: 'shipping'
});

module.exports = Shipping;