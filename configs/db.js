const sequelize = require("sequelize");
const config = require("./config.json");

const db = new sequelize(
  config.db.name,
  config.db.username,
  config.db.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  db.authenticate();
  console.log(`Connected to DB ${config.db.name}`);
} catch (error) {
  console.log(`Can't connect to db ${config.db.name}`, error);
}

module.exports = db;