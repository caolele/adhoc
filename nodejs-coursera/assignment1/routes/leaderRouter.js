const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

//http://localhost:3000/leaders
leaderRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send all the leaders to you.");
})
.post((req, res, next) => {
    res.end("Will create a leader for you: " + req.body.name 
            + ", with details: " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT not supported on /leaders");
})
.delete((req, res, next) => {
    res.end("Deleting all the leaders!!!");
});

//http://localhost:3000/leaders/:leaderId
leaderRouter.route("/:leaderId")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Will send to you the leader: " + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) => {
    res.write("Will update leader: " + req.params.leaderId + "\n");
    res.end("leader name: " + req.body.name + ", details: " + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting leader: " + req.params.leaderId);
});

module.exports = leaderRouter;