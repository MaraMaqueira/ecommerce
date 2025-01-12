const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

//Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const viewsRouter = require('./routes/views.router');
app.use('/', viewsRouter);

//Servidor HTTP y WebSocket
const server = http.createServer(app);
const io = new Server(server);

// Lista de productos 
let products = [];

//WebSocket
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Emitir lista de productos
  socket.emit('updateProducts', products);

  // Agregar un nuevo producto
  socket.on('addProduct', (product) => {
    products.push(product);
    io.emit('updateProducts', products); 
  });

  // Eliminar un producto
  socket.on('deleteProduct', (index) => {
    products.splice(index, 1);
    io.emit('updateProducts', products); 
  });

  // Cliente desconectado
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Arrancar servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
