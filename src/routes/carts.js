const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: 'Product added', product: newProduct });
});

module.exports = router;

