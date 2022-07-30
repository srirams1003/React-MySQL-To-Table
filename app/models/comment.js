const bookshelf = require('../config/database').bookshelf;

const Comment = bookshelf.model('Comment', {
  tableName: 'comments'
});

module.exports = Comment;