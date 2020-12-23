const express = require('express');
const router = express.Router();
const OrderController = require('../Controller/orderController');
const {check, validationResult} = require('express-validator');


router.get('/:id',OrderController.getOrderById)
router.post('/', [
        check('FirstName', "Please fill in firstname.").not().isEmpty(),
        check('LastName', "Please fill in lastname.").not().isEmpty(),
        check('Street', "Please fill in street.").not().isEmpty(),
        check('Number', "Please fill in number.").not().isEmpty(),
        check('PostalCode', "Please fill in postalcode.").not().isEmpty(),
        check('City', "Please fill in city.").not().isEmpty(),
        check('Telephone', "Please fill in telephone number.").not().isEmpty(),
        check('Email', "Please fill in email.").isEmail().normalizeEmail().not().isEmpty(),
        check('TotalPrice', "Please fill in telephone number.").not().isEmpty()],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.send(errors)
        } else {
            const order = {
                OrderDate: new Date(),
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Street: req.body.Street,
                Number: req.body.Number,
                PostalCode: req.body.PostalCode,
                City: req.body.City,
                Telephone: req.body.Telephone,
                Email: req.body.Email,
                TotalPrice: req.body.TotalPrice,
                Products: req.body.Products
            }
            OrderController.postNewOrder(order, res)
        }
    });

module.exports = router;