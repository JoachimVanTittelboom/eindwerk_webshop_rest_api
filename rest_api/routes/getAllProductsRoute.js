const express = require('express');
const router = express.Router();
const productController = require('../Controller/productsController');
const OrderController = require("../Controller/orderController");

/*localhost:3000/products/*/
router.get('/',productController.getAllProducts);


module.exports = router;