require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
    origin: 'http://localhost:3000',
}),
);

app.use(cookieParser());

require('./config/mongoose.config');
require('./routes/legacy.route')(app);

app.listen(process.env.MY_PORT, () => {
    console.log(`Listening on Port ${process.env.MY_PORT}`)
});

const jwt = require("jsonwebtoken");
console.log("token", jwt.sign({_id: "tokens"}, "here"));