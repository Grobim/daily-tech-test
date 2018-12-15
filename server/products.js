const router = new require('express').Router();

const { getProducts } = require('./database');
const { requireLogin, requireAdmin } = require('./login');

router.get('/', (_, res) => {
  res.send(getProducts().data);
});

router.post('/', requireLogin, requireAdmin, (req, res) => {
  const requestProduct = {
    ...req.body,
    price: parseFloat(req.body.price, 10),
  };
  const newProduct = getProducts().insert(requestProduct);

  res.send(newProduct);
});

module.exports = router;
