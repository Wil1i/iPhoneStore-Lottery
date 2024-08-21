const User = require("../models/User")

const get = async (req, res) => {
    const isUserValid = await User.findByPk(req.query.id)

    if(isUserValid) {
        await isUserValid.destroy()
        req.flash("success", "با موفقیت حذف شد.")
        return res.redirect("/")
    }else{
        req.flash("danger", "پیدا نشد")
    }
    
}

module.exports = {get}