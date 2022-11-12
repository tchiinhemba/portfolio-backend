


const express = require("express");

const server = express();

const PORT = 3000;


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

