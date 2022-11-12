
require("dotenv").config();

const express = require("express");
const router = require("./routes/router");

const server = express();

const PORT = process.env.PORT;


server
    .use(router)
    .listen(PORT, () => {
        console.log(`Server is Running at: localhost:${PORT}`)
    })

