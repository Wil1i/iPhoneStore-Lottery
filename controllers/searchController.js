const User = require("../models/User")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("search", {users, flash : req.flash()})
}

const post = async (req, res) => {
    const findUser = await User.findByPk(req.body.id)
    
}

module.exports = {
    get,
    post
}