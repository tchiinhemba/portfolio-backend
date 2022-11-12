
require("dotenv").config();

const express = require("express");

const server = express();

const PORT = process.env.PORT;


server
.get("/", (req, res) => {
    res.send([
        {
            message: "Hello World!"
        }
    ])
})

.listen(PORT, () => {
    console.log(`Server is Running at: localhost:${PORT}`)
})

