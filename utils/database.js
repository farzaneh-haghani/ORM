const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize-customer", "admin", "", {
  host: "localhost",
  dialect: "postgres"
});

module.exports = sequelize;