const User = require("../models/User")
const convert = require("../utils/convert")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("search", {users,user: null, flash : req.flash(), convert})
}

const post = async (req, res) => {
    let user = await User.findByPk(req.body.code)
    const users = await User.findAll()
    if(!user) {
        req.flash("danger", "این کد ثبت نشده!")
        user = null
    }

    res.render("search", {users, user, flash: req.flash(), convert})
}

module.exports = {
    get,
    post
}