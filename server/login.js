const { users } = require('./database');
const jwt = require('jsonwebtoken');
const sha256 = require('js-sha256').sha256;

const apiSecret = 'SuperSecret';

const signUp = (req, res) => {
  try {
    const user = {
      ...req.body,
      password: sha256(req.body.password),
    };

    const { password, ...newUser } = users.insert(user);

    res.set('Set-Cookie', `Authorization=Bearer ${jwt.sign(newUser.$loki, apiSecret)}`); 
    res.send(newUser);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.send({ error: e.message });
  }
};

const logIn = (req, res) => {
  const {
    password,
    ...user
  } = users.findOne({ username: req.body.username }) || {};

  if (user && password  && password === sha256(req.body.password)) {
    res.set('Set-Cookie', `Authorization=Bearer ${jwt.sign(user.$loki, apiSecret)}`);

    res.send(user);
  } else {
    res.sendStatus(403);
  }
};

const logOut = (_, res) => {
  res.set('Set-Cookie', `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  res.sendStatus(200);
};

const requireLogin = (req, res, next) => {
  const authCookie = req.cookies['Authorization'];

  if (!authCookie) {
    req.sendStatus(401);
  }

  const jwtToken = authCookie.split('Bearer ').join('');

  try {
    jwt.verify(jwtToken, apiSecret);
  } catch (e) {
    res.sendStatus(403);
  }

  next();
}

module.exports = {
  signUp,
  logIn,
  logOut,
  requireLogin,
};
