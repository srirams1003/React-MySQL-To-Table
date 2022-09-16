const knex = require('../config/database').knex;


exports.allEmployees = (req, res) => {
    // knex.raw("SELECT * FROM types WHERE id=?", [2])
    knex.raw("SELECT * FROM testcompany")
        .then((result) => {
            res.send(result[0]);
            console.log("Result is : ", result[0]);
        })
        .catch((err) => {
            res.send(err);
            console.log(err);
        });
};


