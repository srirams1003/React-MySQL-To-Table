const bookshelf = require('../config/database').bookshelf;

const Type = bookshelf.model('Type', {
  tableName: 'types',
  subTypes() {
    return this.hasMany("SubType")
  },
}, {dependents: ['subTypes']});

module.exports = Type;