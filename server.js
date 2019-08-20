const express = require("express")
const path = require("path")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = 8080

app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`)
})
