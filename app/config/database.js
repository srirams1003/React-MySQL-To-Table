const dbConfig = require("./db.config.js");

let cascadeDelete = require('bookshelf-cascade-delete');

// Setting up the database connection
const knex = require('knex')({
  client: dbConfig.dialect,
  connection: {
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    port     : dbConfig.PORT,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
    charset  : 'utf8'
  }
});


const bookshelf = require('bookshelf')(knex);
bookshelf.plugin(cascadeDelete);

const db = {};
db.bookshelf = bookshelf;
db.knex = knex;

module.exports = db;

