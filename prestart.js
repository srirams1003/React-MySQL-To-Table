const mysql = require('mysql2/promise');
const {exec} = require('child_process');

require('dotenv').config();

const mysqlConnectionObject = {
    host: process.env.SQL_HOSTNAME,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD
};

mysql.createConnection(mysqlConnectionObject)
    .then((connection) => {
        connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.SQL_DB_NAME}\`;`)
            .then((result) => {
                // Import the database.
                let dumpFile = './dump.sql';
                exec(`mysql -u${mysqlConnectionObject.user} -p${mysqlConnectionObject.password} ${process.env.SQL_DB_NAME} < ${dumpFile}`, (err, stdout, stderr) => {
                    if (err) {console.error(`exec error: ${err}`); return;}

                    console.log(`The import has finished.`);
                });

                connection.end();
            });
    });

