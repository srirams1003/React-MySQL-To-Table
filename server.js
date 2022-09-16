const express = require("express");

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

require("./app/routes/asset.routes")(app);

app.get("/api_test", (request, response) => { // TEST API CALL TO SEE IF SERVER IS UP
    console.log("Server received a request at ", request.url);
    response.send({"message": "message received"});
});

app.post("/api_test_post", (request, response) => { // TEST API CALL TO SEE IF SERVER IS UP
    console.log("Server received a request at ", request.url);
    response.send({"message": `Body item was: ${request.body.item}`});
});

app.get("/", (request, response) => {
    // console.log("Server is now sending the landing page as the response.");
    response.sendFile(__dirname + "/public/landingpage.html");
});

const listener = app.listen(3000, () => {
    console.log("The static server is listening on port " + listener.address().port);
});