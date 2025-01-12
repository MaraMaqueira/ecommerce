const express = require('express');
const router = express.Router();


let products = [
  { id: '1', title: 'Producto 1', price: 100 },
  { id: '2', title: 'Producto 2', price: 200 }
];


router.get('/', (req, res) => {
  res.render('home', { title: 'Home', products });
});


router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { title: 'Productos en Tiempo Real' });
});

module.exports = router;
