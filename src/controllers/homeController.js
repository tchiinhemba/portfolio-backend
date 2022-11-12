

const dataset = require("../modules/databaseModule")

exports.home = (req, res) => {
    res.send(dataset)
}