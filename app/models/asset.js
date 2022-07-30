const bookshelf = require('../config/database').bookshelf;

const Asset = bookshelf.model('Asset', {
  tableName: 'assets',
  histories() {
    return this.hasMany("History")
  },
  leaseDetails() {
    return this.hasOne("Lease")
  },
  valueDetails() {
    return this.hasOne("Value")
  },
  warrantyDetails() {
    return this.hasOne("Warranty")
  },
  assetDetails() {
    return this.hasOne("AssetDetails")
  },
  licenses() {
    return this.hasMany("License")
  },
  shipping() {
    return this.hasOne("Shipping")
  },
  comments() {
    return this.hasMany("Comment")
  }
}, {dependents: ['histories', 'leaseDetails', 'valueDetails', 'warrantyDetails', 'assetDetails', 'licenses', 'shipping', 'comments']});

module.exports = Asset;