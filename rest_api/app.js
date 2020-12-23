const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const productsRoute = require('./routes/getAllProductsRoute');
const orderRoute = require('./routes/orderRoute');
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParser.json());
app.use('/api/shoppingCart',orderRoute)
app.use('/api/products',productsRoute);

app.listen(5000);