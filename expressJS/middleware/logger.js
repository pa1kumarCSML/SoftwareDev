//Middleware
const Moment = require("moment");
//init middleware
const moment = new Moment();

const logger = (req, res, next) => {
    // console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`); //full url
    //console.log(`${req.originalUrl}`); // actual api route or request
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}:${moment.format()}`); //full url

    next();
};

module.exports = logger;