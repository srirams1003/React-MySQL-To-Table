module.exports = (app) => {

    const assets = require("../controllers/asset.controller.js");

    let router = require("express").Router();

    router.get("/allEmployees", assets.allEmployees);

    app.use('/api/', router); // this line sets that "http://localhost:3000/api/" is the new BASE_URL in this file

};