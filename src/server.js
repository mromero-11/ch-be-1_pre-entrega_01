import express from 'express';
import productsRoutes from './routes/products.routes.js';
import cartsRoutes from './routes/carts.routes.js';

//  server
const app = express();

//  server settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  test
app.get('/ping', (req, res) => {
    res.send('pong');
})

//  routes
app.use('/api/products', productsRoutes)
app.use('/api/carts', cartsRoutes)

//  set port & run server
const PORT = 8080;

app.listen(PORT, () => {
    console.log("server running, listening on port " + PORT);
});
