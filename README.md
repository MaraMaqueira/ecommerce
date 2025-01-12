# E-commerce Backend

Este es un proyecto de backend para un sistema de e-commerce, desarrollado con Node.js y Express. Incluye funcionalidades para la gestión de productos, carritos de compras, y vistas en tiempo real con WebSocket.

## Funcionalidades

- **Gestión de productos**:
  - Crear, leer, actualizar y eliminar productos.
  - Filtrar productos por cantidad con un límite opcional.
  
- **Gestión de carritos**:
  - Crear nuevos carritos.
  - Añadir productos a carritos existentes.
  - Consultar los productos de un carrito específico.

- **Vistas dinámicas**:
  - Página principal con lista de productos.
  - Vista de productos en tiempo real utilizando WebSocket.

## Tecnologías utilizadas

- Node.js
- Express
- Handlebars (para plantillas)
- WebSocket (Socket.IO)
- JSON para persistencia de datos

## Estructura del proyecto

```plaintext
ecommerce/
├── data/
│   ├── carts.json
│   └── products.json
├── public/
│   └── (archivos estáticos)
├── routes/
│   ├── carts.js
│   ├── products.js
│   └── views.router.js
├── views/
│   ├── home.handlebars
│   ├── realTimeProducts.handlebars
│   └── layouts/
│       └── main.handlebars
├── .gitignore
├── package.json
├── index.js
└── README.md
---
```
## Autor
Mara Maqueira  
[GitHub Profile](https://github.com/MaraMaqueira)

---

## Licencia
Este proyecto está bajo la Licencia MIT.


