const Sequelize = require("sequelize");

const sequelize = new Sequelize("productadd", "root", "12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// Srivaishu@23