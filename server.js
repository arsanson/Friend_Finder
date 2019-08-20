const express = require("express")
const path = require("path")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = 8080

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`)
})
