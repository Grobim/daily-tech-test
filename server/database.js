const Loki = require('lokijs');
const path = require('path');

const dbFile = path.resolve(__dirname, './database.json');

const getUsers = () => db.getCollection('users');
const getProducts = () => db.getCollection('products');

const db = new Loki(dbFile, {
  autosave: true,
  autoload: true,
  adapter: new Loki.LokiFsAdapter(),
  autoloadCallback: () => {
    const users = getUsers();
    const products = getProducts();

    if (users === null) {
      db.addCollection('users', {
        unique: ['username', 'email'],
      });
    }

    if (products === null) {
      db.addCollection('products', {
        unique: ['name'],
      });
    }
  },
});

module.exports = {
  getUsers,
  getProducts,
};
