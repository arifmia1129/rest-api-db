const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
})

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something broke"
    })
})

module.exports = app;