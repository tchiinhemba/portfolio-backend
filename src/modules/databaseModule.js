

const path = require("path");
const fs = require("fs");
const databasePath = path.resolve(__dirname, "..", "data", "database.json");

const born = 2000;

const databaseResult = fs
    .readFileSync(databasePath, { encoding: "utf8", flag: "r" })
    .replace("#", () => new Date().getFullYear() - born);

    console.log(databaseResult)

module.exports = JSON.parse(databaseResult);