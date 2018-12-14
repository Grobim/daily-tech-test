const router = new require('express').Router();

const { getProducts } = require('./database');
const { requireLogin, requireAdmin } = require('./login');

router.get('/', (_, res) => {
  res.send(getProducts().data);
});

router.post('/', requireLogin, requireAdmin, (req, res) => {
  const { meta, ...newProduct } = getProducts().insert(req.body);

  res.send(newProduct);
});

module.exports = router;
