let {Router} = require("express")
Router = new Router()

const homePageController = require("../controllers/homePageController")
Router.get("/", homePageController.get)

const newController = require("../controllers/newController")
Router.get("/new", newController.get)
Router.post("/new", newController.post)

const deleteController = require("../controllers/deleteController")
Router.get("/delete", deleteController.get)

const exportController = require("../controllers/exportController")
Router.get("/export", exportController.get)

const searchController = require("../controllers/searchController")
Router.get("/search", searchController.get)
Router.post("/search", searchController.post)

module.exports = Router