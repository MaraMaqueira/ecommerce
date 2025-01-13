

```
# Ecommerce - Real-Time Products

Este proyecto es una aplicación de comercio electrónico en tiempo real donde los productos pueden ser agregados, eliminados y visualizados. La aplicación usa Node.js, Express, Handlebars y WebSockets para actualizar la lista de productos en tiempo real.

## Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web.
- **Handlebars**: Motor de plantillas para generar HTML dinámico.
- **WebSockets (Socket.io)**: Tecnología para la comunicación en tiempo real entre el cliente y el servidor.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
ecommerce/
├── app.js               # Archivo principal del servidor
├── package.json         # Archivo de configuración de dependencias
├── package-lock.json    # Archivo que asegura la instalación de dependencias consistentes
├── README.md            # Este archivo
├── src/                 
│   ├── data/            # Archivos de datos (productos y carrito)
│   │   ├── carts.json   # Datos del carrito
│   │   └── products.json # Datos de los productos
│   ├── routes/          # Rutas de la API y vistas
│   │   ├── carts.js     # Rutas para el carrito
│   │   ├── products.js  # Rutas para los productos
│   │   └── views.router.js # Rutas para las vistas
│   └── views/           # Archivos de vista (plantillas Handlebars)
│       ├── layouts/     # Plantillas base
│       │   └── main.handlebars # Plantilla principal
│       ├── home.handlebars    # Vista de inicio
│       └── realTimeProducts.handlebars # Vista de productos en tiempo real
└── views/               # Vistas originales antes de la reestructuración
```

## Instalación

1. Clona el repositorio en tu máquina local:

   ```
   git clone https://github.com/MaraMaqueira/ecommerce.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd ecommerce
   ```

3. Instala las dependencias necesarias:

   ```
   npm install
   ```

## Uso

1. Inicia el servidor localmente:

   ```
   npm start
   ```

   Esto ejecutará la aplicación en `http://localhost:3000`.

2. Visualiza y actualiza productos en tiempo real utilizando la interfaz web proporcionada.

## Funcionalidades

- **Visualización en tiempo real**: Los productos se muestran en tiempo real gracias a Socket.io, lo que permite agregar o eliminar productos y que la interfaz se actualice sin necesidad de recargar la página.
- **Agregar productos**: Los productos pueden ser agregados a través de un formulario en la interfaz.
- **Eliminar productos**: Los productos pueden ser eliminados mediante su índice.

## Contribuciones

Si deseas contribuir a este proyecto, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz un commit (`git commit -am 'Agregada nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
```


