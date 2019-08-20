const htmlRoutes = require('express').Router();

htmlRoutes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
htmlRoutes.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

module.exports = htmlRoutes