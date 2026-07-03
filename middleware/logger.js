function logger(req, res, next) {

    console.log("-----------");

    console.log("URL :", req.originalUrl);

    console.log("Method :", req.method);

    console.log("Time :", new Date().toLocaleString());

    console.log("IP :", req.ip);

    console.log("-----------");

    next();
}

module.exports = logger;