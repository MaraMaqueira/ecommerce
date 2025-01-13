const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const productsRouter = require('./src/routes/products');
const cartsRouter = require('./src/routes/carts');
const viewsRouter = require('./src/routes/views.router');
const productsData = require('./src/data/products.json'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);


let products = productsData; 

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.emit('updateProducts', products);


  socket.on('addProduct', (newProduct) => {
    products.push(newProduct);
    io.emit('updateProducts', products);
  });


  socket.on('deleteProduct', (index) => {
    if (index >= 0 && index < products.length) {
      products.splice(index, 1);
      io.emit('updateProducts', products);
    }
  });
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
