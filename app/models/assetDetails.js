const bookshelf = require('../config/database').bookshelf;

const AssetDetails = bookshelf.model('AssetDetails', {
  tableName: 'assetDetails',
});

module.exports = AssetDetails;