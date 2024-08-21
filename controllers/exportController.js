const User = require("../models/User")
const excel = require("../utils/excel")

const get = async (req, res) => {
    let users = await User.findAll()
    users = users.map(u => {return [u.name, u.codeMelli, u.number]})

    console.log(users)
    excel(users, "qore")

    res.redirect("/")
}

module.exports = {
    get
}