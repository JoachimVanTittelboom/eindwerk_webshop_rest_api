const Order = require('../models/order');

exports.postNewOrder=(req,res)=>{
    Order.postNewOrder(req)
        .then(orders =>res.json(orders))
        .catch(err=>res.send(err))
}

exports.getOrderById=(req,res)=>{
    Order.getOrderById(req.params.id)
        .then(orders=>res.json(orders))
        .catch(err=>res.send(err))
}