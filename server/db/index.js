const fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize"),
  sequelize = new Sequelize(null, null, null, {
    dialect: "sqlite",
    storage: "./test_db.sqlite"
  }),
  db = {};

fs.readdirSync(__dirname + "/models")
  .filter(file => {
    return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
  })
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
