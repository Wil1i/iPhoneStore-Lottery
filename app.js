const express = require("express");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session")
const fileUpload = require("express-fileupload");

const config = require("./configs/config.json");

const app = express();

app.use(flash());
app.use(fileUpload());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(session({secret : "ali"}))
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

app.listen(config.port, () => {
  console.log(`Server is listening on ${config.port}`);
});