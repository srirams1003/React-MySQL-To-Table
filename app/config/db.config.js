require('dotenv').config();

module.exports = {
    HOST: process.env.SQL_HOSTNAME,
    USER: process.env.SQL_USERNAME,
    PORT: process.env.SQL_PORT,
    PASSWORD: process.env.SQL_PASSWORD,
    DB: process.env.SQL_DB_NAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
