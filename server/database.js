const Loki = require('lokijs');
const path = require('path');

const dbFile = path.resolve(__dirname, './database.json');

const db = new Loki(dbFile, {
  autosave: true,
  autoload: true,
  adapter: new Loki.LokiFsAdapter(),
  autoloadCallback: () => {
    const users = db.getCollection('users');

    if (users === null) {
      db.addCollection('users', {
        unique: ['username', 'email'],
      });
    }
  },
});

const getUsers = () => db.getCollection('users');

module.exports = {
  getUsers,
};
