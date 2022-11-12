

const path = require("path");
const fs = require("fs");
const databasePath = path.resolve(__dirname, "..", "data", "database.json");
    

module.exports = fs.readFileSync(databasePath, {encoding: "utf8", flag: "r"} );