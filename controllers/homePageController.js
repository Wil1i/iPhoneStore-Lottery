const User = require("../models/User")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("homePage", {
        users,
        flash : req.flash()
    })
}

module.exports = {
    get
}