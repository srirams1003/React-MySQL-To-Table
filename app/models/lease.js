const bookshelf = require('../config/database').bookshelf;

const Lease = bookshelf.model('Lease', {
  tableName: 'leaseDetails',
  lessorDetails() {
    return this.hasOne("Lessor")
  }
}, {dependents: ['lessorDetails']});

module.exports = Lease;