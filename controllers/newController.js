const User = require("../models/User")
const convert = require("../utils/convert")

const get = async (req,res) => {
    const users = await User.findAll()

    let id = users[users.length - 1]?.id || "-"
    if(id != "-") id++;

    res.render("new", {
        users,
        convert,
        id,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    const check = await User.findOne({where : {codeMelli : req.body.codeMelli}})
    if(check){
        req.flash("danger", `کد ملی تکراری. کد قبلی: ${check.id}`)
        return res.redirect("/new")
    }

    const check2 = await User.findOne({where : {number : req.body.number}})
    if(check2){
        req.flash("danger", `شماره تماس تکراری. کد قبلی: ${check2.id}`)
        return res.redirect("/new")
    }

    const check3 = await User.findOne({where : {name : req.body.name}})
    if(check3){
        req.flash("danger", `اسم پیج تکراری. کد قبلی: ${check3.id}`)
        return res.redirect("/new")
    }

    await User.create({
        name : req.body.name,
        codeMelli : req.body.codeMelli,
        number : req.body.number
    }).then(r => {
        req.flash("success", `با کد ${r.id} ثبت شد.`)
        res.redirect("/new")
    })

}

module.exports = {
    get,
    post
}