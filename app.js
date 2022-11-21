const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const userRouter = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter)

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