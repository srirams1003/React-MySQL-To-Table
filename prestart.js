const mysql = require('mysql2/promise');
const { exec } = require('child_process');
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
            .then(() => {
                const dumpFile = './dump.sql';

                // Build the CLI command with host/port specified
                const importCommand = `mysql -h${mysqlConnectionObject.host} -P${mysqlConnectionObject.port} -u${mysqlConnectionObject.user} -p${mysqlConnectionObject.password} ${process.env.SQL_DB_NAME} < ${dumpFile}`;

                exec(importCommand, (err, stdout, stderr) => {
                    if (err) {
                        console.error(`exec error: ${err}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                    }
                    console.log(`The import has finished.`);
                });

                connection.end();
            });
    })
    .catch((err) => {
        console.error(`MySQL connection failed: ${err.message}`);
    });
