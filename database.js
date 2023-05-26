const Sequelize = require("sequelize");

const sequelize = new Sequelize("productadd", "root", "Srivaishu@23", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;