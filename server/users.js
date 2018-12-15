const router = new require('express').Router();

const { getUsers } = require('./database');
const { requireLogin } = require('./login');

router.use(requireLogin);

router.get('/:userId', (req, res) => {
  const { password, ...requestedUser } = getUsers().get(parseInt(req.params.userId, 10));

  res.send(requestedUser);
});

router.get('/:userId/bought-products', (_, res) => {
  res.send([]);
});

module.exports = router;
