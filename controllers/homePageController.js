const User = require("../models/User")
const convert = require("../utils/convert")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("homePage", {
        users,
        flash : req.flash(),
        convert
    })
}

module.exports = {
    get
}