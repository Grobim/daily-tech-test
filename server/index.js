const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;

const { signUp, logIn, logOut, requireLogin } = require('./login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/sign-up', signUp);
app.post('/login', logIn);
app.post('/logout', requireLogin, logOut);

app.use('/products', require('./products'));
app.use('/users', require('./users'));

app.listen(port, () => console.log(`Listening on port ${port}`));
