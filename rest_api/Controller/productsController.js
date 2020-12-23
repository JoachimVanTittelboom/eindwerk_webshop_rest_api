const product = require('../models/products');
const bcrypt = require('bcrypt');

exports.getAllProducts = (req, res) => {
    product.fetchAllProducts()
        .then(products => res.json(products))
        .catch(err => res.send(err))
}