const express = require('express');
const path = require('path');

const productsRouter = require('./routers/products.router');
const indexRouter = require('./routers/index.router');
const cartsRouter = require('./routers/carts.router'); 

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api', productsRouter, cartsRouter);
app.use('/:pid', indexRouter);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});