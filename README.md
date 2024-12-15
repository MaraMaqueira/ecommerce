# Ecommerce API - Node.js y Express

## Descripción

Esta es una API para un e-commerce desarrollada con **Node.js** y **Express** que permite gestionar productos y carritos de compra. La información se persiste en archivos JSON utilizando el sistema de archivos (File System).

---

## Características

### Productos
- **GET /api/products/**: Lista todos los productos. Soporta la limitación opcional `?limit` para mostrar una cantidad específica.
- **GET /api/products/:pid**: Obtiene un producto específico por su ID.
- **POST /api/products/**: Agrega un nuevo producto con los siguientes campos:
  - `title` (String, obligatorio)
  - `description` (String, obligatorio)
  - `code` (String, obligatorio)
  - `price` (Number, obligatorio)
  - `status` (Boolean, por defecto `true`)
  - `stock` (Number, obligatorio)
  - `category` (String, obligatorio)
  - `thumbnails` (Array de Strings, opcional)
- **PUT /api/products/:pid**: Actualiza los campos de un producto existente (excepto el ID).
- **DELETE /api/products/:pid**: Elimina un producto por su ID.

### Carritos
- **POST /api/carts/**: Crea un nuevo carrito con un ID autogenerado.
- **GET /api/carts/:cid**: Lista los productos del carrito específico.
- **POST /api/carts/:cid/product/:pid**: Agrega un producto al carrito indicado.
  - Si el producto ya existe en el carrito, se incrementa la cantidad (`quantity`).

### Persistencia
La información se guarda en dos archivos:
- `products.json`: Para almacenar los datos de los productos.
- `carts.json`: Para almacenar los datos de los carritos.

---

## Instalación y Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/MaraMaqueira/ecommerce.git
   ```

2. Ve al directorio del proyecto:
   ```bash
   cd ecommerce
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```
   El servidor estará disponible en `http://localhost:8080`.

---

## Uso

### Configuración de Postman
1. Descarga e instala [Postman](https://www.postman.com/).
2. Configura las siguientes rutas para interactuar con la API:
   - **Productos:**
     - GET `http://localhost:8080/api/products`
     - POST `http://localhost:8080/api/products`
     - PUT `http://localhost:8080/api/products/:pid`
     - DELETE `http://localhost:8080/api/products/:pid`
   - **Carritos:**
     - POST `http://localhost:8080/api/carts`
     - GET `http://localhost:8080/api/carts/:cid`
     - POST `http://localhost:8080/api/carts/:cid/product/:pid`

### Ejemplo de Body para Crear un Producto
```json
{
  "title": "Camiseta",
  "description": "Camiseta de algodón",
  "code": "CAM123",
  "price": 20.99,
  "stock": 50,
  "category": "Ropa",
  "thumbnails": ["url1", "url2"]
}
```

### Ejemplo de Body para Crear un Carrito
```json
{
  "products": []
}
```

### Ejemplo de Body para Agregar un Producto a un Carrito
```json
{
  "product": "12345",
  "quantity": 1
}
```

---

## Tecnologías Utilizadas
- **Node.js**
- **Express**
- **File System (fs)**

---

## Estructura del Proyecto
```
/ecommerce
|-- /routes
|   |-- products.js
|   |-- carts.js
|-- /data
|   |-- products.json
|   |-- carts.json
|-- app.js
|-- package.json
```

---

## Autor
Mara Maqueira  
[GitHub Profile](https://github.com/MaraMaqueira)

---

## Licencia
Este proyecto está bajo la Licencia MIT.


