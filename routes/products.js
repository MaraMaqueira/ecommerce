const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');


const readProducts = () => {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
};


const saveProducts = (products) => {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
};


router.get('/', (req, res) => {
    const products = readProducts();
    const limit = parseInt(req.query.limit);
    if (limit && limit > 0) {
        return res.json(products.slice(0, limit));
    }
    res.json(products);
});


router.get('/:pid', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === req.params.pid);
    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
});


router.post('/', (req, res) => {
    const products = readProducts();
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    const existingProduct = products.find(p => p.code === code);
    if (existingProduct) {
        return res.status(400).json({ error: 'Ya existe un producto con ese código' });
    }

    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios, excepto thumbnails' });
    }

    const newProduct = {
        id: (Date.now()).toString(),
        title,
        description,
        code,
        price,
        status: status !== undefined ? status : true,
        stock,
        category,
        thumbnails: thumbnails || []
    };

    products.push(newProduct);
    saveProducts(products);
    res.status(201).json(newProduct);
});


router.put('/:pid', (req, res) => {
    const products = readProducts();
    const index = products.findIndex(p => p.id === req.params.pid);

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const updatedData = req.body;
    const updatedProduct = { ...products[index], ...updatedData, id: products[index].id };
    products[index] = updatedProduct;

    saveProducts(products);
    res.json(updatedProduct);
});


router.delete('/:pid', (req, res) => {
    const products = readProducts();
    const filteredProducts = products.filter(p => p.id !== req.params.pid);

    if (products.length === filteredProducts.length) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    saveProducts(filteredProducts);
    res.json({ message: 'Producto eliminado con éxito' });
});

module.exports = router;


