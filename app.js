const express = require("express");

const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user.route");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", userRoute);

module.exports = app;
