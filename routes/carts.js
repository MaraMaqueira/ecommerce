const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/carts.json');


const readCarts = () => {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
};


const saveCarts = (carts) => {
    fs.writeFileSync(filePath, JSON.stringify(carts, null, 2));
};


router.post('/', (req, res) => {
    const carts = readCarts();

    const newCart = {
        id: (Date.now()).toString(), 
        products: [] 
    };

    carts.push(newCart);
    saveCarts(carts);
    res.status(201).json(newCart);
});


router.get('/:cid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === req.params.cid);

    if (!cart) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    res.json(cart.products);
});


router.post('/:cid/product/:pid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === req.params.cid);

    if (!cart) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    const { pid } = req.params;

    const existingProduct = cart.products.find(p => p.product === pid);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.products.push({ product: pid, quantity: 1 });
    }

    saveCarts(carts);
    res.status(201).json(cart);
});

module.exports = router;
