const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Lista de Productos' });
});

router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', { title: 'Real-Time Products' });
});

module.exports = router;
