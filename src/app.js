const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const products = require('./Products.json');
const http = require('http');

const productsRouter = require('./routers/products.router');
const indexRouter = require('./routers/index.router');
const cartsRouter = require('./routers/carts.router'); 
const realTimeProducts = require('./routers/realTimeProducts.router');

const app = express();
const port = 8080;
const server = http.createServer(app);


app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../public')));

app.use((error, req, res, next) => {
  const message = `A ocurrido un error: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
})

app.get('/', (req, res) =>{
  res.render('index', { title: 'eCommenrce', products })
});

app.use('/', indexRouter, realTimeProducts);
app.use('/api', productsRouter, cartsRouter);
app.use('/:pid', indexRouter);


server.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
})

// app.listen(port, () => {
  //   console.log(`Servidor Express escuchando en el puerto ${port}`);
  // });