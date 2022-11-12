

const dataset = require("../modules/handleModule")

exports.home = (req, res) => {
    res.send(dataset)
}