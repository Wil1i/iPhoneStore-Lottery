const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const User = db.define("users", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.TEXT
    },

    codeMelli : {
        type : DataTypes.TEXT
    },

    number : {
        type : DataTypes.TEXT
    }
})

User.sync()

module.exports = User