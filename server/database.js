const Loki = require('lokijs');

const db = new Loki('database.json', {
  adapter: new Loki.LokiFsAdapter(),
});

const users = db.addCollection('users', {
  unique: ['username', 'email'],
});

module.exports = {
  users,
};
